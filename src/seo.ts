import type { ActivePage } from './types';
import { ARTICLES_DATA } from './data/articles';

export const SITE_ORIGIN = 'https://heviny.com';

export const PAGE_PATH_MAP: Record<ActivePage, string> = {
  home: '/',
  products: '/produk',
  about: '/tentang-kami',
  journal: '/artikel',
  contact: '/kontak',
};

export const PAGE_META_MAP: Record<ActivePage, { title: string; description: string; keywords: string }> = {
  home: {
    title: 'Hana Cosmetics Official (Heviny) | Pabrik Kosmetik Murah & Suplai Salon Surabaya',
    description: 'Website resmi Hana Cosmetics (Heviny): Pabrik produsen kosmetik terpercaya sejak 2006 di Surabaya berstandar resmi CPKB BPOM RI & Halal. Sedia suplai kosmetik murah, sampo salon termurah jerigen 5L & 20L, creambath, lulur spa, face care harga pabrik langsung.',
    keywords: 'hana cosmetic, hana cosmetics, hana cosmetics surabaya, pt hana cosmetics, cv hana cosmetics, pabrik hana cosmetics, produk hana cosmetics, kosmetik hana, kosmetik hana surabaya, heviny, heviny cosmetics, kosmetik murah, kosmetik termurah, kosmetik murah bpom, sampo murah, shampoo murah, sampo termurah, sampo salon murah, sampo salon termurah, creambath murah, lulur murah bpom, distributor kosmetik murah, distributor kosmetik termurah, supplier kosmetik murah tangan pertama, grosir kosmetik murah, suplier salon termurah, pabrik kosmetik murah surabaya, produsen kosmetik termurah'
  },
  products: {
    title: 'Katalog Produk Hana Cosmetics (Heviny) | Suplai Kosmetik & Salon Termurah Surabaya',
    description: 'Jelajahi katalog resmi produk kosmetik Hana Cosmetics (merek Heviny): Rangkaian Hair Care, Body Spa, Face Care, Nail Care, hingga kemasan salon jerigen 5L dan 20L resmi BPOM RI & Halal langsung dari pabrik.',
    keywords: 'produk hana cosmetics, hana cosmetic katalog, katalog kosmetik murah, sampo murah bpom, sampo termurah di indonesia, shampoo salon murah, creambath murah kiloan, creambath termurah, lulur murah, lulur mandi termurah, kosmetik harga pabrik termurah, distributor kosmetik murah surabaya, supplier salon murah, sampo jerigen 5 liter murah'
  },
  about: {
    title: 'Tentang Hana Cosmetics (Heviny) | Pabrik Kosmetik CPKB & BPOM Surabaya Sejak 2006',
    description: 'Profil lengkap Hana Cosmetics Surabaya: pabrik produsen kosmetik dan pemilik merek Heviny berstandar CPKB, BPOM RI, dan Halal dengan prinsip Best Quality, Best Price sejak 2006 langsung dari pabrik tangan pertama.',
    keywords: 'profil hana cosmetics, pabrik hana cosmetics, hana cosmetics surabaya, pt hana cosmetics surabaya, profil heviny, pabrik kosmetik murah surabaya, produsen kosmetik termurah, produsen sampo murah indonesia, distributor kosmetik termurah, legalitas bpom heviny, sertifikat cpkb kosmetik'
  },
  journal: {
    title: 'Edukasi Hana Cosmetics & Heviny | Panduan Kosmetik Murah & Suplai Salon BPOM',
    description: 'Pusat 14 artikel edukasi resmi Hana Cosmetics (Heviny) tentang perawatan rambut, tubuh, wajah, kuku, bahan alami, dan bisnis salon.',
    keywords: 'artikel hana cosmetics, edukasi heviny, perawatan rambut, perawatan tubuh, face care, nail care, cara merawat kuku, manicure, bahan alami, panduan salon'
  },
  contact: {
    title: 'Kontak Resmi Hana Cosmetics Surabaya (Heviny) | Pemesanan Grosir Pabrik Tangan Pertama',
    description: 'Hubungi kantor pemasaran dan pabrik Hana Cosmetics di Surabaya untuk pemesanan grosir kosmetik, distributor salon, atau kemitraan reseller.',
    keywords: 'kontak hana cosmetics, alamat hana cosmetics surabaya, kontak heviny, distributor kosmetik, supplier kosmetik tangan pertama, supplier salon, harga grosir kosmetik salon, pabrik kosmetik surabaya'
  }
};

export const INDEXABLE_PATHS = [
  ...Object.values(PAGE_PATH_MAP),
  ...ARTICLES_DATA.map(article => '/artikel/' + article.id),
];

export function getPageMetadata(pathname: string) {
  const page = (Object.keys(PAGE_PATH_MAP) as ActivePage[]).find(key => PAGE_PATH_MAP[key] === pathname);
  if (page) return { ...PAGE_META_MAP[page], type: 'website', image: SITE_ORIGIN + '/logo.webp' };
  const article = ARTICLES_DATA.find(item => pathname === '/artikel/' + item.id);
  if (!article) return undefined;
  return {
    title: article.title + ' | Hana Cosmetics (Heviny)',
    description: article.metaDescription || article.summary,
    keywords: [...(article.tags || []), article.category, 'Hana Cosmetics', 'Heviny'].join(', '),
    type: 'article',
    image: new URL(article.image, SITE_ORIGIN).href,
  };
}
