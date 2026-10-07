import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, Clock, ArrowRight, X, Search, Tag, ExternalLink, ShieldCheck } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';
import { ArticleItem, ActivePage } from '../types';
import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';
import { BotanicalArticleVisual } from '../components/BotanicalArticleVisual';
import { useLanguage } from '../LanguageContext';

const JOURNAL_SEO = {
  title: 'Edukasi Hana Cosmetics & Heviny | Panduan Kosmetik Murah & Suplai Salon BPOM',
  description: 'Pusat publikasi dan panduan edukasi resmi Hana Cosmetics (Heviny) seputar perawatan rambut, tubuh, wajah, kuku, bahan alami, dan bisnis salon.',
  keywords: 'artikel hana cosmetics, edukasi heviny, perawatan rambut, perawatan tubuh, face care, nail care, bahan alami, panduan salon'
};

const ARTICLE_PATH = '/artikel';
const MONTHS: Record<string, string> = {
  Januari: '01', Februari: '02', Maret: '03', April: '04', Mei: '05', Juni: '06',
  Juli: '07', Agustus: '08', September: '09', Oktober: '10', November: '11', Desember: '12'
};

const getArticleFromPath = (): ArticleItem | null => {
  if (typeof window === 'undefined') return null;
  const match = window.location.pathname.match(/^\/artikel\/([^/]+)\/?$/i);
  return match ? ARTICLES_DATA.find(article => article.id === match[1]) || null : null;
};

const getIsoDate = (date: string): string | undefined => {
  const match = date.match(/^(\d{1,2}) ([A-Za-z]+) (\d{4})$/);
  if (!match || !MONTHS[match[2]]) return undefined;
  return `${match[3]}-${MONTHS[match[2]]}-${match[1].padStart(2, '0')}`;
};

