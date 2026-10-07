import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'id' | 'en';

const translations = {
  id: {
    home: 'BERANDA', catalog: 'KATALOG', catalogPdf: 'KATALOG PDF', products: 'PRODUK', about: 'TENTANG KAMI', articles: 'ARTIKEL', contact: 'KONTAK',
    contactCompany: 'Hubungi Kontak Perusahaan', language: 'Bahasa', closeMenu: 'Tutup menu', openMenu: 'Buka menu',
    pagesNavigation: 'Navigasi Halaman', mainHome: 'Beranda Utama', productList: 'Daftar Produk', aboutFactory: 'Tentang Kami (Profil Pabrik & CPKB)', careArticles: 'Artikel & Tips Perawatan',
    contactWholesale: 'Kontak & Pemesanan Grosir', officeCompany: 'Kantor & Perusahaan', allRights: 'Seluruh Hak Cipta Dilindungi Undang-Undang.', backToTop: 'Kembali ke Atas',
    officialSince: 'PRODUSEN RESMI SEJAK 2006', officialEmail: 'Email Resmi:', messageForm: 'Kirim Formulir Pesan', contactForInfo: 'Hubungi untuk bertanya lebih lanjut atau kerja sama.',
    fullName: 'Nama Lengkap / Nama Salon *', emailOptional: 'Alamat Email (Opsional)', noteMessage: 'Catatan / Pesan *', sendEmail: 'Kirim Pesan melalui Email',
    emailReady: 'Email Siap Dikirim', emailReadyDescription: 'Aplikasi email Anda telah dibuka dengan detail pesan yang sudah terisi.', sendAnother: 'Kirim Pesan Lain',
    officialContact: 'Kontak Resmi', faq: 'PERTANYAAN UMUM',
    catalogDownloadTitle: 'Unduh katalog PDF?', catalogDownloadDescription: 'Katalog Produk Heviny akan diunduh ke perangkat Anda dalam format PDF.', cancel: 'Batal', download: 'Unduh',
    heroTitle: 'Kemurnian Ekstrak Botani', heroSubtitle: 'Untuk Mahkota & Kulit Alami', heroDescription: 'Rangkaian kosmetik perawatan rambut, tubuh, dan spa terpercaya bersertifikasi CPKB BPOM RI & Halal. Menghadirkan kualitas terbaik dengan harga terjangkau untuk salon kecantikan dan perawatan harian di rumah.',
    bpomRegistered: 'BPOM RI Terdaftar', officialDistribution: 'Izin Edar Resmi', halalIndonesia: 'Halal Indonesia', halalCertificate: 'Sertifikat BPJPH',
    bestLoved: 'Pilihan Paling Diminati', viewAllProducts: 'Lihat Semua Produk di Halaman Produk', botanicalLabel: 'THE BEAUTY OF NATURE • KANDUNGAN BOTANI ALAMI', botanicalTitle: 'Kearifan Bahan Alami Nusantara',
    botanicalDescription: 'Setiap tetes dan formulasi Heviny diperkaya ekstrak botani murni yang terbukti secara turun-temurun merawat keindahan rambut dan kelembutan kulit.', mainBenefits: 'Manfaat Utama:', learnArticles: 'Pelajari Edukasi & Ritual di Halaman Artikel',
    officialArticles: 'ARTIKEL EDUKASI & TIPS RESMI HEVINY', careGuide: 'Panduan Edukasi & Ritual Perawatan Botani', careGuideDescription: 'Pelajari wawasan perawatan rambut salon profesional, manfaat lulur rempah tradisional, hingga panduan menjaga keindahan kuku alami langsung dari formulator kami.', exploreArticles: 'Jelajahi Artikel',
    searchProducts: 'Cari produk...', clearSearch: 'Hapus pencarian', resetAllFilters: 'Reset Semua Filter', reset: 'Reset', allProducts: 'Semua Produk', bodyCare: 'Perawatan Tubuh', hairCare: 'Perawatan Rambut', faceCare: 'Perawatan Wajah', nailCare: 'Perawatan Kuku',
    productCollection: 'Koleksi produk resmi Heviny & Hana Cosmetics', showingProducts: 'Menampilkan produk', searchKeyword: 'dengan kata kunci', resetFilters: 'Reset filter', noProducts: 'Produk Tidak Ditemukan',
    noProductsDescription: 'Tidak ada produk yang cocok dengan pencarian. Silakan gunakan kata kunci lain atau hubungi layanan perusahaan.', showAllProducts: 'Tampilkan Semua Produk', packaging: 'Kemasan:',
    articleSearch: 'Cari topik artikel: misalnya "rambut rontok", "air mawar", "lulur", "creambath", "salon"...', deleteSearch: 'Hapus pencarian', allArticles: 'Semua', resetFilter: 'Reset Filter', noArticles: 'Tidak Ada Artikel yang Cocok',
    noArticlesDescription: 'Coba gunakan kata kunci pencarian lain atau klik tombol di bawah untuk melihat seluruh koleksi artikel kami.', showAllArticles: 'Tampilkan Semua Artikel', readArticle: 'Baca Artikel', closeArticle: 'Tutup Artikel',
    articleHighlights: 'Poin Intisari Edukasi & Khasiat:', relatedTopics: 'Topik Terkait:', relatedProducts: 'Rekomendasi Produk Resmi Heviny Terkait:',
    relatedProductsDescription: 'Klik produk di bawah untuk melihat spesifikasi formulasi, ukuran kemasan, izin BPOM, dan legalitas resmi di katalog kami:', seeAllProducts: 'Lihat Semua Produk',
    detailsTitle: 'Keunggulan & Khasiat Formulasi:', aromaVariants: 'Varian Aroma / Tipe', producedBy: 'Diproduksi resmi oleh Hana Cosmetics, Surabaya', close: 'Tutup',
    productSearch: 'Cari produk (contoh: rose water, kemiri, creambath, bengkuang, 5L)...', salonFavorites: 'Favorit Salon', notFound: 'Produk Tidak Ditemukan', showAll: 'Tampilkan Semua',
    portfolio: 'PORTFOLIO PRODUK', aboutUs: 'Tentang Kami', homeBreadcrumb: 'Beranda', companyProfile: 'PROFIL PERUSAHAAN & PABRIK MANUFAKTUR', exploreProducts: 'Jelajahi Produk Kami',
    bodyAndSpa: 'Badan & Kulit Tubuh (Body & Spa)', hairAndScalp: 'Rambut & Kulit Kepala', faceAndNeck: 'Wajah & Leher', feetAndNails: 'Kaki & Kuku',
    backToPrevious: 'Kembali ke Langkah Sebelumnya', rerunTest: 'Ulangi Tes', productDetails: 'Lihat Detail Produk', testResults: 'Hasil Diagnostik Anda',
    bestFormula: 'Formula Terbaik Berdasarkan Kebutuhan Anda:', contactPageTitle: 'Hubungi Kami & Kemitraan'
  },
  en: {
    home: 'HOME', catalog: 'CATALOG', catalogPdf: 'PDF CATALOG', products: 'PRODUCTS', about: 'ABOUT US', articles: 'JOURNAL', contact: 'CONTACT',
    contactCompany: 'Contact the Company', language: 'Language', closeMenu: 'Close menu', openMenu: 'Open menu',
    pagesNavigation: 'Page Navigation', mainHome: 'Home', productList: 'Product Catalog', aboutFactory: 'About Us (Factory & GMP)', careArticles: 'Articles & Care Tips',
    contactWholesale: 'Wholesale Inquiries', officeCompany: 'Office & Company', allRights: 'All Rights Reserved.', backToTop: 'Back to Top',
    officialSince: 'OFFICIAL MANUFACTURER SINCE 2006', officialEmail: 'Official Email:', messageForm: 'Send a Message', contactForInfo: 'Contact us for product information or business inquiries.',
    fullName: 'Full Name / Salon Name *', emailOptional: 'Email Address (Optional)', noteMessage: 'Message *', sendEmail: 'Send Message by Email',
    emailReady: 'Email Ready to Send', emailReadyDescription: 'Your email application has opened with the message details filled in.', sendAnother: 'Send Another Message',
    officialContact: 'Official Contact', faq: 'FREQUENTLY ASKED QUESTIONS',
    catalogDownloadTitle: 'Download the PDF catalog?', catalogDownloadDescription: 'The Heviny product catalog will be downloaded to your device as a PDF.', cancel: 'Cancel', download: 'Download',
    heroTitle: 'Pure Botanical Extracts', heroSubtitle: 'For Naturally Beautiful Hair & Skin', heroDescription: 'Trusted hair, body, and spa care cosmetics certified to CPKB, BPOM RI, and Halal standards. Quality formulations at accessible prices for salons and everyday care at home.',
    bpomRegistered: 'BPOM RI Registered', officialDistribution: 'Official Distribution Permit', halalIndonesia: 'Halal Indonesia', halalCertificate: 'BPJPH Certified',
    bestLoved: 'Customer Favorites', viewAllProducts: 'View All Products', botanicalLabel: 'THE BEAUTY OF NATURE • BOTANICAL INGREDIENTS', botanicalTitle: 'The Wisdom of Indonesia’s Natural Ingredients',
    botanicalDescription: 'Every Heviny formula is enriched with pure botanical extracts, trusted for generations to care for beautiful hair and soft skin.', mainBenefits: 'Key Benefits:', learnArticles: 'Explore Care Guides & Rituals',
    officialArticles: 'OFFICIAL HEVINY ARTICLES & CARE TIPS', careGuide: 'Botanical Care Guides & Rituals', careGuideDescription: 'Explore professional salon hair-care insights, traditional body-scrub benefits, and tips for naturally beautiful nails from our formulators.', exploreArticles: 'Explore Articles',
    searchProducts: 'Search products...', clearSearch: 'Clear search', resetAllFilters: 'Reset all filters', reset: 'Reset', allProducts: 'All Products', bodyCare: 'Body Care', hairCare: 'Hair Care', faceCare: 'Face Care', nailCare: 'Nail Care',
    productCollection: 'Official Heviny & Hana Cosmetics product collection', showingProducts: 'Showing products', searchKeyword: 'matching', resetFilters: 'Reset filters', noProducts: 'No Products Found',
    noProductsDescription: 'No products match your search. Try another keyword or contact the company.', showAllProducts: 'Show All Products', packaging: 'Packaging:',
    articleSearch: 'Search articles, e.g. "hair loss", "rose water", "body scrub", "creambath", "salon"...', deleteSearch: 'Clear search', allArticles: 'All', resetFilter: 'Reset Filters', noArticles: 'No Matching Articles',
    noArticlesDescription: 'Try another search term or select the button below to browse all articles.', showAllArticles: 'Show All Articles', readArticle: 'Read Article', closeArticle: 'Close Article',
    articleHighlights: 'Key Takeaways:', relatedTopics: 'Related Topics:', relatedProducts: 'Related Heviny Products:',
    relatedProductsDescription: 'Select a product below to view its formula, packaging sizes, BPOM registration, and official details in our catalog:', seeAllProducts: 'View All Products',
    detailsTitle: 'Formula Benefits & Features:', aromaVariants: 'Scent / Type Variants', producedBy: 'Officially manufactured by Hana Cosmetics, Surabaya', close: 'Close',
    productSearch: 'Search products (e.g. rose water, candlenut, creambath, bengkoang, 5L)...', salonFavorites: 'Salon Favorites', notFound: 'No Products Found', showAll: 'Show All',
    portfolio: 'PRODUCT PORTFOLIO', aboutUs: 'About Us', homeBreadcrumb: 'Home', companyProfile: 'COMPANY & MANUFACTURING PROFILE', exploreProducts: 'Explore Our Products',
    bodyAndSpa: 'Body & Spa', hairAndScalp: 'Hair & Scalp', faceAndNeck: 'Face & Neck', feetAndNails: 'Feet & Nails',
    backToPrevious: 'Back to Previous Step', rerunTest: 'Retake', productDetails: 'View Product Details', testResults: 'Your Results',
    bestFormula: 'Recommended Formula for Your Needs:', contactPageTitle: 'Contact Us & Partnerships'
  }
} as const;

type TranslationKey = keyof typeof translations.id;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('heviny-language') === 'en' ? 'en' : 'id';
    } catch {
      return 'id';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
    try {
      localStorage.setItem('heviny-language', language);
    } catch {
      // Language preference still works for the current session.
    }
  }, [language]);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    toggleLanguage: () => setLanguage(current => current === 'id' ? 'en' : 'id'),
    t: (key) => translations[language][key]
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};