import React, { useState } from 'react';
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO, FAQS } from '../data/companyInfo';
import { ActivePage } from '../types';
import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';
import { ShopeeIcon } from '../components/ShopeeIcon';
import { useLanguage } from '../LanguageContext';
import { ENGLISH_FAQS } from '../data/englishContent';

interface ContactPageProps {
  onNavigate?: (page: ActivePage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [formState, setFormState] = useState({
    name: '',
    buyerType: '',
    products: '',
    quantity: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.buyerType || !formState.products.trim() || !formState.quantity.trim()) return;

    const catalogUrl = window.location.origin + '/katalog-heviny.pdf';
    
    let text = `Halo! Terima kasih sudah menghubungi *Hana Cosmetic* 🌸\n\n`;
    text += `Kami akan segera informasikan harganya setelah mengetahui kebutuhan Kakak lebih lanjut.\n\n`;
    text += `Sambil menunggu, kami lampirkan *catalogue produk* kami — lengkap dengan pilihan produk dan varian yang tersedia. Kakak juga bisa melihat produk kami di website: ${catalogUrl}\n\n`;
    text += `*--- FORM ORDER ---* 📋\n`;
    text += `📝 Nama                          : ${formState.name}\n`;
    text += `🏷️ Jenis                            : ${formState.buyerType}\n`;
    text += `🛍️ Produk yang diminati : ${formState.products}\n`;
    text += `📦 Jumlah                        : ${formState.quantity}\n`;
    text += `*-----------------*\n\n`;
    text += `Setelah form terisi, kami segera proses dan informasikan harga untuk Kakak. Terima kasih! 🙏`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281334070067?text=${encodedText}`, '_blank');
    setIsSubmitted(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Beranda', url: '/', onClick: () => onNavigate?.('home') },
    { name: t('officialContact'), url: '/kontak', current: true }
  ];

  return (
    <div className="pt-4 sm:pt-6 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* SEO Breadcrumb Navigation */}
        <div>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Contact Info & Direct Inquiry Form Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F6F8F7] p-6 sm:p-8 rounded-xl border border-[#E3E8E6] space-y-6">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5C726E] block">
                  {t('officialSince')}
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#243330] mt-1">
                  {COMPANY_INFO.legalEntity}
                </h2>
              </div>

              <div className="space-y-4 text-xs text-[#5C726E]">

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#243330] flex items-center justify-center shrink-0 border border-[#E3E8E6]">
                    <EnvelopeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#243330] block">{t('officialEmail')}</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#243330] hover:underline font-medium"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Marketplace Link - Pure Shopee Logo */}
                <div className="pt-3 border-t border-[#E3E8E6] flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.shopeeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Shopee Heviny"
                    className="transition-transform duration-200 hover:scale-110 cursor-pointer inline-flex items-center justify-center p-1 hover:opacity-85"
                    aria-label="Shopee Heviny"
                  >
                    <ShopeeIcon className="w-7 h-7" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F6F8F7] p-6 sm:p-8 rounded-xl border border-[#E3E8E6]">
            <h2 className="font-serif text-2xl font-light text-[#243330] mb-1">
              Formulir Pesanan (WhatsApp)
            </h2>
            <p className="text-xs text-[#5C726E] mb-6">
              Isi form di bawah ini untuk memesan atau bertanya langsung melalui WhatsApp kami.
            </p>

            {isSubmitted ? (
              <div className="bg-white border border-emerald-200 rounded-lg p-8 text-center space-y-3">
                <CheckCircleIcon className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-serif font-medium text-[#243330] text-lg">
                  Membuka WhatsApp...
                </h3>
                <p className="text-xs text-[#5C726E] max-w-md mx-auto">
                  Anda akan segera dialihkan ke WhatsApp dengan pesan yang sudah terisi.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-md bg-[#243330] text-white text-xs font-semibold cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-[#E3E8E6] text-xs text-[#243330] focus:border-[#5C726E] outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Jenis Pelanggan *</label>
                  <select
                    required
                    value={formState.buyerType}
                    onChange={(e) => setFormState({ ...formState, buyerType: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-[#E3E8E6] text-xs text-[#243330] focus:border-[#5C726E] outline-hidden"
                  >
                    <option value="" disabled>Pilih Jenis</option>
                    <option value="Toko">Toko</option>
                    <option value="Reseller">Reseller</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Spa">Spa</option>
                    <option value="Salon">Salon</option>
                    <option value="Pribadi">Pribadi</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Produk yang diminati *</label>
                  <textarea
                    rows={2}
                    required
                    value={formState.products}
                    onChange={(e) => setFormState({ ...formState, products: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-[#E3E8E6] text-xs text-[#243330] focus:border-[#5C726E] outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Jumlah *</label>
                  <input
                    type="text"
                    required
                    value={formState.quantity}
                    onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-[#E3E8E6] text-xs text-[#243330] focus:border-[#5C726E] outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-md bg-[#243330] hover:bg-[#1A2624] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
                >
                  <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-10 border-t border-[#E3E8E6] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
              {t('faq')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#243330] font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const localizedFaq = language === 'en' ? ENGLISH_FAQS[faq.id] : faq;
              return (
                <div
                  key={faq.id}
                  className="rounded-lg border border-[#E3E8E6] bg-[#F6F8F7] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base text-[#243330] hover:text-[#5C726E] cursor-pointer"
                  >
                    <span>{localizedFaq.question}</span>
                    {isOpen ? (
                      <ChevronUpIcon className="w-4 h-4 text-[#5C726E] shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 text-[#8A9E9A] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#5C726E] leading-relaxed border-t border-[#E3E8E6] pt-3 font-sans">
                      {localizedFaq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

