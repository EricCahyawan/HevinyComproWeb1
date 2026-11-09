import fs from 'node:fs';
import path from 'node:path';
import { getPageMetadata, INDEXABLE_PATHS, SITE_ORIGIN } from '../src/seo';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]!);

export function renderSeoHtml(template: string, pathname: string): string {
  const meta = getPageMetadata(pathname);
  if (!meta) return template;
  const canonical = SITE_ORIGIN + pathname;
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  const tags: Record<string, string> = {
    description: meta.description, keywords: meta.keywords,
    'og:title': meta.title, 'og:description': meta.description, 'og:url': canonical,
    'og:type': meta.type, 'og:image': meta.image,
    'twitter:title': meta.title, 'twitter:description': meta.description, 'twitter:image': meta.image,
  };
  for (const [key, value] of Object.entries(tags)) {
    const attribute = key.startsWith('og:') ? 'property' : 'name';
    html = html.replace(new RegExp(`<meta ${attribute}="${key}"[^>]*>`),
      `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`);
  }
  return html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escapeHtml(canonical)}" />`);
}

export function seoHtmlFile(pathname: string): string {
  return pathname === '/' ? 'index.html' : `__pages${pathname}.html`;
}

export function writeSeoPages(outputDirectory: string): void {
  const template = fs.readFileSync(path.join(outputDirectory, 'index.html'), 'utf8');
  for (const pathname of INDEXABLE_PATHS) {
    const file = path.join(outputDirectory, seoHtmlFile(pathname));
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, renderSeoHtml(template, pathname));
  }
  // Keep sitemap discovery and page canonicals on the same origin and route list.
  fs.writeFileSync(path.join(outputDirectory, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${INDEXABLE_PATHS.map(route => `  <url><loc>${SITE_ORIGIN}${route}</loc></url>`).join('\n')}\n</urlset>\n`);
  fs.writeFileSync(path.join(outputDirectory, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);
}
