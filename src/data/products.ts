import { Product } from '../types';

export const productImage = (fileName: string) => `/product-images/${encodeURIComponent(`${fileName}.webp`)}`;

export const HEVINY_PRODUCTS: Product[] = [
  // ==========================================
  // I. PERAWATAN WAJAH (FACE CARE)
  // ==========================================

  // 1. FACE TONIC
  {
    id: 'heviny-face-tonic',
    name: 'Heviny Face Tonic',
    catalogCategory: 'Face Care',
    category: 'face',
    categoryLabel: 'Perawatan Wajah',
    subtitle: 'Penyegar Wajah Alami Penyeimbang pH Kulit Normal & Kering',
    description: 'Toner penyegar wajah bertekstur ringan yang diformulasikan untuk melembapkan, menyeimbangkan kembali pH alami kulit setelah mencuci muka, serta menyiapkan kulit agar menyerap produk perawatan selanjutnya secara optimal.',
    heroIngredient: 'Botanical Hydrating Complex, Allantoin & Aloe Vera',
    benefits: [
      'Mengembalikan keseimbangan pH alami kulit setelah pembersihan',
      'Menghidrasi kulit normal hingga kering agar tetap kenyal dan segar',
      'Membantu membersihkan sisa milk cleanser tanpa membuat kulit kering',
      'Memberikan kesegaran lembut dan rasa nyaman sepanjang hari'
    ],
    variantsList: [
      { name: 'Face Tonic 350 ml', sku: 'FACTON350', notes: 'Kemasan Botol Praktis' },
      { name: 'Face Tonic 1 Liter', sku: 'FACTON1', notes: 'Kemasan Botol Salon' },
      { name: 'Face Tonic 5 Liter', sku: 'FACTON5', notes: 'Kemasan Jerigen 5L' },
      { name: 'Face Tonic 20 Liter', sku: 'FACTON20', notes: 'Kemasan Jerigen Besar 20L' }
    ],
    availableSizes: ['350 ml', 'Botol 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: '350 ml', packagingType: 'Botol', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol 1L', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: '5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Salon & Spa', cartonCount: '4 jrg / ctn' },
      { size: '20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI NA18211200547',
    halalCertified: true,
    image: productImage('HEVINY Face Tonic - 1 L - 1'),
    howToUse: 'Tuangkan pada kapas bersih dan usapkan lembut ke seluruh wajah dan leher setelah menggunakan Milk Cleanser atau sabun cuci muka.',
    naturalIngredients: ['Aqua', 'Glycerin', 'Aloe Barbadensis Leaf Extract', 'Allantoin', 'Propylene Glycol'],
    popular: true,
    isSalonFavorite: true
  },

  // 2. MILK CLEANSER
  {
    id: 'heviny-milk-cleanser',
    name: 'Heviny Milk Cleanser',
    catalogCategory: 'Face Care',
    category: 'face',
    categoryLabel: 'Perawatan Wajah',
    subtitle: 'Susu Pembersih Wajah Lembut Pembersih Make-up & Debu Polusi',
    description: 'Pembersih emulsi lembut berbahan dasar susu dan ekstrak botani alami yang efektif melarutkan sisa makeup, debu kotoran, dan minyak berlebih tanpa mengikis kelembapan alami barrier kulit.',
    heroIngredient: 'Pachyrhizus Erosus (Bengkoang) & Cucumis Sativus (Cucumber)',
    benefits: [
      'Mengangkat riasan wajah, foundation, dan debu polusi secara menyeluruh',
      'Mencerahkan kulit kusam berkat ekstrak bengkoang alami',
      'Menjaga kelembutan, hidrasi, dan elastisitas kulit wajah',
      'Tekstur emulsi lembut yang tidak lengket di kulit'
    ],
    variantsList: [
      { name: 'Milk Cleanser Bengkuang 350 ml', sku: 'MILCLEBEN350', notes: 'Kemasan Botol Praktis' },
      { name: 'Milk Cleanser Bengkuang 1 Liter', sku: 'MILCLEBEN1', notes: 'Kemasan Botol Salon' },
      { name: 'Milk Cleanser Bengkuang 5 Liter', sku: 'MILCLEBEN5', notes: 'Kemasan Jerigen 5L' },
      { name: 'Milk Cleanser Cucumber 1 Liter', sku: 'MILCLECUC1', notes: 'Kemasan Botol 1L Mentimun' },
      { name: 'Facial Wash 500 ml', sku: 'FACWAS500', notes: 'Sabun Wajah Busa Lembut 500ml' },
      { name: 'Facial Wash Standing Pouch 1 Kg', sku: 'FACWASSTA1', notes: 'Kemasan Standing Pouch 1Kg' },
      { name: 'Facial Wash 1 Liter', sku: 'FACWAS1', notes: 'Kemasan Botol 1L' }
    ],
    availableSizes: ['350 ml', '500 ml', 'Standing Pouch 1L', 'Botol 1 Liter', 'Jerigen 5 Liter'],
    packagingSpecs: [
      { size: '350 ml', packagingType: 'Botol', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: '500 ml', packagingType: 'Botol', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol 1L / Pouch', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: '5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Salon & Spa', cartonCount: '4 jrg / ctn' }
    ],
    bpomNumber: 'BPOM RI NA18211200545',
    halalCertified: true,
    image: productImage('HEVINY Milk Cleanser Bengkuang - 1 L - 1'),
    howToUse: 'Oleskan pada wajah, lakukan pijatan memutar lembut selama 1 menit, lalu bersihkan dengan kapas bersih. Lanjutkan dengan Heviny Face Tonic atau Air Mawar.',
    naturalIngredients: ['Aqua', 'Mineral Oil', 'Bengkoang Extract', 'Cucumber Extract', 'Stearic Acid'],
    popular: true,
    isSalonFavorite: true
  },

  // 3. ASTRINGENT
  {
    id: 'heviny-astringent',
    name: 'Heviny Astringent',
    catalogCategory: 'Face Care',
    category: 'face',
    categoryLabel: 'Perawatan Wajah',
    subtitle: 'Penyegar & Pengontrol Minyak Khusus Kulit Berminyak & Pori-Pori Besar',
    description: 'Astringent pembersih dan penyegar wajah khusus untuk kulit berminyak dan berpori-pori besar. Mengangkat sisa sebum berlebih, kotoran mendalam, serta memberikan sensasi dingin yang menyegarkan.',
    heroIngredient: 'Hamamelis Virginiana (Witch Hazel) & Menthol Extract',
    benefits: [
      'Mengontrol kelebihan produksi sebum dan minyak pada wajah',
      'Membantu meringkas dan mengecilkan tampilan pori-pori',
      'Sensasi dingin menyegarkan dengan formula antiseptic ringan',
      'Tersedia ukuran botol retail hingga jerigen salon 20 Liter'
    ],
    variantsList: [
      { name: 'Astringent 350 ml', sku: 'AST350', notes: 'Kemasan Botol Praktis 350ml' },
      { name: 'Astringent 1 Liter', sku: 'AST1', notes: 'Kemasan Botol Salon 1L' },
      { name: 'Astringent 5 Liter', sku: 'AST5', notes: 'Kemasan Jerigen 5L' },
      { name: 'Astringent 20 Liter', sku: 'AST20', notes: 'Kemasan Jerigen Besar 20L' }
    ],
    availableSizes: ['350 ml', 'Botol 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: '350 ml', packagingType: 'Botol', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol 1L', targetAudience: 'Salon & Barbershop', cartonCount: '12 pcs / ctn' },
      { size: '5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Salon & Spa', cartonCount: '4 jrg / ctn' },
      { size: '20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI NA18211200544',
    halalCertified: true,
    image: productImage('HEVINY Astringent - 1 L - 1'),
    howToUse: 'Tuangkan secukupnya pada kapas bersih, lalu usapkan atau tepuk-tepuk perlahan ke seluruh wajah terutama pada area T-Zone berminyak setelah membersihkan muka.',
    naturalIngredients: ['Aqua', 'Hamamelis Virginiana Extract', 'Alcohol Denat', 'Menthol', 'Propylene Glycol'],
    popular: true,
    isSalonFavorite: true
  },

  // 4. AIR MAWAR
  {
    id: 'heviny-air-mawar',
    name: 'Heviny Air Mawar',
    catalogCategory: 'Face Care',
    category: 'face',
    categoryLabel: 'Perawatan Wajah',
    subtitle: 'Penyegar Wajah & Campuran Masker Alami dari Ekstrak Bunga Mawar',
    description: 'Air Mawar Heviny diformulasikan dari destilasi ekstrak bunga mawar alami untuk menyegarkan kulit, mengembalikan keseimbangan pH setelah mencuci muka, serta sebagai cairan pencampur lulur, masker wajah, dan masker badan spa.',
    heroIngredient: 'Rosa Damascena Flower Extract',
    benefits: [
      'Menyegarkan dan melembapkan kulit wajah',
      'Meringkas pori-pori dan meredakan kemerahan',
      'Pelarut ideal untuk bubuk masker dan lulur tradisional',
      'Aroma mawar alami yang menenangkan pikiran'
    ],
    variantsList: [
      { name: 'Air Mawar 350 ml', sku: 'AIRMAW350', notes: 'Kemasan Botol Praktis 350ml' },
      { name: 'Air Mawar 1 Liter', sku: 'AIRMAW1', notes: 'Kemasan Botol Segel 1L' },
      { name: 'Air Mawar 5 Liter', sku: 'AIRMAW5', notes: 'Kemasan Jerigen Segel 5L' }
    ],
    availableSizes: ['350 ml', 'Botol 1 Liter', 'Jerigen 5 Liter'],
    packagingSpecs: [
      { size: '350 ml', packagingType: 'Botol Flip Top', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol Segel 1L', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: '5 Liter', packagingType: 'Jerigen Segel 5L', targetAudience: 'Kemasan Jerigen', cartonCount: '4 jrg / ctn' }
    ],
    bpomNumber: 'BPOM RI NA18211200543',
    halalCertified: true,
    image: productImage('HEVINY Air Mawar - 1 L - 1'),
    howToUse: 'Tuangkan pada kapas bersih dan usapkan lembut ke seluruh wajah dan leher, atau campurkan secukupnya pada serbuk masker/lulur.',
    naturalIngredients: ['Aqua', 'Rosa Damascena Flower Water', 'Glycerin', 'Propylene Glycol'],
    popular: true,
    isSalonFavorite: true
  },

  // ==========================================
  // II. PERAWATAN RAMBUT (HAIR CARE)
  // ==========================================

  // 5. SHAMPOO
  {
    id: 'heviny-shampoo',
    name: 'Heviny Shampoo',
    catalogCategory: 'Hair Care',
    category: 'hair',
    categoryLabel: 'Perawatan Rambut',
    subtitle: 'Sampo Salon Murah BPOM Busa Melimpah Pembersih Mendalam & Aromaterapi Buah',
    description: 'Rangkaian sampo murah berkualitas resmi BPOM dari Heviny dengan pH seimbang yang membersihkan rambut dari minyak dan kotoran. Terkenal sebagai sampo berkualitas yang murah, hemat, dan menjadi pilihan utama ribuan salon, barbershop, serta rumah tangga berkat harga grosir pabrik langsung yang sangat ekonomis.',
    heroIngredient: 'Ekstrak Botani Buah Tropis, Urang Aring & Egg Protein',
    benefits: [
      'Harga pabrik langsung sangat murah dan ekonomis untuk salon maupun rumah tangga',
      'Busa melimpah dan lembut di kulit kepala',
      'Membersihkan minyak berlebih dan debu polusi secara tuntas',
      'Keharuman segar tahan lama sepanjang hari',
      'Kemasan lengkap mulai botol 350ml hingga jerigen 20 Liter'
    ],
    variantsList: [
      { name: 'Shampo Apel', sku: 'SHAAPE350 / SHAAP600 / SHAAPESTA1 / SHAAPEREF1 / SHAAPE1 / SHAAPEREF2 / SHAAPE5 / SHAAPE20', notes: '350ml, 600ml, Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Coconut', sku: 'SHACOCSTA1 / SHACOCREF1 / SHACOC1 / SHACOCREF2 / SHACOC5 / SHACOC20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Green Tea', sku: 'SHAGRESTA1 / SHAGREREF1 / SHAGRE1 / SHAGREREF2 / SHAGRE5 / SHAGRE20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Kuning (Egg)', sku: 'SHAKUN350 / SHAKUN600 / SHAKUNSTA1 / SHAKUNREF1 / SHAKUN1 / SHAKUNREF2 / SHAKUN5 / SHAKUN20', notes: '350ml, 600ml, Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Melon', sku: 'SHAMELSTA1 / SHAMELREF1 / SHAMEL1 / SHAMELREF2 / SHAMEL5 / SHAMEL20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Peppermint', sku: 'SHAPEPSTA1 / SHAPEPREF1 / SHAPEP1 / SHAPEPREF2 / SHAPEP5 / SHAPEP20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Rose', sku: 'SHAROSSTA1 / SHAROSREF1 / SHAROS1 / SHAROSREF2 / SHAROS5 / SHAROS20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Strawberry', sku: 'SHASTR600 / SHASTRSTA1 / SHASTR1 / SHASTRREF2 / SHASTR5 / SHASTR20', notes: '600ml, Standing 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Jasmine (Treatment)', sku: 'SHATRE30 / SHATRESTA1 / SHATREREF1 / SHATRE1 / SHATREREF2 / SHATRE5 / SHATRE20', notes: '30ml, Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Tutti Fruity', sku: 'SHATUTREF1 / SHATUT1 / SHATUTREF2 / SHATUT5 / SHATUT20', notes: 'Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Shampo Urang Aring 350 ml', sku: 'SHAURA350', notes: 'Tradisional Penghitam & Pengkilap Rambut 350ml' }
    ],
    availableSizes: ['350 ml', '600 ml', 'Standing Pouch 1Kg', 'Refill 1Kg', 'Botol 1 Liter', 'Refill 2Kg', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: '350 ml / 600 ml', packagingType: 'Botol', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: 'Standing Pouch 1Kg', packagingType: 'Standing Pouch', targetAudience: 'Salon & Spa', cartonCount: '24 pcs / ctn' },
      { size: 'Refill 1Kg / 2Kg', packagingType: 'Pouch Refill', targetAudience: 'Salon & Spa', cartonCount: '24 / 6 pcs' },
      { size: 'Botol 1 Liter', packagingType: 'Botol 1L', targetAudience: 'Salon & Barbershop', cartonCount: '12 pcs / ctn' },
      { size: 'Jerigen 5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Salon & Hotel', cartonCount: '4 jrg / ctn' },
      { size: 'Jerigen 20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Peppermint Shampoo - Btl 1 L - 2'),
    howToUse: 'Basahi rambut, tuangkan sampo secukupnya, busakan dan pijat kulit kepala, lalu bilas hingga bersih. Lanjutkan dengan Heviny Conditioner.',
    naturalIngredients: ['Aqua', 'Sodium Laureth Sulfate', 'Cocamidopropyl Betaine', 'Botanical Fruit Extracts', 'Citric Acid'],
    popular: true,
    isSalonFavorite: true
  },

  // 6. HAIR TONIC
  {
    id: 'heviny-hair-tonic',
    name: 'Heviny Hair Tonic',
    catalogCategory: 'Hair Care',
    category: 'hair',
    categoryLabel: 'Perawatan Rambut',
    subtitle: 'Tonik Penyubur Rambut, Penguat Akar & Anti Ketombe',
    description: 'Hair tonic berformula cair meresap cepat ke dalam folikel kulit kepala. Membantu melancarkan sirkulasi darah di kulit kepala, menguatkan akar rambut dari kerontokan, serta meredakan ketombe.',
    heroIngredient: 'Panax Ginseng, Menthol & Salicylic Acid',
    benefits: [
      'Merangsang pertumbuhan helai rambut baru',
      'Mengurangi kerontokan dan memperkuat akar rambut',
      'Sensasi dingin menyegarkan kulit kepala gatal',
      'Tersedia ukuran botol spray retail 200ml dan refill salon 1 Liter'
    ],
    variantsList: [
      { name: 'Hair Tonic Ginseng', sku: 'HAITONGIN200 / HAITONGIN1', notes: 'Botol 200 ml & Botol 1 Liter' },
      { name: 'Hair Tonic Hijau (Penyubur)', sku: 'HAITONHIJ200 / HAITONHIJ1', notes: 'Botol 200 ml & Botol 1 Liter' },
      { name: 'Hair Tonic Kuning (Anti Dandruff)', sku: 'HAITONKUN200 / HAITONKUN1', notes: 'Botol 200 ml & Botol 1 Liter' }
    ],
    availableSizes: ['Botol 200 ml', 'Botol 1 Liter'],
    packagingSpecs: [
      { size: '200 ml', packagingType: 'Botol Tetes/Spray', targetAudience: 'Retail & Personal', cartonCount: '48 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol Refill 1L', targetAudience: 'Salon & Barbershop', cartonCount: '12 pcs / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Hair Tonic Aloe Vera Mint - 1 L - 1'),
    howToUse: 'Teteskan pada kulit kepala yang bersih setelah keramas. Pijat ringan dengan ujung jari agar meresap sempurna. Tidak perlu dibilas.',
    naturalIngredients: ['Panax Ginseng Extract', 'Alcohol Denat', 'Menthol', 'Aqua'],
    popular: true,
    isSalonFavorite: true
  },

  // 7. HAIR MASK
  {
    id: 'heviny-hair-mask',
    name: 'Heviny Hair Mask',
    catalogCategory: 'Hair Care',
    category: 'hair',
    categoryLabel: 'Perawatan Rambut',
    subtitle: 'Masker Rambut Konsentrat Tinggi untuk Rambut Rusak Akibat Proses Kimia',
    description: 'Hair mask dengan konsentrat nutrisi tinggi untuk mereparasi kutikula rambut yang rapuh, patah, dan kering akibat proses kimia (pewarnaan, bleaching, pelurusan/smoothing) dan panas catokan.',
    heroIngredient: 'Hydrolyzed Keratin, Cocoa Extract & Helianthus Annuus (Sunflower)',
    benefits: [
      'Memperbaiki kutikula rambut yang rusak dan bercabang',
      'Mengembalikan elastisitas dan kelenturan serat rambut',
      'Menjadikan rambut jatuh lurus, lembut, dan mudah disisir',
      'Wangi tahan lama ala salon bintang lima'
    ],
    variantsList: [
      { name: 'Hair Mask Chocolate Mint', sku: 'HAIMASCHOPOT250 / HAIMASCHOPOT500 / HAIMASCHOSTA1 / HAIMASCHOPOT1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg' },
      { name: 'Hair Mask Coconut', sku: 'HAIMASCOCPOT250 / HAIMASCOCPOT500 / HAIMASCOCSTA1 / HAIMASCOCPOT1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg' },
      { name: 'Hair Mask Ginseng Milky', sku: 'HAIMASGINPOT250 / HAIMASGINPOT500 / HAIMASGINSTA1 / HAIMASGINPOT1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg' },
      { name: 'Hair Mask Green Tea', sku: 'HAIMASGREPOT250 / HAIMASGREPOT500 / HAIMASGRESTA1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg' },
      { name: 'Hair Mask Papaya Jasmine', sku: 'HAIMASPAPPOT250 / HAIMASPAPSTA1', notes: 'Pot 250g, Standing Pouch 1Kg' },
      { name: 'Hair Mask Strawberry', sku: 'HAIMASSTRPOT250 / HAIMASSTRPOT500 / HAIMASSTRSTA1 / HAIMASSTRPOT1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg' },
      { name: 'Hair Mask Sunflower Avocado (S.Flower)', sku: 'HAIMASSUNPOT250 / HAIMASSUNPOT500 / HAIMASSUNSTA1 / HAIMASSUNPOT1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg' }
    ],
    availableSizes: ['Pot 250g', 'Pot 500g', 'Standing Pouch 1Kg', 'Pot 1Kg'],
    packagingSpecs: [
      { size: '250 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail', cartonCount: '24 pcs / ctn' },
      { size: '500 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail & Salon', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Standing Pouch)', packagingType: 'Standing Pouch', targetAudience: 'Salon & Spa', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Pot Jar)', packagingType: 'Pot Jar', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Hair Mask Chocolate Mint - Pot 1 kg - 1'),
    howToUse: 'Gunakan seminggu 1-2 kali sebagai pengganti kondisioner. Diamkan selama 15-20 menit pada rambut lembap, lalu bilas bersih.',
    naturalIngredients: ['Theobroma Cacao Extract', 'Helianthus Annuus Seed Oil', 'Keratin Amino Acids', 'Dimethicone'],
    popular: true,
    isSalonFavorite: true
  },

  // 8. CREAMBATH
  {
    id: 'heviny-creambath',
    name: 'Heviny Creambath',
    catalogCategory: 'Hair Care',
    category: 'hair',
    categoryLabel: 'Perawatan Rambut',
    subtitle: 'Creambath Salon Murah Berkualitas BPOM (Nusantara Herbal Series)',
    description: 'Creambath salon murah berkualitas warisan nomor satu dari Heviny berizin resmi BPOM. Mengandung ekstrak kemiri murni, ginseng, lidah buaya, alpukat, dan formula anti ketombe untuk merawat akar rambut, merangsang kesuburan rambut, serta menjadi solusi perawatan rambut salon paling hemat dan terjangkau di Indonesia.',
    heroIngredient: 'Aleurites Moluccana (Kemiri), Ginseng & Lidah Buaya',
    benefits: [
      'Kemiri: Menghitamkan dan melebatkan rambut alami',
      'Ginseng: Menguatkan akar rambut dan mencegah rontok',
      'Lidah Buaya: Menyejukkan kulit kepala dan menyuburkan rambut',
      'Anti Dandruff: Menghilangkan ketombe dan rasa gatal',
      'Alpukat & Strawberry: Melembutkan rambut kaku dan bercabang'
    ],
    variantsList: [
      { name: 'Kemiri (Candlenut)', sku: 'CREKEMPOT250 / CREKEMPOT500 / CREKEMSTA1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg' },
      { name: 'Ginseng', sku: 'CREGINPOT250 / CREGINPOT500 / CREGINSTA1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg' },
      { name: 'Lidah Buaya (Aloe Vera)', sku: 'CRELIDPOT250 / CRELIDPOT500 / CRELIDSTA1 / CRELIDREF2', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Refill 2Kg' },
      { name: 'Anti Ketombe (Anti Dandruff)', sku: 'CREANTPOT250 / CREANTPOT500 / CREANTSTA1 / CREANTREF2 / CREANTPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Refill 2Kg, Pot 4Kg' },
      { name: 'Alpukat (Avocado)', sku: 'CREALPPOT250 / CREALPPOT500 / CREALPSTA1 / CREALPPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 4Kg' },
      { name: 'Strawberry', sku: 'CRESTRPOT250 / CRESTRPOT500 / CRESTRSTA1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg' }
    ],
    availableSizes: ['Pot 250g', 'Pot 500g', 'Standing Pouch 1Kg', 'Refill 2Kg', 'Pot 4Kg'],
    packagingSpecs: [
      { size: '250 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: '500 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail & Salon', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Standing Pouch)', packagingType: 'Standing Pouch', targetAudience: 'Salon & Spa', cartonCount: '24 pcs / ctn' },
      { size: '2 Kg (Refill Pouch)', packagingType: 'Refill Pouch', targetAudience: 'Salon & Spa', cartonCount: '6 pcs / ctn' },
      { size: '4 Kg (Pot Besar)', packagingType: 'Pot Besar', targetAudience: 'Kemasan Salon', cartonCount: '4 pot / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Creambath Alpukat - Pot 250 g - 1'),
    howToUse: 'Setelah keramas, oleskan merata pada rambut dan kulit kepala. Pijat lembut 10-15 menit, gunakan steamer atau handuk hangat, lalu bilas bersih.',
    naturalIngredients: ['Aleurites Moluccana Seed Extract', 'Panax Ginseng Root Extract', 'Aloe Barbadensis Leaf Extract', 'Zinc Pyrithione'],
    popular: true,
    isSalonFavorite: true
  },

  // 9. CREAMBATH SPA
  {
    id: 'heviny-creambath-spa',
    name: 'Heviny Creambath Spa',
    catalogCategory: 'Hair Care',
    category: 'hair',
    categoryLabel: 'Perawatan Rambut',
    subtitle: 'Creambath Spa Mewah dengan Nutrisi Ekstrak Buah Tropis & Vitamin B5',
    description: 'Creambath Spa aromaterapi premium yang diperkaya dengan nutrisi vitamin dan ekstrak buah tropis segar. Menutrisi helai rambut kering, kaku, dan bercabang akibat pewarnaan serta memberikan aroma wangi spa tahan lama.',
    heroIngredient: 'Vitamin B5 (Panthenol), Coconut Oil & Green Tea Extract',
    benefits: [
      'Menutrisi helai rambut hingga lapisan terdalam korteks',
      'Melembutkan rambut kaku dan sulit diatur',
      'Sensasi aroma spa buah tropis yang tahan berhari-hari',
      'Kemasan lengkap dari pot 250g hingga pot 4 Kg'
    ],
    variantsList: [
      { name: 'Alpukat SPA (Avocado)', sku: 'CRESPAALPPOT250 / CRESPAALPPOT500 / CRESPAALPSTA1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg' },
      { name: 'Coconut SPA (Kelapa)', sku: 'CRESPACOCPOT250 / CRESPACOCPOT500 / CRESPACOCSTA1 / CRESPACOCPOT1 / CRESPACOCREF2', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg, Refill 2Kg' },
      { name: 'Emulsion Milky SPA (Susu)', sku: 'CRESPAEMUMILPOT250 / CRESPAEMUMILPOT500 / CRESPAEMUMILSTA1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg' },
      { name: 'Green Tea SPA (Teh Hijau)', sku: 'CRESPAGREPOT250 / CRESPAGREPOT500 / CRESPAGRESTA1 / CRESPAGREPOT1 / CRESPAGREPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg, Pot 4Kg' },
      { name: 'Papaya Jasmine SPA (Pepaya)', sku: 'CRESPAPAPPOT250 / CRESPAPAPPOT500 / CRESPAPAPSTA1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg' },
      { name: 'Strawberry SPA', sku: 'CRESPASTRPOT250 / CRESPASTRPOT500 / CRESPASTRSTA1 / CRESPASTRPOT1', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg' }
    ],
    availableSizes: ['Pot 250g', 'Pot 500g', 'Standing Pouch 1Kg', 'Pot 1Kg', 'Refill 2Kg', 'Pot 4Kg'],
    packagingSpecs: [
      { size: '250 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail', cartonCount: '24 pcs / ctn' },
      { size: '500 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Standing Pouch)', packagingType: 'Standing Pouch', targetAudience: 'Salon & Spa', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Pot Jar)', packagingType: 'Pot Jar 1Kg', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: '2 Kg (Refill Pouch)', packagingType: 'Refill Pouch', targetAudience: 'Salon & Spa', cartonCount: '6 pcs / ctn' },
      { size: '4 Kg (Pot Besar)', packagingType: 'Pot Besar', targetAudience: 'Kemasan Salon', cartonCount: '4 pot / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Creambath Spa Alpukat - Pot 1 kg - 1'),
    howToUse: 'Aplikasikan merata setelah keramas, pijat kulit kepala secara melingkar selama 15 menit, bilas dengan air bersih.',
    naturalIngredients: ['Camellia Sinensis (Green Tea)', 'Cocos Nucifera Oil', 'Hydrolyzed Milk Protein', 'Carica Papaya Extract'],
    popular: true,
    isSalonFavorite: true
  },

  // 10. CONDITIONER
  {
    id: 'heviny-conditioner',
    name: 'Heviny Conditioner',
    catalogCategory: 'Hair Care',
    category: 'hair',
    categoryLabel: 'Perawatan Rambut',
    subtitle: 'Kondisioner Salon Murah BPOM Pelindung Kutikula Rambut & Anti Kusut',
    description: 'Kondisioner salon murah berkualitas resmi BPOM yang melapisi setiap helai rambut dengan kelembapan sutra. Memberikan kelembutan maksimal dan kilau alami dengan harga grosir pabrik yang sangat terjangkau untuk salon dan perawatan pribadi.',
    heroIngredient: 'Cetrimonium Chloride, Vitamin B5 & Ekstrak Buah Segar',
    benefits: [
      'Menghaluskan helai rambut seketika tanpa rasa lepek',
      'Mencegah rambut kusut dan mempermudah penataan rambut salon',
      'Menjaga kelembapan batang rambut dari panas pengering',
      'Tersedia dalam varian aroma buah & herbal segar lengkap'
    ],
    variantsList: [
      { name: 'Conditioner Apel', sku: 'CONAPE350 / CONAPESTA1 / CONAPEREF1 / CONAPE1 / CONAPEREF2 / CONAPE5 / CONAPE20', notes: '350ml, Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Coconut', sku: 'CONCOCSTA1 / CONCOCREF1 / CONCOC1 / CONCOCREF2 / CONCOC5 / CONCOC20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Green Tea', sku: 'CONGRESTA1 / CONGREREF1 / CONGRE1 / CONGREREF2 / CONGRE5 / CONGRE20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Jasmine', sku: 'CONJAS350 / CONJASSTA1 / CONJASREF1 / CONJAS1 / CONJASREF2 / CONJAS5 / CONJAS20', notes: '350ml, Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Lemon', sku: 'CONLEM350 / CONLEMREF1 / CONLEM1 / CONLEM5 / CONLEM20', notes: '350ml, Refill 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Melon', sku: 'CONMELSTA1 / CONMELREF1 / CONMEL1 / CONMELREF2 / CONMEL5 / CONMEL20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Peppermint', sku: 'CONPEPSTA1 / CONPEPREF1 / CONPEP1 / CONPEP5 / CONPEP20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Rose', sku: 'CONROSSTA1 / CONROSREF1 / CONROS1 / CONROSREF2 / CONROS5 / CONROS20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Strawberry', sku: 'CONSTR350 / CONSTRSTA1 / CONSTRREF1 / CONSTR1 / CONSTRREF2 / CONSTR5 / CONSTR20', notes: '350ml, Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' },
      { name: 'Conditioner Tutti Fruity', sku: 'CONTUTSTA1 / CONTUTREF1 / CONTUT1 / CONTUTREF2 / CONTUT5 / CONTUT20', notes: 'Standing 1Kg, Refill 1Kg, Botol 1L, Refill 2Kg, Jerigen 5L, Jerigen 20L' }
    ],
    availableSizes: ['350 ml', 'Standing Pouch 1Kg', 'Refill 1Kg', 'Botol 1 Liter', 'Refill 2Kg', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: '350 ml (Botol)', packagingType: 'Botol', targetAudience: 'Retail', cartonCount: '24 pcs / ctn' },
      { size: 'Standing Pouch 1Kg', packagingType: 'Standing Pouch', targetAudience: 'Salon & Spa', cartonCount: '24 pcs / ctn' },
      { size: 'Refill 1Kg / 2Kg', packagingType: 'Pouch Refill', targetAudience: 'Retail / Salon', cartonCount: '24 / 6 pcs' },
      { size: 'Botol 1 Liter', packagingType: 'Botol Pump/Tutup', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: 'Jerigen 5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Salon & Spa', cartonCount: '4 jrg / ctn' },
      { size: 'Jerigen 20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Conditioner Ekstrak Coconut (Baru) - Btl 1 L - 1'),
    howToUse: 'Setelah keramas dengan sampo, peras sisa air pada rambut, lalu oleskan kondisioner merata pada batang hingga ujung rambut. Diamkan 2-3 menit lalu bilas bersih.',
    naturalIngredients: ['Cetearyl Alcohol', 'Cetrimonium Chloride', 'Dimethiconol', 'Fragrance'],
    popular: true,
    isSalonFavorite: true
  },

  // 11. HAIR AND BODY WASH
  {
    id: 'heviny-hair-and-body-wash',
    name: 'Heviny Hair and Body Wash',
    catalogCategory: 'Body & Hair Care',
    category: 'body',
    categories: ['body', 'hair'],
    categoryLabel: 'Perawatan Tubuh & Rambut',
    subtitle: 'Sabun & Sampo 2-in-1 Praktis dengan Busa Lembut Menyegarkan',
    description: 'Pembersih serbaguna 2-in-1 untuk rambut dan badan sekaligus. Praktis digunakan, membersihkan keringat dan kotoran secara optimal tanpa membuat kulit atau rambut kering. Pilihan favorit hotel, resort, gym, dan pusat kebugaran.',
    heroIngredient: 'Aloe Vera Extract, Pro-Vitamin B5 & Conditioning Cleansers',
    benefits: [
      'Formula 2-in-1 praktis: membersihkan rambut sekaligus menyegarkan tubuh',
      'Busa melimpah dengan aroma relaksasi segar',
      'Menjaga kelembapan kulit dan kelembutan batang rambut',
      'Tersedia kemasan pump 1 Liter hingga jerigen 20 Liter'
    ],
    variantsList: [
      { name: 'Hair & Body Wash Green', sku: 'HNBGREPUM1 / HNBGRE5 / HNBGRE20', notes: 'Pump 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Hair & Body Wash Pink', sku: 'HNBPINPUM1 / HNBPIN5 / HNBPIN20', notes: 'Pump 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Hair & Body Wash Yellow', sku: 'HNBYELPUM1 / HNBYEL5', notes: 'Pump 1L, Jerigen 5L' }
    ],
    availableSizes: ['Pump 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: 'Pump 1 Liter', packagingType: 'Botol Pump', targetAudience: 'Hotel & Gym', cartonCount: '12 pcs / ctn' },
      { size: 'Jerigen 5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Hotel & Villa', cartonCount: '4 jrg / ctn' },
      { size: 'Jerigen 20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Komersial Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Hair and Body Wash Ekstrak Aloe Vera, Ekstrak Avocado dan Argan Oil - 1 L (Pump) - 1'),
    howToUse: 'Basahi rambut dan tubuh. Tuangkan secukupnya, gosok hingga berbusa melimpah, lalu bilas hingga bersih.',
    naturalIngredients: ['Aqua', 'Sodium Laureth Sulfate', 'Cocamidopropyl Betaine', 'Aloe Vera Extract', 'Panthenol'],
    popular: true,
    isSalonFavorite: true
  },

  // ==========================================
  // III. PERAWATAN TUBUH (BODY CARE)
  // ==========================================

  // 12. MASSAGE CREAM
  {
    id: 'heviny-massage-cream',
    name: 'Heviny Massage Cream',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Krim Pijat Halus & Lembut dengan Kelicinan Optimal untuk Refleksi & Spa',
    description: 'Krim pijat tubuh dengan tekstur halus dan daya lincir yang bertahan lama tanpa cepat mengering. Mempermudah proses pemijatan refleksi dan relaksasi spa, serta mudah dibersihkan dengan waslap hangat tanpa meninggalkan residu lengket.',
    heroIngredient: 'Mineral Oil, Olive Oil (Minyak Zaitun) & Emollient Base',
    benefits: [
      'Daya lincir optimal dan tahan lama selama proses pemijatan',
      'Melembapkan kulit tubuh yang kering saat dipijat',
      'Mudah dibersihkan dengan handuk hangat tanpa rasa lengket',
      'Tersedia dalam ukuran pot 250g hingga kemasan besar 20 Kg'
    ],
    variantsList: [
      { name: 'Massage Cream Olive Oil', sku: 'MASCREOLIPOT250 / MASCREOLIPOT500 / MASCREOLISTA1 / MASCREOLIREF1 / MASCREOLIPOT1 / MASCREOLIREF2 / MASCREOLIPOT4 / MASCREOLIPOT20', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Refill 1Kg, Pot 1Kg, Refill 2Kg, Pot 4Kg, Jerigen 20Kg' },
      { name: 'Massage Cream Green Tea', sku: 'MASCREGRESTA1 / MASCREGREREF1 / MASCREGREPOT1 / MASCREGREREF2 / MASCREGREPOT4 / MASCREGREPOT20', notes: 'Standing Pouch 1Kg, Refill 1Kg, Pot 1Kg, Refill 2Kg, Pot 4Kg, Jerigen 20Kg' },
      { name: 'Massage Cream Jasmine', sku: 'MASCREJASSTA1 / MASCREJASREF1 / MASCREJASPOT1 / MASCREJASREF2 / MASCREJASPOT4 / MASCREJASPOT20', notes: 'Standing Pouch 1Kg, Refill 1Kg, Pot 1Kg, Refill 2Kg, Pot 4Kg, Jerigen 20Kg' },
      { name: 'Massage Cream Peppermint', sku: 'MASCREPEPREF1 / MASCREPEPPOT2 / MASCREPEPREF2 / MASCREPEPPOT4', notes: 'Refill 1Kg, Pot 2Kg, Refill 2Kg, Pot 4Kg' }
    ],
    availableSizes: ['Pot 250g', 'Pot 500g', 'Standing Pouch 1Kg', 'Refill 1Kg', 'Pot 1Kg', 'Refill 2Kg', 'Pot 4Kg', 'Jerigen 20Kg'],
    packagingSpecs: [
      { size: 'Pot 250g / 500g', packagingType: 'Pot Jar', targetAudience: 'Retail & Personal', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Standing Pouch / Refill)', packagingType: 'Pouch / Refill', targetAudience: 'Spa & Salon', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Pot Jar)', packagingType: 'Pot Jar', targetAudience: 'Spa & Salon', cartonCount: '12 pcs / ctn' },
      { size: '2 Kg / 4 Kg', packagingType: 'Refill / Pot', targetAudience: 'Spa & Salon', cartonCount: '6 / 4 pcs' },
      { size: '20 Kg (Jerigen)', packagingType: 'Jerigen 20Kg', targetAudience: 'Grosir Besar', cartonCount: '1 jerigen' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Massage Cream Aroma Green Tea - Pot 20 kg - 1'),
    howToUse: 'Ambil secukupnya pada telapak tangan. Balurkan ke area tubuh yang akan dipijat. Lakukan pemijatan dengan teknik relaksasi, lalu bersihkan dengan waslap hangat.',
    naturalIngredients: ['Aqua', 'Mineral Oil', 'Olea Europaea (Olive) Fruit Oil', 'Stearic Acid', 'Fragrance'],
    popular: true,
    isSalonFavorite: true
  },

  // 13. MASSAGE OIL
  {
    id: 'heviny-massage-oil',
    name: 'Heviny Massage Oil',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Minyak Pijat Aromaterapi Murni untuk Relaksasi Tubuh & Otot',
    description: 'Minyak pijat tubuh berkualitas premium dengan formula carrier oil ringan yang diperkaya minyak esensial aromaterapi alami. Membantu melemaskan otot yang tegang, melancarkan peredaran darah, dan mengharumkan tubuh.',
    heroIngredient: 'Pure Aromatherapy Essential Oils, Jasmine & Lavender Extract',
    benefits: [
      'Membantu merelaksasi otot yang kaku dan tegang',
      'Tekstur minyak halus, merata sempurna tanpa terasa lengket',
      'Pilihan wangi aromaterapi mewah khas spa bintang lima',
      'Tersedia ukuran botol 350ml, botol 1L, hingga jerigen 5 Liter'
    ],
    variantsList: [
      { name: 'Massage Oil Frangipani', sku: 'MASOILFRA350 / MASOILFRA1 / MASOILFRA5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' },
      { name: 'Massage Oil Green Tea', sku: 'MASOILGRE350 / MASOILGRE1 / MASOILGRE5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' },
      { name: 'Massage Oil Sensual Jasmine', sku: 'MASOILJAS350 / MASOILJAS1 / MASOILJAS5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' },
      { name: 'Massage Oil Relaxing Lavender', sku: 'MASOILLAV350 / MASOILLAV1 / MASOILLAV5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' },
      { name: 'Massage Oil Lemongrass', sku: 'MASOILLEM350 / MASOILLEM1 / MASOILLEM5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' },
      { name: 'Massage Oil Peppermint', sku: 'MASOILPEP350 / MASOILPEP1 / MASOILPEP5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' },
      { name: 'Massage Oil Sandalwood', sku: 'MASOILSAN350 / MASOILSAN1 / MASOILSAN5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' },
      { name: 'Massage Oil Zaitun (Olive)', sku: 'MASOILZAI350 / MASOILZAI1 / MASOILZAI5', notes: '350 ml, Botol 1 Liter, Jerigen 5 Liter' }
    ],
    availableSizes: ['Botol 350 ml', 'Botol 1 Liter', 'Jerigen 5 Liter'],
    packagingSpecs: [
      { size: '350 ml', packagingType: 'Botol Flip Top', targetAudience: 'Retail & Spa', cartonCount: '24 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol 1L', targetAudience: 'Spa & Salon', cartonCount: '12 pcs / ctn' },
      { size: '5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Kemasan Jerigen', cartonCount: '4 jrg / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Massage Oil Frangipani - 1 L - 1'),
    howToUse: 'Tuangkan minyak secukupnya pada telapak tangan, gosok kedua telapak tangan hingga hangat, lalu balurkan merata pada bagian tubuh yang dipijat.',
    naturalIngredients: ['Mineral Oil', 'Olea Europaea Oil', 'Lavandula Angustifolia Oil', 'Jasminum Officinale Oil'],
    popular: true,
    isSalonFavorite: true
  },

  // 14. BATH FOAM
  {
    id: 'heviny-bath-foam',
    name: 'Heviny Bath Foam',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Busa Berendam Mewah Melimpah untuk Bathtub Hotel, Villa & Spa',
    description: 'Cairan sabun berendam dengan formula khusus yang menghasilkan busa melimpah, tebal, dan tahan lama saat terkena kucuran air kran bathtub. Memberikan sensasi mandi berendam ala resort mewah.',
    heroIngredient: 'Gentle Foaming Complex, Glycerin & Aromatherapy Scents',
    benefits: [
      'Menghasilkan busa gelembung tebal melimpah dan tidak cepat kempes',
      'Melembapkan kulit tubuh selama berendam',
      'Aroma aromaterapi wangi menyegarkan pikiran dan tubuh',
      'Sangat disukai oleh hotel, resort, villa, dan spa relaksasi'
    ],
    variantsList: [
      { name: 'Bath Foam Biru (Ocean Fresh)', sku: 'BATFOABIR1 / BATFOABIR5 / BATFOABIR20', notes: 'Botol 1 Liter, Jerigen 5 Liter, Jerigen 20 Liter' },
      { name: 'Bath Foam Merah Muda (Rose Passion)', sku: 'BATFOAMER1 / BATFOAMER5 / BATFOAMER20', notes: 'Botol 1 Liter, Jerigen 5 Liter, Jerigen 20 Liter' },
      { name: 'Bath Foam Putih (Pearl Milk)', sku: 'BATFOAPUT1 / BATFOAPUT5 / BATFOAPUT20', notes: 'Botol 1 Liter, Jerigen 5 Liter, Jerigen 20 Liter' },
      { name: 'Bath Foam Ungu (Lavender Mist)', sku: 'BATFOAUNG1 / BATFOAUNG5 / BATFOAUNG20', notes: 'Botol 1 Liter, Jerigen 5 Liter, Jerigen 20 Liter' }
    ],
    availableSizes: ['Botol 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: '1 Liter', packagingType: 'Botol 1L', targetAudience: 'Hotel & Spa', cartonCount: '12 pcs / ctn' },
      { size: '5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Hotel & Spa', cartonCount: '4 jrg / ctn' },
      { size: '20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Bath Foam Perfumed Fresh - 1 L - 1'),
    howToUse: 'Tuangkan 30-50 ml Bath Foam langsung di bawah kucuran air kran bathtub dengan tekanan air kencang untuk menghasilkan busa melimpah.',
    naturalIngredients: ['Aqua', 'Sodium Laureth Sulfate', 'Cocamidopropyl Betaine', 'Glycerin', 'Fragrance'],
    popular: true,
    isSalonFavorite: true
  },

  // 15. BODY SCRUB (LULUR TRADISIONAL)
  {
    id: 'heviny-body-scrub',
    name: 'Heviny Body Scrub',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Lulur Tradisional Murah BPOM Butiran Scrub Halus Pengangkat Sel Kulit Mati',
    description: 'Lulur spa tradisional murah berkualitas resmi BPOM dengan butiran scrub alami yang mengangkat sel kulit mati tanpa iritasi. Diperkaya ekstrak rempah, bengkoang, susu, kopi, dan minyak zaitun untuk kulit halus cerah dengan harga pabrik paling hemat.',
    heroIngredient: 'Natural Exfoliating Scrub, Bengkoang, Kopi & Minyak Zaitun',
    benefits: [
      'Mengangkat sel kulit mati dan kotoran secara mendalam',
      'Mencerahkan area lipatan kulit yang kusam',
      'Melembutkan dan mengencangkan tekstur kulit tubuh',
      'Tersedia dalam kemasan pot 250g hingga kemasan besar 20 Kg'
    ],
    variantsList: [
      { name: 'Lulur Avocado (Alpukat)', sku: 'LULAVOPOT250 / LULAVOPOT500 / LULAVOSTA1 / LULAVOPOT1 / LULAVO4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg, Pot 4Kg' },
      { name: 'Lulur Bengkuang (Mencerahkan)', sku: 'LULBENPOT250 / LULBENPOT500 / LULBENSTA1 / LULBENPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 4Kg' },
      { name: 'Lulur Brightening', sku: 'LULBRIPOT250 / LULBRIPOT500 / LULBRISTA1 / LULBRIPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 4Kg' },
      { name: 'Lulur Coconut (Kelapa)', sku: 'LULCOCPOT250 / LULCOCPOT500 / LULCOCSTA1 / LULCOCPOT1 / LULCOCPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg, Pot 4Kg' },
      { name: 'Lulur Coklat (Chocolate)', sku: 'LULCOKPOT250 / LULCOKPOT500 / LULCOKSTA1 / LULCOKPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 4Kg' },
      { name: 'Lulur Frangipani (Kamboja Bali)', sku: 'LULFRAPOT250 / LULFRAPOT500 / LULFRASTA1 / LULFRAPOT1 / LULFRAPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg, Pot 4Kg' },
      { name: 'Lulur Green Tea', sku: 'LULGREPOT250 / LULGREPOT500 / LULGRESTA1 / LULGREPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 4Kg' },
      { name: 'Lulur Kopi (Coffee Care)', sku: 'LULKOPPOT250 / LULKOPPOT500 / LULKOPSTA1 / LULKOPPOT4 / LULKOPPOT20', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 4Kg, Jerigen 20Kg' },
      { name: 'Lulur Madu Susu', sku: 'LULMADPOT250 / LULMADPOT500 / LULMADSTA1 / LULMADPOT1 / LULMADPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg, Pot 4Kg' },
      { name: 'Lulur Mutiara (Pearl Powder)', sku: 'LULMUTPOT250 / LULMUTPOT500 / LULMUTSTA1 / LULMUTPOT1 / LULMUTPOT4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 1Kg, Pot 4Kg' },
      { name: 'Lulur Olive Oil (Zaitun)', sku: 'LULOLISTA1', notes: 'Standing Pouch 1Kg' },
      { name: 'Lulur Strawberry', sku: 'LULSTRPOT250 / LULSTRPOT500 / LULSTRSTA1 / LULSTR4', notes: 'Pot 250g, Pot 500g, Standing Pouch 1Kg, Pot 4Kg' },
      { name: 'Lulur Bubuk Tradisional 1Kg', sku: 'LULBUBAVOREF1 / LULBUBGREREF1 / LULBUBJASREF1 / LULBUBSTRREF1', notes: 'Refill 1Kg: Avocado, Green Tea, Jasmine, Strawberry' }
    ],
    availableSizes: ['Pot 250g', 'Pot 500g', 'Standing Pouch 1Kg', 'Pot 1Kg', 'Pot 4Kg', 'Jerigen 20Kg', 'Lulur Bubuk 1Kg'],
    packagingSpecs: [
      { size: '250 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail', cartonCount: '24 pcs / ctn' },
      { size: '500 gram (Pot)', packagingType: 'Pot Jar', targetAudience: 'Retail & Spa', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Standing Pouch)', packagingType: 'Standing Pouch', targetAudience: 'Salon & Spa', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg (Pot Jar)', packagingType: 'Pot Jar 1Kg', targetAudience: 'Spa & Salon', cartonCount: '12 pcs / ctn' },
      { size: '4 Kg (Pot Besar)', packagingType: 'Pot Besar', targetAudience: 'Spa & Salon', cartonCount: '4 pot / ctn' },
      { size: '20 Kg (Jerigen)', packagingType: 'Jerigen 20Kg', targetAudience: 'Ukuran Besar', cartonCount: '1 jerigen' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Lulur Midodareni Body Scrub Avocado - Pot 1 kg - 1'),
    howToUse: 'Balurkan pada kulit tubuh yang kering atau setengah basah. Gosok perlahan dengan gerakan memutar hingga butiran scrub dan kotoran rontok, lalu bilas dengan air bersih.',
    naturalIngredients: ['Polyethylene Scrub Beads', 'Pachyrhizus Erosus Extract', 'Olea Europaea Fruit Oil', 'Coffea Arabica Seed Powder'],
    popular: true,
    isSalonFavorite: true
  },

  // 16. BODY LOTION
  {
    id: 'heviny-body-lotion',
    name: 'Heviny Body Lotion',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Lotion Pelembap Kulit Cepat Meresap dengan Aroma Buah & Bunga',
    description: 'Body lotion bertekstur ringan dan tidak lengket yang memberikan hidrasi seketika pada kulit kering. Mengandung tabir surya dan ekstrak alami untuk melindungi kulit dari pengaruh lingkungan.',
    heroIngredient: 'Titanium Dioxide (UV Filter), Goat Milk, Rose & Green Tea',
    benefits: [
      'Melembapkan kulit seharian tanpa rasa berminyak',
      'Melindungi kulit dari pengaruh buruk paparan sinar matahari',
      'Menjadikan kulit tampak lebih cerah dan halus',
      'Tersedia dari botol 350ml hingga jerigen 20 Liter'
    ],
    variantsList: [
      { name: 'Body Lotion Bengkuang', sku: 'BODLOTBEN350 / BODLOTBEN600 / BODLOTBEN1 / BODLOTBEN5 / BODLOTBEN20', notes: '350ml, 600ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Body Lotion Coconut', sku: 'BODLOTCOC5', notes: 'Jerigen 5 Liter' },
      { name: 'Body Lotion Frangipani', sku: 'BODLOTFRA30 / BODLOTFRA350 / BODLOTFRA1 / BODLOTFRA5 / BODLOTFRA20', notes: '30ml, 350ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Body Lotion Green Tea', sku: 'BODLOTGRE350 / BODLOTGRE600 / BODLOTGRE1 / BODLOTGRE5 / BODLOTGRE20', notes: '350ml, 600ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Body Lotion Lidah Buaya', sku: 'BODLOTLID350 / BODLOTLID600 / BODLOTLID1 / BODLOTLID5 / BODLOTLID20', notes: '350ml, 600ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Body Lotion Rose', sku: 'BODLOTROS350 / BODLOTROS600 / BODLOTROS1 / BODLOTROS5 / BODLOTROS20', notes: '350ml, 600ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Body Lotion Yogurt & Goat Milky', sku: 'BODLOTYOG350 / BODLOTYOG600 / BODLOTYOG1 / BODLOTYOG5', notes: '350ml, 600ml, Botol 1L, Jerigen 5L' }
    ],
    availableSizes: ['30 ml', '350 ml', '600 ml', 'Botol 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: '30 ml / 350 ml', packagingType: 'Botol Flip Top', targetAudience: 'Retail & Travel', cartonCount: '24 pcs / ctn' },
      { size: '600 ml', packagingType: 'Botol Pump', targetAudience: 'Retail / Family', cartonCount: '24 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol 1L', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: '5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Salon & Spa', cartonCount: '4 jrg / ctn' },
      { size: '20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Moisturizing Body Lotion Aloe Vera Extract - 1 L - 1'),
    howToUse: 'Usapkan merata ke seluruh tubuh setiap selesai mandi atau saat kulit terasa kering.',
    naturalIngredients: ['Aqua', 'Glycerin', 'Cetyl Alcohol', 'Goat Milk Extract', 'Titanium Dioxide'],
    popular: true,
    isSalonFavorite: true
  },

  // 17. HAND WASH
  {
    id: 'heviny-hand-wash',
    name: 'Heviny Hand Wash',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Sabun Cuci Tangan Lembut Antibakteri dengan Aroma Buah Segar',
    description: 'Sabun pencuci tangan berformula higienis antibakteri yang ampuh membersihkan kuman dan kotoran tanpa membuat kulit tangan kering atau kasar. Diperkaya pelembap lembut untuk menjaga kelembutan kulit saat sering mencuci tangan.',
    heroIngredient: 'Antibacterial Agent, Aloe Vera & Moisturizing Glycerin',
    benefits: [
      'Membunuh kuman dan bakteri dengan efektif',
      'Tidak membuat kulit tangan kering walau sering digunakan',
      'Busa lembut melimpah dan mudah dibilas bersih',
      'Aroma segar buah apel, lemon, strawberry, dan mint'
    ],
    variantsList: [
      { name: 'Hand Wash Cool Mint', sku: 'FEGHANWASCOOL500 / FEGHANWASCOOL1 / FEGHANWASCOOL5', notes: 'Botol 500ml, Botol 1L, Jerigen 5L' },
      { name: 'Hand Wash Green Tea Aloe Vera', sku: 'FEGHANWASGRE500 / FEGHANWASGRE1 / FEGHANWASGRE5 / FEGHANWASGRE20', notes: 'Botol 500ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Hand Wash Lemon', sku: 'FEGHANWASLEM500 / FEGHANWASLEM1 / FEGHANWASLEM5 / FEGHANWASLEM20', notes: 'Botol 500ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Hand Wash Strawberry', sku: 'FEGHANWASSTR500 / FEGHANWASSTR1 / FEGHANWASSTR5 / FEGHANWASSTR20', notes: 'Botol 500ml, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Hand Spray Tea Tree 5L', sku: 'FEGHANSPRTEA5', notes: 'Cairan Hand Sanitizer Spray 5 Liter' }
    ],
    availableSizes: ['500 ml', 'Botol 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: '500 ml', packagingType: 'Botol Pump', targetAudience: 'Retail / Resto', cartonCount: '24 pcs / ctn' },
      { size: 'Botol 1 Liter', packagingType: 'Botol Pump', targetAudience: 'Restoran / Kantor / Salon', cartonCount: '12 pcs / ctn' },
      { size: 'Jerigen 5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Hotel / Rumah Sakit', cartonCount: '4 jrg / ctn' },
      { size: 'Jerigen 20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Komersial Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('FEGO Antibacterial Hand Wash Cool Mint - 1 L - 1'),
    howToUse: 'Tuangkan secukupnya pada tangan yang telah dibasahi air, gosok hingga berbusa selama 20 detik termasuk sela-sela jari, lalu bilas bersih.',
    naturalIngredients: ['Aqua', 'Sodium Laureth Sulfate', 'Glycerin', 'Aloe Vera Extract', 'Antibacterial Active'],
    popular: true,
    isSalonFavorite: true
  },

  // 18. SHOWER CREAM
  {
    id: 'heviny-shower-cream',
    name: 'Heviny Shower Cream',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Sabun Mandi Krim Kaya Pelembap Susu Murni untuk Kulit Halus & Lembut',
    description: 'Sabun mandi bertekstur krim lembut dengan kandungan ekstrak susu kambing (goat milk) murni dan pelembap intensif. Membersihkan tubuh secara lembut sekaligus menjaga kelembapan alami barrier kulit.',
    heroIngredient: 'Goat Milk Extract, Pearl Powder & Botanical Nourishment',
    benefits: [
      'Tekstur krim lembut kaya pelembap',
      'Membantu mencerahkan dan menghaluskan kulit tubuh',
      'Melindungi kulit dari kekeringan akibat sabun biasa',
      'Kemasan lengkap mulai pouch 1Kg hingga jerigen 20 Liter'
    ],
    variantsList: [
      { name: 'Shower Cream Goat Milk', sku: 'SHOGELMILSTA1 / SHOGELMIL1 / SHOGELMIL5 / SHOGELMIL20', notes: 'Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Shower Cream Putih / Pearl', sku: 'SHOGELPUT30 ML / SHOGELPUTSTA1 / SHOGELPUT1 / SHOGELPUT5 / SHOGELPUT20', notes: 'Botol 30ml, Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' }
    ],
    availableSizes: ['30 ml', 'Standing Pouch 1Kg', 'Botol 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: 'Standing Pouch 1Kg', packagingType: 'Standing Pouch', targetAudience: 'Retail & Refill', cartonCount: '24 pcs / ctn' },
      { size: 'Botol 1 Liter', packagingType: 'Botol 1L', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: 'Jerigen 5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Hotel & Spa', cartonCount: '4 jrg / ctn' },
      { size: 'Jerigen 20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Shower Cream Yogurt & Goat Milk - 1 L - 1'),
    howToUse: 'Tuangkan pada shower puff atau telapak tangan, busakan ke seluruh tubuh yang basah, lalu bilas hingga bersih.',
    naturalIngredients: ['Goat Milk Extract', 'Glycerin', 'Cocamidopropyl Betaine', 'Pearl Powder'],
    popular: true,
    isSalonFavorite: true
  },

  // 19. SHOWER GEL
  {
    id: 'heviny-shower-gel',
    name: 'Heviny Shower Gel',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Sabun Mandi Gel Segar Pembersih Keringat & Aromaterapi Tropis',
    description: 'Sabun mandi bertekstur gel transparan yang menyegarkan. Menghilangkan keringat, debu, dan bau badan seketika dengan busa lembut berlimpah dan aroma segar tahan lama.',
    heroIngredient: 'Botanical Fruit Extracts, Lavender & Lemongrass',
    benefits: [
      'Sensasi mandi ekstra segar dan bersemangat',
      'Membersihkan minyak dan keringat tanpa membuat kulit terasa ketarik',
      'Pilihan aroma segar tropis yang menenangkan pikiran',
      'Tersedia kemasan standing pouch 1Kg hingga jerigen 20 Liter'
    ],
    variantsList: [
      { name: 'Shower Gel Avocado Green Tea', sku: 'SHOGELAVOSTA1 / SHOGELAVO1 / SHOGELAVO5 / SHOGELAVO20', notes: 'Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Shower Gel Biru (Ocean)', sku: 'SHOGELBIRSTA1 / SHOGELBIR1 / SHOGELBIR5 / SHOGELBIR20', notes: 'Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Shower Gel Coconut', sku: 'SHOGELCOCSTA1 / SHOGELCOC1 / SHOGELCOC5 / SHOGELCOC20', notes: 'Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Shower Gel Lavender', sku: 'SHOGELLAVSTA1 / SHOGELLAV1 / SHOGELLAV5 / SHOGELLAV20', notes: 'Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Shower Gel Lemongrass', sku: 'SHOGELLEMSTA1 / SHOGELLEM1 / SHOGELLEM5 / SHOGELLEM20', notes: 'Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' },
      { name: 'Shower Gel Merah Muda (Rose)', sku: 'SHOGELMERSTA1 / SHOGELMER1 / SHOGELMER5 / SHOGELMER20', notes: 'Standing Pouch 1Kg, Botol 1L, Jerigen 5L, Jerigen 20L' }
    ],
    availableSizes: ['Standing Pouch 1Kg', 'Botol 1 Liter', 'Jerigen 5 Liter', 'Jerigen 20 Liter'],
    packagingSpecs: [
      { size: 'Standing Pouch 1Kg', packagingType: 'Standing Pouch', targetAudience: 'Retail & Refill', cartonCount: '24 pcs / ctn' },
      { size: 'Botol 1 Liter', packagingType: 'Botol 1L', targetAudience: 'Salon & Spa', cartonCount: '12 pcs / ctn' },
      { size: 'Jerigen 5 Liter', packagingType: 'Jerigen 5L', targetAudience: 'Hotel & Gym', cartonCount: '4 jrg / ctn' },
      { size: 'Jerigen 20 Liter', packagingType: 'Jerigen 20L', targetAudience: 'Ukuran Besar', cartonCount: '1 jrg' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Shower Gel Avocado & Green Tea - 1 L - 1'),
    howToUse: 'Gunakan saat mandi, tuangkan pada spons basah, gosokkan merata ke seluruh badan hingga berbusa melimpah, lalu bilas.',
    naturalIngredients: ['Aqua', 'Sodium Laureth Sulfate', 'Citric Acid', 'Fruit Extracts', 'Fragrance'],
    popular: true,
    isSalonFavorite: true
  },

  // 20. VARNISH REMOVER
  {
    id: 'heviny-varnish-remover',
    name: 'Heviny Varnish Remover',
    catalogCategory: 'Nail Care',
    category: 'nail',
    categories: ['nail', 'body'],
    categoryLabel: 'Perawatan Kuku',
    subtitle: 'Cairan Penghapus Cat Kuku Cepat Bersih Tanpa Merusak & Mengeringkan Kuku',
    description: 'Pembersih dan pelarut cat kuku (varnish remover) berkualitas tinggi dari Heviny. Membersihkan cat kuku secara menyeluruh dalam hitungan detik, tidak membuat kuku putih berkapur atau rapuh, serta menjaga kilau alami kuku.',
    heroIngredient: 'Pure Enriched Solvents & Conditioning Emollient',
    benefits: [
      'Melarutkan cat kuku tebal dan glitter dengan cepat dan bersih',
      'Tidak meninggalkan residu putih kering atau rasa panas pada kuku',
      'Tersedia ukuran botol praktis retail hingga botol 1 Liter salon',
      'Juga tersedia cairan Pengencer Kutek (Nail Polish Thinner) & Cuticle Cream'
    ],
    variantsList: [
      { name: 'Varnish Remover 35 ml', sku: 'ACEHEV35', notes: 'Kemasan Botol Praktis 35ml' },
      { name: 'Varnish Remover 60 ml', sku: 'ACEHEV60', notes: 'Kemasan Botol Praktis 60ml' },
      { name: 'Varnish Remover 110 ml', sku: 'ACEHEV110', notes: 'Kemasan Botol 110ml' },
      { name: 'Varnish Remover 1 Liter (Hijau)', sku: 'ACEHEV1HIJ', notes: 'Kemasan Botol 1L Salon' },
      { name: 'Pengencer Kutek 110 ml', sku: 'PEN-KU110', notes: 'Nail Polish Thinner 110ml' },
      { name: 'Pengencer Kutek 1 Liter', sku: 'PEN-KU1', notes: 'Nail Polish Thinner Salon 1L' },
      { name: 'Cuticle Cream Standing Pouch 1 Kg', sku: 'CUTCRESTA1', notes: 'Krim Pelembut Kutikula 1Kg' }
    ],
    availableSizes: ['35 ml', '60 ml', '110 ml', 'Standing Pouch 1Kg', 'Botol 1 Liter'],
    packagingSpecs: [
      { size: '35 ml / 60 ml', packagingType: 'Botol Kaca/Plastik', targetAudience: 'Retail & Personal', cartonCount: '144 / 72 pcs' },
      { size: '110 ml', packagingType: 'Botol Plastik', targetAudience: 'Retail / Salon', cartonCount: '48 pcs / ctn' },
      { size: '1 Liter', packagingType: 'Botol Salon 1L', targetAudience: 'Salon Manicure & Nail Studio', cartonCount: '12 pcs / ctn' },
      { size: 'Standing Pouch 1Kg', packagingType: 'Standing Pouch', targetAudience: 'Salon & Spa', cartonCount: '24 pcs / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Varnish Remover (Hijau) - 1 L - 1'),
    howToUse: 'Tuangkan Varnish Remover secukupnya pada kapas bersih, tempelkan pada kuku selama 3-5 detik, lalu usap perlahan hingga cat kuku terangkat bersih.',
    naturalIngredients: ['Solvent Complex', 'Aqua', 'Fragrance', 'Tocopheryl Acetate', 'Emollient Oil'],
    popular: true,
    isSalonFavorite: true
  },

  // 21. BODY MASK
  {
    id: 'heviny-body-mask',
    name: 'Heviny Body Mask',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Masker Badan Spa Pengencang & Pencerah Kulit Alami',
    description: 'Masker badan lumpur & herbal alami yang diformulasikan untuk mengencangkan pori-pori kulit tubuh, mencerahkan warna kulit, dan menutrisi kulit setelah proses scrub/lulur.',
    heroIngredient: 'Kaolin Clay, Bengkoang, Coklat & Herbal Rempah Jawa',
    benefits: [
      'Mengencangkan dan meremajakan tekstur kulit tubuh',
      'Membantu mendetoksifikasi kotoran pada pori-pori',
      'Mencerahkan kulit kusam setelah perawatan spa',
      'Mudah dibilas dan meninggalkan wangi relaksasi yang awet'
    ],
    variantsList: [
      { name: 'Body Masker Avocado Milky 1 Kg', sku: 'BODMASAVO1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Bengkuang 1 Kg', sku: 'BODMASBEN1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Coklat 1 Kg', sku: 'BODMASCOK1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Frangipani 1 Kg', sku: 'BODMASFRA1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Green Tea 1 Kg', sku: 'BODMASGRE1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Javanese Rempah 1 Kg', sku: 'BODMASJAV1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Milky 1 Kg', sku: 'BODMASMIL1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Sandalwood 1 Kg', sku: 'BODMASSAN1', notes: 'Pot 1 Kg' },
      { name: 'Body Masker Strawberry 1 Kg', sku: 'BODMASSTR1', notes: 'Pot 1 Kg' }
    ],
    availableSizes: ['Pot 1 Kg'],
    packagingSpecs: [
      { size: '1 Kg (Pot Jar)', packagingType: 'Pot Jar 1Kg', targetAudience: 'Spa & Salon', cartonCount: '12 pcs / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Body Masker Avocado Milky - 1 kg - 1'),
    howToUse: 'Setelah luluran, oleskan masker badan merata ke seluruh tubuh. Diamkan 15-20 menit hingga setengah kering, lalu bilas bersih dengan air hangat.',
    naturalIngredients: ['Kaolin', 'Pachyrhizus Erosus Extract', 'Milk Extract', 'Green Tea Extract'],
    popular: true,
    isSalonFavorite: true
  },

  // 22. MILK BATH
  {
    id: 'heviny-milk-bath',
    name: 'Heviny Milk Bath',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Serbuk Mandi Susu Murni untuk Berendam Lembut & Mencerahkan Kulit',
    description: 'Serbuk mandi susu murni berkualitas tinggi untuk berendam di bathtub. Mengandung protein susu dan asam laktat alami yang membantu melembutkan kulit kering, mengangkat sel kulit mati secara lembut, dan menjadikan kulit halus bercahaya.',
    heroIngredient: 'Hydrolyzed Milk Protein, Honey Extract & Rose Water',
    benefits: [
      'Menjadikan kulit selembut sutra saat berendam',
      'Membantu mencerahkan warna kulit secara alami',
      'Memberikan keharuman susu mewah yang menenangkan',
      'Tersedia kemasan sachet 100g, 500g, hingga 1 Kg'
    ],
    variantsList: [
      { name: 'Milk Bath 100 gr', sku: 'MILBAT100', notes: 'Kemasan Sachet Praktis 100gr' },
      { name: 'Milk Bath 500 gr', sku: 'MILBAT500', notes: 'Kemasan Sedang 500gr' },
      { name: 'Milk Bath 1 Kg', sku: 'MILBAT1', notes: 'Kemasan Besar Salon 1Kg' }
    ],
    availableSizes: ['100 gr', '500 gr', '1 Kg'],
    packagingSpecs: [
      { size: '100 gr', packagingType: 'Pouch Sachet', targetAudience: 'Retail & Travel', cartonCount: '48 pcs / ctn' },
      { size: '500 gr', packagingType: 'Pouch Jar', targetAudience: 'Spa & Personal', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg', packagingType: 'Pouch 1Kg', targetAudience: 'Spa & Resort', cartonCount: '12 pcs / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Milk Bath - 1 kg - 3'),
    howToUse: 'Larutkan 50-100 gram serbuk Milk Bath ke dalam air hangat di bathtub. Rendam tubuh selama 15-20 menit untuk penyerapan optimal.',
    naturalIngredients: ['Hydrolyzed Milk Protein', 'Zea Mays Starch', 'Sodium Bicarbonate', 'Fragrance'],
    popular: true,
    isSalonFavorite: true
  },

  // 23. BATH SALT
  {
    id: 'heviny-bath-salt',
    name: 'Heviny Bath Salt',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Garam Rendam Spa Kaya Mineral Alami untuk Relaksasi Otot & Kaki',
    description: 'Garam kristal rendam murni dengan perpaduan minyak esensial aromaterapi. Sangat efektif untuk meredakan pegal-pegal otot, melancarkan peredaran darah pada kaki (foot spa), dan menghilangkan bau badan/kaki.',
    heroIngredient: 'Natural Mineral Sea Salt, Magnesium & Essential Aromatherapy',
    benefits: [
      'Meredakan ketegangan dan kram otot yang lelah',
      'Menghilangkan aroma tidak sedap pada kaki',
      'Memberikan efek menenangkan pikiran dan meredakan stres',
      'Pilihan varian wangi bunga dan rempah segar lengkap'
    ],
    variantsList: [
      { name: 'Bath Salt Putih Frangipani', sku: 'BATSALFRA500 / BATSALFRA1', notes: 'Standing Pouch 500g & 1 Kg' },
      { name: 'Bath Salt Hijau Green Tea', sku: 'BATSALGRE500 / BATSALGRE1', notes: 'Standing Pouch 500g & 1 Kg' },
      { name: 'Bath Salt Biru Jasmine', sku: 'BATSALJAS500 / BATSALJAS1', notes: 'Standing Pouch 500g & 1 Kg' },
      { name: 'Bath Salt Ungu Lavender 1 Kg', sku: 'BATSALLAV1', notes: 'Kemasan 1 Kg' },
      { name: 'Bath Salt Hijau Lemongrass', sku: 'BATSALLEM500 / BATSALLEM1', notes: 'Standing Pouch 500g & 1 Kg' },
      { name: 'Bath Salt Biru Peppermint 1 Kg', sku: 'BATSALPEP1', notes: 'Kemasan 1 Kg' },
      { name: 'Bath Salt Merah Muda Rose', sku: 'BATSALROS500 / BATSALROS1', notes: 'Standing Pouch 500g & 1 Kg' },
      { name: 'Bath Salt Kuning Sandalwood', sku: 'BATSALSAN500 / BATSALSAN1', notes: 'Standing Pouch 500g & 1 Kg' }
    ],
    availableSizes: ['Standing Pouch 500g', '1 Kg'],
    packagingSpecs: [
      { size: '500 gram (Pouch)', packagingType: 'Standing Pouch', targetAudience: 'Retail & Spa', cartonCount: '24 pcs / ctn' },
      { size: '1 Kg', packagingType: 'Pouch 1Kg', targetAudience: 'Spa & Reflexology', cartonCount: '12 pcs / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Bath Salt Frangipani - 1 kg - 1'),
    howToUse: 'Larutkan 2-3 sendok makan garam rendam ke dalam baskom air hangat untuk merendam kaki, atau 100g ke dalam bathtub untuk berendam seluruh tubuh.',
    naturalIngredients: ['Sodium Chloride (Sea Salt)', 'Magnesium Sulfate', 'Essential Oil Blends', 'Natural Fragrance'],
    popular: true,
    isSalonFavorite: true
  },

  // 24. FOOT CREAM
  {
    id: 'heviny-foot-cream',
    name: 'Heviny Foot Cream',
    catalogCategory: 'Body Care',
    category: 'body',
    categoryLabel: 'Perawatan Tubuh',
    subtitle: 'Krim Pelembut Tumit Kering, Kasar & Pecah-Pecah',
    description: 'Krim perawatan kaki dengan formulasi khusus kaya pelembap emolien untuk mengatasi masalah kulit tumit yang pecah-pecah, kapalan, dan kasar. Menjadikan kulit kaki kembali halus, lembut, dan lembap.',
    heroIngredient: 'Urea, Dimethicone, Allantoin & Peppermint Refreshing Oil',
    benefits: [
      'Memperbaiki tekstur tumit kaki yang pecah-pecah dan bersisik',
      'Melembutkan kapalan dan kulit telapak kaki yang tebal',
      'Sensasi segar dingin yang menghilangkan rasa lelah di kaki',
      'Cepat meresap tanpa meninggalkan rasa licin berbahaya'
    ],
    variantsList: [
      { name: 'Foot Cream 50 g', sku: 'FOOCRE50', notes: 'Kemasan Pot Praktis 50 gram' }
    ],
    availableSizes: ['Pot 50 gram'],
    packagingSpecs: [
      { size: '50 gram', packagingType: 'Pot Jar', targetAudience: 'Retail & Personal', cartonCount: '48 pcs / ctn' }
    ],
    bpomNumber: 'BPOM RI Terdaftar',
    halalCertified: true,
    image: productImage('HEVINY Foot Cream - 50 g - 4'),
    howToUse: 'Bersihkan kaki dengan air hangat, oleskan Foot Cream secukupnya pada tumit dan area kaki yang kering/pecah-pecah. Gunakan 2 kali sehari secara rutin.',
    naturalIngredients: ['Aqua', 'Petrolatum', 'Urea', 'Glycerin', 'Menthol'],
    popular: true,
    isSalonFavorite: true
  }
];
