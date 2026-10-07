import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MagnifyingGlassIcon, ArrowTopRightOnSquareIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { HEVINY_PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySalonFavorites, setOnlySalonFavorites] = useState(false);

  const isProductInCategory = (p: typeof HEVINY_PRODUCTS[0], catId: ProductCategory) => {
    if (catId === 'all') return true;
    return p.category === catId || (p.categories && p.categories.includes(catId));
  };

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'Semua Produk', count: HEVINY_PRODUCTS.length },
    { id: 'body', label: 'Perawatan Tubuh', count: HEVINY_PRODUCTS.filter(p => isProductInCategory(p, 'body')).length },
    { id: 'hair', label: 'Perawatan Rambut', count: HEVINY_PRODUCTS.filter(p => isProductInCategory(p, 'hair')).length },
    { id: 'face', label: 'Perawatan Wajah', count: HEVINY_PRODUCTS.filter(p => isProductInCategory(p, 'face')).length },
  ];

  const filteredProducts = useMemo(() => {
    return HEVINY_PRODUCTS.filter(p => {
      const matchCategory = isProductInCategory(p, activeCategory);

      const matchSearch = searchQuery === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.heroIngredient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.variantsList && p.variantsList.some(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        p.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchSalon = !onlySalonFavorites || p.isSalonFavorite;
      return matchCategory && matchSearch && matchSalon;
    });
  }, [activeCategory, searchQuery, onlySalonFavorites]);

  return (
    <section id="catalog" className="py-24 sm:py-32 bg-white border-b border-[#E3E8E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
              KATALOG KOLEKSI LENGKAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#243330]">
              Perawatan Alami, <span className="italic font-normal">Kualitas Teruji</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed">
              Tersedia dalam varian kemasan retail untuk konsumen serta kemasan jerigen 1L hingga 5L untuk salon, spa & distributor.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#F6F8F7] p-4 sm:p-5 rounded-xl border border-[#E3E8E6] space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="w-4 h-4 text-[#8A9E9A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="input-product-search"
                type="text"
                placeholder="Cari produk (contoh: rose water, kemiri, creambath, bengkuang, 5L)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-14 py-3 rounded-md bg-white border border-[#E3E8E6] text-xs sm:text-sm text-[#243330] placeholder-[#8A9E9A] focus:outline-none focus:ring-1 focus:ring-[#4fe843] focus:border-[#4fe843] transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-[#5C726E] hover:text-[#243330] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Salon Filter Pill */}
            <label className="inline-flex items-center gap-2 text-xs font-medium text-[#243330] bg-white px-4 py-3 rounded-md border border-[#E3E8E6] cursor-pointer hover:bg-[#ECEFEF] transition self-start sm:self-auto shrink-0 select-none">
              <input
                type="checkbox"
                checked={onlySalonFavorites}
                onChange={(e) => setOnlySalonFavorites(e.target.checked)}
                className="rounded text-[#4fe843] focus:ring-[#4fe843] border-[#CAD3D1]"
              />
              <span>Favorit Salon</span>
            </label>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`btn-category-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#243330] text-white shadow-xs border border-[#4fe843]/60'
                    : 'bg-white text-[#5C726E] hover:bg-[#EAEFEF] border border-[#E3E8E6]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-sm font-mono font-bold ${
                    activeCategory === cat.id ? 'bg-[#4fe843] text-[#0F2415]' : 'bg-[#F6F8F7] text-[#5C726E]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#F6F8F7] rounded-xl border border-[#E3E8E6] p-8 space-y-3">
              <ArchiveBoxIcon className="w-10 h-10 text-[#8A9E9A] mx-auto" />
              <h3 className="font-serif text-lg text-[#243330]">
                Produk Tidak Ditemukan
              </h3>
              <p className="text-xs text-[#5C726E] max-w-sm mx-auto">
                Tidak ada produk dengan kata kunci "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setOnlySalonFavorites(false);
                }}
                className="mt-2 px-5 py-2.5 rounded-md bg-[#243330] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Tampilkan Semua
              </button>
            </div>
          ) : (
            <motion.div
              key={activeCategory + searchQuery + String(onlySalonFavorites)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-xl border border-[#E3E8E6] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#5C726E]/50 transition-all duration-400 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Visual */}
                    <div className="relative aspect-square bg-white overflow-hidden rounded-t-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain object-center"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {product.popular && (
                        <span className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-sm bg-[#5C726E] text-white tracking-wider uppercase">
                          Best Seller
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-[#5C726E] font-mono">
                        <span>{product.bpomNumber}</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-sans text-[10px]">
                          Halal
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-medium text-[#243330] group-hover:text-[#5C726E] transition line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#5C726E] line-clamp-2 leading-relaxed font-sans">
                        {product.subtitle}
                      </p>

                      {product.variantsList && (
                        <p className="text-[11px] text-[#5C726E]/80 bg-[#F6F8F7] px-2.5 py-1.5 rounded-md line-clamp-1 border border-[#E3E8E6]">
                          <strong className="text-[#243330]">{product.variantsList.length} Varian:</strong>{' '}
                          {product.variantsList.slice(0, 3).map(v => v.name).join(', ')}
                          {product.variantsList.length > 3 && '...'}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="p-5 pt-0 mt-auto">
                    <div className="bg-[#F6F8F7] p-3 rounded-md flex items-center justify-between text-xs border border-[#E3E8E6] group-hover:border-[#5C726E]/30 transition-colors">
                      <div>
                        <span className="text-[10px] text-[#8A9E9A] uppercase tracking-wider block">Standar Mutu</span>
                        <span className="font-medium text-[#243330] text-[11px] line-clamp-1">
                          BPOM RI & Sertifikasi Halal
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#243330] group-hover:text-emerald-700 transition">
                        <span>Detail</span>
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
