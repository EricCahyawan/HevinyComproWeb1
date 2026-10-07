import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO } from '../data/companyInfo';
import { ActivePage } from '../types';
import { HevinyLogo } from './HevinyLogo';
import { ShopeeIcon } from './ShopeeIcon';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
  onNavigate?: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: ActivePage) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A2624] text-white/80 pt-20 pb-12 border-t border-[#2D3E3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 text-xs sm:text-sm items-start">
          
          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="h-8 flex items-center cursor-pointer" onClick={() => handleNav('home')}>
              <HevinyLogo variant="white" size="xs" showTagline={true} />
            </div>

            <p className="text-white/60 leading-relaxed text-xs max-w-sm font-sans">
              {language === 'en' ? (
                <><strong className="text-white/80 font-medium">Hana Cosmetics</strong> is the manufacturer and owner of the <strong className="text-white/80 font-medium">Heviny</strong> brand in Surabaya, Indonesia, since 2006. We produce botanical formulas to CPKB, BPOM RI, and Halal standards for salons and everyday care.</>
              ) : (
                <><strong className="text-white/80 font-medium">Hana Cosmetics (Hana Cosmetic)</strong> adalah pabrik produsen kosmetik dan pemilik resmi merek <strong className="text-white/80 font-medium">Heviny</strong> di Surabaya sejak 2006. Memproduksi formulasi botani berstandar resmi CPKB BPOM RI dan sertifikasi Halal untuk suplai salon dan perawatan harian.</>
              )}
            </p>

            {/* Marketplace Link - Pure Shopee Logo */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href={COMPANY_INFO.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Shopee Heviny"
                className="transition-transform duration-200 hover:scale-110 cursor-pointer inline-flex items-center justify-center p-1 hover:opacity-85"
                aria-label="Shopee Heviny"
              >
                <ShopeeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="h-8 flex items-center">
              <h4 className="font-serif text-sm tracking-widest uppercase text-white/90">
                {t('pagesNavigation')}
              </h4>
            </div>
            <ul className="space-y-2 text-white/60 text-xs font-sans">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                  }}
                  className="hover:text-white transition cursor-pointer text-left block"
                >
                  {t('mainHome')}
                </a>
              </li>
              <li>
                <a
                  href="/produk"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('products');
                  }}
                  className="hover:text-white transition cursor-pointer text-left block"
                >
                  {t('productList')}
                </a>
              </li>
              <li>
                <a
                  href="/tentang-kami"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('about');
                  }}
                  className="hover:text-white transition cursor-pointer text-left block"
                >
                  {t('aboutFactory')}
                </a>
              </li>
              <li>
                <a
                  href="/artikel"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('journal');
                  }}
                  className="hover:text-white transition cursor-pointer text-left block"
                >
                  {t('careArticles')}
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-white transition cursor-pointer text-left block"
                >
                  {t('contactCompany')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4 text-xs font-sans">
            <div className="h-8 flex items-center">
              <h4 className="font-serif text-sm tracking-widest uppercase text-white/90">
                {t('officeCompany')}
              </h4>
            </div>
            <p className="text-white/60 leading-relaxed">
              {COMPANY_INFO.address}
            </p>
            <div className="space-y-1.5 text-white/60 pt-1">
              <div>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline">{COMPANY_INFO.email}</a></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Heviny. {t('allRights')}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition cursor-pointer"
          >
            <span>{t('backToTop')}</span>
            <ArrowUpIcon className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
