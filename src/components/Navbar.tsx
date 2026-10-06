import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { ActivePage, ProductCategory } from '../types';
import { HevinyLogo } from './HevinyLogo';
import { OFFICIAL_HEVINY_CATEGORIES } from '../data/categories';
import { getProductCategoryCount } from '../data/photoProducts';
import { COMPANY_INFO } from '../data/companyInfo';
import { ShopeeIcon } from './ShopeeIcon';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage, category?: ProductCategory) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogConfirmOpen, setCatalogConfirmOpen] = useState(false);
  
  // Dropdown states for Desktop & Tablet
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const productMenuContainerRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper: check if device supports genuine mouse hover
  const isMouseDevice = () => {
    return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  };

  // Auto-shift dropdown if it touches or overflows either screen edge on smaller / non-fullscreen windows
  useEffect(() => {
    if (!isProductMenuOpen || !dropdownMenuRef.current) {
      setShiftX(0);
      return;
    }

    const checkBounds = () => {
      if (!dropdownMenuRef.current) return;
      const rect = dropdownMenuRef.current.getBoundingClientRect();
      const padding = 16;
      const viewportWidth = window.innerWidth;

      if (rect.right > viewportWidth - padding) {
        const overflow = rect.right - (viewportWidth - padding);
        setShiftX(prev => prev - overflow);
      } else if (rect.left < padding) {
        const underflow = padding - rect.left;
        setShiftX(prev => prev + underflow);
      }
    };

    // Run after layout render
    const rafId = requestAnimationFrame(checkBounds);
    window.addEventListener('resize', checkBounds);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', checkBounds);
    };
  }, [isProductMenuOpen]);

  // Click outside & Escape key listeners for touch and desktop
  useEffect(() => {
    if (!isProductMenuOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        productMenuContainerRef.current && 
        !productMenuContainerRef.current.contains(e.target as Node)
      ) {
        setIsProductMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProductMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProductMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollStopTimer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Status scrolled untuk efek background / blur
      setScrolled(currentScrollY > 20);

      // 2. Deteksi jika mentok paling atas atau mentok paling bawah
      const isAtTop = currentScrollY <= 25;
      const isAtBottom = windowHeight + currentScrollY >= documentHeight - 50;

      if (isAtTop || isAtBottom || mobileMenuOpen) {
        setIsVisible(true);
      } else {
        const diff = Math.abs(currentScrollY - lastScrollY);
        // Saat sedang digulir (baik ke atas maupun ke bawah): sembunyikan header
        if (diff > 3 && currentScrollY > 50) {
          setIsVisible(false);
        }
      }

      lastScrollY = currentScrollY;

      // 3. Deteksi saat scroll BERHENTI (user diam tidak scroll): munculkan kembali header
      if (scrollStopTimer) {
        clearTimeout(scrollStopTimer);
      }
      scrollStopTimer = setTimeout(() => {
        setIsVisible(true);
      }, 350); // 350ms setelah berhenti scroll, header muncul otomatis
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (page: ActivePage, category?: ProductCategory) => {
    onNavigate(page, category);
    setMobileMenuOpen(false);
    setIsProductMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCatalogDownload = () => {
    setCatalogConfirmOpen(true);
  };

  const confirmCatalogDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/katalog-heviny.pdf';
    downloadLink.download = 'katalog-heviny.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    setCatalogConfirmOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!catalogConfirmOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCatalogConfirmOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [catalogConfirmOpen]);

  const handleMouseEnterProducts = () => {
    if (!isMouseDevice()) return;
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProductMenuOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    if (!isMouseDevice()) return;
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductMenuOpen(false);
    }, 200);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 transform-gpu ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          scrolled
            ? 'bg-[#243330]/95 backdrop-blur-md border-b border-white/15 shadow-xl py-3'
            : 'bg-[#243330] border-b border-white/10 shadow-md py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer group flex items-center select-none"
            >
              <HevinyLogo variant="white" size="sm" showTagline={true} className="transition-transform group-hover:scale-105" />
            </div>

            {/* Desktop Navigation Links matching heviny.com structure */}
            <nav className="hidden md:flex items-center gap-7 text-xs tracking-[0.15em] uppercase font-medium text-white/80">
              
              {/* BERANDA */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className={`transition-all py-1 cursor-pointer relative ${
                  activePage === 'home'
                    ? 'text-white font-semibold'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                BERANDA
                {activePage === 'home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                )}
              </a>

              {/* Downloadable product catalog */}
              <button
                type="button"
                onClick={handleCatalogDownload}
                className="transition-all py-1 cursor-pointer text-white/75 hover:text-white"
              >
                KATALOG
              </button>

              {/* PRODUK with Touch-Friendly & Auto-Bounds Dropdown */}
              <div 
                ref={productMenuContainerRef}
                className="relative py-2"
                onMouseEnter={handleMouseEnterProducts}
                onMouseLeave={handleMouseLeaveProducts}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick('products')}
                  aria-expanded={isProductMenuOpen}
                  aria-haspopup="true"
                  className={`transition-all py-1 cursor-pointer flex items-center gap-1.5 relative ${
                    activePage === 'products'
                      ? 'text-white font-semibold'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  <span>PRODUK</span>
                  <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180 text-amber-300' : ''}`} />
                  {activePage === 'products' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                  )}
                </button>

                {/* Dropdown Menu - Luxury Botanical, Fully Responsive & Non-Clipping */}
                <AnimatePresence>
                  {isProductMenuOpen && (
                    <motion.div
                      ref={dropdownMenuRef}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        x: shiftX 
                      }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 shadow-2xl rounded-xl overflow-hidden border border-white/15 bg-[#1B2623]/98 backdrop-blur-xl z-50 text-white w-64 max-w-[calc(100vw-2rem)]"
                    >
                      <div className="py-3 bg-black/25">
                        <div className="px-3.5 pb-2 mb-1 border-b border-white/10 flex items-center justify-between gap-3">
                          <span className="text-[10px] font-bold text-amber-200 tracking-widest uppercase font-sans">
                            Kategori
                          </span>
                          <button
                            type="button"
                            onClick={() => handleNavClick('products')}
                            className="text-[10px] font-semibold text-amber-200 hover:text-white transition cursor-pointer whitespace-nowrap"
                          >
                            Lihat Semua <span aria-hidden="true">&rarr;</span>
                          </button>
                        </div>

                        <div className="space-y-1 px-1.5">
                          {OFFICIAL_HEVINY_CATEGORIES.map((cat) => {
                            const count = getProductCategoryCount(cat.id);
                            return (
                              <button
                                key={cat.id}
                                type="button"
                                onClick={() => handleNavClick('products', cat.id)}
                                className="w-full px-2.5 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between transition-all duration-150 cursor-pointer text-left text-white/70 hover:text-white hover:bg-white/10 active:bg-white/15"
                              >
                                <span className="truncate">{cat.name}</span>
                                <div className="flex items-center gap-1 shrink-0">
                                  <span className="text-[10px] font-mono text-white/40">
                                    {count}
                                  </span>
                                  <ChevronRightIcon className="w-3 h-3 text-white/30" />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* TENTANG KAMI */}
              <a
                href="/tentang-kami"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
                className={`transition-all py-1 cursor-pointer relative ${
                  activePage === 'about'
                    ? 'text-white font-semibold'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                TENTANG KAMI
                {activePage === 'about' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                )}
              </a>

              {/* ARTIKEL */}
              <a
                href="/artikel"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('journal');
                }}
                className={`transition-all py-1 cursor-pointer relative ${
                  activePage === 'journal'
                    ? 'text-white font-semibold'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                ARTIKEL
                {activePage === 'journal' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                )}
              </a>

              {/* KONTAK */}
              <a
                href="/kontak"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className={`transition-all py-1 cursor-pointer relative ${
                  activePage === 'contact'
                    ? 'text-white font-semibold'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                KONTAK
                {activePage === 'contact' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                )}
              </a>

              {/* Shopee Logo Standalone (No text, pure authentic logo) */}
              <div className="flex items-center pl-3 border-l border-white/20 ml-1">
                <a
                  href={COMPANY_INFO.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Kunjungi Toko Shopee Heviny"
                  className="p-1 transition-transform duration-200 hover:scale-110 cursor-pointer flex items-center justify-center hover:opacity-85"
                  aria-label="Toko Shopee Heviny"
                >
                  <ShopeeIcon className="w-5 h-5" />
                </a>
              </div>
            </nav>

            {/* Mobile Actions: Shopee Logo + Menu Toggle */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href={COMPANY_INFO.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Kunjungi Toko Shopee Heviny"
                className="p-1 transition-transform active:scale-95 cursor-pointer flex items-center justify-center"
                aria-label="Toko Shopee Heviny"
              >
                <ShopeeIcon className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-md border border-white/20 text-white flex items-center justify-center cursor-pointer"
                aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              >
                {mobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#243330]/98 backdrop-blur-xl pt-20 px-6 flex flex-col justify-between pb-8 text-white md:hidden overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="text-center pb-2 border-b border-white/10">
                <HevinyLogo variant="white" size="md" showTagline={true} />
              </div>

              <div className="flex flex-col gap-1 text-sm tracking-wider uppercase font-medium">
                
                {/* BERANDA */}
                <button
                  type="button"
                  onClick={() => handleNavClick('home')}
                  className={`py-2.5 px-3 text-left rounded-lg transition font-medium text-sm ${
                    activePage === 'home' ? 'bg-white/15 text-amber-200 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  BERANDA
                </button>

                <button
                  type="button"
                  onClick={handleCatalogDownload}
                  className="w-full py-2.5 px-3 text-left rounded-lg transition font-medium text-sm text-white/80 hover:text-white hover:bg-white/5"
                >
                  KATALOG PDF
                </button>

                {/* PRODUK */}
                <button
                  type="button"
                  onClick={() => handleNavClick('products')}
                  className={`py-2.5 px-3 text-left rounded-lg transition font-medium text-sm ${
                    activePage === 'products' ? 'bg-white/15 text-amber-200 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  PRODUK
                </button>

                {/* TENTANG KAMI */}
                <button
                  type="button"
                  onClick={() => handleNavClick('about')}
                  className={`py-2.5 px-3 text-left rounded-lg transition font-medium text-sm ${
                    activePage === 'about' ? 'bg-white/15 text-amber-200 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  TENTANG KAMI
                </button>

                {/* ARTIKEL */}
                <button
                  type="button"
                  onClick={() => handleNavClick('journal')}
                  className={`py-2.5 px-3 text-left rounded-lg transition font-medium text-sm ${
                    activePage === 'journal' ? 'bg-white/15 text-amber-200 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  ARTIKEL
                </button>

                {/* KONTAK */}
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className={`py-2.5 px-3 text-left rounded-lg transition font-medium text-sm ${
                    activePage === 'contact' ? 'bg-white/15 text-amber-200 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  KONTAK
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <a
                href={COMPANY_INFO.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                title="Toko Shopee Heviny"
                className="p-1 flex items-center justify-center transition hover:scale-110 active:scale-95 cursor-pointer hover:opacity-85"
                aria-label="Toko Shopee Heviny"
              >
                <ShopeeIcon className="w-6 h-6" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 px-3 rounded-md bg-emerald-700/80 hover:bg-emerald-700 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition shadow-xs"
              >
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {catalogConfirmOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setCatalogConfirmOpen(false);
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="catalog-confirm-title"
              className="w-full max-w-md rounded-lg border border-white/10 bg-[#243330] p-6 text-white shadow-2xl"
            >
              <h2 id="catalog-confirm-title" className="text-lg font-semibold">
                Unduh katalog PDF?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Katalog Produk Heviny akan diunduh ke perangkat Anda dalam format PDF.
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setCatalogConfirmOpen(false)}
                  className="rounded-md border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={confirmCatalogDownload}
                  className="rounded-md bg-amber-300 px-4 py-2 text-sm font-semibold text-[#243330] transition hover:bg-amber-200"
                >
                  Unduh PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
