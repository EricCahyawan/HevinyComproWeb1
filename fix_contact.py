import re

with open('src/components/ContactSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace formState initialization
old_state = "const [formState, setFormState] = useState({\n    name: '',\n    email: '',\n    message: ''\n  });"
new_state = "const [formState, setFormState] = useState({\n    name: '',\n    type: 'Pribadi',\n    product: '',\n    quantity: ''\n  });"
content = content.replace(old_state, new_state)

# Replace handleSubmit
old_submit = """if (!formState.name.trim() || !formState.message.trim()) return;

    const subject = language === 'id' ? 'Pertanyaan melalui website Heviny' : 'Inquiry from the Heviny website';
    const body = ${language === 'id' ? 'Nama' : 'Name'}: \\n +
      (formState.email ? Email: \\n : '') +
      ${language === 'id' ? 'Pesan' : 'Message'}:\\n;
    window.location.href = mailto:?subject=&body=;
    setIsSubmitted(true);"""

new_submit = """if (!formState.name.trim() || !formState.product.trim()) return;

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://hevinycosmetics.com';
    const pdfUrl = ${origin}/katalog-heviny.pdf;

    const message = Halo! Terima kasih sudah menghubungi *Hana Cosmetic* ??\\n\\nKami akan segera informasikan harganya setelah mengetahui kebutuhan Kakak lebih lanjut.\\n\\nSambil menunggu, kami lampirkan *catalogue produk* kami pada tautan berikut:\\n?? \\n(lengkap dengan pilihan produk dan varian yang tersedia)\\n\\nMohon bantu isi form berikut ya kak:\\n\\n*--- FORM ORDER ---* ??\\n?? Nama                          : \\n??? Jenis                            : \\n??? Produk yang diminati : \\n?? Jumlah                        : \\n*-----------------*\\n\\nSetelah form terisi, kami segera proses dan informasikan harga untuk Kakak. Terima kasih! ??;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = https://wa.me/6281334070067?text=;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);"""

content = content.replace(old_submit, new_submit)

# Replace form
new_form = """<form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">{language === 'en' ? 'Name *' : 'Nama Lengkap / Nama Salon *'}</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#5C726E]/20 focus:border-[#5C726E]"
                      placeholder={language === 'en' ? 'Enter your name' : 'Masukkan nama Anda'}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">{language === 'en' ? 'Buyer Type' : 'Jenis Pembeli'}</label>
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
                
                <div className="space-y-1.5">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">{language === 'en' ? 'Interested Products *' : 'Produk yang diminati *'}</label>
                  <input
                    type="text"
                    required
                    value={formState.product}
                    onChange={(e) => setFormState({ ...formState, product: e.target.value })}
                    className="w-full p-3 rounded-2xl border border-[#E3E8E6] bg-white focus:outline-none focus:ring-2 focus:ring-[#5C726E]/20 focus:border-[#5C726E]"
                    placeholder={language === 'en' ? 'Example: Shower Gel, Hair Tonic' : 'Contoh: Shower Gel, Hair Tonic'}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold uppercase tracking-wider text-[#243330] text-[11px]">{language === 'en' ? 'Quantity *' : 'Jumlah Produk *'}</label>
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
                  className="w-full mt-2 inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-[#243330] hover:bg-[#1A2624] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Send via WhatsApp' : 'Kirim Pesan via WhatsApp'}</span>
                </button>
              </form>"""

content = re.sub(r'<form onSubmit={handleSubmit} className="space-y-4 text-xs">[\s\S]*?</form>', new_form, content)

with open('src/components/ContactSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
