const fs = require('fs');

let content = fs.readFileSync('src/components/ArticlesSection.tsx', 'utf-8');

if (!content.includes('useLanguage')) {
    content = content.replace("import { \n  ArrowRightIcon", "import { useLanguage } from '../LanguageContext';\nimport { \n  ArrowRightIcon");
    content = content.replace("export const ArticlesSection: React.FC<ArticlesSectionProps> = ({", "export const ArticlesSection: React.FC<ArticlesSectionProps> = (props) => {\n  const { onSelectProductByName } = props;\n  const { language, t } = useLanguage();\n  const temp = ({");
    content = content.replace("onSelectProductByName\n}) => {", "onSelectProductByName\n  });");
}

content = content.replace(">ARTIKEL EDUKASI & TIPS RESMI HEVINY<", ">{t('officialArticles')}<");
content = content.replace(">Panduan Edukasi & Ritual Perawatan Botani<", ">{t('careGuide')}<");
content = content.replace("Pelajari wawasan perawatan rambut salon profesional, manfaat lulur rempah tradisional, hingga panduan menjaga keindahan kuku alami langsung dari formulator kami.", "{t('careGuideDescription')}");
content = content.replace(">Jelajahi Artikel<", ">{t('exploreArticles')}<");
content = content.replace(">Baca Artikel<", ">{t('readArticle')}<");
content = content.replace(">Tutup Artikel<", ">{t('closeArticle')}<");
content = content.replace(">Intisari Riset & Manfaat Formulasi:<", ">{t('articleHighlights')}<");
content = content.replace(">Rekomendasi Produk Formulasi Terkait:<", ">{t('relatedProducts')}<");
content = content.replace(">{copied ? 'Tautan Disalin' : 'Bagikan'}<", ">{copied ? (language === 'en' ? 'Link Copied' : 'Tautan Disalin') : (language === 'en' ? 'Share' : 'Bagikan')}<");
content = content.replace(">Tutup Artikel<", ">{t('closeArticle')}<");

fs.writeFileSync('src/components/ArticlesSection.tsx', content, 'utf-8');