interface JournalPageProps {
  onSelectProductByName?: (name: string) => void;
  onNavigate: (page: ActivePage) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onSelectProductByName, onNavigate }) => {
  const { language, t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(() => getArticleFromPath());
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const articlePath = selectedArticle ? `${ARTICLE_PATH}/${selectedArticle.id}` : ARTICLE_PATH;
    const canonicalUrl = `${window.location.origin}${articlePath}`;
    const title = selectedArticle
      ? `${selectedArticle.title} | Hana Cosmetics (Heviny)`
      : JOURNAL_SEO.title;
    const description = selectedArticle?.metaDescription || JOURNAL_SEO.description;
    const image = selectedArticle
      ? new URL(selectedArticle.image, window.location.origin).href
      : 'https://hevinycosmetics.com/logo.webp';
    const keywords = selectedArticle
      ? [...(selectedArticle.tags || []), selectedArticle.category, 'Hana Cosmetics', 'Heviny'].join(', ')
      : JOURNAL_SEO.keywords;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', selectedArticle ? 'article' : 'website');
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);
  }, [selectedArticle]);

  useEffect(() => {
    const syncArticleFromPath = () => setSelectedArticle(getArticleFromPath());
    window.addEventListener('popstate', syncArticleFromPath);
    return () => window.removeEventListener('popstate', syncArticleFromPath);
  }, []);

  const openArticle = (article: ArticleItem) => {
    const articlePath = `${ARTICLE_PATH}/${article.id}`;
    if (window.location.pathname !== articlePath) {
      window.history.pushState({ page: 'journal', articleId: article.id }, '', articlePath);
    }
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    if (window.location.pathname !== ARTICLE_PATH) {
      window.history.replaceState({ page: 'journal' }, '', ARTICLE_PATH);
    }
  };

  const articleSchema = selectedArticle ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: selectedArticle.title,
    description: selectedArticle.metaDescription || selectedArticle.summary,
    image: new URL(selectedArticle.image, window.location.origin).href,
    datePublished: getIsoDate(selectedArticle.date),
    author: { '@type': 'Person', name: selectedArticle.author },
    publisher: {
      '@type': 'Organization',
      name: 'Hana Cosmetics',
      url: 'https://hevinycosmetics.com/'
    },
    articleSection: selectedArticle.category,
    keywords: selectedArticle.tags?.join(', '),
    inLanguage: language === 'id' ? 'id-ID' : 'en-US',
    mainEntityOfPage: `${window.location.origin}${ARTICLE_PATH}/${selectedArticle.id}`
  } : null;

  const categories = [
    'Semua',
    'Hair Care',
    'Body Care',
    'Nail Care',
    'Face Care',
    language === 'id' ? 'Bahan Alami' : 'Natural Ingredients',
    language === 'id' ? 'Bisnis & Salon' : 'Business & Salons'
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      // Category Match
      let matchesCat = true;
      if (selectedCategory !== 'Semua') {
        const catNorm = selectedCategory.toLowerCase();
        const artCatNorm = article.category.toLowerCase();
        if (selectedCategory === 'Hair Care') {
          matchesCat = artCatNorm.includes('hair') || artCatNorm.includes('rambut');
        } else if (selectedCategory === 'Body Care') {
          matchesCat = artCatNorm.includes('body') || artCatNorm.includes('tubuh');
        } else if (selectedCategory === 'Nail Care') {
          matchesCat = artCatNorm.includes('nail') || artCatNorm.includes('kuku');
        } else if (selectedCategory === 'Face Care') {
          matchesCat = artCatNorm.includes('face') || artCatNorm.includes('wajah');
        } else if (selectedCategory === 'Bahan Alami' || selectedCategory === 'Natural Ingredients') {
          matchesCat = artCatNorm.includes('bahan') || artCatNorm.includes('alami') || artCatNorm.includes('herbal');
        } else if (selectedCategory === 'Bisnis & Salon' || selectedCategory === 'Business & Salons') {
          matchesCat = artCatNorm.includes('bisnis') || artCatNorm.includes('salon');
        } else {
          matchesCat = artCatNorm.includes(catNorm);
        }
      }

      // Search Match
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const titleMatch = article.title.toLowerCase().includes(query);
        const authorMatch = article.author.toLowerCase().includes(query);
        const summaryMatch = article.summary.toLowerCase().includes(query);
        const tagMatch = article.tags ? article.tags.some(t => t.toLowerCase().includes(query)) : false;
        const contentMatch = article.contentParagraphs.some(p => p.toLowerCase().includes(query));
        const recProdMatch = article.recommendedProducts ? article.recommendedProducts.some(p => p.toLowerCase().includes(query)) : false;
        matchesSearch = titleMatch || authorMatch || summaryMatch || tagMatch || contentMatch || recProdMatch;
      }

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProductClick = (prodName: string) => {
    if (onSelectProductByName) {
      onSelectProductByName(prodName);
      closeArticle();
    } else {
      onNavigate('products');
    }
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: t('homeBreadcrumb'), url: '/', onClick: () => onNavigate('home') },
    {
      name: t('articles'),
      url: '/artikel',
      onClick: () => {
        closeArticle();
        setSelectedCategory('Semua');
        setSearchQuery('');
      },
      current: !selectedArticle && selectedCategory === 'Semua' && !searchQuery
    },
    ...(selectedCategory !== 'Semua' && !selectedArticle ? [{
      name: selectedCategory,
      current: !searchQuery
    }] : []),
    ...(searchQuery && !selectedArticle ? [{
      name: `${language === 'id' ? 'Cari' : 'Search'}: "${searchQuery}"`,
      current: true
    }] : []),
    ...(selectedArticle ? [
      {
        name: selectedArticle.category,
        onClick: () => {
          setSelectedCategory(selectedArticle.category);
          closeArticle();
        }
      },
      { name: selectedArticle.title, current: true }
    ] : [])
  ];

  return (
    <div className="pt-4 sm:pt-6 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Breadcrumb Navigation */}
        <div className="mb-5">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-[#F6F8F7] p-4 sm:p-6 rounded-xl border border-[#E3E8E6] mb-10 space-y-5 shadow-xs">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8A9E9A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="input-search-articles"
              placeholder={t('articleSearch')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-lg bg-white border border-[#E3E8E6] text-xs sm:text-sm text-[#243330] placeholder-[#8A9E9A] focus:outline-none focus:border-[#243330] focus:ring-1 focus:ring-[#243330] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A9E9A] hover:text-[#243330] p-1 text-xs"
                title={t('deleteSearch')}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`btn-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#243330] text-white shadow-xs'
                    : 'bg-white text-[#5C726E] hover:bg-[#EAEFEF] border border-[#E3E8E6]'
                }`}
              >
                {cat === 'Semua' ? t('allArticles') : cat}
              </button>
            ))}
          </div>

          {/* Active Filter Reset */}
          {(selectedCategory !== 'Semua' || searchQuery) && (
            <div className="flex items-center justify-end text-xs text-[#5C726E] pt-2 border-t border-[#E3E8E6]/60">
              <button
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
              >
                {t('resetFilter')}
              </button>
            </div>
          )}
        </div>

        {/* Empty State if No Match */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 px-4 bg-[#F6F8F7] rounded-xl border border-[#E3E8E6] space-y-4">
            <BookOpen className="w-12 h-12 text-[#8A9E9A] mx-auto opacity-60" />
            <h3 className="font-serif text-xl text-[#243330]">{t('noArticles')}</h3>
            <p className="text-xs sm:text-sm text-[#5C726E] max-w-md mx-auto">
              {t('noArticlesDescription')}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-md bg-[#243330] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1A2624] transition cursor-pointer"
            >
              {t('showAllArticles')}
            </button>
          </div>
        )}

        {/* Articles Grid - Pure High-End Editorial Layout with Botanical Vector Visuals (No AI Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article, index) => (
            <a
              key={article.id}
              id={`article-card-${article.id}`}
              href={`${ARTICLE_PATH}/${article.id}`}
              onClick={(event) => {
                event.preventDefault();
                openArticle(article);
              }}
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
                  <h2 className="font-serif text-lg sm:text-xl font-normal text-[#243330] group-hover:text-[#3B5D55] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Clean Excerpt (flowing without vertical line) */}
                  <p className="text-xs sm:text-[13px] text-[#5C726E] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Tags Pill Container */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((t, tidx) => (
                        <span
                          key={tidx}
                          className="inline-flex items-center text-[10px] px-2.5 py-0.5 rounded-sm bg-[#F6F8F7] text-[#5C726E] border border-[#E3E8E6]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Read More */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="pt-3.5 border-t border-[#EAEFEF] flex items-center justify-end text-xs">
                  <div className="flex items-center gap-1 font-semibold text-[#243330] group-hover:text-[#3B5D55] group-hover:translate-x-1 transition-all uppercase tracking-wider text-[11px]">
                    <span>{t('readArticle')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Full-Screen / Modal Article Reader (Editorial Format - No AI Images) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm overflow-y-auto">
          <div
            id="modal-article-reader"
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E3E8E6] animate-in fade-in zoom-in-95 duration-200 my-auto"
          >
            {/* Modal Editorial Header */}
            <div className="bg-[#FAFBFB] p-6 sm:p-10 border-b border-[#E3E8E6] relative">
              <button
                id="btn-close-article-reader-top"
                onClick={closeArticle}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white border border-[#E3E8E6] hover:bg-[#243330] hover:text-white text-[#5C726E] flex items-center justify-center transition-colors cursor-pointer shadow-xs z-20"
                aria-label={t('closeArticle')}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm bg-[#EBF2F0] text-[#2D4D44] border border-[#D5E3DF]">
                    {selectedArticle.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A9E9A]">• {selectedArticle.readTime}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1E2B28] leading-tight">
                  {selectedArticle.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Key Takeaways Callout Box */}
              {selectedArticle.keyTakeaways && selectedArticle.keyTakeaways.length > 0 && (
                <div className="p-5 rounded-lg bg-[#F0F5F3] border border-[#D5E4DF] space-y-2.5">
                  <div className="flex items-center gap-2 text-[#243330]">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {t('articleHighlights')}
                    </span>
                  </div>
                  <ul className="text-xs sm:text-[13px] text-[#3B544E] space-y-1.5 pl-5 list-disc leading-relaxed">
                    {selectedArticle.keyTakeaways.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Content Paragraphs with Editorial Typography */}
              <div className="space-y-4 text-xs sm:text-sm text-[#2D3748] leading-relaxed font-sans">
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

              {/* Tags Cloud */}
              {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                <div className="pt-3 border-t border-[#E3E8E6] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#8A9E9A] uppercase tracking-wider">{t('relatedTopics')}</span>
                  {selectedArticle.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-3 py-1 rounded-sm bg-[#F6F8F7] text-[#5C726E] border border-[#E3E8E6]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              {/* Recommended Heviny Products */}
              {selectedArticle.recommendedProducts && selectedArticle.recommendedProducts.length > 0 && (
                <div className="p-5 sm:p-6 rounded-lg bg-[#F6F8F7] border border-[#E3E8E6] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#243330]">
                      {t('relatedProducts')}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C726E]">
                    {t('relatedProductsDescription')}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedArticle.recommendedProducts.map((prodName, idx) => (
                      <button
                        key={idx}
                        id={`btn-recommended-prod-${idx}`}
                        onClick={() => handleProductClick(prodName)}
                        className="px-4 py-2 rounded-md bg-white hover:bg-[#243330] text-[#243330] hover:text-white border border-[#E3E8E6] text-xs font-medium transition cursor-pointer shadow-2xs flex items-center gap-1.5"
                      >
                        <span>{prodName}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Close Button */}
              <div className="pt-4 border-t border-[#E3E8E6] flex items-center justify-between">
                <button
                  onClick={() => {
                    closeArticle();
                    onNavigate('products');
                  }}
                  className="text-xs font-semibold text-[#5C726E] hover:text-[#243330] flex items-center gap-1 cursor-pointer"
                >
                  <span>{t('seeAllProducts')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  id="btn-close-article-bottom"
                  onClick={closeArticle}
                  className="px-6 py-2.5 rounded-md bg-[#243330] text-white text-xs font-semibold hover:bg-[#1A2624] transition cursor-pointer"
                >
                  {t('closeArticle')}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

    </div>
  );
};
