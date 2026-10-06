import React, { memo } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Product } from '../types';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({
  product,
  onSelect,
  priority = false
}) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-white rounded-xl border border-[#E3E8E6] hover:border-[#5C726E] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full isolate transform-gpu"
    >
      {/* Top Section: Visual Container + Body info */}
      <div className="flex flex-col">
        
        {/* Visual Box */}
        <div className="relative w-full overflow-hidden bg-[#F6F8F7] rounded-t-xl [mask-image:radial-gradient(white,black)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
          <ProductImage
            src={product.image}
            alt={product.name}
            productName={product.name}
            category={product.category}
            aspectRatio="aspect-square"
            className="rounded-t-xl"
            priority={priority}
          />
        </div>

        {/* Card Body */}
        <div className="p-3.5 sm:p-6 space-y-2 sm:space-y-3.5 flex-1 flex flex-col justify-between">
          
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#8A9E9A] uppercase tracking-wider block font-sans line-clamp-1">
              {product.catalogCategory}
            </span>
            <h3 className="font-serif text-xs sm:text-lg font-medium text-[#243330] group-hover:text-[#5C726E] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </div>

          {/* Variants Sample (if any) */}
          {product.variantsList && product.variantsList.length > 0 && (
            <div className="pt-1.5 sm:pt-2 border-t border-[#F0F4F3] space-y-1">
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-[#5C726E] font-medium uppercase tracking-wider">
                <span>Varian:</span>
                <span className="text-[#8A9E9A]">
                  {product.variantsList.length} Pilihan
                </span>
              </div>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {product.variantsList.slice(0, 3).map((v, i) => (
                  <span
                    key={i}
                    className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md bg-[#F6F8F7] text-[#5C726E] border border-[#E3E8E6] font-sans truncate max-w-[130px]"
                  >
                    {v.name.split('(')[0].trim()}
                  </span>
                ))}
                {product.variantsList.length > 3 && (
                  <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md bg-[#F6F8F7] text-[#8A9E9A] border border-[#E3E8E6] font-sans">
                    +{product.variantsList.length - 3} lainnya
                  </span>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-2.5 sm:p-4 bg-[#FBFDFD] border-t border-[#EAEFEF]">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="w-full inline-flex items-center justify-center gap-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-md bg-[#243330] hover:bg-[#1B2624] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
        >
          <span>Detail</span>
          <ChevronRightIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

    </div>
  );
});

ProductCard.displayName = 'ProductCard';
