import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  MapPinIcon,
  ArrowUpRightIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO, NATURAL_INGREDIENTS } from '../data/companyInfo';
import { ActivePage, IngredientHighlight } from '../types';
import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';
import { useLanguage } from '../LanguageContext';
import { ENGLISH_INGREDIENTS } from '../data/englishContent';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
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
  const englishCertifications = [
    { badge: 'Official Notification', title: 'Official BPOM RI Registration', desc: 'All formulas are tested and registered with BPOM RI, and are made without prohibited ingredients such as mercury or hydroquinone.', highlight: 'Registered & Tested' },
    { badge: 'BPJPH & MUI', title: 'Indonesian Halal Certificate', desc: 'Officially certified under registration ID35110019295530624, ensuring hygienic production and compliance with Halal requirements.', highlight: 'ID35110019295530624' },
    { badge: 'Sterile Facility', title: 'Good Cosmetics Manufacturing Practices', desc: 'Made in a hygienic facility following BPOM RI guidelines for Good Cosmetics Manufacturing Practices, with microbiological and batch-stability controls.', highlight: 'CPKB / GMP Standards' },
    { badge: 'Professional Solutions', title: 'Salon & Bulk Supply Partnerships', desc: 'Trusted by more than 1,200 salons in Indonesia, with retail jars and bottles, 1-liter refills, and value-size 5- and 20-liter jerrycans.', highlight: 'From Retail to 20L' }
  ];

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: t('homeBreadcrumb'), url: '/', onClick: () => onNavigate('home') },
    { name: t('aboutUs'), url: '/tentang-kami', current: true }
  ];
  const selectedIngredientCopy = language === 'en' ? ENGLISH_INGREDIENTS[selectedIngredient.id] : selectedIngredient;

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
            <div className="relative aspect-[7/8] rounded-xl overflow-hidden shadow-xl border border-line bg-surface group">
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
              <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft font-semibold block mb-2">
                {language === 'en' ? 'COMPANY & MANUFACTURING PROFILE' : 'PROFIL PERUSAHAAN & PABRIK MANUFAKTUR'}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-light leading-tight">
                {language === 'en' ? <>Hana Cosmetics & <span className="italic font-normal">the Heviny Brand</span></> : <>Hana Cosmetics & <span className="italic font-normal">Merek Heviny</span></>}
              </h1>
            </div>
            
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-sans">
              {language === 'en' ? <>Established in Surabaya in 2006, <strong>Hana Cosmetics</strong> is a cosmetics manufacturer and the owner of the <strong>Heviny</strong> brand. We serve beauty salons, spa therapists, barbershops, cosmetics retailers, and consumers with safe, effective hair and skin care at factory-direct prices.</> : <>Didirikan di Surabaya sejak tahun 2006, <strong>Hana Cosmetics (Hana Cosmetic)</strong> adalah pabrik produsen kosmetik terkemuka dan pemilik resmi merek <strong>Heviny</strong>. Kami mendedikasikan diri untuk menjawab kebutuhan para praktisi salon kecantikan, terapis spa, barbershop, toko kosmetik, serta konsumen luas akan produk perawatan rambut dan kulit yang aman, berkhasiat nyata, dan memiliki harga pabrik bersahabat.</>}
            </p>
            
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-sans">
              {language === 'en' ? <>At <strong>Hana Cosmetics Surabaya</strong>, we combine Indonesian botanical ingredients—such as candlenut oil, red rose petals, jicama, and fresh aloe vera—with modern formulation expertise that meets Good Cosmetics Manufacturing Practices (CPKB), BPOM RI, and Indonesian Halal standards.</> : <>Di fasilitas manufaktur <strong>Hana Cosmetics Surabaya</strong>, kami memadukan kearifan ekstrak botani nusantara—seperti minyak kemiri murni, kelopak mawar merah, sari bengkoang, dan lidah buaya segar—dengan keahlian formulasi modern yang memenuhi standar Cara Pembuatan Kosmetik yang Baik (CPKB) serta sertifikasi izin edar resmi BPOM RI & Halal Indonesia.</>}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="btn-pill"
              >
                <span>{t('exploreProducts')}</span>
                <span className="btn-pill-arrow"><ArrowUpRightIcon className="w-4 h-4" /></span>
              </button>
            </div>
          </div>

        </section>

        {/* 2. STATS BAR / MILESTONES */}
        <section className="bg-surface rounded-xl border border-line p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-line">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className={`space-y-1 text-center ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-4' : ''}`}>
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-ink">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-ink-soft uppercase tracking-wider">
                  {language === 'en' ? ['Years of Experience', 'Salon & Spa Partners', 'Natural Product Variants', 'CPKB, BPOM & Halal'][idx] : stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2b. OFFLINE STORE — ROYAL PLAZA SURABAYA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-line shadow-xl bg-surface">
              <img
                src="/hero-gerai-heviny.webp"
                alt={language === 'en' ? 'Heviny store at Royal Plaza Surabaya' : 'Toko Heviny di Royal Plaza Surabaya'}
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
                width={680}
                height={510}
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft font-semibold block mb-2">
                {language === 'en' ? 'VISIT OUR STORE' : 'KUNJUNGI TOKO KAMI'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink leading-tight">
                {language === 'en' ? <>Heviny at <span className="italic font-normal">Royal Plaza</span></> : <>Toko Heviny di <span className="italic font-normal">Royal Plaza</span></>}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
              {language === 'en'
                ? 'Besides ordering online, you can see and buy Heviny products in person at our store in Royal Plaza Surabaya.'
                : 'Selain memesan secara online, Anda bisa melihat dan membeli produk Heviny secara langsung di toko kami di Royal Plaza Surabaya.'}
            </p>
            <div className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
              <div className="w-9 h-9 rounded-md bg-brand-50 border border-line flex items-center justify-center shrink-0">
                <MapPinIcon className="w-4.5 h-4.5 text-brand-700" />
              </div>
              <div className="text-sm">
                <span className="block font-semibold text-ink">Royal Plaza Surabaya</span>
                <span className="block text-ink-soft">{language === 'en' ? 'Ground Floor (Lantai G)' : 'Lantai G'}</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Toko+Kosmetik+Heviny+Royal+Plaza+Surabaya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
            >
              <span>{language === 'en' ? 'Open in Google Maps' : 'Buka di Google Maps'}</span>
              <span className="btn-pill-arrow"><ArrowUpRightIcon className="w-4 h-4" /></span>
            </a>
          </div>
        </section>

        {/* 3. VISI & MISI PERUSAHAAN (INTERACTIVE EDITORIAL SHOWCASE) */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft font-semibold block">
                {language === 'en' ? 'FOUNDATIONS & STRATEGIC DIRECTION' : 'PONDASI & ARAH STRATEGIS'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-light">
                {language === 'en' ? <>Vision & <span className="italic font-normal">Commitment</span></> : <>Visi & Dedikasi <span className="italic font-normal">Perusahaan</span></>}
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="inline-flex p-1 rounded-lg bg-surface border border-line self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveVisionTab('visi')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                  activeVisionTab === 'visi'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {language === 'en' ? 'Our Vision' : 'Visi Kami'}
              </button>
              <button
                type="button"
                onClick={() => setActiveVisionTab('misi')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                  activeVisionTab === 'misi'
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {language === 'en' ? 'Mission & Action' : 'Misi & Aksi Nyata'}
              </button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-line transition-all">
            <AnimatePresence mode="wait">
              {activeVisionTab === 'visi' ? (
                <motion.div
                  key="visi"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-7 sm:p-12 bg-brand-600 text-white space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold block">
                      {language === 'en' ? 'OUR FUTURE & REPUTATION' : 'PANDANGAN MASA DEPAN & REPUTASI'}
                    </span>
                    <span className="text-xs text-amber-200/80 font-mono">EST. 2006</span>
                  </div>
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic text-amber-100 leading-snug">
                    "{COMPANY_INFO.vision}"
                  </blockquote>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-white/15 text-xs text-white/80">
                    <div className="space-y-1">
                      <span className="text-amber-300 font-semibold block text-sm">{language === 'en' ? 'Since 2006' : 'Sejak 2006'}</span>
                      <p className="leading-relaxed">{language === 'en' ? 'Nearly two decades of consistent formulation quality and trusted beauty partnerships.' : 'Hampir dua dekade konsisten menjaga mutu formulasi dan kepercayaan mitra kecantikan.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-amber-300 font-semibold block text-sm">{language === 'en' ? 'Salon Quality' : 'Kualitas Salon'}</span>
                      <p className="leading-relaxed">{language === 'en' ? 'Professional treatment results at accessible prices that support our partners’ margins.' : 'Hasil perawatan profesional nyata dengan efisiensi harga yang bersahabat untuk margin mitra.'}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-amber-300 font-semibold block text-sm">{language === 'en' ? 'Reliable Supply' : 'Pasokan Berkelanjutan'}</span>
                      <p className="leading-relaxed">{language === 'en' ? 'Reliable distribution from our factory to cities across Indonesia.' : 'Distribusi lancar siap kirim ke seluruh kota di Indonesia langsung dari fasilitas pabrik.'}</p>
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
                  className="p-7 sm:p-12 bg-white text-ink space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-ink-soft font-semibold block">
                      {language === 'en' ? 'PRACTICAL ACTION & FORMULATION COMMITMENT' : 'LANGKAH NYATA & DEDIKASI FORMULASI'}
                    </span>
                    <p className="font-serif text-lg sm:text-2xl font-normal text-ink leading-relaxed">
                      {language === 'en' ? 'To create high-quality, safe cosmetics at accessible prices for every consumer.' : COMPANY_INFO.mission}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 border-t border-line text-xs">
                    <div className="space-y-1.5">
                      <span className="font-semibold text-brand-800 block text-sm">{language === 'en' ? '01. Formula Safety' : '01. Keamanan Formulasi'}</span>
                      <p className="text-ink-soft leading-relaxed">{language === 'en' ? 'We ensure transparency around botanical ingredients and compliance with BPOM RI laboratory testing.' : 'Menjamin transparansi bahan botani alami dan kepatuhan uji laboratorium izin edar BPOM RI.'}</p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-semibold text-brand-800 block text-sm">{language === 'en' ? '02. Salon Partnerships' : '02. Pemberdayaan Salon'}</span>
                      <p className="text-ink-soft leading-relaxed">{language === 'en' ? 'We support salons, spas, and distributors with cost-effective refill packaging.' : 'Mendukung pertumbuhan usaha salon, spa, dan distributor lewat efisiensi kemasan isi ulang ekonomis.'}</p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-semibold text-brand-800 block text-sm">{language === 'en' ? '03. Tropical Innovation' : '03. Inovasi Tropis'}</span>
                      <p className="text-ink-soft leading-relaxed">{language === 'en' ? 'We develop cosmetics suited to tropical climates and local care routines.' : 'Mengembangkan produk kosmetik yang secara spesifik cocok dengan iklim tropis dan kebiasaan masyarakat nusantara.'}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. STANDAR MUTU & LEGALITAS RESMI (CONSOLIDATED & MINIMALIST) */}
        <section className="py-10 sm:py-14 border-y border-line">
          <div className="space-y-8 sm:space-y-10">
            {/* Header: Clear, Authoritative & Concise */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft font-semibold block">
                  {language === 'en' ? 'QUALITY STANDARDS & OFFICIAL COMPLIANCE' : 'STANDAR MUTU & LEGALITAS RESMI'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-light">
                  {language === 'en' ? <>Quality Assurance & <span className="italic font-normal">Certification</span></> : <>Jaminan Kualitas & <span className="italic font-normal">Sertifikasi</span></>}
                </h2>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                  {language === 'en' ? 'We follow Indonesian regulations, maintain hygienic manufacturing facilities, and uphold formula integrity to protect consumers and salon professionals.' : 'Kepatuhan ketat terhadap regulasi instansi resmi Republik Indonesia, fasilitas manufaktur higienis, dan integritas formula untuk melindungi konsumen serta praktisi salon profesional.'}
                </p>
              </div>
              <div className="font-mono text-xs text-ink-soft px-3 py-1.5 bg-surface rounded-md border border-line self-start md:self-auto shrink-0">
                {language === 'en' ? 'OFFICIAL INDONESIAN STANDARDS' : 'STANDAR RESMI REPUBLIK INDONESIA'}
              </div>
            </div>

            {/* 4-Column Minimalist Editorial Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-2">
              {qualityCertifications.map((item, index) => {
                const certification = language === 'en' ? { ...item, ...englishCertifications[index] } : item;
                return (
                <div
                  key={item.code}
                  className="space-y-3 pt-5 border-t border-line flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-brand-800 font-semibold tracking-wider">
                        {item.code}
                      </span>
                      <span className="text-[10px] font-mono text-ink-soft uppercase tracking-wider bg-surface px-2 py-0.5 rounded border border-line/80">
                        {certification.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg text-ink font-medium leading-snug">
                      {certification.title}
                    </h3>
                    <p className="text-xs text-ink-soft leading-relaxed">
                      {certification.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-line/60">
                    <span className="text-[11px] font-medium text-ink block">
                      {certification.highlight}
                    </span>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. BOTANICAL INGREDIENTS SHOWCASE (INTERACTIVE EDITORIAL MASTER-DETAIL) */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-soft font-semibold block">
                {language === 'en' ? 'TROPICAL BOTANICALS' : 'KEKAYAAN ALAM TROPIS'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-light">
                {language === 'en' ? <>Botanical Active Ingredients from <span className="italic font-normal">Indonesia</span></> : <>Bahan Aktif Botani <span className="italic font-normal">Nusantara</span></>}
              </h2>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                {language === 'en' ? 'Explore Heviny’s selected botanical extracts, formulated for beauty and hair care in tropical climates.' : 'Eksplorasi ekstrak botani murni pilihan Heviny dengan khasiat teruji klinis untuk formulasi kecantikan dan perawatan rambut tropis.'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-ink-soft cursor-pointer pb-1 border-b border-brand-500 self-start md:self-auto transition-colors"
            >
              <span>{language === 'en' ? 'Read Our Care Guides' : 'Baca Panduan Edukasi di Artikel'}</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Editorial Master-Detail Card */}
          <div className="bg-surface border border-line rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Interactive Ingredient Selector */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                    {language === 'en' ? `SELECT A BOTANICAL (${NATURAL_INGREDIENTS.length})` : `PILIH KANDUNGAN BOTANI (${NATURAL_INGREDIENTS.length})`}
                  </span>
                  <span className="text-[10px] text-ink-muted hidden sm:inline">
                    {language === 'en' ? 'Select to view details' : 'Klik untuk melihat detail'}
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
                            ? 'bg-brand-600 border-brand-500 text-white shadow-md'
                            : 'bg-white hover:bg-surface-alt border-line text-ink'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.image}
                            alt={language === 'en' ? ENGLISH_INGREDIENTS[item.id].name : item.name}
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-md object-contain bg-white shrink-0 border border-black/10"
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
                                isSelected ? 'text-white' : 'text-ink group-hover:text-brand-900'
                              }`}
                            >
                              {language === 'en' ? ENGLISH_INGREDIENTS[item.id].name : item.name}
                            </h3>
                            <p
                              className={`text-[11px] truncate italic font-serif ${
                                isSelected ? 'text-brand-100' : 'text-ink-soft'
                              }`}
                            >
                              {item.latinName}
                            </p>
                          </div>
                        </div>

                        <ChevronRightIcon
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isSelected
                              ? 'text-brand-100 translate-x-0.5'
                              : 'text-ink-muted group-hover:translate-x-0.5'
                          } hidden sm:block`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Featured Spotlight Detail Card */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-line rounded-xl p-5 sm:p-7 shadow-xs space-y-5">
                  
                  {/* Botanical Hero Photo */}
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden border border-line bg-brand-900 group">
                    <img
                      src={selectedIngredient.image}
                      alt=""
                      aria-hidden="true"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
                    />
                    <img
                      src={selectedIngredient.image}
                      alt={selectedIngredientCopy.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('photo-1617897903246')) {
                          target.src = 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80';
                        }
                      }}
                      className="relative w-full h-full object-contain"
                    />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-sm bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
                        {selectedIngredient.latinName}
                      </span>
                    </div>
                  </div>

                  {/* Botanical Title & Narrative */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-ink">
                      {selectedIngredientCopy.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                      {selectedIngredientCopy.description}
                    </p>
                  </div>

                  {/* Key Dermatological Benefits Grid */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[10px] uppercase font-semibold text-ink-muted tracking-wider block">
                      {language === 'en' ? 'Research-Informed Benefits:' : 'Khasiat & Manfaat Teruji:'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedIngredientCopy.benefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2 p-2.5 rounded-md bg-surface border border-line text-xs text-ink"
                        >
                          <CheckIcon className="w-3.5 h-3.5 text-brand-700 shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formulated Products & Action Link */}
                  <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5 min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-ink-muted tracking-wider block">
                        {language === 'en' ? 'Featured in These Products:' : 'Diformulasikan Pada Produk:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedIngredient.associatedProducts.map((prod, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[11px] px-2.5 py-1 rounded-sm bg-surface text-ink font-medium border border-line"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('products')}
                      className="btn-pill shrink-0 self-start sm:self-auto"
                    >
                      <span>{language === 'en' ? 'View Related Products' : 'Lihat Produk Terkait'}</span>
                      <span className="btn-pill-arrow"><ArrowUpRightIcon className="w-4 h-4" /></span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6.5. PABRIK LANGSUNG & EFISIENSI DISTRIBUSI (EDITORIAL IN-DEPTH SECTION) */}
        <section className="p-6 sm:p-10 rounded-xl bg-surface border border-line space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-soft font-semibold block">
              {language === 'en' ? 'MANUFACTURING EFFICIENCY & DIRECT PRICING' : 'EFISIENSI MANUFAKTUR & HARGA PABRIK'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-light">
              {language === 'en' ? <>High-Quality Cosmetics at <span className="italic font-normal">Factory-Direct Prices</span></> : <>Kosmetik Berkualitas Tinggi dengan <span className="italic font-normal">Harga Pabrik Terjangkau</span></>}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm text-ink-soft leading-relaxed">
            <div className="space-y-4">
              <p>
                {language === 'en' ? <>As a direct manufacturer in Surabaya since 2006, <strong>Hana Cosmetics</strong> manages an integrated supply chain, from botanical sourcing and laboratory formulation to modern packaging that meets <strong>Good Cosmetics Manufacturing Practices (CPKB)</strong>.</> : <>Sebagai produsen langsung sejak 2006 di Surabaya, <strong>Hana Cosmetics</strong> menerapkan sistem rantai pasok terintegrasi dari pengadaan bahan baku botani, formulasi laboratorium, hingga lini pengemasan modern berstandar <strong>Cara Pembuatan Kosmetik yang Baik (CPKB)</strong>.</>}
              </p>
              <p>
                {language === 'en' ? 'By reducing distribution layers, we offer quality cosmetics and salon supplies at factory-direct prices. Safe, effective, compliant care does not have to come at a premium.' : 'Dengan memangkas perantara distribusi berjenjang, kami mampu menghadirkan produk kosmetik murah berkualitas dan suplai sampo salon murah berizin resmi BPOM RI. Kami membuktikan bahwa produk perawatan yang aman, efektif, dan legal tidak harus berharga mahal.'}
              </p>
            </div>
            <div className="space-y-4">
              <p>
                {language === 'en' ? 'This commitment has made Heviny a trusted partner to salons, barbershops, spa therapists, retailers, and distributors across Indonesia. Flexible packaging ranges from hygienic retail sizes and salon pump bottles to refill pouches and value-size 5- and 20-liter jerrycans.' : 'Komitmen ini menjadikan Heviny mitra terpercaya bagi ribuan salon kecantikan, barbershop, terapis spa tradisional, toko kosmetik murah, serta distributor di berbagai kota di Indonesia. Pilihan kemasan kami rancang sangat fleksibel—mulai dari kemasan ritel higienis, botol pump salon, pouch isi ulang, hingga jerigen hemat 5 Liter dan 20 Liter.'}
              </p>
              <p>
                {language === 'en' ? 'Every formula is made without mercury, hydroquinone, or other prohibited substances, giving beauty businesses confidence in product quality and compliance.' : 'Setiap formula yang diproduksi di fasilitas kami dijamin 100% bebas merkuri, hidrokuinon, atau zat berbahaya lainnya, memberikan kepastian mutu dan legalitas bagi para pelaku usaha kecantikan dalam mengembangkan bisnisnya.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-4 text-xs text-ink">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-brand-700 shrink-0" />
              <span>{language === 'en' ? 'Factory-Direct Wholesale for Salons & Resellers' : 'Harga Grosir Pabrik Langsung untuk Salon & Reseller'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-brand-700 shrink-0" />
              <span>{language === 'en' ? 'BPOM RI Registered & Halal-Certified' : '100% Notifikasi Resmi BPOM RI & Bersertifikat Halal'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-brand-700 shrink-0" />
              <span>{language === 'en' ? 'Retail Packaging to 20-Liter Jerrycans' : 'Kemasan Lengkap Retail hingga Jerigen 20 Liter'}</span>
            </div>
          </div>
        </section>

        {/* 7. CTA BANNER */}
        <section className="p-8 sm:p-12 rounded-xl bg-brand-600 text-white text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-light">
              {language === 'en' ? 'Want to Learn More About Our Products?' : 'Ingin Mengetahui Lebih Lengkap Mengenai Produk Kami?'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('products')}
              className="btn-pill btn-pill-light"
            >
              <span>{language === 'en' ? 'View Product Catalog' : 'Lihat Daftar Produk'}</span>
              <span className="btn-pill-arrow"><ArrowUpRightIcon className="w-4 h-4" /></span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-pill-glass"
            >
              {t('contactCompany')}
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

