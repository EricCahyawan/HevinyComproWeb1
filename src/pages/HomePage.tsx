import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { NATURAL_INGREDIENTS, TESTIMONIALS, COMPANY_INFO } from '../data/companyInfo';
import { HEVINY_PRODUCTS } from '../data/products';
import { Product, ActivePage } from '../types';
import { ParallaxBanner } from '../components/ParallaxBanner';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'body' | 'face' | 'nail'>('all');

  // Dynamic filter for signature bestseller products
  const filteredProducts = useMemo(() => {
    const list = HEVINY_PRODUCTS.filter(p => p.popular || p.isSalonFavorite);
    if (activeCategory === 'all') return list.slice(0, 6);
    const byCat = HEVINY_PRODUCTS.filter(p => p.category === activeCategory);
    return byCat.length > 0 ? byCat.slice(0, 6) : list.slice(0, 6);
  }, [activeCategory]);

  // 1. HERO PARALLAX (Direct GPU transform without CPU-heavy spring physics loop)
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroContentY = useTransform(heroScroll, [0, 1], ['0px', '40px']);
  const heroContentOpacity = useTransform(heroScroll, [0, 0.85], [1, 0.3]);

  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* 1. HERO SECTION WITH PROMINENT PARALLAX BACKGROUND */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 bg-[#4D635F] text-white overflow-hidden"
      >
        {/* Parallax Background Imagery */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -top-24 -bottom-24 z-0 will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=75"
            alt="Kemurnian Ekstrak Botani Heviny"
            className="w-full h-full object-cover opacity-35 brightness-110"
            referrerPolicy="no-referrer"
            decoding="async"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4D635F]/85 via-[#4D635F]/55 to-[#4D635F]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#4D635F]/40 to-[#4D635F]" />
        </motion.div>

        {/* Hero Main Content with Subtle Parallax Elevation */}
        <motion.div
          style={{ y: heroContentY, opacity: heroContentOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 my-auto will-change-transform"
        >
          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1] drop-shadow-sm">
            Kemurnian Ekstrak Botani <br />
            <span className="italic font-normal">Untuk Mahkota & Kulit Alami</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/90 font-sans leading-relaxed drop-shadow-xs">
            Rangkaian kosmetik perawatan rambut, tubuh, dan spa terpercaya bersertifikasi CPKB BPOM RI & Halal. Menghadirkan kualitas terbaik dengan harga terjangkau untuk salon kecantikan dan perawatan harian di rumah.
          </p>
        </motion.div>

        {/* Bottom Legal Certification Pillars */}
        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/20 flex items-center justify-center gap-6 sm:gap-14 text-left backdrop-blur-xs">
          <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-white/95">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheckIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-300" />
            </div>
            <div>
              <span className="font-semibold block text-white text-[11px] sm:text-sm">BPOM RI Terdaftar</span>
              <span className="text-[9px] sm:text-[10px] text-white/80">Izin Edar Resmi</span>
            </div>
          </div>

          <div className="w-px h-8 bg-white/20" />

          <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-white/95">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheckIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-300" />
            </div>
            <div>
              <span className="font-semibold block text-white text-[11px] sm:text-sm">Halal Indonesia</span>
              <span className="text-[9px] sm:text-[10px] text-white/80">Sertifikat BPJPH</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE BESTSELLERS SECTION */}
      <section className="relative py-14 sm:py-24 bg-white border-b border-[#E3E8E6] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5C726E] font-semibold block mb-1.5 sm:mb-2">
                KOLEKSI UNGGULAN & SALON FAVORIT
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#243330] font-light">
                Pilihan Perawatan <span className="italic font-normal">Paling Diminati</span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#243330] hover:text-[#5C726E] transition cursor-pointer self-start md:self-auto"
            >
              <span>Lihat Semua Produk di Halaman Produk</span>
              <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-[#E3E8E6]">
            {[
              { key: 'all', label: 'Semua Favorit' },
              { key: 'hair', label: 'Hair Care & Salon' },
              { key: 'body', label: 'Body & Bath' },
              { key: 'face', label: 'Face Care' },
              { key: 'nail', label: 'Nail & Foot' }
            ].map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer shrink-0 ${
                  activeCategory === cat.key
                    ? 'bg-[#243330] text-white shadow-xs'
                    : 'bg-[#F6F8F7] text-[#5C726E] hover:bg-[#EEF2F0] hover:text-[#243330] border border-[#E3E8E6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dynamic Animated Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                />
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 3. BOTANICAL INGREDIENTS SPOTLIGHT */}
      <section className="relative py-14 sm:py-28 bg-[#F6F8F7] border-b border-[#E3E8E6] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
              THE BEAUTY OF NATURE • KANDUNGAN BOTANI ALAMI
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#243330] font-light">
              Kearifan Bahan Alami <span className="italic font-normal">Nusantara</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed font-sans">
              Setiap tetes dan formulasi Heviny diperkaya ekstrak botani murni yang terbukti secara turun-temurun merawat keindahan rambut dan kelembutan kulit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {NATURAL_INGREDIENTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 sm:p-6 border border-[#E3E8E6] shadow-xs space-y-3 sm:space-y-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-[#F6F8F7] relative group">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('photo-1617897903246')) {
                          target.src = 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80';
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#8A9E9A] uppercase tracking-wider block">
                    {item.latinName}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#243330]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#5C726E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-[#F0F3F2]">
                  <span className="text-[10px] font-semibold text-[#243330] block mb-1">Manfaat Utama:</span>
                  <ul className="text-[11px] text-[#5C726E] space-y-1">
                    {item.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#243330] hover:bg-[#1A2624] text-white text-xs font-semibold uppercase tracking-wider transition cursor-pointer shadow-md"
            >
              <span>Pelajari Edukasi & Ritual di Halaman Artikel</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. CONTINUOUS TESTIMONIALS MARQUEE (NO STATIC HEADER, CONTINUOUS RIGHT-TO-LEFT GLIDE) */}
      <section className="relative py-10 sm:py-14 bg-white border-b border-[#E3E8E6] overflow-hidden">
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous Marquee Track (Repeated for seamless infinite scroll) */}
        <div className="animate-marquee-scroll flex gap-4 sm:gap-6 px-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testi, idx) => (
            <div
              key={`${testi.id}-${idx}`}
              className="w-[300px] sm:w-[380px] shrink-0 p-5 sm:p-6 rounded-xl bg-[#F6F8F7] border border-[#E3E8E6] hover:border-[#243330]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 cursor-default select-none"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(testi.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#243330] leading-relaxed italic font-serif">
                  "{testi.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#E3E8E6] flex items-center justify-between">
                <h4 className="font-semibold text-xs sm:text-sm text-[#243330] truncate">
                  {testi.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ARTIKEL EDUKASI RESMI */}
      <section className="relative py-12 sm:py-16 bg-[#F6F8F7] border-b border-[#E3E8E6] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="max-w-2xl space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5C726E] font-semibold">
                ARTIKEL EDUKASI & TIPS RESMI HEVINY
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#243330] font-light">
                Panduan Edukasi & <span className="italic font-normal">Ritual Perawatan Botani</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed">
                Pelajari wawasan perawatan rambut salon profesional, manfaat lulur rempah tradisional, hingga panduan menjaga keindahan kuku alami langsung dari formulator kami.
              </p>
            </div>

            <button
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#243330] hover:bg-[#1A2624] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition cursor-pointer self-start md:self-auto shrink-0 shadow-md"
            >
              <span>Jelajahi Artikel</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. CONSOLIDATED MASTER PARALLAX & CTA BANNER */}
      <ParallaxBanner
        onNavigateProducts={() => onNavigate('products')}
        onNavigateContact={() => onNavigate('contact')}
      />

    </div>
  );
};
