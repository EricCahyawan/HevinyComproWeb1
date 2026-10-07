import React, { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ParallaxBannerProps {
  onNavigateProducts?: () => void;
  onNavigateContact?: () => void;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = memo(({
  onNavigateProducts,
  onNavigateContact
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start']
  });

  // Direct GPU-accelerated background parallax translation (linear without CPU spring tick)
  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section
      ref={bannerRef}
      className="relative overflow-hidden py-16 sm:py-28 bg-[#1E2B28] text-white border-t border-[#354844]"
    >
      {/* High-Clarity Parallax Background Layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-32 -bottom-32 z-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1608248597359-548455a7e60b?auto=format&fit=crop&w=1200&q=75"
          alt="Harmoni Formulasi Botani & Ekstrak Alami Heviny"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-40 brightness-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2B28]/95 via-[#1E2B28]/80 to-[#1E2B28]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2B28] via-transparent to-[#1E2B28]" />
      </motion.div>

      {/* Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-5 sm:space-y-6">
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-sm bg-white/15 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#4fe843] uppercase shadow-xs">
            <span>BEST QUALITY, BEST VALUE • HANA COSMETICS SURABAYA</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Harmoni Formulasi Botani & <br className="hidden sm:inline" />
              <span className="italic font-normal">Keahlian Kosmetik Nusantara</span>
            </h2>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              Menghadirkan rangkaian kosmetik higienis bersertifikasi CPKB BPOM RI dan Halal resmi yang telah dipercaya ribuan salon, spa, dan mitra bisnis sejak 2006.
            </p>
          </div>

          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {onNavigateProducts && (
              <button
                onClick={onNavigateProducts}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-white text-[#243330] hover:bg-[#F3F5F4] text-xs font-semibold uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:scale-102 cursor-pointer"
              >
                <span>Jelajahi Produk Kami</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            )}

            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer hover:scale-102"
              >
                <span>Hubungi Kontak Resmi</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
});

ParallaxBanner.displayName = 'ParallaxBanner';

