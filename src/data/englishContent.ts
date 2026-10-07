export const ENGLISH_INGREDIENTS: Record<string, {
  name: string;
  origin: string;
  description: string;
  benefits: string[];
}> = {
  'bunga-mawar': {
    name: 'Red Rose Extract',
    origin: 'East Java Highlands',
    description: 'Distilled fresh rose petals create an aromatic, antioxidant-rich rose water that helps balance skin pH and refine the look of pores.',
    benefits: ['Balances the skin’s natural pH', 'Soothes irritation and redness', 'A gentle base for traditional masks', 'A calming aromatherapy experience']
  },
  'susu-kambing': {
    name: 'Milk Protein & Yogurt',
    origin: 'Local Organic Farms',
    description: 'Natural lactic acid and milk proteins gently lift dead skin cells, support elasticity, and provide lasting moisture.',
    benefits: ['Brightens dull-looking skin', 'Gently exfoliates without irritation', 'Helps lock in moisture for up to 24 hours', 'Leaves skin feeling supple and smooth']
  },
  'minyak-kemiri': {
    name: 'Candlenut Oil & Ginseng Extract',
    origin: 'Indonesia’s Botanical Heritage',
    description: 'A traditional Indonesian hair-care ingredient rich in essential fatty acids and follicle-supporting nutrients to help strengthen hair from root to tip.',
    benefits: ['Helps maintain naturally dark, glossy hair', 'Helps reduce breakage and hair fall', 'Supports fuller-looking hair', 'Helps soothe dandruff and an itchy scalp']
  },
  'lidah-buaya': {
    name: 'Fresh Aloe Vera Gel Extract',
    origin: 'Indonesia’s Tropical Farms',
    description: 'Fresh aloe vera is rich in vitamins A, C, and E, as well as proteolytic enzymes that soothe the scalp and hydrate dry hair.',
    benefits: ['Cools a tired scalp', 'Softens coarse hair', 'Hydrates without a sticky feel', 'Helps soothe inflammation and itchiness']
  },
  'bengkoang-nusantara': {
    name: 'Jicama & Licorice Root',
    origin: 'Central and East Java',
    description: 'Jicama contains natural isoflavones that help gradually brighten the look of uneven, dull skin on the face and body.',
    benefits: ['Helps brighten uneven-looking skin', 'Smooths rough skin texture', 'Lifts dead skin cells during exfoliation', 'Helps soften the appearance of dark spots']
  },
  'minyak-zaitun-kelapa': {
    name: 'Olive & Virgin Coconut Oils',
    origin: 'Tropical Coconut Plantations',
    description: 'Plant-based oils that absorb easily into skin and hair, providing intensive moisture and supporting the skin’s natural lipid barrier.',
    benefits: ['Nourishes dry hair', 'Provides a smooth massage glide', 'Helps prevent dry, flaky skin', 'A source of natural antioxidants']
  }
};

export const ENGLISH_TESTIMONIALS: Record<string, { role: string; comment: string }> = {
  'testi-1': {
    role: 'Owner & Head Beautician',
    comment: 'We have used Heviny Creambath with Candlenut and Ginseng, along with Hair Mask, for years. Our salon clients love the lasting fragrance and how soft their hair feels. The pricing also works well for salon margins.'
  },
  'testi-2': {
    role: 'Purchasing & Amenities Manager',
    comment: 'Heviny supplies our hotel with bulk shower gel, bath foam, and 5-liter shampoo. The lather is gentle, does not dry guests’ skin, and the packaging arrives without leaks. The service is responsive and professional.'
  },
  'testi-3': {
    role: 'Verified Buyer',
    comment: 'A great shopping experience. The seller responds quickly and checks in when an item is out of stock. This is my second purchase of the soap and shampoo. They smell lovely and are affordable.'
  },
  'testi-4': {
    role: 'Home User',
    comment: 'Heviny Foot Cream has been a real help for my severely cracked heels. After applying it every night for a week, my heels felt smooth again, with a refreshing mint sensation.'
  },
  'testi-5': {
    role: 'Lead Hair Stylist & Studio Founder',
    comment: 'Heviny Hair Tonic Anti Dandruff and Hair Serum are staples in our scalp treatments. Clients enjoy the cooling feel, and the fresh, refined fragrance is never overpowering.'
  }
};

export const ENGLISH_FAQS: Record<string, { category: string; question: string; answer: string }> = {
  'faq-1': {
    category: 'Compliance & Halal',
    question: 'Are all Heviny products registered with BPOM RI and officially Halal-certified?',
    answer: 'Yes. All Heviny products are made according to CPKB (Good Cosmetics Manufacturing Practices), have official BPOM RI notifications, and hold Halal certification (ID35110019295530624) from BPJPH, Ministry of Religious Affairs of Indonesia.'
  },
  'faq-2': {
    category: 'Products',
    question: 'What personal-care categories does Heviny produce?',
    answer: 'Heviny makes botanical-inspired personal-care products across Hair Care (Creambath, Hair Tonic, Shampoo, Hair Mask, and Conditioner), Body Care (traditional Midodareni scrub, Body Scrub, Body Lotion, Shower Gel, and Massage Oil), Face Care (Rose Water, Face Tonic, and Milk Cleanser), and Nail Care.'
  },
  'faq-3': {
    category: 'Packaging & Sizes',
    question: 'What packaging sizes are available for Heviny products?',
    answer: 'Heviny products come in personal sizes (200 ml, 350 ml, and 250 g or 500 g jars) as well as salon and spa sizes (1-liter bottles, 1-kg refill pouches, 1- to 4-kg jars, and 5- or 20-liter jerrycans).'
  },
  'faq-4': {
    category: 'Natural Ingredients',
    question: 'Which key natural ingredients are used in Heviny products?',
    answer: 'Heviny formulas feature carefully selected ingredients such as Red Rose Extract, Candlenut Oil, Aloe Vera Extract, Jicama, Olive Oil, Ginseng Extract, and Milk Protein.'
  },
  'faq-5': {
    category: 'Company Information',
    question: 'What is the relationship between Hana Cosmetics and the Heviny brand?',
    answer: 'Hana Cosmetics is the manufacturer behind Heviny, producing and developing the brand’s products since 2006. Heviny’s CPKB, BPOM RI, and Halal certifications are held under Hana Cosmetics.'
  },
  'faq-6': {
    category: 'Company Information',
    question: 'How can I contact Hana Cosmetics / Heviny about wholesale orders or distribution?',
    answer: 'Contact Hana Cosmetics in Surabaya using the form on the Contact page or by email. We supply salons, barbershops, spas, cosmetics retailers, resellers, and private-label partners across Indonesia.'
  }
};