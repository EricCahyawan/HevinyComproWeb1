import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRightIcon, 
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '../data/companyInfo';
import { productImage } from '../data/products';

interface HeroProps {
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeThumbIdx, setActiveThumbIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax transformations
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // Curated hero featured thumbnails
  const heroThumbnails = [
    {
      id: 'rose-water',
      name: 'Heviny Rose Water',
      category: 'Air Mawar Murni',
      image: productImage('HEVINY Air Mawar - 1 L - 1'),
      tag: 'Best Seller Retail'
    },
    {
      id: 'creambath-b5',
      name: 'Heviny Creambath SPA B5',
      category: 'Hair Care',
      image: productImage('HEVINY Creambath Spa Alpukat - Pot 1 kg - 1'),
      tag: 'Favorit Salon'
    },
    {
      id: 'midodareni-scrub',
      name: 'Midodareni Body Scrub',
      category: 'Lulur Keraton',
      image: productImage('HEVINY Lulur Midodareni Body Scrub Avocado - Pot 1 kg - 1'),
      tag: '11 Varian Aroma'
    },
    {
      id: 'massage-oil',
      name: 'Aromatherapy Massage Oil',
      category: 'Spa Essentials',
      image: productImage('HEVINY Massage Oil Frangipani - 1 L - 1'),
      tag: 'Minyak Nabati Murni'
    },
    {
      id: 'hair-tonic',
      name: 'Herbal Hair Tonic Yellow',
      category: 'Penumbuh Rambut',
      image: productImage('HEVINY Hair Tonic Aloe Vera Mint - 1 L - 1'),
      tag: 'Ekstrak Kemiri'
    },
    {
      id: 'grosir-jerigen',
      name: 'Grosir Jerigen 5 Liter',
      category: 'Salon & Spa Bulk',
      image: productImage('HEVINY Hair and Body Wash Ekstrak Aloe Vera, Ekstrak Avocado dan Argan Oil - 1 L (Pump) - 1'),
      tag: 'Ekonomis Salon'
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen bg-gradient-to-b from-[#6B837F] via-[#5C726E] to-[#4D625E] text-white pt-24 sm:pt-28 pb-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Ambient Glow & Botanical Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none" />
      
      {/* Massive Editorial Display Typography in Background (as in Dribbble reference) */}
      <motion.div
        style={{ y: titleY, opacity: opacityFade }}
        className="absolute top-16 sm:top-20 left-0 right-0 z-0 pointer-events-none select-none text-center"
      >
        <span className="font-serif text-[18vw] sm:text-[16vw] lg:text-[14vw] font-normal leading-none tracking-tight text-white/15 block uppercase">
          PORCELAIN
        </span>
        <span className="font-serif text-[15vw] sm:text-[13vw] lg:text-[11vw] font-light leading-none tracking-[0.08em] text-white/10 block -mt-6 sm:-mt-12 uppercase">
          BOTANICAL
        </span>
      </motion.div>

      {/* Main Hero Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-4 space-y-6 text-left order-2 lg:order-1"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 rounded-sm bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/90">
                <span>EST. 2006 • MANUFAKTUR KOSMETIK NUSANTARA</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white leading-tight uppercase">
                TIMELESS <br />
                <span className="font-normal italic">BEAUTY,</span> <br />
                PERFECTED.
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans max-w-sm">
              Elevating your skincare & salon routine with luxurious, botanical-inspired formulations crafted with certified BPOM RI & Halal standards.
            </p>

            {/* Actions: Explore */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#243330] hover:bg-[#F3F5F4] text-xs font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-2xl hover:scale-102 cursor-pointer"
              >
                <span>Jelajahi Produk</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Micro Legal Badges */}
            <div className="flex items-center gap-4 pt-3 text-[11px] text-white/70 font-sans border-t border-white/10">
              <span>100% BPOM RI Resmi</span>
              <span className="text-white/40">•</span>
              <span>Halal BPJPH Kemenag</span>
              <span className="text-white/40">•</span>
              <span>Standar CPKB</span>
            </div>
          </motion.div>

          {/* Center Column: High-Fashion Botanical Porcelain Portrait */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-black/30 backdrop-blur-2xs group">
              
              {/* Natural Botanical Porcelain Model Image */}
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
                alt="Heviny Porcelain Skin & Botanical Care"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Porcelain Texture & Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4D625E] via-transparent to-white/10 opacity-70" />

              {/* Floating Aesthetic Glass Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-[#243330]/70 backdrop-blur-md border border-white/15 text-center">
                <p className="font-serif text-sm font-light text-white tracking-widest uppercase">
                  THE BEAUTY OF NATURE
                </p>
                <p className="text-[10px] text-white/70 tracking-wider font-sans mt-0.5">
                  Ekstrak Mawar, Bengkuang, Kemiri & Lidah Buaya
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Floating Glassmorphism Product Card (as in Dribbble reference) */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-end order-3"
          >
            <div className="w-full max-w-sm rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 shadow-2xl space-y-4 text-left hover:bg-white/15 transition-all duration-300">
              
              {/* Product Visual */}
              <div className="relative rounded-lg overflow-hidden aspect-4/3 bg-white/10 border border-white/15">
                <img
                  src={heroThumbnails[activeThumbIdx].image}
                  alt={heroThumbnails[activeThumbIdx].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-sm bg-[#243330]/80 backdrop-blur-md text-[10px] font-semibold text-amber-200 tracking-wider uppercase border border-white/10">
                  {heroThumbnails[activeThumbIdx].tag}
                </span>
              </div>

              {/* Card Information */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span className="uppercase tracking-widest">{heroThumbnails[activeThumbIdx].category}</span>
                  <span className="font-mono text-amber-200 font-medium">BPOM RI Verified</span>
                </div>
                <h3 className="font-serif text-lg font-normal tracking-wide text-white">
                  {heroThumbnails[activeThumbIdx].name}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed">
                  Formula ramah kulit berbahan ekstrak botani pilihan untuk kelembapan ekstra, keharuman mewah, dan nutrisi tahan lama.
                </p>
              </div>

              {/* Card Action */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <button
                  onClick={onExploreCatalog}
                  className="text-xs font-semibold tracking-wider text-white hover:text-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Lihat Semua Produk</span>
                  <ChevronRightIcon className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] text-white/60">
                  Pilihan Retail & Jerigen 5L
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Horizontal Interactive Thumbnails Ribbon (as in Dribbble reference) */}
      <div className="relative z-10 border-t border-white/10 bg-black/10 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-sans">
              PRODUK UNGGULAN & VARIAN BOTANI
            </span>
            <button
              onClick={onExploreCatalog}
              className="text-[11px] text-white/80 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>Semua Produk</span>
              <ChevronRightIcon className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-1">
            {heroThumbnails.map((thumb, idx) => (
              <button
                key={thumb.id}
                onClick={() => setActiveThumbIdx(idx)}
                className={`p-2 rounded-lg text-left transition-all duration-300 cursor-pointer flex flex-col gap-2 ${
                  activeThumbIdx === idx
                    ? 'bg-white/20 border border-white/40 shadow-lg scale-102'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                <div className="aspect-square rounded-md overflow-hidden bg-white/10">
                  <img
                    src={thumb.image}
                    alt={thumb.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-white/60 block truncate">{thumb.category}</span>
                  <span className="text-xs font-serif font-light text-white block truncate">
                    {thumb.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
