import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { ProductModal } from './components/ProductModal';
import { Product, ActivePage, ProductCategory } from './types';
import { HEVINY_PRODUCTS } from './data/products';
import { ARTICLES_DATA } from './data/articles';

// Path-to-Page and Page-to-Path maps for clean URL routing and SEO indexing
const PAGE_PATH_MAP: Record<ActivePage, string> = {
  home: '/',
  products: '/produk',
  about: '/tentang-kami',
  journal: '/artikel',
  contact: '/kontak',
};

const getCategoryFromQuery = (): ProductCategory => {
  if (typeof window === 'undefined') return 'all';
  const pathname = window.location.pathname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('kategori') || params.get('category');
  if (cat === 'face' || cat === 'wajah') return 'face';
  if (cat === 'body' || cat === 'tubuh') return 'body';
  if (cat === 'hair' || cat === 'rambut') return 'hair';
  if (cat === 'nail' || cat === 'kuku') return 'nail';
  
  // Legacy paths from Google search sitelinks
  if (pathname.includes('hair') || pathname.includes('rambut') || pathname.includes('shampoo') || pathname.includes('sampo') || pathname.includes('creambath')) return 'hair';
  if (pathname.includes('body') || pathname.includes('tubuh') || pathname.includes('lulur') || pathname.includes('bath') || pathname.includes('lotion')) return 'body';
  if (pathname.includes('face') || pathname.includes('wajah') || pathname.includes('astringent') || pathname.includes('tonic') || pathname.includes('facial')) return 'face';
  if (pathname.includes('nail') || pathname.includes('kuku') || pathname.includes('varnish')) return 'nail';

  return 'all';
};

