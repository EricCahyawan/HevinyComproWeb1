import React, { memo } from 'react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useCart } from '../CartContext';

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
  const { addItem, decreaseItem, getItemQuantity } = useCart();
  const defaultSize = product.availableSizes && product.availableSizes.length > 0 
    ? product.availableSizes[0] 
    : '';
  const currentQty = getItemQuantity(product.id, defaultSize);

  return (
    <div
      className={`group bg-white rounded-xl border transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden shadow-xs h-full isolate transform-gpu ${
        currentQty > 0
          ? 'border-[#243330] ring-1 ring-[#243330]/20 shadow-md'
          : 'border-[#E3E8E6] hover:border-[#5C726E] hover:shadow-xl hover:-translate-y-1'
      } ${className}`}
    >
      <div
        onClick={onSelect ? () => onSelect(product) : undefined}
        className={onSelect ? 'cursor-pointer' : 'cursor-default'}
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
        <div className="p-3.5 sm:p-5 pb-2 flex-1 flex flex-col justify-start">
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#8A9E9A] uppercase tracking-wider block font-sans line-clamp-1">
              {product.catalogCategory}
            </span>
            <h3 className="font-serif text-xs sm:text-base font-medium text-[#243330] group-hover:text-[#5C726E] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
            {defaultSize && (
              <p className="text-[10px] text-[#5C726E]">
                Kemasan: {defaultSize}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Cart Action */}
      <div className="p-3.5 sm:p-5 pt-1">
        {currentQty === 0 ? (
          <button
            type="button"
            onClick={() =>
              addItem({
                productId: product.id,
                name: product.name,
                brand: 'Heviny',
                size: defaultSize,
                category: product.category,
                image: product.image
              })
            }
            className="w-full h-9 sm:h-10 rounded-lg bg-[#243330] hover:bg-[#1B2624] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
            title="Tambah ke keranjang"
          >
            <PlusIcon className="w-4 h-4 stroke-[2.5]" />
            <span>Tambah</span>
          </button>
        ) : (
          <div className="w-full h-9 sm:h-10 rounded-lg bg-[#F1F5F8] border border-[#E2E8F0] flex items-center justify-between px-2.5 py-1">
            <button
              type="button"
              onClick={() => decreaseItem(product.id, defaultSize)}
              className="w-7 h-7 flex items-center justify-center rounded-md text-[#243330] hover:bg-black/5 transition cursor-pointer text-base font-bold active:scale-90"
              aria-label="Kurangi jumlah"
              title="Kurangi 1"
            >
              <MinusIcon className="w-4 h-4 stroke-[2.5]" />
            </button>
            <span className="text-xs sm:text-sm font-bold text-[#243330] select-none text-center px-2">
              {currentQty}
            </span>
            <button
              type="button"
              onClick={() =>
                addItem({
                  productId: product.id,
                  name: product.name,
                  brand: 'Heviny',
                  size: defaultSize,
                  category: product.category,
                  image: product.image
                })
              }
              className="w-7 h-7 flex items-center justify-center rounded-md bg-[#243330] hover:bg-[#1B2624] text-white transition cursor-pointer text-sm font-bold active:scale-90 shadow-xs"
              aria-label="Tambah jumlah"
              title="Tambah 1"
            >
              <PlusIcon className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
