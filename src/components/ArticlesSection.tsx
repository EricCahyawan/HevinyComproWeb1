import React, { useState } from 'react';
import { 
  ArrowRightIcon, 
  XMarkIcon, 
  ShareIcon, 
  CheckIcon,
  ClockIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import { ARTICLES_DATA } from '../data/articles';
import { ArticleItem } from '../types';
import { BotanicalArticleVisual } from './BotanicalArticleVisual';

interface ArticlesSectionProps {
  onSelectProductByName?: (name: string) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectProductByName }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="articles" className="py-24 sm:py-32 bg-white border-b border-[#E3E8E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
            JURNAL & EDUKASI RESMI PABRIK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#243330]">
            Wawasan <span className="italic font-normal">Formulasi & Perawatan</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed font-sans">
            Panduan ilmiah seputar perawatan rambut salon, khasiat lulur tradisional, regulasi keamanan BPOM RI, dan kesehatan kulit menggunakan ekstrak botani terpercaya.
          </p>
        </div>

        {/* Articles Grid - Pure High-End Editorial Layout with Botanical Vector Visuals (No AI Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article, index) => (
            <article
              key={article.id}
              id={`article-card-${article.id}`}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-2xl border border-[#E3E8E6] hover:border-[#5C726E] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                {/* Pure Minimal Color Header (No AI Images, No SVG Vectors) */}
                <BotanicalArticleVisual
                  category={article.category}
                  readTime={article.readTime}
                  className="rounded-t-2xl"
                />

                <div className="p-6 sm:p-7 space-y-3.5">
                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#243330] group-hover:text-[#3B5D55] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Clean Excerpt (flowing without vertical line) */}
                  <p className="text-xs sm:text-[13px] text-[#5C726E] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Botanical Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {article.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-sans px-2.5 py-0.5 rounded-sm bg-[#F6F8F7] text-[#5C726E] border border-[#E3E8E6]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="pt-3.5 border-t border-[#EAEFEF] flex items-center justify-end text-xs">
                  <div className="flex items-center gap-1 font-semibold text-[#243330] group-hover:text-[#3B5D55] group-hover:translate-x-1 transition-all uppercase tracking-wider text-[11px]">
                    <span>Baca Artikel</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal (Editorial Layout without AI Images) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div
            id="modal-article-reader"
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E3E8E6] animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Editorial Header */}
            <div className="bg-[#FAFBFB] p-6 sm:p-10 border-b border-[#E3E8E6] relative">
              <button
                id="btn-close-article-modal"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-[#E3E8E6] hover:bg-[#243330] hover:text-white text-[#5C726E] flex items-center justify-center transition-colors cursor-pointer shadow-xs z-20"
                aria-label="Tutup Artikel"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>

              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm bg-[#EBF2F0] text-[#2D4D44] border border-[#D5E3DF]">
                    {selectedArticle.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A9E9A]">• {selectedArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#1E2B28] leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
              
              {/* Key Takeaways Box (if available) */}
              {selectedArticle.keyTakeaways && selectedArticle.keyTakeaways.length > 0 && (
                <div className="p-5 rounded-xl bg-[#F0F5F3] border border-[#D5E4DF] space-y-2.5">
                  <div className="flex items-center gap-2 text-[#243330]">
                    <BookOpenIcon className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Intisari Riset & Manfaat Formulasi:
                    </span>
                  </div>
                  <ul className="text-xs sm:text-[13px] text-[#3B544E] space-y-1.5 pl-5 list-disc leading-relaxed">
                    {selectedArticle.keyTakeaways.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Paragraphs */}
              <div className="space-y-4">
                {selectedArticle.contentParagraphs.map((para, idx) => (
                  <p 
                    key={idx} 
                    className={
                      para.startsWith('1.') || para.startsWith('2.') || para.startsWith('3.') || para.startsWith('4.') || para.startsWith('5.') || para.startsWith('6.') 
                        ? 'font-medium text-[#243330] bg-[#FAFBFB] p-4 rounded-xl border-l-3 border-[#5C726E] my-3' 
                        : idx === 0 
                          ? 'first-letter:font-serif first-letter:text-4xl first-letter:float-left first-letter:mr-2.5 first-letter:text-[#1E2B28] leading-relaxed' 
                          : 'leading-relaxed'
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Recommended Products */}
              {selectedArticle.recommendedProducts && selectedArticle.recommendedProducts.length > 0 && (
                <div className="bg-[#FAFBFB] rounded-xl p-5 border border-[#E3E8E6] mt-6">
                  <div className="text-[#243330] font-semibold text-xs mb-3 uppercase tracking-wider">
                    Rekomendasi Produk Formulasi Terkait:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.recommendedProducts.map((prod, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => {
                          setSelectedArticle(null);
                          if (onSelectProductByName) {
                            onSelectProductByName(prod);
                          }
                          const el = document.getElementById('catalog');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-3.5 py-2 rounded-lg bg-white border border-[#E3E8E6] text-xs font-medium text-[#243330] hover:bg-[#243330] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                      >
                        <span>{prod}</span>
                        <ArrowRightIcon className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Share & Close Actions */}
              <div className="pt-6 border-t border-[#E3E8E6] flex items-center justify-between">
                <button
                  id="btn-share-article"
                  onClick={handleShare}
                  className="px-4 py-2 rounded-lg border border-[#E3E8E6] text-xs font-semibold text-[#5C726E] hover:bg-[#FAFBFB] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {copied ? <CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> : <ShareIcon className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tautan Disalin' : 'Bagikan'}</span>
                </button>
                <button
                  id="btn-close-article-bottom"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-lg bg-[#243330] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1A2624] transition-colors cursor-pointer"
                >
                  Tutup Artikel
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
