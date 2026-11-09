import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import middleware from '../middleware';
import { INDEXABLE_PATHS, SITE_ORIGIN, getPageMetadata } from '../src/seo';
import { seoHtmlFile } from './seo-html';

// Regression cases taken from the Search Console screenshots.
const removedUrls = [
  '/?feed=rss2&amp;portfolio-cat=perawatan-tubuh-en&lang=en',
  '/?post_type=portfolio&lang=en&feed=rss2',
  '/?page_id=1476&lang=en',
  '/cgi-sys/suspendedpage.cgi?p=1583&lang=en',
  '/cgi-sys/suspendedpage.cgi',
  '/feed/',
];

for (const url of removedUrls) {
  test(`retired URL returns 410: ${url}`, async () => {
    const response = middleware(new Request(SITE_ORIGIN + url));
    assert.equal(response.status, 410);
    assert.equal(response.headers.get('x-robots-tag'), 'noindex, follow');
    assert.doesNotMatch(await response.text(), /id="root"/);
  });
}

for (const [slug, category, query] of [
  ['body-scrub', 'body', 'Body Scrub'],
  ['body-mask', 'body', 'Body Masker'],
  ['astringent', 'face', 'Astringent'],
  ['shower-cream', 'body', 'Shower Cream'],
  ['hair-tonic', 'hair', 'Hair Tonic'],
]) {
  for (const oldPath of ['/', '/cgi-sys/suspendedpage.cgi']) {
    test(`legacy ${slug} redirects from ${oldPath} to matching products`, () => {
      const response = middleware(new Request(`http://www.heviny.com${oldPath}?portfolio=${slug}&lang=en`));
      assert.equal(response.status, 301);
      const target = new URL(response.headers.get('location')!);
      assert.equal(target.origin, SITE_ORIGIN);
      assert.equal(target.pathname, '/produk');
      assert.equal(target.searchParams.get('kategori'), category);
      assert.equal(target.searchParams.get('q'), query);
      assert.equal(target.searchParams.get('lang'), 'en');
      assert.equal(middleware(new Request(target)).headers.get('x-middleware-next'), '1');
      // Verify the search term actually has a replacement in the current catalog.
      const filenames = fs.readdirSync('public/product-images');
      assert.ok(filenames.some(file => file.toLowerCase().includes(query.toLowerCase())));
    });
  }
}

test('legacy categories, including HTML-escaped keys, preserve category', () => {
  for (const key of ['portfolio-cat', 'amp;portfolio-cat']) {
    const response = middleware(new Request(`${SITE_ORIGIN}/?${key}=perawatan-tubuh-en&lang=en`));
    assert.equal(response.status, 301);
    assert.equal(new URL(response.headers.get('location')!).searchParams.get('kategori'), 'body');
  }
  assert.equal(middleware(new Request(`${SITE_ORIGIN}/?post_type=portfolio&lang=en`)).status, 301);
  const alias = middleware(new Request(`${SITE_ORIGIN}/hair-care`));
  assert.equal(alias.status, 301);
  assert.equal(new URL(alias.headers.get('location')!).searchParams.get('kategori'), 'hair');
});

test('alternate domains redirect directly to heviny.com', () => {
  for (const origin of ['http://heviny.com', 'https://www.heviny.com', 'https://hevinycosmetics.com', 'https://www.hevinycosmetics.com']) {
    const response = middleware(new Request(origin + '/produk?kategori=hair'));
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('location'), `${SITE_ORIGIN}/produk?kategori=hair`);
  }
});

test('unknown pages and article slugs return a real 404', () => {
  for (const url of ['/halaman-tidak-ada', '/artikel/artikel-tidak-ada']) {
    const response = middleware(new Request(SITE_ORIGIN + url));
    assert.equal(response.status, 404);
    assert.equal(response.headers.get('x-robots-tag'), 'noindex, follow');
  }
});

test('canonical routes, catalog downloads and static assets pass through', () => {
  for (const url of [...INDEXABLE_PATHS, '/katalog', '/katalog-heviny.pdf', '/robots.txt', '/sitemap.xml', '/assets/index.js']) {
    assert.equal(middleware(new Request(SITE_ORIGIN + url)).headers.get('x-middleware-next'), '1');
  }
});

test('HEAD on removed URLs retains the status without a response body', async () => {
  const response = middleware(new Request(SITE_ORIGIN + '/?feed=rss2', { method: 'HEAD' }));
  assert.equal(response.status, 410);
  assert.equal(await response.text(), '');
});

test('built HTML and sitemap have consistent, page-specific canonical URLs', () => {
  const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  assert.deepEqual(locations, INDEXABLE_PATHS.map(route => SITE_ORIGIN + route));
  for (const route of INDEXABLE_PATHS) {
    const html = fs.readFileSync(path.join('dist', seoHtmlFile(route)), 'utf8');
    assert.ok(html.includes(`<link rel="canonical" href="${SITE_ORIGIN}${route}" />`));
    assert.ok(html.includes(`<meta property="og:url" content="${SITE_ORIGIN}${route}" />`));
    assert.doesNotMatch(html, /hevinycosmetics\.com|name="robots" content="noindex/);
    assert.ok(html.includes(getPageMetadata(route)!.type === 'article' ? 'content="article"' : 'content="website"'));
  }
  assert.ok(fs.readFileSync('dist/robots.txt', 'utf8').includes(`${SITE_ORIGIN}/sitemap.xml`));
  const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  for (const route of INDEXABLE_PATHS.filter(route => route !== '/')) {
    const rewrite = config.rewrites.find((item: { source: string }) => item.source === route
      || (item.source === '/artikel/:slug' && route.startsWith('/artikel/')));
    assert.ok(rewrite, `Missing Vercel rewrite for ${route}`);
    assert.equal(rewrite.destination.replace(':slug', route.split('/')[2]), '/' + seoHtmlFile(route));
  }
});
