import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { useLanguage } from '../LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full">
            <span>Standar Kualitas Hana Cosmetics</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
            Mengapa Heviny Menjadi Pilihan Ribuan Salon & Konsumen Sejak 2006?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Dedikasi kami selama bertahun-tahun adalah memadukan kekayaan alam Indonesia dengan teknologi manufaktur yang higienis, legal, dan aman untuk penggunaan jangka panjang.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 space-y-2 shadow-2xs hover:border-amber-300 transition">
            <span className="text-xs font-mono font-bold text-emerald-800 tracking-wider">01 / REGULASI</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              100% Terdaftar BPOM RI
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Seluruh produk kami telah melalui uji stabilitas laboratorium dan memiliki nomor notifikasi resmi BPOM yang dapat diverifikasi kapan saja.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 space-y-2 shadow-2xs hover:border-amber-300 transition">
            <span className="text-xs font-mono font-bold text-amber-800 tracking-wider">02 / KEHALALAN</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Sertifikasi Halal Resmi
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bahan baku terjamin suci dan halal di bawah pengawasan BPJPH & MUI. Memberikan rasa tenang bagi salon muslimah dan konsumen keluarga.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 space-y-2 shadow-2xs hover:border-amber-300 transition">
            <span className="text-xs font-mono font-bold text-[#243330] tracking-wider">03 / PRODUKSI</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Harga Perusahaan Tanpa Perantara
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Fasilitas produksi mandiri kami memungkinkan pemilik salon dan distributor memperoleh margin usaha maksimal dengan pasokan berkesinambungan.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 space-y-2 shadow-2xs hover:border-amber-300 transition">
            <span className="text-xs font-mono font-bold text-stone-700 tracking-wider">04 / LOGISTIK</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Ekspedisi Cargo Nasional
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dukungan ekspedisi cargo terpercaya ke seluruh pelosok Nusantara dengan packing tebal dan opsi peti kayu aman anti bocor.
            </p>
          </div>

        </div>

        {/* Highlight Factory Banner */}
        <div className="mt-12 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Fasilitas Produksi Resmi
            </span>
            <h4 className="font-serif text-xl font-bold">
              Kapasitas Produksi Skala Besar & Formulasi R&D Fleksibel
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Kami siap melayani kebutuhan pengadaan rutin bulanan puluhan ton hingga pembuatan batch khusus untuk brand kosmetik independen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <a
              href="#katalog"
              className="px-5 py-3 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-xs text-center transition"
            >
              Lihat Katalog & Grosir
            </a>
            <a
              href="#kontak"
              className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs text-center border border-stone-700 transition"
            >
              {t('contactCompany')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
