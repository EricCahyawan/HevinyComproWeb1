import React, { useState, useMemo, useEffect } from 'react';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { Product, ProductCategory, ActivePage } from '../types';
import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';
import { 
  photoEntries, 
  isProductInCategory,
  getProductCategoryCount
} from '../data/photoProducts';
import { useLanguage } from '../LanguageContext';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onNavigate?: (page: ActivePage, category?: ProductCategory) => void;
  selectedCategory?: ProductCategory;
  onCategoryChange?: (category: ProductCategory) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onSelectProduct, 
  onNavigate,
  selectedCategory = 'all',
  onCategoryChange 
}) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize when parent updates selectedCategory (e.g. from navbar dropdown click)
  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  const handleCategorySelect = (catId: ProductCategory) => {
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
    <div className="pt-4 sm:pt-6 pb-24 bg-[#FAFCFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#E3E8E6] shadow-xs space-y-4 mb-8 sm:mb-10">
          
          {/* Top Row: Search Box */}
          <div className="flex items-center gap-3">
            
            {/* Search Input Box */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="w-4 h-4 text-[#8A9E9A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="input-product-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchProducts')}
                className="w-full pl-11 pr-10 py-3 bg-[#F6F8F7] border border-[#E3E8E6] rounded-lg text-xs sm:text-sm text-[#243330] placeholder-[#8A9E9A] focus:border-[#5C726E] focus:bg-white outline-hidden transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="w-6 h-6 rounded-md bg-[#E3E8E6] text-[#5C726E] hover:text-[#243330] absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-xs transition cursor-pointer"
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
                className="p-3 rounded-lg bg-[#F6F8F7] hover:bg-rose-50 text-[#8A9E9A] hover:text-rose-600 border border-[#E3E8E6] transition cursor-pointer shrink-0 flex items-center gap-1.5 text-xs font-medium"
              >
                <ArrowPathIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{t('reset')}</span>
              </button>
            )}

          </div>

          {/* Bottom Row: Category Navigation Pills */}
          <div className="pt-2 border-t border-[#F0F4F3]">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#243330] text-white shadow-xs'
                        : 'bg-[#F6F8F7] text-[#5C726E] hover:bg-[#EAEFEF] border border-[#E3E8E6]'
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
        <div className="flex items-center justify-between text-xs text-[#5C726E] mb-6 px-1">
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
              className="text-xs text-[#5C726E] hover:text-[#243330] underline cursor-pointer"
            >
              {t('resetFilters')}
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 sm:p-16 text-center bg-white rounded-xl border border-[#E3E8E6] space-y-4 shadow-xs">
            <h3 className="font-serif text-xl text-[#243330]">{t('noProducts')}</h3>
            <p className="text-xs sm:text-sm text-[#5C726E] max-w-md mx-auto leading-relaxed">
              {language === 'id' ? 'Tidak ada produk yang cocok dengan pencarian kata kunci' : 'No products match the search term'} <em>"{searchQuery}"</em>. {t('noProductsDescription')}
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-md bg-[#243330] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1B2624] transition cursor-pointer"
              >
                {t('showAllProducts')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product, index) => (
              <article key={product.id} className="group min-w-0 overflow-hidden rounded-lg border border-[#E3E8E6] bg-white transition-shadow hover:shadow-lg">
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name} ${product.size}`}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-[#8A9E9A]">{product.brand} · {categories.find(category => category.id === product.category)?.label}</p>
                  <h2 className="min-h-10 text-xs font-semibold leading-5 text-[#243330] sm:text-sm">{product.name}</h2>
                  <p className="mt-2 text-[10px] text-[#5C726E]">{t('packaging')} {product.size}</p>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
