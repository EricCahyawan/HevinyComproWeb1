import { INDEXABLE_PATHS, SITE_ORIGIN } from './seo';

export type RequestAction =
  | { kind: 'pass' }
  | { kind: 'redirect'; location: string }
  | { kind: 'error'; status: 404 | 410 };

const aliases: Record<string, string> = {
  '/products': '/produk', '/shop': '/produk', '/toko': '/produk',
  '/about': '/tentang-kami', '/about-us': '/tentang-kami',
  '/tentang': '/tentang-kami', '/profil': '/tentang-kami', '/profile': '/tentang-kami',
  '/journal': '/artikel', '/edukasi': '/artikel', '/blog': '/artikel',
  '/news': '/artikel', '/berita': '/artikel',
  '/contact': '/kontak', '/contact-us': '/kontak',
  '/hubungi-kami': '/kontak', '/bantuan': '/kontak',
};

const productTerms: Record<string, [string, string]> = {
  'body-scrub': ['body', 'Body Scrub'], 'body-mask': ['body', 'Body Masker'],
  'shower-cream': ['body', 'Shower Cream'], 'astringent': ['face', 'Astringent'],
  'hair-tonic': ['hair', 'Hair Tonic'], 'shampoo': ['hair', 'Shampoo'],
  'creambath': ['hair', 'Creambath'], 'hair-mask': ['hair', 'Hair Mask'],
  'conditioner': ['hair', 'Conditioner'], 'massage-oil': ['body', 'Massage Oil'],
  'massage-cream': ['body', 'Massage Cream'], 'bath-salt': ['body', 'Bath Salt'],
  'body-lotion': ['body', 'Body Lotion'], 'milk-cleanser': ['face', 'Milk Cleanser'],
  'face-tonic': ['face', 'Face Tonic'], 'air-mawar': ['face', 'Air Mawar'],
};

function legacyCategory(value: string): string | undefined {
  const slug = value.toLowerCase().replace(/-(en|id)$/, '');
  return ({
    'perawatan-tubuh': 'body', 'body-care': 'body', 'body-treatment': 'body',
    'perawatan-rambut': 'hair', 'hair-care': 'hair', 'hair-treatment': 'hair',
    'perawatan-wajah': 'face', 'face-care': 'face', 'face-treatment': 'face',
    'perawatan-kuku': 'nail', 'nail-care': 'nail',
  } as Record<string, string>)[slug];
}

export function getRequestAction(url: URL): RequestAction {
  const pathname = url.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  // Some old links contain a literal HTML entity in the query key.
  const params = new URLSearchParams();
  url.searchParams.forEach((value, key) => params.set(key.replace(/^(amp;)+/, ''), value));
  const isOldEntry = ['/', '/index.php', '/cgi-sys/suspendedpage.cgi'].includes(pathname);
  const redirect = (target: string): RequestAction => ({
    kind: 'redirect', location: new URL(target, SITE_ORIGIN).href,
  });
  const catalog = (category?: string, query?: string): RequestAction => {
    const target = new URL('/produk', SITE_ORIGIN);
    if (category) target.searchParams.set('kategori', category);
    if (query) target.searchParams.set('q', query);
    if (params.get('lang') === 'en') target.searchParams.set('lang', 'en');
    return redirect(target.pathname + target.search);
  };

  // WordPress feeds have been retired. Do not disguise them as a successful homepage.
  if ((isOldEntry && params.has('feed')) || /(?:^|\/)feed(?:\/[^/]+)?$/.test(pathname)) {
    return { kind: 'error', status: 410 };
  }
  const portfolioPath = pathname.match(/^\/portfolio\/([^/]+)$/);
  const portfolio = isOldEntry ? params.get('portfolio') : portfolioPath?.[1];
  if (portfolio) {
    const product = productTerms[portfolio.replace(/-(en|id)$/, '')];
    return product ? catalog(...product) : { kind: 'error', status: 410 };
  }
  const categoryPath = pathname.match(/^\/(?:portfolio-category|portfolio-cat|product-category|category|kategori)\/([^/]+)$/);
  const categorySlug = isOldEntry ? params.get('portfolio-cat') : categoryPath?.[1];
  if (categorySlug) {
    const category = legacyCategory(categorySlug);
    return category ? catalog(category) : { kind: 'error', status: 410 };
  }
  if (isOldEntry && params.get('post_type') === 'portfolio') return catalog();
  // Without a verified replacement, retired WordPress IDs must not redirect to unrelated content.
  if (isOldEntry && (params.has('page_id') || params.has('p'))) return { kind: 'error', status: 410 };
  if (pathname.startsWith('/cgi-sys/')) return { kind: 'error', status: 410 };
  if (pathname === '/index.php' || pathname === '/index.html') return redirect('/' + url.search);
  if (aliases[pathname]) return redirect(aliases[pathname] + url.search);
  const categoryAlias = legacyCategory(pathname.slice(1));
  if (categoryAlias) return catalog(categoryAlias);

  const isPage = INDEXABLE_PATHS.includes(pathname)
    || ['/katalog', '/katalog-pdf', '/unduh-katalog'].includes(pathname);
  const isAsset = /\.[a-z\d]+$/i.test(pathname)
    || /^\/(?:assets|product-images|src|node_modules|@vite|@react-refresh|@fs|@id|api)(?:\/|$)/.test(pathname)
    || pathname === '/healthz';
  if (!isPage && !isAsset) return { kind: 'error', status: 404 };

  const productionHosts = ['heviny.com', 'www.heviny.com', 'www.hevinycosmetics.com', 'hevinycosmetics.com'];
  if (productionHosts.includes(url.hostname) && url.origin !== SITE_ORIGIN) {
    return redirect((isPage ? pathname : url.pathname) + url.search);
  }
  if (isPage && url.pathname !== pathname) return redirect(pathname + url.search);
  return { kind: 'pass' };
}

export function errorPage(status: 404 | 410): string {
  const title = status === 410 ? 'Halaman lama sudah tidak tersedia' : 'Halaman tidak ditemukan';
  return `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>${title} | Heviny</title></head><body><main><h1>${title}</h1><p>Silakan kunjungi situs resmi atau katalog produk Heviny.</p><a href="${SITE_ORIGIN}/">Beranda</a> · <a href="${SITE_ORIGIN}/produk">Katalog produk</a></main></body></html>`;
}
