import React, { useState } from 'react';
import { ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { NATURAL_INGREDIENTS } from '../data/companyInfo';
import { IngredientHighlight } from '../types';
import { useLanguage } from '../LanguageContext';
import { ENGLISH_INGREDIENTS } from '../data/englishContent';

export const NaturalIngredients: React.FC = () => {
  const { language } = useLanguage();
  const [activeIngredient, setActiveIngredient] = useState<IngredientHighlight>(NATURAL_INGREDIENTS[0]);
  const activeCopy = language === 'en' ? ENGLISH_INGREDIENTS[activeIngredient.id] : activeIngredient;

  return (
    <section id="bahan-alami" className="py-16 sm:py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-950/80 border border-amber-800/60 px-3 py-1 rounded-sm">
            <span>{language === 'en' ? 'Indonesia’s Botanical Heritage' : 'Kekayaan Botani Nusantara'}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Indonesia’s Natural Extracts for Tropical Skin' : 'Warisan Ekstrak Alami Indonesia untuk Kulit Tropis'}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {language === 'en' ? 'Heviny uses modern hygienic CPKB-standard processes to preserve the active benefits of botanical ingredients sourced from Indonesia.' : 'Heviny berkomitmen mengekstraksi bahan nabati dan hasil bumi nusantara dengan teknologi higienis modern berstandar CPKB untuk menjaga kemurnian khasiat aktifnya.'}
          </p>
        </div>

        {/* Interactive Ingredient Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Ingredient Selection Pills */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              {language === 'en' ? 'Choose an Ingredient:' : 'Pilih Bahan Alami:'}
            </div>
            <div className="space-y-2.5">
              {NATURAL_INGREDIENTS.map((item) => {
                const isActive = activeIngredient.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIngredient(item)}
                    className={`w-full text-left p-4 rounded-md border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-amber-950/40 border-amber-500/80 text-white shadow-lg shadow-amber-950/30'
                        : 'bg-stone-800/60 border-stone-700/60 text-stone-300 hover:bg-stone-800 hover:border-stone-600'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm sm:text-base group-hover:text-amber-300 transition">
                          {language === 'en' ? ENGLISH_INGREDIENTS[item.id].name : item.name}
                        </span>
                      </div>
                      <div className="text-xs text-stone-400 italic font-serif">
                        {item.latinName}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-amber-400 font-mono hidden sm:inline">
                        {language === 'en' ? ENGLISH_INGREDIENTS[item.id].origin : item.origin}
                      </span>
                      <ChevronRightIcon
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-amber-400 translate-x-1' : 'text-stone-500'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Ingredient Detail Card */}
          <div className="lg:col-span-7">
            <div className="bg-stone-800/90 border border-stone-700 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-sm">
              
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 aspect-square rounded-lg overflow-hidden bg-stone-900 border border-stone-700">
                  <img
                    src={activeIngredient.image}
                    alt={activeCopy.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('photo-1617897903246')) {
                        target.src = 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80';
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <div className="inline-flex items-center text-xs text-amber-300 bg-amber-900/40 px-2.5 py-1 rounded-sm border border-amber-700/40">
                    <span>{language === 'en' ? 'Source:' : 'Asal Sumber:'} {activeCopy.origin}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {activeCopy.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {activeCopy.description}
                  </p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-3 pt-4 border-t border-stone-700">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {language === 'en' ? 'Dermatological Benefits:' : 'Khasiat & Manfaat Dermatologis:'}
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-stone-200">
                  {activeCopy.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-stone-900/60 p-2.5 rounded-md border border-stone-700/60">
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associated Products */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-stone-400 font-medium">{language === 'en' ? 'Featured in:' : 'Terdapat pada produk:'}</span>
                {activeIngredient.associatedProducts.map((prod, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-sm bg-stone-900 text-amber-300 border border-stone-700 font-medium">
                    {prod}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
