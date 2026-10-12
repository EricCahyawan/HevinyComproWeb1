import React, { useState, useMemo, useEffect } from 'react';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowPathIcon,
  ArrowUpIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline';
import { Product, ProductCategory, ActivePage } from '../types';
import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';
import { 
  photoEntries, 
  isProductInCategory,
  getProductCategoryCount
} from '../data/photoProducts';
import { useLanguage } from '../LanguageContext';
import { useCart } from '../CartContext';

interface ProductsPageProps {
  onSelectProduct?: (product: Product) => void;
  onNavigate?: (page: ActivePage, category?: ProductCategory) => void;
  selectedCategory?: ProductCategory;
  onCategoryChange?: (category: ProductCategory) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onNavigate,
  selectedCategory = 'all',
  onCategoryChange 
}) => {
  const { language, t } = useLanguage();
  const { addItem, decreaseItem, getItemQuantity, totalCount, clearCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Synchronize when parent updates selectedCategory (e.g. from navbar dropdown click)
  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  const handleCategorySelect = (catId: ProductCategory) => {
    if (catId === activeCategory) return;
    setActiveCategory(catId);
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
  };

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: t('allProducts'), count: getProductCategoryCount('all') },
    { id: 'body', label: t('bodyCare'), count: getProductCategoryCount('body') },
    { id: 'hair', label: t('hairCare'), count: getProductCategoryCount('hair') },
    { id: 'face', label: t('faceCare'), count: getProductCategoryCount('face') },
    { id: 'nail', label: t('nailCare'), count: getProductCategoryCount('nail') },
  ];

  const filteredProducts = useMemo(() => {
    return photoEntries.filter(p => {
      const matchCategory = isProductInCategory(p, activeCategory);

      const q = searchQuery.toLowerCase().trim();
      const matchSearch = q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.size.toLowerCase().includes(q) ||
        p.file.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    handleCategorySelect('all');
  };

  const handleResetSelection = () => {
    if (window.confirm(t('resetSelectionConfirm'))) {
      clearCart();
    }
  };

  const hasActiveFilters = searchQuery !== '' || activeCategory !== 'all';

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: t('homeBreadcrumb'), url: '/', onClick: () => onNavigate?.('home') },
    {
      name: t('productList'),
      url: '/produk',
      onClick: () => {
        handleCategorySelect('all');
        setSearchQuery('');
      },
      current: activeCategory === 'all' && !searchQuery
    },
    ...(activeCategory !== 'all' ? [{
      name: categories.find(c => c.id === activeCategory)?.label || (language === 'id' ? 'Kategori' : 'Category'),
      current: !searchQuery
    }] : []),
    ...(searchQuery ? [{
      name: `${language === 'id' ? 'Cari' : 'Search'}: "${searchQuery}"`,
      current: true
    }] : [])
  ];

  return (
    <div className="pt-4 sm:pt-6 pb-28 bg-surface-soft min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-line shadow-xs space-y-4 mb-8 sm:mb-10">
          
          {/* Top Row: Search Box */}
          <div className="flex items-center gap-3">
            
            {/* Search Input Box */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="input-product-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchProducts')}
                className="w-full pl-11 pr-10 py-3 bg-surface border border-line rounded-lg text-xs sm:text-sm text-ink placeholder-ink-muted focus:border-brand-400 focus:bg-white outline-hidden transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="w-6 h-6 rounded-md bg-line text-ink-soft hover:text-ink absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-xs transition cursor-pointer"
                  title={t('clearSearch')}
                >
                  <XMarkIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                title={t('resetAllFilters')}
                className="p-3 rounded-lg bg-surface hover:bg-rose-50 text-ink-muted hover:text-rose-600 border border-line transition cursor-pointer shrink-0 flex items-center gap-1.5 text-xs font-medium"
              >
                <ArrowPathIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{t('reset')}</span>
              </button>
            )}

          </div>

          {/* Bottom Row: Category Navigation Pills */}
          <div className="pt-2 border-t border-line">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-brand-600 text-white shadow-xs'
                        : 'bg-surface text-ink-soft hover:bg-surface-alt border border-line'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between text-xs text-ink-soft mb-6 px-1">
          <span className="font-medium">
            {activeCategory === 'all' && !searchQuery
              ? t('productCollection')
              : (
                <>
                  {t('showingProducts')}
                  {activeCategory !== 'all' && ` ${language === 'id' ? 'kategori' : 'in'} ${categories.find(c => c.id === activeCategory)?.label}`}
                  {searchQuery && ` ${language === 'id' ? 'dengan kata kunci' : 'matching'} "${searchQuery}"`}
                </>
              )}
          </span>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-ink-soft hover:text-ink underline cursor-pointer"
            >
              {t('resetFilters')}
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 sm:p-16 text-center bg-white rounded-xl border border-line space-y-4 shadow-xs">
            <h3 className="font-serif text-xl text-ink">{t('noProducts')}</h3>
            <p className="text-xs sm:text-sm text-ink-soft max-w-md mx-auto leading-relaxed">
              {language === 'id' ? 'Tidak ada produk yang cocok dengan pencarian kata kunci' : 'No products match the search term'} <em>"{searchQuery}"</em>. {t('noProductsDescription')}
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-md bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-700 transition cursor-pointer"
              >
                {t('showAllProducts')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product, index) => {
              const currentQty = getItemQuantity(product.id, product.size);
              return (
                <article
                  key={product.id}
                  className={`group min-w-0 overflow-hidden rounded-xl border transition-all duration-200 bg-white flex flex-col justify-between ${
                    currentQty > 0
                      ? 'border-brand-500 shadow-md ring-1 ring-brand-500/20'
                      : 'border-line hover:border-brand-400 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="aspect-square w-full overflow-hidden bg-surface-soft relative">
                      <img
                        src={product.image}
                        alt={`${product.brand} ${product.name} ${product.size}`}
                        loading={index < 8 ? 'eager' : 'lazy'}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 sm:p-4 pb-2">
                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-ink-muted">
                        {product.brand} · {categories.find(category => category.id === product.category)?.label}
                      </p>
                      <h2 className="min-h-10 text-xs font-semibold leading-5 text-ink sm:text-sm line-clamp-2">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-[10px] text-ink-soft">
                        {t('packaging')} {product.size}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 pt-1">
                    {currentQty === 0 ? (
                      <button
                        type="button"
                        onClick={() =>
                          addItem({
                            productId: product.id,
                            name: product.name,
                            brand: product.brand,
                            size: product.size,
                            category: product.category,
                            image: product.image
                          })
                        }
                        className="w-full h-9 sm:h-10 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
                        title="Tambah ke keranjang"
                      >
                        <PlusIcon className="w-4 h-4 stroke-[2.5]" />
                        <span>Tambah</span>
                      </button>
                    ) : (
                      <div className="w-full h-9 sm:h-10 rounded-lg bg-surface-alt border border-line flex items-center justify-between px-2.5 py-1">
                        <button
                          type="button"
                          onClick={() => decreaseItem(product.id, product.size)}
                          className="w-7 h-7 flex items-center justify-center rounded-md text-ink hover:bg-black/5 transition cursor-pointer text-base font-bold active:scale-90"
                          aria-label="Kurangi jumlah"
                          title="Kurangi 1"
                        >
                          <MinusIcon className="w-4 h-4 stroke-[2.5]" />
                        </button>
                        <span className="text-xs sm:text-sm font-bold text-ink select-none text-center px-2">
                          {currentQty}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            addItem({
                              productId: product.id,
                              name: product.name,
                              brand: product.brand,
                              size: product.size,
                              category: product.category,
                              image: product.image
                            })
                          }
                          className="w-7 h-7 flex items-center justify-center rounded-md bg-brand-600 hover:bg-brand-700 text-white transition cursor-pointer text-sm font-bold active:scale-90 shadow-xs"
                          aria-label="Tambah jumlah"
                          title="Tambah 1"
                        >
                          <PlusIcon className="w-4 h-4 stroke-[2.5]" />
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Products Grid Ends */}

        {/* Floating reset-selection button, aligned with the WhatsApp button on the right */}
        {totalCount > 0 && (
          <button
            type="button"
            onClick={handleResetSelection}
            className="fixed bottom-7 left-4 sm:bottom-9 sm:left-8 z-30 h-12 px-5 rounded-full bg-white hover:bg-rose-50 text-ink-soft hover:text-rose-600 border border-line hover:border-rose-200 shadow-xl text-xs font-semibold flex items-center gap-2 transition cursor-pointer whitespace-nowrap"
          >
            <ArrowPathIcon className="w-4 h-4" />
            <span>{t('resetSelection')}</span>
          </button>
        )}

        {/* Back-to-top button, stacked above the WhatsApp button; appears after scrolling down */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t('backToTop')}
          title={t('backToTop')}
          className={`fixed bottom-24 right-7.5 sm:bottom-28 sm:right-9.5 z-30 w-11 h-11 rounded-full bg-white border border-line text-brand-700 hover:bg-brand-50 hover:border-brand-300 shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <ArrowUpIcon className="w-5 h-5 stroke-2" />
        </button>

      </div>
    </div>
  );
};
