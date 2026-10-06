import { IngredientHighlight, Testimonial, FaqItem, AuditPoint } from '../types';

export const COMPANY_INFO = {
  brandName: 'Heviny',
  legalEntity: 'Hana Cosmetics',
  manufacturerName: 'Hana Cosmetics',
  companyName: 'Hana Cosmetics Surabaya',
  tagline: 'The Beauty of Nature',
  taglineSub: 'Perawatan Kecantikan Alami & Ragam Produk Salon Terpercaya',
  establishedYear: 2006,
  address: 'Jl. Rungkut Lor RL 2A/21, Rungkut, Surabaya, Jawa Timur, Indonesia',
  phone: '0813-34070067',
  whatsapp: '+6281334070067',
  whatsappDisplay: '+62 813-3407-0067',
  shopeeUrl: 'https://shopee.co.id/hevinystore',
  shopeeDisplay: 'Shopee Official Store',
  email: 'hevinycs@gmail.com',
  website: 'hevinycosmetics.com',
  vision: 'Best Quality Best Price.',
  mission: 'Memproduksi kosmetik yang berkualitas baik, aman dalam pemakaian, dengan harga yang terjangkau untuk semua konsumen (To produce quality and safe cosmetics at affordable prices for all consumers).',
  workingHours: {
    weekdays: 'Hari Kerja (Senin - Jumat): 09:00 - 17:00 WIB',
    saturday: 'Sabtu: 10:00 - 15:00 WIB',
    sunday: 'Minggu & Hari Libur Nasional: Tutup'
  },
  stats: [
    { label: 'Tahun Pengalaman', value: '20+ Tahun' },
    { label: 'Mitra Salon & Spa', value: '1.200+' },
    { label: 'Varian Produk Alami', value: '50+' },
    { label: 'CPKB, BPOM & Halal', value: '100% Resmi' }
  ],
  certifications: [
    { title: 'Badan Pengawas Obat & Makanan (BPOM RI)', desc: 'Telah teruji klinis dan mengantongi izin edar notifikasi resmi BPOM RI.' },
    { title: 'Sertifikat Halal Indonesia (BPJPH & MUI)', desc: 'Terverifikasi Halal resmi ID35110019295530624 bebas dari bahan terlarang.' },
    { title: 'Standar CPKB / GMP Compliance', desc: 'Diproduksi dengan pedoman Cara Pembuatan Kosmetik yang Baik oleh BPOM RI.' },
    { title: 'Bangga Buatan Indonesia', desc: '100% formula karya anak bangsa dengan kekayaan ekstrak botani tropis nusantara.' }
  ],
  cartonSpecs: [
    { container: 'Jerigen 5 Liter', perCarton: '6 pcs / carton', suitableFor: 'Hotel Amenities, Salon Bulk, Spa' },
    { container: 'Botol 1 Liter', perCarton: '24 pcs / carton', suitableFor: 'Refill Salon & Barbershop' },
    { container: 'Standing Pouch 1 Kg', perCarton: '20 pcs / carton', suitableFor: 'Salon & Spa Refill Pack' },
    { container: 'Plastik Refill Bag 1 Kg', perCarton: '24 pcs / carton', suitableFor: 'Refill Salon & Spa' },
    { container: 'Bubuk Masker/Scrub 1 Kg', perCarton: '20 pcs / carton', suitableFor: 'Spa & Body Scrub Bar' },
    { container: 'Botol 600 mL', perCarton: '24 pcs / carton', suitableFor: 'Retail & Refill Keluarga' },
    { container: 'Botol 350 mL', perCarton: '12 pcs / carton (25 x 18.5 x 19.5 cm)', suitableFor: 'Retail & Personal Care' },
    { container: 'Botol 200 mL', perCarton: '20 pcs / carton', suitableFor: 'Hair Tonic & Retail' },
    { container: 'Pot 500 Gram', perCarton: '24 pcs / carton (42 x 31.5 x 15.8 cm)', suitableFor: 'Creambath & Body Scrub' },
    { container: 'Pot 250 Gram', perCarton: '24 pcs / carton (30 x 28 x 13.5 cm)', suitableFor: 'Creambath & Hair Mask Retail' }
  ]
};

