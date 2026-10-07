const fs = require('fs');

let content = fs.readFileSync('src/components/SkinConsultation.tsx', 'utf-8');

if (!content.includes('useLanguage')) {
    content = content.replace("import { \n  ArrowRightIcon,", "import { useLanguage } from '../LanguageContext';\nimport { \n  ArrowRightIcon,");
    content = content.replace('export const SkinConsultation: React.FC<SkinConsultationProps> = ({ onSelectProduct }) => {', 'export const SkinConsultation: React.FC<SkinConsultationProps> = ({ onSelectProduct }) => {\n  const { language, t } = useLanguage();');
}

// Just doing a simple approach for steps. Instead of changing everything via replace, I'll write a Python or node script to carefully find and replace.
