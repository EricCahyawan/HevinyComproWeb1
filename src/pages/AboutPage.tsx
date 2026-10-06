import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO, NATURAL_INGREDIENTS } from '../data/companyInfo';
import { ActivePage, IngredientHighlight } from '../types';
import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientHighlight>(NATURAL_INGREDIENTS[0]);
  const [activeVisionTab, setActiveVisionTab] = useState<'visi' | 'misi'>('visi');

  const qualityCertifications = [
    {
      code: '01',
      badge: 'Notifikasi Resmi',
      title: 'Izin Edar Resmi BPOM RI',
      desc: 'Seluruh formula perawatan teruji klinis bebas dari bahan berbahaya (seperti merkuri & hidrokuinon), mengantongi izin edar notifikasi resmi dari BPOM RI.',
      highlight: '100% Terdaftar & Teruji'
    },
    {
      code: '02',
      badge: 'BPJPH & MUI',
      title: 'Sertifikat Halal Indonesia',
      desc: 'Tersertifikasi resmi dengan No. Registrasi ID35110019295530624. Menjamin kemurnian proses produksi, higienitas, dan bebas dari unsur najis maupun hewani terlarang.',
      highlight: 'No. ID35110019295530624'
    },
    {
      code: '03',
      badge: 'Fasilitas Steril',
      title: 'Standar Manufaktur CPKB',
      desc: 'Diproduksi di fasilitas higienis berpedoman ketat Cara Pembuatan Kosmetik yang Baik (CPKB) dari BPOM RI dengan uji mikrobiologi dan kontrol stabilitas di setiap batch.',
      highlight: 'Standar CPKB / GMP Terakreditasi'
    },
    {
      code: '04',
      badge: 'Solusi Profesional',
      title: 'Kemitraan Salon & Curah',
      desc: 'Dipercaya 1.200+ salon di Indonesia dengan ketersediaan volume lengkap: dari kemasan ritel pot/botol praktis, isi ulang 1 Liter, hingga jerigen hemat 5 Liter & 20 Liter.',
      highlight: 'Ritel Higienis hingga Jerigen 20L'
    }
  ];

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Beranda', url: '/', onClick: () => onNavigate('home') },
    { name: 'Tentang Kami', url: '/tentang-kami', current: true }
  ];

  return (
    <div className="pt-4 sm:pt-6 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* SEO Breadcrumb Navigation */}
        <div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        {/* 1. HERO STORY & BRAND HERITAGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[7/8] rounded-xl overflow-hidden shadow-xl border border-[#E3E8E6] bg-[#F6F8F7] group">
              <img
                src="/TentangKami.jpg"
                alt="Katalog produk dan identitas perusahaan Heviny"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C726E] font-semibold block mb-2">
                PROFIL PERUSAHAAN & PABRIK MANUFAKTUR
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#243330] font-light leading-tight">
                Hana Cosmetics & <span className="italic font-normal">Merek Heviny</span>
              </h1>
            </div>
            
            <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed font-sans">
              Didirikan di Surabaya sejak tahun 2006, <strong>Hana Cosmetics (Hana Cosmetic)</strong> adalah pabrik produsen kosmetik terkemuka dan pemilik resmi merek <strong>Heviny</strong>. Kami mendedikasikan diri untuk menjawab kebutuhan para praktisi salon kecantikan, terapis spa, barbershop, toko kosmetik, serta konsumen luas akan produk perawatan rambut dan kulit yang aman, berkhasiat nyata, dan memiliki harga pabrik bersahabat.
            </p>
            
            <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed font-sans">
              Di fasilitas manufaktur <strong>Hana Cosmetics Surabaya</strong>, kami memadukan kearifan ekstrak botani nusantara—seperti minyak kemiri murni, kelopak mawar merah, sari bengkoang, dan lidah buaya segar—dengan keahlian formulasi modern yang memenuhi standar Cara Pembuatan Kosmetik yang Baik (CPKB) serta sertifikasi izin edar resmi BPOM RI & Halal Indonesia.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3 rounded-md bg-[#243330] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1A2624] transition cursor-pointer shadow-xs"
              >
                Jelajahi Produk Kami
              </button>
            </div>
          </div>

        </section>

        {/* 2. STATS BAR / MILESTONES */}
        <section className="bg-[#F6F8F7] rounded-xl border border-[#E3E8E6] p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E3E8E6]">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className={`space-y-1 text-center ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-4' : ''}`}>
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#243330]">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#5C726E] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. VISI & MISI PERUSAHAAN (INTERACTIVE EDITORIAL SHOWCASE) */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
                PONDASI & ARAH STRATEGIS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#243330] font-light">
                Visi & Dedikasi <span className="italic font-normal">Perusahaan</span>
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="inline-flex p-1 rounded-lg bg-[#F6F8F7] border border-[#E3E8E6] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveVisionTab('visi')}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                  activeVisionTab === 'visi'
                    ? 'bg-[#243330] text-white shadow-xs'
                    : 'text-[#5C726E] hover:text-[#243330]'
                }`}
              >
                Visi Kami
              </button>
              <button
                type="button"
                onClick={() => setActiveVisionTab('misi')}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                  activeVisionTab === 'misi'
                    ? 'bg-[#243330] text-white shadow-xs'
                    : 'text-[#5C726E] hover:text-[#243330]'
                }`}
              >
                Misi & Aksi Nyata
              </button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#E3E8E6] transition-all">
            <AnimatePresence mode="wait">
              {activeVisionTab === 'visi' ? (
                <motion.div
                  key="visi"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-7 sm:p-12 bg-[#243330] text-white space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold block">
                      PANDANGAN MASA DEPAN & REPUTASI
                    </span>
                    <span className="text-xs text-amber-200/80 font-mono">EST. 2006</span>
                  </div>
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic text-amber-100 leading-snug">
                    "{COMPANY_INFO.vision}"
                  </blockquote>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-white/15 text-xs text-white/80">
                    <div className="space-y-1">
                      <span className="text-amber-300 font-semibold block text-sm">Sejak 2006</span>
                      <p className="leading-relaxed">Hampir dua dekade konsisten menjaga mutu formulasi dan kepercayaan mitra kecantikan.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-amber-300 font-semibold block text-sm">Kualitas Salon</span>
                      <p className="leading-relaxed">Hasil perawatan profesional nyata dengan efisiensi harga yang bersahabat untuk margin mitra.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-amber-300 font-semibold block text-sm">Pasokan Berkelanjutan</span>
                      <p className="leading-relaxed">Distribusi lancar siap kirim ke seluruh kota di Indonesia langsung dari fasilitas pabrik.</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="misi"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-7 sm:p-12 bg-white text-[#243330] space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#5C726E] font-semibold block">
                      LANGKAH NYATA & DEDIKASI FORMULASI
                    </span>
                    <p className="font-serif text-lg sm:text-2xl font-normal text-[#243330] leading-relaxed">
                      {COMPANY_INFO.mission}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-[#E3E8E6] text-xs">
                    <div className="space-y-1.5">
                      <span className="font-semibold text-emerald-800 block text-sm">01. Keamanan Formulasi</span>
                      <p className="text-[#5C726E] leading-relaxed">Menjamin transparansi bahan botani alami dan kepatuhan uji laboratorium izin edar BPOM RI.</p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-semibold text-emerald-800 block text-sm">02. Pemberdayaan Salon</span>
                      <p className="text-[#5C726E] leading-relaxed">Mendukung pertumbuhan usaha salon, spa, dan distributor lewat efisiensi kemasan isi ulang ekonomis.</p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-semibold text-emerald-800 block text-sm">03. Inovasi Tropis</span>
                      <p className="text-[#5C726E] leading-relaxed">Mengembangkan produk kosmetik yang secara spesifik cocok dengan iklim tropis dan kebiasaan masyarakat nusantara.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. STANDAR MUTU & LEGALITAS RESMI (CONSOLIDATED & MINIMALIST) */}
        <section className="py-10 sm:py-14 border-y border-[#E3E8E6]">
          <div className="space-y-8 sm:space-y-10">
            {/* Header: Clear, Authoritative & Concise */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
                  STANDAR MUTU & LEGALITAS RESMI
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#243330] font-light">
                  Jaminan Kualitas & <span className="italic font-normal">Sertifikasi</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed">
                  Kepatuhan ketat terhadap regulasi instansi resmi Republik Indonesia, fasilitas manufaktur higienis, dan integritas formula untuk melindungi konsumen serta praktisi salon profesional.
                </p>
              </div>
              <div className="font-mono text-xs text-[#5C726E] px-3 py-1.5 bg-[#F6F8F7] rounded-md border border-[#E3E8E6] self-start md:self-auto shrink-0">
                STANDAR RESMI REPUBLIK INDONESIA
              </div>
            </div>

            {/* 4-Column Minimalist Editorial Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-2">
              {qualityCertifications.map((item) => (
                <div
                  key={item.code}
                  className="space-y-3 pt-5 border-t border-[#E3E8E6] flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-800 font-semibold tracking-wider">
                        {item.code}
                      </span>
                      <span className="text-[10px] font-mono text-[#5C726E] uppercase tracking-wider bg-[#F6F8F7] px-2 py-0.5 rounded border border-[#E3E8E6]/80">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg text-[#243330] font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5C726E] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E3E8E6]/60">
                    <span className="text-[11px] font-medium text-[#243330] block">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. BOTANICAL INGREDIENTS SHOWCASE (INTERACTIVE EDITORIAL MASTER-DETAIL) */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C726E] font-semibold block">
                KEKAYAAN ALAM TROPIS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#243330] font-light">
                Bahan Aktif Botani <span className="italic font-normal">Nusantara</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed">
                Eksplorasi ekstrak botani murni pilihan Heviny dengan khasiat teruji klinis untuk formulasi kecantikan dan perawatan rambut tropis.
              </p>
            </div>
            <button
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#243330] hover:text-[#5C726E] cursor-pointer pb-1 border-b border-[#243330] self-start md:self-auto transition-colors"
            >
              <span>Baca Panduan Edukasi di Artikel</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Editorial Master-Detail Card */}
          <div className="bg-[#F6F8F7] border border-[#E3E8E6] rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Interactive Ingredient Selector */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8A9E9A]">
                    PILIH KANDUNGAN BOTANI ({NATURAL_INGREDIENTS.length})
                  </span>
                  <span className="text-[10px] text-[#8A9E9A] hidden sm:inline">
                    Klik untuk melihat detail
                  </span>
                </div>

                {/* Mobile horizontal scroll / Desktop vertical list */}
                <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                  {NATURAL_INGREDIENTS.map((item) => {
                    const isSelected = selectedIngredient.id === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedIngredient(item)}
                        className={`w-auto sm:min-w-[240px] lg:w-full text-left p-3 sm:p-3.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 shrink-0 group ${
                          isSelected
                            ? 'bg-[#243330] border-[#243330] text-white shadow-md'
                            : 'bg-white hover:bg-[#EEF2F0] border-[#E3E8E6] text-[#243330]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-md object-cover shrink-0 border border-black/10"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (!target.src.includes('photo-1617897903246')) {
                                target.src = 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80';
                              }
                            }}
                          />
                          <div className="min-w-0">
                            <h3
                              className={`font-serif text-sm sm:text-base font-medium truncate ${
                                isSelected ? 'text-white' : 'text-[#243330] group-hover:text-emerald-900'
                              }`}
                            >
                              {item.name}
                            </h3>
                            <p
                              className={`text-[11px] truncate italic font-serif ${
                                isSelected ? 'text-emerald-300' : 'text-[#5C726E]'
                              }`}
                            >
                              {item.latinName}
                            </p>
                          </div>
                        </div>

                        <ChevronRightIcon
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isSelected
                              ? 'text-emerald-300 translate-x-0.5'
                              : 'text-[#8A9E9A] group-hover:translate-x-0.5'
                          } hidden sm:block`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Featured Spotlight Detail Card */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-[#E3E8E6] rounded-xl p-5 sm:p-7 shadow-xs space-y-5">
                  
                  {/* Botanical Hero Photo */}
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden border border-[#E3E8E6] bg-[#1E2B28] group">
                    <img
                      src={selectedIngredient.image}
                      alt={selectedIngredient.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('photo-1617897903246')) {
                          target.src = 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80';
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-sm bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
                        {selectedIngredient.latinName}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-white text-xs bg-[#243330]/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/15">
                      <MapPinIcon className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="font-medium text-[11px]">Sumber Asli: {selectedIngredient.origin}</span>
                    </div>
                  </div>

                  {/* Botanical Title & Narrative */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#243330]">
                      {selectedIngredient.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed">
                      {selectedIngredient.description}
                    </p>
                  </div>

                  {/* Key Dermatological Benefits Grid */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] uppercase font-semibold text-[#8A9E9A] tracking-wider block">
                      Khasiat & Manfaat Teruji:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedIngredient.benefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2 p-2.5 rounded-md bg-[#F6F8F7] border border-[#E3E8E6] text-xs text-[#243330]"
                        >
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formulated Products & Action Link */}
                  <div className="pt-4 border-t border-[#E3E8E6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5 min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-[#8A9E9A] tracking-wider block">
                        Diformulasikan Pada Produk:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedIngredient.associatedProducts.map((prod, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[11px] px-2.5 py-1 rounded-sm bg-[#F6F8F7] text-[#243330] font-medium border border-[#E3E8E6]"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('products')}
                      className="px-4 py-2.5 rounded-md bg-[#243330] hover:bg-[#1A2624] text-white text-xs font-semibold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 shrink-0 self-start sm:self-auto shadow-xs"
                    >
                      <span>Lihat Produk Terkait</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6.5. PABRIK LANGSUNG & EFISIENSI DISTRIBUSI (EDITORIAL IN-DEPTH SECTION) */}
        <section className="p-6 sm:p-10 rounded-xl bg-[#F6F8F7] border border-[#E3E8E6] space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#5C726E] font-semibold block">
              EFISIENSI MANUFAKTUR & HARGA PABRIK
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#243330] font-light">
              Kosmetik Berkualitas Tinggi dengan <span className="italic font-normal">Harga Pabrik Terjangkau</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm text-[#5C726E] leading-relaxed">
            <div className="space-y-4">
              <p>
                Sebagai produsen langsung sejak 2006 di Surabaya, <strong>Hana Cosmetics</strong> menerapkan sistem rantai pasok terintegrasi dari pengadaan bahan baku botani, formulasi laboratorium, hingga lini pengemasan modern berstandar <strong>Cara Pembuatan Kosmetik yang Baik (CPKB)</strong>.
              </p>
              <p>
                Dengan memangkas perantara distribusi berjenjang, kami mampu menghadirkan produk kosmetik murah berkualitas dan suplai sampo salon murah berizin resmi BPOM RI. Kami membuktikan bahwa produk perawatan yang aman, efektif, dan legal tidak harus berharga mahal.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Komitmen ini menjadikan Heviny mitra terpercaya bagi ribuan salon kecantikan, barbershop, terapis spa tradisional, toko kosmetik murah, serta distributor di berbagai kota di Indonesia. Pilihan kemasan kami rancang sangat fleksibel—mulai dari kemasan ritel higienis, botol pump salon, pouch isi ulang, hingga jerigen hemat 5 Liter dan 20 Liter.
              </p>
              <p>
                Setiap formula yang diproduksi di fasilitas kami dijamin 100% bebas merkuri, hidrokuinon, atau zat berbahaya lainnya, memberikan kepastian mutu dan legalitas bagi para pelaku usaha kecantikan dalam mengembangkan bisnisnya.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E3E8E6] flex flex-wrap items-center justify-between gap-4 text-xs text-[#243330]">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Harga Grosir Pabrik Langsung untuk Salon & Reseller</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>100% Notifikasi Resmi BPOM RI & Bersertifikat Halal</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Kemasan Lengkap Retail hingga Jerigen 20 Liter</span>
            </div>
          </div>
        </section>

        {/* 7. CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-xl bg-[#243330] text-white text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-light">
              Ingin Mengetahui Lebih Lengkap Mengenai Produk Kami?
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('products')}
              className="px-6 py-3.5 rounded-md bg-white text-[#243330] hover:bg-[#EAEFEF] text-xs font-semibold uppercase tracking-wider transition cursor-pointer shadow-xs"
            >
              Lihat Daftar Produk
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-md bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500 transition cursor-pointer"
            >
              Hubungi Kontak Perusahaan
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

