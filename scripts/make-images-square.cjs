const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getWebpSize(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunkHeader = buf.toString('ascii', 12, 16);
  if (chunkHeader === 'VP8X') {
    const width = 1 + buf.readUIntLE(24, 3);
    const height = 1 + buf.readUIntLE(27, 3);
    return { width, height };
  } else if (chunkHeader === 'VP8L') {
    const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
    const width = 1 + (((b1 & 0x3f) << 8) | b0);
    const height = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
    return { width, height };
  } else if (chunkHeader === 'VP8 ') {
    const width = buf.readUInt16LE(26) & 0x3fff;
    const height = buf.readUInt16LE(28) & 0x3fff;
    return { width, height };
  }
  return null;
}

const dir = path.join(__dirname, '..', 'public', 'product-images');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));

console.log(`Found ${files.length} WebP images in ${dir}`);

const nonSquare = [];
for (const f of files) {
  const filePath = path.join(dir, f);
  const buf = fs.readFileSync(filePath);
  const size = getWebpSize(buf);
  if (size && size.width !== size.height) {
    nonSquare.push({ f, filePath, width: size.width, height: size.height });
  }
}

console.log(`${nonSquare.length} images are not square. Converting them to square now...`);

let done = 0;
const pid = process.pid;

for (const item of nonSquare) {
  const { filePath, width: W, height: H } = item;
  const tmpLeft = `/tmp/_sq_left_${pid}.png`;
  const tmpRight = `/tmp/_sq_right_${pid}.png`;
  const tmpTop = `/tmp/_sq_top_${pid}.png`;
  const tmpBottom = `/tmp/_sq_bottom_${pid}.png`;
  const tmpOut = `/tmp/_sq_out_${pid}.webp`;

  try {
    if (W < H) {
      const diff = H - W;
      const leftPad = Math.floor(diff / 2);
      const rightPad = diff - leftPad;
      execSync(`convert "${filePath}" -crop 1x${H}+0+0 +repage -resize ${leftPad}x${H}\\! "${tmpLeft}"`);
      execSync(`convert "${filePath}" -crop 1x${H}+${W - 1}+0 +repage -resize ${rightPad}x${H}\\! "${tmpRight}"`);
      execSync(`convert +append "${tmpLeft}" "${filePath}" "${tmpRight}" -quality 90 "${tmpOut}"`);
      fs.copyFileSync(tmpOut, filePath);
    } else if (W > H) {
      const diff = W - H;
      const topPad = Math.floor(diff / 2);
      const bottomPad = diff - topPad;
      execSync(`convert "${filePath}" -crop ${W}x1+0+0 +repage -resize ${W}x${topPad}\\! "${tmpTop}"`);
      execSync(`convert "${filePath}" -crop ${W}x1+0+${H - 1} +repage -resize ${W}x${bottomPad}\\! "${tmpBottom}"`);
      execSync(`convert -append "${tmpTop}" "${filePath}" "${tmpBottom}" -quality 90 "${tmpOut}"`);
      fs.copyFileSync(tmpOut, filePath);
    }
    done++;
    if (done % 25 === 0 || done === nonSquare.length) {
      console.log(`Processed ${done}/${nonSquare.length} images...`);
    }
  } catch (err) {
    console.error(`Error processing ${item.f}:`, err.message);
  }
}

// Cleanup temp files
try {
  fs.unlinkSync(`/tmp/_sq_left_${pid}.png`);
  fs.unlinkSync(`/tmp/_sq_right_${pid}.png`);
  fs.unlinkSync(`/tmp/_sq_top_${pid}.png`);
  fs.unlinkSync(`/tmp/_sq_bottom_${pid}.png`);
  fs.unlinkSync(`/tmp/_sq_out_${pid}.webp`);
} catch (e) {}

console.log(`All ${done} non-square images successfully converted to 1:1 square!`);
