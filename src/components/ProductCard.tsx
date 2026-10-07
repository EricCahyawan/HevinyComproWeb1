import React, { memo } from 'react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
  priority?: boolean;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({
  product,
  onSelect,
  priority = false,
  className = ''
}) => {
  return (
    <div
      onClick={onSelect ? () => onSelect(product) : undefined}
      className={`group bg-white rounded-xl border border-[#E3E8E6] transition-all duration-300 ease-out flex flex-col overflow-hidden shadow-xs h-full isolate transform-gpu ${
        onSelect
          ? 'hover:border-[#5C726E] hover:shadow-xl hover:-translate-y-1 cursor-pointer'
          : 'cursor-default'
      } ${className}`}
    >
      {/* Visual Box */}
      <div className="relative w-full overflow-hidden bg-white rounded-t-xl">
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
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-start">
        <div className="space-y-0.5 sm:space-y-1">
          <span className="text-[9px] sm:text-[10px] font-semibold text-[#8A9E9A] uppercase tracking-wider block font-sans line-clamp-1">
            {product.catalogCategory}
          </span>
          <h3 className="font-serif text-xs sm:text-base font-medium text-[#243330] group-hover:text-[#5C726E] transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
