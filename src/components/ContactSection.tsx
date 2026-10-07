import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, PaperAirplaneIcon, ChevronDownIcon, ChevronUpIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { COMPANY_INFO, FAQS } from '../data/companyInfo';

export const ContactSection: React.FC = () => {
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

    const waText = `Halo Hana Cosmetics (Heviny),\n\n` +
      `Saya menghubungi dari website:\n` +
      `• Nama / Usaha: ${formState.name}\n` +
      (formState.email ? `• Email: ${formState.email}\n` : '') +
      `• Pesan / Kebutuhan:\n${formState.message}\n\n` +
      `Mohon informasinya lebih lanjut. Terima kasih.`;

    setIsSubmitted(true);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-b border-[#E3E8E6] relative">
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
                  PRODUSEN RESMI SEJAK 2006
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#243330] mt-1">
                  {COMPANY_INFO.legalEntity}
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#5C726E]">

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-[#243330] flex items-center justify-center shrink-0 border border-[#E3E8E6]">
                    <PhoneIcon className="w-4 h-4" />
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

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-[#243330] flex items-center justify-center shrink-0 border border-[#E3E8E6]">
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

              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F6F8F7] p-6 sm:p-8 rounded-3xl border border-[#E3E8E6]">
            <h3 className="font-serif text-2xl font-light text-[#243330] mb-1">
              Kirim Formulir Pesan
            </h3>
            <p className="text-xs text-[#5C726E] mb-6">
              Hubungi untuk bertanya lebih lanjut atau kerja sama.
            </p>

            {isSubmitted ? (
              <div className="bg-white border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <CheckCircleIcon className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-medium text-[#243330] text-base">
                  Pesan Terhubung ke WhatsApp Resmi
                </h4>
                <p className="text-xs text-[#5C726E]">
                  Tim kami siap merespons kebutuhan Anda segera.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Nama Lengkap / Salon *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#4fe843]/30 focus:border-[#4fe843]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">Alamat Email (Opsional)</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#4fe843]/30 focus:border-[#4fe843]"
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
                    className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#4fe843]/30 focus:border-[#4fe843]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#4fe843] hover:bg-[#43d438] text-[#0F2415] font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  <span>Kirim via WhatsApp Resmi</span>
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
              Pertanyaan yang Sering Diajukan
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
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
                        {faq.category}
                      </span>
                      <span className="font-serif text-sm sm:text-base text-[#243330]">
                        {faq.question}
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
                      {faq.answer}
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
