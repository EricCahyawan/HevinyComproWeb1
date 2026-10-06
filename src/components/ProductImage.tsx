import React, { useState, useEffect, useRef, memo } from 'react';
import { ProductCategory } from '../types';

interface ProductImageProps {
  src?: string;
  alt: string;
  category?: ProductCategory | string;
  productName?: string;
  heroIngredient?: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = memo(({
  src,
  alt,
  category = 'hair',
  productName = '',
  heroIngredient = '',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  priority = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached in browser memory to avoid any loading flash
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden bg-[#F6F8F7] select-none rounded-[inherit] ${className}`}>
      
      {/* 1. Ultra-clean, subtle neutral skeleton shimmer (ONLY shown while genuinely loading, never dark or jarring) */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-[#F6F8F7] flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-[#F6F8F7] via-[#EAEFEF] to-[#F6F8F7] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#E0E7E5]/50 flex items-center justify-center">
              <span className="font-serif text-xs font-semibold text-[#8A9E9A]">H</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Real Product Image (with instant/smooth presentation) */}
      {src && !imageError && (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <img
            ref={imgRef}
            src={src}
            alt={alt || productName}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center rounded-[inherit] transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      )}

      {/* 3. High-grade Minimal Fallback (ONLY if image actually failed to load or missing) */}
      {(imageError || !src) && (
        <div className="absolute inset-0 bg-[#F8FAF9] flex flex-col items-center justify-center p-4 text-center rounded-[inherit] border border-[#E3E8E6]">
          <div className="w-10 h-10 rounded-full bg-[#EAEFEF] border border-[#D5DFDC] flex items-center justify-center font-serif font-bold text-[#5C726E] text-sm mb-2 shadow-xs">
            H
          </div>
          <span className="font-serif text-xs font-medium text-[#243330] line-clamp-1 max-w-[90%]">
            {productName || alt}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-[#8A9E9A] mt-1 font-sans">
            Heviny Botanical Care
          </span>
        </div>
      )}

    </div>
  );
});

ProductImage.displayName = 'ProductImage';
