import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
import { useLanguage } from '../LanguageContext';
import { ENGLISH_INGREDIENTS, ENGLISH_TESTIMONIALS } from '../data/englishContent';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProduct?: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate
}) => {
  const { language, t } = useLanguage();
  // Signature bestseller products
  const favoriteProducts = useMemo(() => {
    return HEVINY_PRODUCTS.filter(p => p.popular || p.isSalonFavorite).slice(0, 6);
  }, []);

  // 1. HERO PARALLAX
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
        className="relative min-h-[calc(100svh-69px)] flex flex-col justify-between pt-8 pb-6 sm:pt-12 sm:pb-10 bg-brand-700 text-white overflow-hidden"
      >
        {/* Parallax Background Imagery */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -top-24 -bottom-24 z-0 will-change-transform"
        >
          <img
            src="/hero-gerai-heviny.webp"
            alt="Gerai Heviny Cosmetics"
            className="w-full h-full object-cover object-[35%_75%] opacity-75"
            referrerPolicy="no-referrer"
            decoding="async"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-700/75 via-brand-700/45 to-brand-700/90" />
          <div className="absolute inset-0 bg-radial from-transparent via-brand-700/20 to-brand-700/80" />
        </motion.div>

        {/* Hero Main Content with Subtle Parallax Elevation */}
        <motion.div
          style={{ y: heroContentY, opacity: heroContentOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-[clamp(0.75rem,3svh,2rem)] my-auto py-4 will-change-transform"
        >
          {/* Heading */}
          <h1 className="font-serif text-[clamp(1.85rem,min(8vw,8svh),4.5rem)] font-light tracking-tight text-white leading-[1.1] drop-shadow-sm">
            <span className="block overflow-hidden pb-1">
              <span className="inline-block">
                {t('heroTitle')}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block italic font-normal">
                {t('heroSubtitle')}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-[clamp(0.8rem,2.2svh,1rem)] text-white/90 font-sans leading-relaxed drop-shadow-xs">
            {t('heroDescription')}
          </p>
        </motion.div>

        {/* Bottom Legal Certification Pillars */}
        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-[clamp(0.75rem,2.5svh,1.5rem)] border-t border-white/20 flex items-center justify-center gap-6 sm:gap-14 text-left backdrop-blur-xs">
          <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-white/95">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheckIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-100" />
            </div>
            <div>
              <span className="font-semibold block text-white text-[11px] sm:text-sm">{t('bpomRegistered')}</span>
              <span className="text-[9px] sm:text-[10px] text-white/80">{t('officialDistribution')}</span>
            </div>
          </div>

          <div className="w-px h-8 bg-white/20" />

          <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-white/95">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheckIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-300" />
            </div>
            <div>
              <span className="font-semibold block text-white text-[11px] sm:text-sm">{t('halalIndonesia')}</span>
              <span className="text-[9px] sm:text-[10px] text-white/80">{t('halalCertificate')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE BESTSELLERS SECTION */}
      <section className="relative py-14 sm:py-24 bg-white border-b border-line overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-4xl text-ink font-light">
                {t('bestLoved')}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink hover:text-ink-soft transition cursor-pointer self-start md:self-auto"
            >
              <span>{t('viewAllProducts')}</span>
              <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. BOTANICAL INGREDIENTS SPOTLIGHT */}
      <section className="relative py-14 sm:py-28 bg-surface border-b border-line overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ink-soft font-semibold block">
              {t('botanicalLabel')}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-ink font-light">
              {t('botanicalTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-sans">
              {t('botanicalDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {NATURAL_INGREDIENTS.slice(0, 3).map((item) => {
              const ingredient = language === 'en' ? ENGLISH_INGREDIENTS[item.id] : item;
              return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 sm:p-6 border border-line shadow-xs space-y-3 sm:space-y-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-surface relative">
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src={item.image}
                      alt={ingredient.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('photo-1617897903246')) {
                          target.src = 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80';
                        }
                      }}
                      className="relative w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-ink-muted uppercase tracking-wider block">
                    {item.latinName}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-ink">
                    {ingredient.name}
                  </h3>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-line">
                  <span className="text-[10px] font-semibold text-ink block mb-1">{t('mainBenefits')}</span>
                  <ul className="text-[11px] text-ink-soft space-y-1">
                    {ingredient.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold uppercase tracking-wider transition cursor-pointer shadow-md"
            >
              <span>{t('learnArticles')}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. CONTINUOUS TESTIMONIALS MARQUEE (NO STATIC HEADER, CONTINUOUS RIGHT-TO-LEFT GLIDE) */}
      <section className="relative py-10 sm:py-14 bg-white border-b border-line overflow-hidden">
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous Marquee Track (Repeated for seamless infinite scroll) */}
        <div className="animate-marquee-scroll flex gap-4 sm:gap-6 px-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testi, idx) => {
            const testimonial = language === 'en' ? ENGLISH_TESTIMONIALS[testi.id] : testi;
            return (
            <div
              key={`${testi.id}-${idx}`}
              className="w-[300px] sm:w-[380px] shrink-0 p-5 sm:p-6 rounded-xl bg-surface border border-line hover:border-brand-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 cursor-default select-none"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(testi.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-ink leading-relaxed italic font-serif">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-line flex items-center justify-between">
                <h4 className="font-semibold text-xs sm:text-sm text-ink truncate">
                  {testi.name}
                </h4>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* 5. CONSOLIDATED MASTER PARALLAX & CTA BANNER */}
      <ParallaxBanner
        onNavigateProducts={() => onNavigate('products')}
        onNavigateContact={() => onNavigate('contact')}
      />

    </div>
  );
};
