import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { Product, ActivePage, ProductCategory } from './types';
import { HEVINY_PRODUCTS } from './data/products';
import { ARTICLES_DATA } from './data/articles';
import { LanguageProvider } from './LanguageContext';
import { CartProvider } from './CartContext';
import { PAGE_PATH_MAP, PAGE_META_MAP, SITE_ORIGIN } from './seo';

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

const isCatalogPathOrParam = (pathname: string, search: string): boolean => {
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
  const params = new URLSearchParams(search);
  return (
    cleanPath === '/katalog' ||
    cleanPath === '/katalog-pdf' ||
    cleanPath === '/unduh-katalog' ||
    params.get('katalog') === 'download' ||
    params.get('katalog') === 'true' ||
    params.get('download') === 'katalog' ||
    params.has('download-katalog')
  );
};

const getPageFromPath = (pathname: string): ActivePage => {
  if (typeof window === 'undefined') return 'home';
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';

  // Catalog routes land on the home view with the catalog confirmation modal activated
  if (cleanPath === '/katalog' || cleanPath === '/katalog-pdf' || cleanPath === '/unduh-katalog') {
    return 'home';
  }

  // Products and Legacy Product URLs from old WordPress / Google sitelinks
  if (
    cleanPath === '/produk' || cleanPath === '/products' ||
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

function AppContent() {
  const [activePage, setActivePage] = useState<ActivePage>(() => getPageFromPath(window.location.pathname));
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(() => getCategoryFromQuery());
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return isCatalogPathOrParam(window.location.pathname, window.location.search);
  });

  const handleOpenCatalogModal = () => {
    setIsCatalogModalOpen(true);
  };

  const handleCloseCatalogModal = () => {
    setIsCatalogModalOpen(false);
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      if (path === '/katalog' || path === '/katalog-pdf' || path === '/unduh-katalog' || window.location.search.includes('katalog')) {
        const targetPath = activePage === 'products'
          ? (selectedCategory !== 'all' ? `/produk?kategori=${selectedCategory}` : '/produk')
          : PAGE_PATH_MAP[activePage] || '/';
        window.history.replaceState({ page: activePage, category: selectedCategory }, '', targetPath);
      }
    }
  };

  // Normalize legacy URLs from Google search sitelinks on initial landing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      const isKnownClean =
        path === '/' ||
        path === '/katalog' ||
        path === '/katalog-pdf' ||
        path === '/unduh-katalog' ||
        path === '/produk' ||
        path === '/tentang-kami' ||
        path === '/artikel' ||
        path === '/kontak' ||
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
      if (typeof window !== 'undefined') {
        const isCatalog = isCatalogPathOrParam(window.location.pathname, window.location.search);
        if (isCatalog) {
          setIsCatalogModalOpen(true);
        }
      }
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
    const currentOrigin = SITE_ORIGIN;
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

    if (routeArticle) {
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
      const currentMeta = PAGE_META_MAP[activePage] || PAGE_META_MAP.home;
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
  }, [activePage]);

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

  const handleSelectProductByName = () => {
    handleNavigate('products');
  };

  return (
    <div className="min-h-screen bg-surface-soft text-ink flex flex-col selection:bg-brand-500/20 selection:text-brand-800">
      
      {/* Universal Sticky Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        isCatalogModalOpen={isCatalogModalOpen}
        onOpenCatalogModal={handleOpenCatalogModal}
        onCloseCatalogModal={handleCloseCatalogModal}
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
        onOpenCatalogModal={handleOpenCatalogModal}
      />

      <WhatsAppFloat />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}
