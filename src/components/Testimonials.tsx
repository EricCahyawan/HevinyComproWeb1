import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { TESTIMONIALS } from '../data/companyInfo';
import { ENGLISH_TESTIMONIALS } from '../data/englishContent';
import { useLanguage } from '../LanguageContext';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-amber-900 bg-amber-200/60 border border-amber-300 px-3 py-1 rounded-full">
            <span>{language === 'en' ? 'Partner & Customer Trust' : 'Kepercayaan Mitra & Pelanggan'}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
            {language === 'en' 
              ? 'Trusted by Over 1,200+ Salons, Spas, & Families' 
              : 'Dipercaya Lebih dari 1.200+ Salon, Spa, & Keluarga Indonesia'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {language === 'en'
              ? 'Real experiences from beauty professionals and loyal customers who have felt the natural benefits of Heviny products.'
              : 'Pengalaman nyata dari para pelaku usaha kecantikan dan konsumen setia yang merasakan khasiat alami produk Heviny.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => {
            const enData = ENGLISH_TESTIMONIALS[item.id];
            const role = language === 'en' && enData ? enData.role : item.role;
            const comment = language === 'en' && enData ? enData.comment : item.comment;
            
            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* 5 Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "{comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-stone-900">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-medium">
                      {role} {item.businessName && `• ${item.businessName}`}
                    </p>
                    <span className="text-[10px] text-amber-800 font-semibold">
                      {language === 'en' ? 'City of ' : 'Kota '}{item.city}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
