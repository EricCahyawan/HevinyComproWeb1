const fs = require('fs');

let content = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf-8');

if (!content.includes('useLanguage')) {
    content = content.replace("import { motion, AnimatePresence } from 'motion/react';", "import { motion, AnimatePresence } from 'motion/react';\nimport { useLanguage } from '../LanguageContext';");
    content = content.replace('export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {', 'export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {\n  const { language, t } = useLanguage();');
}

content = content.replace(">Katalog Lengkap & Edukasi Bahan Alami<", ">{language === 'en' ? 'Complete Catalog & Botanical Ingredients' : 'Katalog Lengkap & Edukasi Bahan Alami'}<");
content = content.replace(">Buka PDF Katalog<", ">{language === 'en' ? 'Open PDF Catalog' : 'Buka PDF Katalog'}<");
content = content.replace("Pencarian produk & filter varian...", "{language === 'en' ? 'Search products & variants...' : 'Pencarian produk & filter varian...'}");
content = content.replace(">Hanya Favorit Salon<", ">{language === 'en' ? 'Salon Favorites Only' : 'Hanya Favorit Salon'}<");
content = content.replace(">Menampilkan<", ">{language === 'en' ? 'Showing' : 'Menampilkan'}<");
content = content.replace(">produk resmi Heviny<", ">{language === 'en' ? 'official Heviny products' : 'produk resmi Heviny'}<");
content = content.replace(">Produk Tidak Ditemukan<", ">{language === 'en' ? 'No Products Found' : 'Produk Tidak Ditemukan'}<");
content = content.replace(">Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.<", ">{language === 'en' ? 'Try using a different keyword or category.' : 'Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.'}<");
content = content.replace(">Reset Pencarian<", ">{language === 'en' ? 'Reset Search' : 'Reset Pencarian'}<");
content = content.replace(">Lihat Varian & Ukuran<", ">{language === 'en' ? 'View Variants & Sizes' : 'Lihat Varian & Ukuran'}<");

content = content.replace("label: 'Semua Produk'", "label: t('allProducts')");
content = content.replace("label: 'Perawatan Tubuh'", "label: t('bodyCare')");
content = content.replace("label: 'Perawatan Rambut'", "label: t('hairCare')");
content = content.replace("label: 'Perawatan Wajah'", "label: t('faceCare')");

fs.writeFileSync('src/components/ProductCatalog.tsx', content, 'utf-8');
