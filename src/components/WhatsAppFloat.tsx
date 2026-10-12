import React, { useState, useEffect } from 'react';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'motion/react';
import { useCart, EMPTY_CART_PRODUCTS_TEXT } from '../CartContext';

export const WhatsAppFloat: React.FC = () => {
  const { items, totalCount, formattedProductsText, formattedQuantityText } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    type: 'Pribadi',
    institutionName: '',
    product: EMPTY_CART_PRODUCTS_TEXT,
    quantity: ''
  });

  // Keep product and quantity synced with cart selection
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      product: formattedProductsText,
      quantity: formattedQuantityText || (items.length === 0 ? '' : prev.quantity)
    }));
  }, [formattedProductsText, formattedQuantityText, items.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://hevinycosmetics.com';
    const pdfUrl = `${origin}/?download_catalog=true`;

    const productFormatted = form.product.includes('\n')
      ? `\n${form.product}`
      : ` ${form.product}`;

    const quantityFormatted = form.quantity || (totalCount > 0 ? `${totalCount} pcs` : '-');

    const message = `Halo! Terima kasih sudah menghubungi *Hana Cosmetic* 🌸

Kami akan segera informasikan harganya setelah mengetahui kebutuhan Kakak lebih lanjut.

Sambil menunggu, kami lampirkan *catalogue produk* kami pada tautan berikut:
🔗 ${pdfUrl}
(lengkap dengan pilihan produk dan varian yang tersedia)

Mohon bantu isi form berikut ya kak:

*--- FORM ORDER ---* 📋
📝 Nama                          : ${form.name}
🏷️ Jenis                            : ${form.type}${form.type !== 'Pribadi' && form.institutionName ? `\n🏢 Nama Usaha               : ${form.institutionName}` : ''}
🛍️ Produk yang diminati :${productFormatted}
📦 Jumlah                        : ${quantityFormatted}
*-----------------*

Setelah form terisi, kami segera proses dan informasikan harga untuk Kakak. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281334070067?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* The Floating Button */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Hubungi WhatsApp Kami"
          title="Chat dengan CS Heviny"
        >
          {totalCount > 0 && (
            <span
              className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 bg-amber-400 text-[#1B2624] font-black text-xs rounded-full flex items-center justify-center shadow-lg border-2 border-white pointer-events-none transform translate-x-0.5 -translate-y-0.5"
              title={`${totalCount} produk di keranjang`}
            >
              {totalCount}
            </span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>

      {/* The Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl border border-stone-200"
            >
              {/* Header */}
              <div className="bg-[#25D366] p-4 flex items-center justify-between text-white">
                <div>
                  <h3 className="font-bold text-sm">Pesan via WhatsApp</h3>
                  <p className="text-[10px] text-white/90">Isi detail pesanan Anda</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-5">
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="space-y-1.5">
                    <label className="font-semibold text-stone-700">Nama <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366]"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-stone-700">Jenis Pembeli</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366]"
                    >
                      <option value="Toko">Toko</option>
                      <option value="Reseller">Reseller</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Spa">Spa</option>
                      <option value="Salon">Salon</option>
                      <option value="Pribadi">Pribadi</option>
                    </select>
                  </div>

                  {form.type !== 'Pribadi' && (
                    <div className="space-y-1.5">
                      <label className="font-semibold text-stone-700">Nama Usaha <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required={form.type !== 'Pribadi'}
                        value={form.institutionName}
                        onChange={(e) => setForm({ ...form, institutionName: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366]"
                        placeholder={`Contoh: ${form.type === 'Toko' ? 'Toko Kosmetik ABC' : form.type === 'Hotel' ? 'Hotel Bintang' : form.type === 'Salon' ? 'Salon Cantik' : 'Nama ' + form.type}`}
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-semibold text-stone-700">Produk yang diminati <span className="text-red-500">*</span></label>
                      {totalCount > 0 ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {totalCount} item terpilih
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          Belum pilih produk
                        </span>
                      )}
                    </div>
                    <textarea
                      rows={form.product.includes('\n') ? Math.min(Math.max(form.product.split('\n').length, 2), 4) : 2}
                      required
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366] text-xs leading-relaxed resize-none"
                      placeholder="Pilih produk dari halaman produk pada website heviny.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-stone-700">Jumlah Produk <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 focus:border-[#25D366]"
                      placeholder="Contoh: 10 botol, 2 jerigen 5L"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <PaperAirplaneIcon className="w-4 h-4" />
                      <span>Kirim via WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
