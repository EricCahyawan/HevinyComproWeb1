import React, { useState } from 'react';
import { EnvelopeIcon, PaperAirplaneIcon, ChevronDownIcon, ChevronUpIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO, FAQS } from '../data/companyInfo';
import { ENGLISH_FAQS } from '../data/englishContent';
import { useLanguage } from '../LanguageContext';
import { ShopeeIcon } from './ShopeeIcon';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [formState, setFormState] = useState({
    name: '',
    type: 'Pribadi',
    product: '',
    quantity: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.product.trim()) return;

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://hevinycosmetics.com';
    const pdfUrl = `${origin}/katalog-heviny.pdf`;

    const message = `Halo! Terima kasih sudah menghubungi *Hana Cosmetic* 🌸

Kami akan segera informasikan harganya setelah mengetahui kebutuhan Kakak lebih lanjut.

Sambil menunggu, kami lampirkan *catalogue produk* kami pada tautan berikut:
🔗 ${pdfUrl}
(lengkap dengan pilihan produk dan varian yang tersedia)

Mohon bantu isi form berikut ya kak:

*--- FORM ORDER ---* 📋
📝 Nama                          : ${formState.name}
🏷️ Jenis                            : ${formState.type}
🛍️ Produk yang diminati : ${formState.product}
📦 Jumlah                        : ${formState.quantity}
*-----------------*

Setelah form terisi, kami segera proses dan informasikan harga untuk Kakak. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281334070067?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="kontak" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5C726E] font-semibold block mb-2">
            KANTOR PUSAT & PERUSAHAAN SURABAYA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#243330]">
            Hubungi Kami & <span className="italic font-normal">Kemitraan</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5C726E] mt-3 leading-relaxed font-sans">
            Hubungi kami untuk informasi seputar produk perawatan kecantikan alami Heviny, konsultasi varian, dan kerja sama.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Official Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F6F8F7] p-6 sm:p-8 rounded-3xl border border-[#E3E8E6] space-y-6">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5C726E] block">
                  {t('officialSince')}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#243330] mt-1">
                  {COMPANY_INFO.legalEntity}
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#5C726E]">

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-[#243330] flex items-center justify-center shrink-0 border border-[#E3E8E6]">
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

              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F6F8F7] p-6 sm:p-8 rounded-3xl border border-[#E3E8E6]">
            <h3 className="font-serif text-2xl font-light text-[#243330] mb-1">
              Formulir Pesanan (WhatsApp)
            </h3>
            <p className="text-xs text-[#5C726E] mb-6">
              Isi form berikut dan pesan Anda akan dikirim langsung ke WhatsApp resmi kami.
            </p>

            {isSubmitted ? (
              <div className="bg-white border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <CheckCircleIcon className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-medium text-[#243330] text-base">
                  {language === 'en' ? 'WhatsApp Opened' : 'WhatsApp Telah Dibuka'}
                </h4>
                <p className="text-xs text-[#5C726E]">
                  {language === 'en' ? 'Silakan lanjutkan percakapan di aplikasi WhatsApp Anda.' : 'Silakan lanjutkan percakapan pesanan di aplikasi WhatsApp Anda.'}
                </p>
                <button
                  onClick={() => {
                    setFormState({ name: '', type: 'Pribadi', product: '', quantity: '' });
                    setIsSubmitted(false);
                  }}
                  className="mt-4 px-4 py-2 rounded-lg border border-[#E3E8E6] text-xs font-semibold text-[#5C726E] hover:bg-[#FAFBFB] transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Send Another Message' : 'Kirim Pesan Lagi'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">
                      {language === 'en' ? 'Name *' : 'Nama Lengkap / Nama Salon *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#5C726E]/20 focus:border-[#5C726E]"
                      placeholder={language === 'en' ? 'Enter your name' : 'Masukkan nama Anda'}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">
                      {language === 'en' ? 'Buyer Type' : 'Jenis Pembeli'}
                    </label>
                    <select
                      value={formState.type}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#5C726E]/20 focus:border-[#5C726E]"
                    >
                      <option value="Toko">Toko</option>
                      <option value="Reseller">Reseller</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Spa">Spa</option>
                      <option value="Salon">Salon</option>
                      <option value="Pribadi">Pribadi</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">
                    {language === 'en' ? 'Interested Products *' : 'Produk yang diminati *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.product}
                    onChange={(e) => setFormState({ ...formState, product: e.target.value })}
                    className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#5C726E]/20 focus:border-[#5C726E]"
                    placeholder={language === 'en' ? 'Example: Shower Gel, Hair Tonic' : 'Contoh: Shower Gel, Hair Tonic'}
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">
                    {language === 'en' ? 'Quantity *' : 'Jumlah Produk *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.quantity}
                    onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                    className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#5C726E]/20 focus:border-[#5C726E]"
                    placeholder={language === 'en' ? 'Example: 10 bottles, 2 jerrycans 5L' : 'Contoh: 10 botol, 2 jerigen 5L'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#243330] hover:bg-[#1A2624] text-white font-semibold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Send via WhatsApp' : 'Kirim Pesan via WhatsApp'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C726E] font-semibold block mb-1">
              FAQ
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#243330]">
              {language === 'id' ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const localizedFaq = language === 'en' ? ENGLISH_FAQS[faq.id] : faq;
              return (
                <div
                  key={faq.id}
                  className="border border-[#E3E8E6] rounded-2xl overflow-hidden bg-[#F6F8F7]"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#ECEFEF] transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#243330] border border-[#E3E8E6] shrink-0">
                        {localizedFaq.category}
                      </span>
                      <span className="font-serif text-sm sm:text-base text-[#243330]">
                        {localizedFaq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUpIcon className="w-4 h-4 text-[#5C726E] shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 text-[#8A9E9A] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-[#5C726E] leading-relaxed border-t border-[#E3E8E6] bg-white">
                      {localizedFaq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
