export type ActivePage = 'home' | 'products' | 'about' | 'journal' | 'contact';

export type ProductCategory = 'all' | 'body' | 'hair' | 'face' | 'nail' | 'salon_pro';

export interface ProductVariantItem {
  name: string;
  sku?: string;
  latinName?: string;
  notes?: string;
}

export interface ProductPackingSpec {
  size: string;
  packagingType: string; // e.g. 'Pot', 'Jerrycan', 'Bottle', 'Refill Bag', 'Standing Pouch'
  targetAudience: string;
  cartonCount?: string; // e.g. '24 pcs / karton'
  cartonDimensions?: string; // e.g. '30 x 28 x 13.5 cm'
}

export interface Product {
  id: string;
  name: string;
  catalogCategory: string;
  category: 'body' | 'hair' | 'face' | 'nail' | 'salon_pro';
  categories?: ('body' | 'hair' | 'face' | 'nail' | 'salon_pro')[];
  categoryLabel: string;
  subtitle: string;
  description: string;
  heroIngredient: string;
  heroIngredientIcon?: string;
  benefits: string[];
  variantsList?: ProductVariantItem[];
  availableSizes: string[];
  packagingSpecs: ProductPackingSpec[];
  bpomNumber: string;
  halalCertified: boolean;
  image: string;
  howToUse: string;
  naturalIngredients: string[];
  popular?: boolean;
  isSalonFavorite?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  summary: string;
  image: string;
  readTime: string;
  contentParagraphs: string[];
  recommendedProducts: string[];
  tags?: string[];
  keyTakeaways?: string[];
  metaDescription?: string;
}

export interface IngredientHighlight {
  id: string;
  name: string;
  latinName: string;
  origin: string;
  description: string;
  benefits: string[];
  image: string;
  associatedProducts: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  businessName?: string;
  city: string;
  avatar: string;
  rating: number;
  comment: string;
  productUsed: string;
}

export interface FaqItem {
  id: string;
  category: 'Produk' | 'Kemasan & Varian' | 'Bahan Alami' | 'Legalitas & Halal' | 'Informasi Perusahaan';
  question: string;
  answer: string;
}

export interface AuditPoint {
  category: 'UX/UI' | 'Konten & Copywriting' | 'Arsitektur Informasi' | 'Konversi Bisnis (B2B/B2C)';
  issueOldSite: string;
  solutionNewSite: string;
  impact: 'High' | 'Critical' | 'Medium';
}

declare global {
  const __PRODUCT_PHOTO_FILES__: string[];
}