export const NATURAL_INGREDIENTS: IngredientHighlight[] = [
  {
    id: 'bunga-mawar',
    name: 'Ekstrak Bunga Mawar Merah',
    latinName: 'Rosa Damascena Flower Extract',
    origin: 'Dataran Tinggi Jawa Timur',
    description: 'Penyulingan kelopak mawar segar menghasilkan air mawar aromatik yang kaya antioksidan alami, menyeimbangkan pH kulit, dan mengencangkan pori-pori.',
    benefits: ['Menyeimbangkan pH alami kulit', 'Meredakan iritasi & kemerahan', 'Pelarut masker tradisional terbaik', 'Aromaterapi menenangkan'],
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
    associatedProducts: ['Heviny Rose Water', 'Heviny Face Tonic', 'Heviny Body Lotion']
  },
  {
    id: 'susu-kambing',
    name: 'Protein Susu Murni & Yogurt',
    latinName: 'Hydrolyzed Milk Protein & Yogurt Extract',
    origin: 'Peternakan Organik Lokal',
    description: 'Asam laktat alami dan protein susu melepaskan sel kulit mati secara lembut, mengembalikan elastisitas, dan memberikan kelembapan ekstra.',
    benefits: ['Mencerahkan kulit kusam secara alami', 'Eksfoliasi lembut tanpa iritasi', 'Mengunci kelembapan hingga 24 jam', 'Tekstur kulit kenyal & selembut sutra'],
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    associatedProducts: ['Heviny Nourishing Milk Bath', 'Heviny Body Scrub Milk & Honey', 'Heviny Body Butter']
  },
  {
    id: 'minyak-kemiri',
    name: 'Minyak Kemiri & Ekstrak Ginseng',
    latinName: 'Aleurites Moluccana & Panax Ginseng Extract',
    origin: 'Kekayaan Botani Nusantara',
    description: 'Warisan leluhur nusantara untuk mahkota rambut. Mengandung asam lemak esensial dan nutrisi folikel yang memperkuat akar rambut dari pangkal hingga ujung.',
    benefits: ['Menjaga kehitaman alami rambut berkilau', 'Mencegah kerontokan & rambut patah', 'Merangsang pertumbuhan rambut tebal', 'Mengurangi ketombe & gatal'],
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    associatedProducts: ['Heviny Hair Tonic Kemiri', 'Heviny Creambath Ginseng', 'Heviny Creambath Kemiri']
  },
  {
    id: 'lidah-buaya',
    name: 'Ekstrak Gel Lidah Buaya Segar',
    latinName: 'Aloe Barbadensis Leaf Extract',
    origin: 'Perkebunan Tropis Indonesia',
    description: 'Daging daun lidah buaya segar kaya akan vitamin A, C, E serta enzim proteolitik yang menyejukkan kulit kepala dan menghidrasi batang rambut yang kering.',
    benefits: ['Mendinginkan kulit kepala lelah', 'Melembutkan batang rambut kaku', 'Menghidrasi kulit tanpa rasa lengket', 'Mengurangi inflamasi & rasa gatal'],
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80',
    associatedProducts: ['Heviny Creambath Aloe Vera', 'Heviny Hair Tonic Aloe Vera', 'Heviny Shower Gel']
  },
  {
    id: 'bengkoang-nusantara',
    name: 'Sari Pati Bengkoang & Akar Manis',
    latinName: 'Pachyrhizus Erosus & Licorice Root',
    origin: 'Jawa Tengah & Jawa Timur',
    description: 'Sari pati bengkoang mengandung isoflavon alami yang terbukti mencerahkan noda kusam pada kulit tubuh dan wajah secara bertahap dan aman.',
    benefits: ['Mencerahkan kulit belang secara alami', 'Menghaluskan tekstur kulit kasar', 'Mengangkat sel kulit mati saat luluran', 'Menyamarkan noda hitam'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    associatedProducts: ['Heviny Midodareni Scrub Bengkoang', 'Heviny Milk Cleanser Bengkoang', 'Heviny Body Lotion']
  },
  {
    id: 'minyak-zaitun-kelapa',
    name: 'Minyak Zaitun & Minyak Kelapa Murni',
    latinName: 'Olea Europaea & Cocos Nucifera Oil',
    origin: 'Perkebunan Kelapa Tropis',
    description: 'Minyak nabati murni yang mudah diserap kulit dan batang rambut. Memberikan kelembapan intensif dan perlindungan lipid alami.',
    benefits: ['Nutrisi mendalam untuk rambut kering', 'Pelumas pijat tubuh yang sangat halus', 'Mencegah kulit pecah-pecah dan bersisik', 'Antioksidan alami'],
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    associatedProducts: ['Heviny Massage Oil Zaitun', 'Heviny Massage Cream Olive', 'Heviny Creambath Coconut Oil']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'R***a',
    role: 'Owner & Head Beautician',
    businessName: 'Griya Cantika Spa & Salon',
    city: 'Surabaya',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Kami sudah memakai Creambath Kemiri, Ginseng, & Hair Mask Heviny kemasan 1 Kg dan 4 Kg sejak bertahun-tahun. Pelanggan salon selalu memuji wanginya yang awet berhari-hari dan rambut jadi lembut sekali. Harganya sangat bersahabat untuk margin salon!',
    productUsed: 'Heviny Creambath Kemiri, Ginseng & Hair Mask SPA'
  },
  {
    id: 'testi-2',
    name: 'H***o',
    role: 'Purchasing & Amenities Manager',
    businessName: 'Grand Royal Resort & Suites',
    city: 'Batu / Malang',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Heviny menyediakan kebutuhan bulk shower gel, bath foam, dan shampoo 5 Liter untuk kamar hotel kami. Kualitas busanya lembut, tidak bikin kulit tamu kering, dan kemasannya aman dikirim tanpa bocor. Pelayanan respon WhatsApp-nya cepat sekali.',
    productUsed: 'Heviny Shower Gel Botanical 5L & Bath Foam'
  },
  {
    id: 'testi-3',
    name: 'D***a',
    role: 'Pembeli Terverifikasi',
    businessName: 'Ulasan Tokopedia',
    city: 'Indonesia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Happy bgt belanja di sini. Respon penjual cepat, kalau ada yang habis langsung konfirmasi. Sudah pembelian kedua untuk sabun Helvy dan shampoo Go Street. Wanginya enak, ramah kantong!',
    productUsed: 'Heviny Body Soap & Go Street Shampoo'
  },
  {
    id: 'testi-4',
    name: 'S***a',
    role: 'Konsumen Rumah Tangga',
    businessName: 'Pengguna Setia',
    city: 'Gresik',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Heviny Foot Cream benar-benar penyelamat tumit saya yang tadinya pecah-pecah parah. Dalam seminggu dioles tiap malam sebelum tidur, tumit jadi halus kembali dan ada sensasi dingin mint yang enak banget di kaki.',
    productUsed: 'Heviny Foot Cream & Cracked Heel Smoother'
  },
  {
    id: 'testi-5',
    name: 'B***s',
    role: 'Lead Hair Stylist & Studio Founder',
    businessName: 'Mahkota Barbershop & Hair Studio',
    city: 'Semarang',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Hair Tonic Anti Dandruff dan Hair Serum Heviny jadi andalan utama scalp treatment di studio kami. Sensasi dingin segarnya disukai pelanggan, ketombe bersih tuntas, dan aroma segarnya sangat maskulin serta mewah tanpa menyengat.',
    productUsed: 'Heviny Hair Tonic Anti Dandruff & Hair Serum'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Legalitas & Halal',
    question: 'Apakah seluruh produk Heviny terdaftar di BPOM RI dan bersertifikat Halal resmi?',
    answer: 'Ya, seluruh produk Heviny diproduksi dengan standar CPKB (Cara Pembuatan Kosmetik yang Baik) dan telah mengantongi izin edar notifikasi resmi dari BPOM RI serta sertifikat Halal resmi (ID35110019295530624) dari BPJPH Kementerian Agama Republik Indonesia.'
  },
  {
    id: 'faq-2',
    category: 'Produk',
    question: 'Kategori produk perawatan apa saja yang diproduksi oleh Heviny?',
    answer: 'Heviny memproduksi rangkaian produk perawatan kecantikan berbasis ekstrak botani alami yang mencakup Hair Care (Creambath, Hair Tonic, Shampoo, Hair Mask, Hair Conditioner), Body Care (Lulur Tradisional Midodareni, Body Scrub, Body Lotion, Shower Gel, Massage Oil), Face Care (Air Mawar, Face Tonic, Milk Cleanser), hingga Nail Care.'
  },
  {
    id: 'faq-3',
    category: 'Kemasan & Varian',
    question: 'Pilihan ukuran kemasan apa saja yang tersedia untuk produk Heviny?',
    answer: 'Produk Heviny tersedia dalam beragam pilihan kemasan mulai dari ukuran praktis personal (200ml, 350ml, pot 250g & 500g) hingga ukuran besar salon & spa (botol 1 Liter, pouch refill 1Kg, pot 1Kg - 4Kg, serta jerigen 5 Liter dan 20 Liter).'
  },
  {
    id: 'faq-4',
    category: 'Bahan Alami',
    question: 'Apa saja kandungan bahan alami unggulan yang digunakan dalam produk Heviny?',
    answer: 'Formulasi Heviny memanfaatkan ekstrak bahan alami nusantara bermutu tinggi seperti Ekstrak Bunga Mawar Merah, Minyak Kemiri Murni, Ekstrak Lidah Buaya Segar, Sari Pati Bengkoang, Minyak Zaitun, Ekstrak Ginseng, dan Protein Susu Murni.'
  },
  {
    id: 'faq-5',
    category: 'Informasi Perusahaan',
    question: 'Apa hubungan antara Hana Cosmetics (Hana Cosmetic) dengan brand Heviny?',
    answer: 'Hana Cosmetics (CV/PT Hana Cosmetics Surabaya) adalah perusahaan produsen manufaktur resmi yang memproduksi, memformulasi, dan menaungi seluruh lini produk brand Heviny sejak tahun 2006. Seluruh sertifikasi CPKB, izin edar notifikasi BPOM RI, dan sertifikasi Halal Heviny diampu secara legal oleh Hana Cosmetics.'
  },
  {
    id: 'faq-6',
    category: 'Informasi Perusahaan',
    question: 'Bagaimana cara menghubungi pabrik Hana Cosmetics / Heviny untuk pemesanan grosir salon dan distributor?',
    answer: 'Anda dapat menghubungi kantor pemasaran Hana Cosmetics di Surabaya melalui formulir di halaman Kontak atau WhatsApp resmi kami (+62 813-3407-0067). Kami melayani suplai grosir tangan pertama untuk salon kecantikan, barbershop, spa, toko kosmetik, reseller, serta maklon ke seluruh Indonesia.'
  }
];

export const UX_AUDIT_POINTS: AuditPoint[] = [
  {
    category: 'UX/UI',
    issueOldSite: 'Desain visual kaku, warna kusam, tidak ada hierarki estetika kemewahan produk kosmetik spa alami, serta tidak responsif di perangkat smartphone modern.',
    solutionNewSite: 'Membangun desain visual modern berestetika Botanical Warm Luxury dengan tipografi Playfair Display & Plus Jakarta Sans, layout responsif mobile-first, dan interaksi animasi mulus.',
    impact: 'Critical'
  },
  {
    category: 'Arsitektur Informasi',
    issueOldSite: 'Katalog produk statis tanpa fitur pencarian, filter kategori, keterangan kandungan alami, cara pemakaian, atau transparansi nomor BPOM.',
    solutionNewSite: 'Menyediakan Dynamic Interactive Catalog dengan filter 5 kategori, live search, drawer detail produk lengkap (kandungan, cara pakai, ukuran varian, status BPOM & Halal), serta tombol order instan ke WhatsApp.',
    impact: 'Critical'
  },
  {
    category: 'Konversi Bisnis (B2B/B2C)',
    issueOldSite: 'Tidak membedakan target konsumen retail dengan pemilik Salon, Spa, dan Hotel. Peluang transaksi grosir besar terlewatkan.',
    solutionNewSite: 'Menambahkan katalog khusus ukuran Jerigen 5L & 20L, spesifikasi packing karton resmi, kalkulator pesanan grosir, serta jalur kontak langsung ke WhatsApp resmi.',
    impact: 'High'
  },
  {
    category: 'Konten & Copywriting',
    issueOldSite: 'Teks copywriting minim, kurang menjual, tidak menjelaskan keunggulan bahan alami khas Indonesia (Mawar, Susu, Kemiri, Lidah Buaya, Bengkoang), dan tanpa social proof/testimoni.',
    solutionNewSite: 'Memperkaya narasi brand "The Beauty of Nature" dari Heviny (Est. 2006), menampilkan galeri bahan aktif lokal, artikel tips kecantikan lengkap, ulasan salon nyata, serta transparansi legalitas produk di Surabaya.',
    impact: 'High'
  }
];
