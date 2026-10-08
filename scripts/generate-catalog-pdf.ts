import fs from 'node:fs';
import path from 'node:path';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HEVINY_PRODUCTS } from '../src/data/products.ts';
import { COMPANY_INFO } from '../src/data/companyInfo.ts';

async function generateCatalogPDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const PRIMARY = [27, 38, 35]; // #1B2623 Botanical Deep
  const GOLD = [217, 163, 67]; // #D9A343 Warm Gold
  const DARK = [45, 55, 72];
  const MUTED = [100, 116, 139];

  // COVER PAGE
  doc.setFillColor(PRIMARY[0], PRIMARY[1], PRIMARY[2]);
  doc.rect(0, 0, 210, 297, 'F');

  // Decorative border
  doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.setLineWidth(0.8);
  doc.rect(12, 12, 186, 273);
  doc.rect(14, 14, 182, 269);

  // Logo / Header
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('HANA COSMETICS • SURABAYA', 105, 70, { align: 'center' });

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.text('KATALOG RESMI PRODUK', 105, 95, { align: 'center' });

  doc.setFontSize(18);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text('HEVINY & PROFESSIONAL SALON', 105, 107, { align: 'center' });

  doc.setFontSize(10);
  doc.setTextColor(220, 225, 220);
  doc.setFont('helvetica', 'normal');
  doc.text('Pabrik Produsen Kosmetik Berstandar CPKB, BPOM RI & Halal', 105, 125, { align: 'center' });
  doc.text('Tersedia Kemasan Retail hingga Jerigen Grosir Salon 1L, 5L & 20L', 105, 132, { align: 'center' });

  // Feature Highlights Box
  doc.setFillColor(36, 51, 48);
  doc.roundedRect(30, 155, 150, 55, 3, 3, 'F');

  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('KEUNGGULAN PRODUK & LAYANAN:', 105, 168, { align: 'center' });

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('✓ 100% Terdaftar Resmi BPOM RI & Bersertifikat Halal', 40, 178);
  doc.text('✓ Harga Langsung Tangan Pertama dari Pabrik Surabaya', 40, 186);
  doc.text('✓ Formula Botani Alami: Bengkoang, Aloe Vera, Kemiri, dll.', 40, 194);
  doc.text('✓ Melayani Pengiriman Grosir & Salon ke Seluruh Indonesia', 40, 202);

  // Footer Contacts
  doc.setFontSize(9);
  doc.setTextColor(200, 210, 205);
  doc.text(`WhatsApp Resmi: ${COMPANY_INFO.phone} | Website: https://hevinycosmetics.com`, 105, 260, { align: 'center' });
  doc.text('Jl. Rungkut Industri III No. 45, Surabaya, Jawa Timur', 105, 266, { align: 'center' });

  // PAGE 2: TABLE OF PRODUCTS
  doc.addPage();

  // Header Page 2
  doc.setFillColor(PRIMARY[0], PRIMARY[1], PRIMARY[2]);
  doc.rect(0, 0, 210, 22, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('DAFTAR PRODUK & SPESIFIKASI KEMASAN HEVINY', 14, 14);

  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.setFontSize(9);
  doc.text('RESMI BPOM & HALAL', 196, 14, { align: 'right' });

  const tableData = HEVINY_PRODUCTS.map((p, idx) => {
    const sizes = p.availableSizes ? p.availableSizes.join(', ') : '-';
    const packaging = p.packagingSpecs ? p.packagingSpecs.map(s => `${s.size} (${s.packagingType})`).join(', ') : sizes;
    return [
      (idx + 1).toString(),
      p.name,
      p.categoryLabel,
      p.heroIngredient,
      packaging,
      p.bpomNumber
    ];
  });

  autoTable(doc, {
    startY: 28,
    head: [['No', 'Nama Produk', 'Kategori', 'Kandungan Utama', 'Ukuran Kemasan', 'No. BPOM RI']],
    body: tableData,
    theme: 'striped',
    styles: {
      fontSize: 8,
      cellPadding: 2.5,
      textColor: [45, 55, 72]
    },
    headStyles: {
      fillColor: [27, 38, 35],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: [248, 250, 249]
    },
    columnStyles: {
      0: { cellWidth: 8, halign: 'center' },
      1: { cellWidth: 42, fontStyle: 'bold' },
      2: { cellWidth: 26 },
      3: { cellWidth: 42 },
      4: { cellWidth: 42 },
      5: { cellWidth: 30, fontSize: 7 }
    },
    margin: { left: 10, right: 10, bottom: 20 },
    didDrawPage: (data) => {
      // Footer page number
      const pageCount = (doc.internal as any).getNumberOfPages ? (doc.internal as any).getNumberOfPages() : '';
      doc.setFontSize(8);
      doc.setTextColor(120, 130, 130);
      doc.text(
        `Katalog Resmi Hana Cosmetics (Heviny) - Halaman ${data.pageNumber}`,
        105,
        290,
        { align: 'center' }
      );
    }
  });

  const outputDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const pdfPath = path.join(outputDir, 'katalog-heviny.pdf');
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(pdfPath, buffer);
  console.log(`[SUCCESS] Katalog PDF generated at: ${pdfPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

generateCatalogPDF().catch(err => {
  console.error('[ERROR] Failed to generate catalog PDF:', err);
  process.exit(1);
});
