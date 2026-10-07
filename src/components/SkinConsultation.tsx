import React, { useState } from 'react';
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { HEVINY_PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SkinConsultationProps {
  onSelectProduct: (product: Product) => void;
}

export const SkinConsultation: React.FC<SkinConsultationProps> = ({ onSelectProduct }) => {
  const [step, setStep] = useState<number>(1);
  const [concern, setConcern] = useState<string>('');
  const [focusArea, setFocusArea] = useState<string>('');
  const [preferredScent, setPreferredScent] = useState<string>('');
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const handleCalculateRecommendation = () => {
    let matches = HEVINY_PRODUCTS;

    if (focusArea === 'Rambut & Kulit Kepala') {
      matches = matches.filter(p => p.category === 'hair');
    } else if (focusArea === 'Wajah & Leher') {
      matches = matches.filter(p => p.category === 'face');
    } else if (focusArea === 'Kaki & Kuku') {
      matches = matches.filter(p => p.category === 'nail');
    } else {
      matches = matches.filter(p => p.category === 'body' || p.category === 'salon_pro');
    }

    if (concern === 'Kering & Butuh Kelembapan Ekstra') {
      matches = matches.filter(p => p.heroIngredient.includes('Susu') || p.heroIngredient.includes('Zaitun') || p.heroIngredient.includes('Aloe'));
    } else if (concern === 'Rontok, Rapuh & Ketombe') {
      matches = matches.filter(p => p.heroIngredient.includes('Ginseng') || p.heroIngredient.includes('Kemiri') || p.heroIngredient.includes('Aloe'));
    } else if (concern === 'Kusam & Ingin Lebih Cerah') {
      matches = matches.filter(p => p.heroIngredient.includes('Bengkoang') || p.heroIngredient.includes('Mawar') || p.heroIngredient.includes('Susu'));
    }

    // Fallback if filter is too narrow
    if (matches.length === 0) {
      matches = [HEVINY_PRODUCTS[0], HEVINY_PRODUCTS[1]];
    }

    setRecommendedProducts(matches.slice(0, 3));
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setConcern('');
    setFocusArea('');
    setPreferredScent('');
    setRecommendedProducts([]);
  };

  return (
    <section id="konsultasi" className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4fe843]/15 text-[#4fe843] text-xs font-semibold border border-[#4fe843]/30">
            <span>PANDUAN PEMILIHAN PRODUK</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
            Temukan Perawatan Heviny yang Tepat untuk Anda
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto">
            Jawab 3 pertanyaan singkat untuk mendapatkan rekomendasi formula alami yang paling sesuai dengan kebutuhan kulit atau rambut Anda.
          </p>
        </div>

        {/* Diagnostic Box */}
        <div className="bg-stone-800/90 rounded-2xl border border-stone-700 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          
          {/* Step Progress */}
          {step < 4 && (
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-700 text-xs font-medium text-stone-400">
              <span className={step >= 1 ? 'text-[#4fe843] font-bold' : ''}>
                1. Area Perawatan
              </span>
              <span>•</span>
              <span className={step >= 2 ? 'text-[#4fe843] font-bold' : ''}>
                2. Masalah Utama
              </span>
              <span>•</span>
              <span className={step >= 3 ? 'text-[#4fe843] font-bold' : ''}>
                3. Aroma Pilihan
              </span>
            </div>
          )}

          {/* STEP 1: Focus Area */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-bold text-white">
                Langkah 1: Bagian tubuh mana yang ingin Anda rawat secara intensif?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Badan & Kulit Tubuh (Body & Spa)', desc: 'Lulur, mandi susu, shower gel, & lotion' },
                  { title: 'Rambut & Kulit Kepala', desc: 'Creambath, hair tonic penumbuh, & hair mask' },
                  { title: 'Wajah & Leher', desc: 'Air mawar segar, pembersih susu, & toner' },
                  { title: 'Kaki & Kuku', desc: 'Perawatan kuku, nail polish remover, & garam rendam spa' },
                ].map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setFocusArea(opt.title);
                      setStep(2);
                    }}
                    className="p-4 rounded-xl border border-stone-700 bg-stone-900/60 hover:bg-[#4fe843]/10 hover:border-[#4fe843] text-left transition cursor-pointer group"
                  >
                    <div className="font-bold text-sm text-white group-hover:text-[#4fe843] transition">
                      {opt.title}
                    </div>
                    <div className="text-xs text-stone-400 mt-1">
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Concern */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-bold text-white">
                Langkah 2: Apa kondisi atau target perawatan utama Anda?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Kering & Butuh Kelembapan Ekstra', desc: 'Kulit bersisik, kering ber-AC, atau rambut kaku' },
                  { title: 'Kusam & Ingin Lebih Cerah', desc: 'Warna kulit belang, kusam, butuh eksfoliasi alami' },
                  { title: 'Rontok, Rapuh & Ketombe', desc: 'Akar rambut lemah, patah, kulit kepala gatal' },
                  { title: 'Pegal & Relaksasi Aromaterapi', desc: 'Otot tegang, lelah setelah beraktivitas seharian' },
                ].map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setConcern(opt.title);
                      setStep(3);
                    }}
                    className="p-4 rounded-xl border border-stone-700 bg-stone-900/60 hover:bg-[#4fe843]/10 hover:border-[#4fe843] text-left transition cursor-pointer group"
                  >
                    <div className="font-bold text-sm text-white group-hover:text-[#4fe843] transition">
                      {opt.title}
                    </div>
                    <div className="text-xs text-stone-400 mt-1">
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-stone-400 hover:text-white"
                >
                  ← Kembali ke Langkah Sebelumnya
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Preferred Scent */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-bold text-white">
                Langkah 3: Aroma alami seperti apa yang paling Anda sukai?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'Bunga Mawar & Melati Lembut', desc: 'Elegan, feminin, dan menenangkan syaraf' },
                  { title: 'Susu Kambing & Vanila Manis', desc: 'Hangat, lembut, dan menutrisi' },
                  { title: 'Herbal Ginseng & Minyak Kemiri', desc: 'Segar rempah nusantara khas keraton' },
                  { title: 'Peppermint & Aloe Vera Dingin', desc: 'Sejuk menyegarkan dan meredakan rasa panas' },
                ].map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setPreferredScent(opt.title);
                      handleCalculateRecommendation();
                    }}
                    className="p-4 rounded-xl border border-stone-700 bg-stone-900/60 hover:bg-[#4fe843]/10 hover:border-[#4fe843] text-left transition cursor-pointer group"
                  >
                    <div className="font-bold text-sm text-white group-hover:text-[#4fe843] transition">
                      {opt.title}
                    </div>
                    <div className="text-xs text-stone-400 mt-1">
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-stone-400 hover:text-white"
                >
                  ← Kembali ke Langkah Sebelumnya
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results Showcase */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-stone-700 pb-4">
                <div>
                  <span className="text-xs text-[#4fe843] font-bold uppercase tracking-wider block">
                    Hasil Diagnostik Anda
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                    Formula Terbaik Berdasarkan Kebutuhan Anda:
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white bg-stone-700 px-3 py-1.5 rounded-lg transition"
                >
                  <ArrowPathIcon className="w-3.5 h-3.5" />
                  <span>Ulangi Tes</span>
                </button>
              </div>

              {/* Recommended Product Cards */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recommendedProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="bg-stone-900 rounded-xl border border-stone-700 p-4 hover:border-[#4fe843] transition cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-stone-950">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
                      <span className="text-[10px] text-[#4fe843] font-mono block">
                        {product.bpomNumber}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-white group-hover:text-[#4fe843] transition mt-1 line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                        {product.subtitle}
                      </p>
                    </div>

                    <button className="mt-3 w-full py-2 rounded-lg bg-stone-800 group-hover:bg-[#4fe843] group-hover:text-[#0F2415] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5">
                      <span>Lihat Detail Produk</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
