import React from 'react';
import { ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '../data/companyInfo';
import { useLanguage } from '../LanguageContext';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F6F8F7] border-b border-[#E3E8E6] relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#5C726E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
              {language === 'en' ? 'HERITAGE & CRAFTSMANSHIP • SINCE 2006' : 'HERITAGE & CRAFTSMANSHIP • SEJAK 2006'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#243330] leading-tight">
              {language === 'en' ? 'Dedicating Botanical Purity for ' : 'Mendedikasikan Kemurnian Botani untuk '}
              <br className="hidden sm:inline" />
              <span className="font-normal italic">
                {language === 'en' ? 'Beauty & Salon Needs' : 'Kecantikan & Kebutuhan Salon'}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-[#5C726E] font-sans leading-relaxed">
              {language === 'en' 
                ? 'Heviny blends the natural herbal wisdom of the archipelago with modern cosmetics standards officially certified by BPOM RI & Halal.' 
                : 'Heviny memadukan kearifan herbal alami nusantara dengan standar kosmetik modern berizin resmi BPOM RI & Halal.'}
            </p>
          </div>
        </div>

        {/* 2-Column Editorial Grid: Visual + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Editorial Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-[#E3E8E6] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                alt="Formulasi Alami Heviny"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243330]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 block font-sans">
                  {language === 'en' ? 'HYGIENIC CPKB STANDARD' : 'STANDAR HIGIENIS CPKB'}
                </span>
                <p className="font-serif text-lg font-light">
                  {language === 'en' ? 'Pure Botanical Formulation Without Harmful Ingredients' : 'Formulasi Botani Murni Tanpa Bahan Berbahaya'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visi, Misi & 3 Pilar Nilai */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Visi Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3E8E6] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5C726E]">
                  {language === 'en' ? 'OUR VISION' : 'VISI KAMI'}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#243330] font-normal">
                "{COMPANY_INFO.vision}"
              </h3>
              <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed">
                {language === 'en' 
                  ? 'To become the barometer for salon and spa cosmetics in Indonesia that prioritizes consistent quality, affordability, and long-term safety.' 
                  : 'Menjadi barometer kosmetik salon dan spa di Indonesia yang mengutamakan kualitas konsisten, keterjangkauan harga, dan keamanan jangka panjang.'}
              </p>
            </div>

            {/* Misi & Legalitas Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-white border border-[#E3E8E6] space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#5C726E]/10 flex items-center justify-center text-[#5C726E]">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-medium text-[#243330]">
                  {language === 'en' ? '100% BPOM RI' : '100% BPOM RI'}
                </h4>
                <p className="text-xs text-[#5C726E] leading-relaxed">
                  {language === 'en' 
                    ? 'All product variants have passed clinical lab tests and are officially registered with BPOM RI.' 
                    : 'Seluruh varian produk telah melewati uji lab klinis dan terdaftar resmi di Badan POM RI.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E3E8E6] space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#5C726E]/10 flex items-center justify-center text-[#5C726E]">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-medium text-[#243330]">
                  {language === 'en' ? 'Halal BPJPH' : 'Halal BPJPH'}
                </h4>
                <p className="text-xs text-[#5C726E] leading-relaxed">
                  {language === 'en' 
                    ? 'Pure plant-based raw materials officially Halal certified by BPJPH of the Indonesian Ministry of Religious Affairs.' 
                    : 'Bahan baku nabati murni bersertifikasi halal resmi dari BPJPH Kementerian Agama RI.'}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* 3 Kategori Perawatan Utama - Minimalist Editorial Cards */}
        <div className="pt-8 border-t border-[#E3E8E6]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C726E] font-semibold block mb-1">
              {language === 'en' ? 'PRODUCT PORTFOLIO' : 'PORTFOLIO PRODUK'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#243330] font-light">
              {language === 'en' ? '3 Essential Care Categories' : '3 Kategori Perawatan Esensial'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-white border border-[#E3E8E6] space-y-3 hover:border-[#5C726E] transition-colors">
              <span className="text-[11px] font-mono font-semibold text-[#5C726E] tracking-widest block">
                01 / HAIR CARE
              </span>
              <h4 className="font-serif text-lg text-[#243330]">
                {language === 'en' ? 'Hair Care' : 'Perawatan Rambut'}
              </h4>
              <p className="text-xs text-[#5C726E] leading-relaxed">
                {language === 'en' 
                  ? 'Vitamin B5 Creambath, Hair Mask, Candlenut Hair Tonic, Shampoo & Conditioner (Retail up to 5-Liter Jerrycans).' 
                  : 'Creambath Vitamin B5, Hair Mask, Hair Tonic Kemiri, Shampo & Kondisioner (Retail hingga Jerigen 5 Liter).'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E3E8E6] space-y-3 hover:border-[#5C726E] transition-colors">
              <span className="text-[11px] font-mono font-semibold text-[#5C726E] tracking-widest block">
                02 / BODY & SPA
              </span>
              <h4 className="font-serif text-lg text-[#243330]">
                {language === 'en' ? 'Body Care & Scrubs' : 'Perawatan Tubuh & Lulur'}
              </h4>
              <p className="text-xs text-[#5C726E] leading-relaxed">
                {language === 'en' 
                  ? 'Midodareni Body Scrub (11 herbal scent variants), Aromatherapy Massage Oil, Bath Salt & Milk Bath.' 
                  : 'Midodareni Body Scrub (11 varian aroma herbal keraton), Aromatherapy Massage Oil, Bath Salt & Milk Bath.'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E3E8E6] space-y-3 hover:border-[#5C726E] transition-colors">
              <span className="text-[11px] font-mono font-semibold text-[#5C726E] tracking-widest block">
                03 / FACE & NAIL
              </span>
              <h4 className="font-serif text-lg text-[#243330]">
                {language === 'en' ? 'Face & Nail Care' : 'Perawatan Wajah & Kuku'}
              </h4>
              <p className="text-xs text-[#5C726E] leading-relaxed">
                {language === 'en' 
                  ? 'Rose Water, Milk Cleanser, Cucumber Astringent, Facial Wash, and Nail Polish Remover.' 
                  : 'Rose Water (Air Mawar), Milk Cleanser, Astringent Mentimun, Facial Wash, dan Nail Polish Remover.'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
