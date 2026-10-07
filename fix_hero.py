import re

with open('src/components/Hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add useLanguage import if not exists
if 'useLanguage' not in content:
    content = content.replace("import { motion, useScroll, useTransform } from 'motion/react';", "import { motion, useScroll, useTransform } from 'motion/react';\nimport { useLanguage } from '../LanguageContext';")
    content = content.replace('export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {', 'export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {\n  const { language, t } = useLanguage();')

# Replace texts
content = content.replace('>EST. 2006 • HANA COSMETICS<', '>{language === "en" ? "EST. 2006 • HANA COSMETICS" : "EST. 2006 • HANA COSMETICS"}<')
content = content.replace('>Kemurnian Ekstrak Botani<', '>{t("heroTitle")}<')
content = content.replace('>Untuk Mahkota & Kulit Alami<', '>{t("heroSubtitle")}<')
content = content.replace('Rangkaian kosmetik perawatan rambut, tubuh, dan spa terpercaya bersertifikasi CPKB BPOM RI & Halal. Menghadirkan kualitas terbaik dengan harga terjangkau untuk salon kecantikan dan perawatan harian di rumah.', '{t("heroDescription")}')
content = content.replace('>Jelajahi Produk<', '>{language === "en" ? "Explore Products" : "Jelajahi Produk"}<')
content = content.replace('>100% BPOM RI Resmi<', '>{language === "en" ? "100% BPOM RI Official" : "100% BPOM RI Resmi"}<')
content = content.replace('>Halal BPJPH Kemenag<', '>{language === "en" ? "Halal BPJPH Certified" : "Halal BPJPH Kemenag"}<')
content = content.replace('>Standar CPKB<', '>{language === "en" ? "CPKB Standard" : "Standar CPKB"}<')
content = content.replace('>Ekstrak Mawar, Bengkuang, Kemiri & Lidah Buaya<', '>{language === "en" ? "Rose, Jicama, Candlenut & Aloe Vera Extracts" : "Ekstrak Mawar, Bengkuang, Kemiri & Lidah Buaya"}<')
content = content.replace('Formula ramah kulit berbahan ekstrak botani pilihan untuk kelembapan ekstra, keharuman mewah, dan nutrisi tahan lama.', '{language === "en" ? "Skin-friendly formula made from selected botanical extracts for extra moisture, luxurious fragrance, and long-lasting nourishment." : "Formula ramah kulit berbahan ekstrak botani pilihan untuk kelembapan ekstra, keharuman mewah, dan nutrisi tahan lama."}')
content = content.replace('>Lihat Semua Produk<', '>{language === "en" ? "View All Products" : "Lihat Semua Produk"}<')
content = content.replace('>Pilihan Retail & Jerigen 5L<', '>{language === "en" ? "Retail & 5L Jerrycan Options" : "Pilihan Retail & Jerigen 5L"}<')
content = content.replace('>PRODUK UNGGULAN & VARIAN BOTANI<', '>{language === "en" ? "FEATURED PRODUCTS & BOTANICAL VARIANTS" : "PRODUK UNGGULAN & VARIAN BOTANI"}<')
content = content.replace('>Semua Produk<', '>{language === "en" ? "All Products" : "Semua Produk"}<')

with open('src/components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