const getPageFromPath = (pathname: string): ActivePage => {
  if (typeof window === 'undefined') return 'home';
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';

  // Products and Legacy Product URLs from old WordPress / Google sitelinks
  if (
    cleanPath === '/produk' || cleanPath === '/products' || cleanPath === '/katalog' ||
    cleanPath.startsWith('/produk/') || cleanPath.startsWith('/products/') ||
    cleanPath.startsWith('/category/') || cleanPath.startsWith('/kategori') ||
    cleanPath.startsWith('/product-category') || cleanPath.startsWith('/shop') || cleanPath.startsWith('/toko') ||
    cleanPath.includes('shampoo') || cleanPath.includes('sampo') ||
    cleanPath.includes('hair-treatment') || cleanPath.includes('body-treatment') || cleanPath.includes('face-treatment') ||
    cleanPath.includes('hair-care') || cleanPath.includes('body-care') || cleanPath.includes('face-care')
  ) {
    return 'products';
  }

  // About and Legacy Profile URLs
  if (
    cleanPath === '/tentang-kami' || cleanPath === '/about' || cleanPath === '/about-us' ||
    cleanPath === '/tentang' || cleanPath === '/profil' || cleanPath === '/profile' ||
    cleanPath.startsWith('/tentang')
  ) {
    return 'about';
  }

  // Journal, Articles, and Blog URLs
  if (
    cleanPath === '/artikel' || cleanPath === '/journal' || cleanPath === '/edukasi' ||
    cleanPath === '/blog' || cleanPath === '/news' || cleanPath === '/berita' ||
    cleanPath.startsWith('/artikel/') || cleanPath.startsWith('/blog/')
  ) {
    return 'journal';
  }

  // Contact URLs
  if (
    cleanPath === '/kontak' || cleanPath === '/contact' || cleanPath === '/contact-us' ||
    cleanPath === '/hubungi-kami' || cleanPath === '/bantuan'
  ) {
    return 'contact';
  }

  return 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>(() => getPageFromPath(window.location.pathname));
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(() => getCategoryFromQuery());

  // Normalize legacy URLs from Google search sitelinks on initial landing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      const isKnownClean = path === '/' || path === '/produk' || path === '/tentang-kami' || path === '/artikel' || path === '/kontak' ||
        ARTICLES_DATA.some(article => path === `/artikel/${article.id}`);
      if (!isKnownClean) {
        const targetPath = activePage === 'products'
          ? (selectedCategory !== 'all' ? `/produk?kategori=${selectedCategory}` : '/produk')
          : PAGE_PATH_MAP[activePage];
        window.history.replaceState({ page: activePage, category: selectedCategory }, '', targetPath);
      }
    }
  }, [activePage, selectedCategory]);

  // Sync browser back/forward buttons with HTML5 History API
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = getPageFromPath(window.location.pathname);
      setActivePage(page);
      if (page === 'products') {
        const cat = event.state?.category || getCategoryFromQuery();
        setSelectedCategory(cat);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO metadata update based on current active page and product view
  useEffect(() => {
    const pageMetaMap: Record<ActivePage, { title: string; description: string; keywords: string }> = {
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
        description: 'Hubungi kantor pemasaran dan pabrik Hana Cosmetics di Surabaya untuk pemesanan grosir kosmetik murah, distributor salon, sampo jerigen 5L/20L harga pabrik termurah, atau kemitraan reseller melalui WhatsApp resmi.',
        keywords: 'kontak hana cosmetics, alamat hana cosmetics surabaya, telepon hana cosmetics, kontak heviny, distributor kosmetik murah, supplier kosmetik murah tangan pertama, supplier salon termurah, harga grosir kosmetik salon, pabrik kosmetik murah surabaya'
      }
    };

    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://hevinycosmetics.com';
    const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    const routeArticle = activePage === 'journal'
      ? ARTICLES_DATA.find(article => currentPath === `/artikel/${article.id}`)
      : undefined;
    const targetCanonicalPath = routeArticle ? `/artikel/${routeArticle.id}` : PAGE_PATH_MAP[activePage] || '/';
    const canonicalUrl = `${currentOrigin}${targetCanonicalPath === '/' ? '/' : targetCanonicalPath}`;

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', canonicalUrl);
    }

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) {
      ogUrlEl.setAttribute('content', canonicalUrl);
    }

    if (selectedProduct) {
      document.title = `${selectedProduct.name} | Hana Cosmetics (Heviny)`;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', `${selectedProduct.name} (${selectedProduct.categoryLabel}) diproduksi resmi oleh Hana Cosmetics Surabaya. ${selectedProduct.description}`);
      const kwEl = document.querySelector('meta[name="keywords"]');
      if (kwEl) kwEl.setAttribute('content', `${selectedProduct.name}, hana cosmetics, hana cosmetic, produk hana cosmetics, heviny, ${selectedProduct.categoryLabel}, kosmetik murah bpom`);
    } else if (routeArticle) {
      document.title = `${routeArticle.title} | Hana Cosmetics (Heviny)`;
      const description = routeArticle.metaDescription || routeArticle.summary;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', description);
      const kwEl = document.querySelector('meta[name="keywords"]');
      if (kwEl) kwEl.setAttribute('content', [...(routeArticle.tags || []), routeArticle.category, 'Hana Cosmetics', 'Heviny'].join(', '));
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
      document.querySelector('meta[property="og:type"]')?.setAttribute('content', 'article');
      const articleImage = new URL(routeArticle.image, window.location.origin).href;
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', articleImage);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
      document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', articleImage);
    } else {
      const currentMeta = pageMetaMap[activePage] || pageMetaMap.home;
      document.title = currentMeta.title;

      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', currentMeta.description);

      const kwEl = document.querySelector('meta[name="keywords"]');
      if (kwEl) kwEl.setAttribute('content', currentMeta.keywords);

      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute('content', currentMeta.title);

      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', currentMeta.description);
    }
  }, [activePage, selectedProduct]);

  const handleNavigate = (page: ActivePage, category?: ProductCategory) => {
    setActivePage(page);
    if (category) {
      setSelectedCategory(category);
    } else if (page === 'products' && !category) {
      setSelectedCategory('all');
    }
    let targetPath = PAGE_PATH_MAP[page] || '/';
    if (page === 'products' && category && category !== 'all') {
      targetPath = `/produk?kategori=${category}`;
    }
    if (typeof window !== 'undefined' && (window.location.pathname + window.location.search) !== targetPath) {
      window.history.pushState({ page, category: category || 'all' }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSelectProductByName = (productName: string) => {
    const found = HEVINY_PRODUCTS.find(p => 
      p.name.toLowerCase().includes(productName.toLowerCase()) ||
      productName.toLowerCase().includes(p.name.toLowerCase())
    );
    if (found) {
      setSelectedProduct(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D3748] flex flex-col selection:bg-[#1B4332]/20 selection:text-[#1B4332]">
      
      {/* Universal Sticky Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area - Page-by-Page View with Smooth Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <HomePage
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
              />
            </motion.div>
          )}

          {activePage === 'products' && (
            <motion.div
              key="products-page"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ProductsPage
                onSelectProduct={handleSelectProduct}
                onNavigate={handleNavigate}
                selectedCategory={selectedCategory}
                onCategoryChange={(cat) => {
                  setSelectedCategory(cat);
                  if (typeof window !== 'undefined') {
                    const targetPath = cat === 'all' ? '/produk' : `/produk?kategori=${cat}`;
                    window.history.replaceState({ page: 'products', category: cat }, '', targetPath);
                  }
                }}
              />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <AboutPage
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {activePage === 'journal' && (
            <motion.div
              key="journal-page"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <JournalPage
                onNavigate={handleNavigate}
                onSelectProductByName={handleSelectProductByName}
              />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ContactPage onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Universal Footer with Page Navigation */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
