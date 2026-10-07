import React, { useEffect } from 'react';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { ShopeeIcon } from './ShopeeIcon';
import { COMPANY_INFO } from '../data/companyInfo';
import { useLanguage } from '../LanguageContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { t } = useLanguage();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: t('homeBreadcrumb'), url: '/' },
    { name: t('products'), url: '/produk', onClick: onClose },
    { name: product.catalogCategory, url: '/produk', onClick: onClose },
    { name: product.name, current: true }
  ];

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl rounded-xl shadow-2xl border border-[#E3E8E6] max-h-[92vh] flex flex-col overflow-hidden"
      >
        
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 border-b border-[#E3E8E6] flex items-center justify-between bg-[#F6F8F7] gap-3">
          <div className="min-w-0 flex-1">
            <Breadcrumb items={breadcrumbItems} showHomeIcon={false} className="py-0" />
          </div>
          <button
            id="btn-close-product-modal"
            onClick={onClose}
            className="w-8 h-8 rounded-md bg-white text-[#5C726E] hover:text-[#243330] hover:bg-[#E8ECEB] flex items-center justify-center transition cursor-pointer border border-[#E3E8E6] shrink-0"
            aria-label={t('close')}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-6 text-[#5C726E]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Visual Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="rounded-xl overflow-hidden bg-white border border-[#E3E8E6] shadow-xs relative [mask-image:radial-gradient(white,black)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  productName={product.name}
                  category={product.category}
                  heroIngredient=""
                  aspectRatio="aspect-square"
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Product Details Column */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#243330] leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A9E9A] mt-1 font-sans">
                  {product.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C726E] leading-relaxed">
                {product.description}
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#243330]">
                  {t('detailsTitle')}
                </h4>
                <ul className="grid gap-1.5 text-xs text-[#5C726E]">
                  {product.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Variants Aroma List */}
              {product.variantsList && product.variantsList.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-[#E3E8E6]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#243330] flex items-center justify-between">
                    <span>{t('aromaVariants')} ({product.variantsList.length}):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                    {product.variantsList.map((v, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-md border border-[#E3E8E6] bg-[#F6F8F7] text-left text-xs flex flex-col justify-between"
                      >
                        <span className="font-medium text-[#243330] leading-snug">{v.name}</span>
                        {v.notes && (
                          <span className="text-[10px] mt-0.5 text-[#8A9E9A]">
                            {v.notes}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#F6F8F7] border-t border-[#E3E8E6] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-[#5C726E]">
            <span className="text-xs sm:text-[13px] text-[#5C726E] font-medium block">
              {t('producedBy')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Toko Shopee Heviny"
              className="p-1 flex items-center justify-center transition hover:scale-110 cursor-pointer hover:opacity-85"
              aria-label="Toko Shopee Heviny"
            >
              <ShopeeIcon className="w-7 h-7" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-md bg-white hover:bg-[#EAEFEF] text-[#5C726E] hover:text-[#243330] border border-[#E3E8E6] text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
            >
              {t('close')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
