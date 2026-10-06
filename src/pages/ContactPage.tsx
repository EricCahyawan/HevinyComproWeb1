import React, { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { COMPANY_INFO, FAQS } from '../data/companyInfo';
import { ActivePage } from '../types';
import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb';
import { ShopeeIcon } from '../components/ShopeeIcon';

interface ContactPageProps {
  onNavigate?: (page: ActivePage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.message.trim()) return;

    const waText = `Halo Heviny Official,\n\n` +
      `Saya ingin bertanya / konsultasi melalui website:\n` +
      `• Nama / Usaha: ${formState.name}\n` +
      (formState.email ? `• Email: ${formState.email}\n` : '') +
      `• Pesan / Kebutuhan:\n${formState.message}\n\n` +
      `Mohon informasinya lebih lanjut. Terima kasih.`;

    setIsSubmitted(true);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(waText)}`, '_blank');
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Beranda', url: '/', onClick: () => onNavigate?.('home') },
    { name: 'Kontak Resmi', url: '/kontak', current: true }
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
                  PRODUSEN RESMI SEJAK 2006
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#243330] mt-1">
                  {COMPANY_INFO.legalEntity}
                </h2>
              </div>

              <div className="space-y-4 text-xs text-[#5C726E]">

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#243330] flex items-center justify-center shrink-0 border border-[#E3E8E6]">
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#243330] block">WhatsApp Resmi:</span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#243330] hover:underline font-medium"
                    >
                      {COMPANY_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#243330] flex items-center justify-center shrink-0 border border-[#E3E8E6]">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#243330] block">Telepon Kantor:</span>
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#243330] flex items-center justify-center shrink-0 border border-[#E3E8E6]">
                    <EnvelopeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#243330] block">Email Resmi:</span>
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
              Kirim Formulir Pesan
            </h2>
            <p className="text-xs text-[#5C726E] mb-6">
              Hubungi untuk bertanya lebih lanjut atau kerja sama.
            </p>

            {isSubmitted ? (
              <div className="bg-white border border-emerald-200 rounded-lg p-8 text-center space-y-3">
                <CheckCircleIcon className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-serif font-medium text-[#243330] text-lg">
                  Pesan Siap Terkirim ke WhatsApp Perusahaan
                </h3>
                <p className="text-xs text-[#5C726E] max-w-md mx-auto">
                  Jendela WhatsApp telah terbuka untuk melanjutkan percakapan dengan Customer Care Heviny.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-md bg-[#243330] text-white text-xs font-semibold"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Nama Lengkap / Nama Salon *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[#E3E8E6] text-xs text-[#243330] focus:border-[#5C726E] outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Alamat Email (Opsional)</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[#E3E8E6] text-xs text-[#243330] focus:border-[#5C726E] outline-hidden"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Catatan / Pesan *</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-[#E3E8E6] text-xs text-[#243330] focus:border-[#5C726E] outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-md bg-[#243330] hover:bg-[#1A2624] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
                >
                  <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  <span>Kirim Pesan ke WhatsApp Resmi Perusahaan</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-10 border-t border-[#E3E8E6] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C726E] font-semibold block">
              PERTANYAAN UMUM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#243330] font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-lg border border-[#E3E8E6] bg-[#F6F8F7] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base text-[#243330] hover:text-[#5C726E] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUpIcon className="w-4 h-4 text-[#5C726E] shrink-0" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 text-[#8A9E9A] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#5C726E] leading-relaxed border-t border-[#E3E8E6] pt-3 font-sans">
                      {faq.answer}
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
