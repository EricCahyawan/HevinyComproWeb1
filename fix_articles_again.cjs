const fs = require('fs');

let content = fs.readFileSync('src/components/ArticlesSection.tsx', 'utf-8');

content = content.replace("export const ArticlesSection: React.FC<ArticlesSectionProps> = (props) => {\n  const { onSelectProductByName } = props;\n  const { language, t } = useLanguage();\n  const temp = ({ onSelectProductByName }) => {", "export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectProductByName }) => {\n  const { language, t } = useLanguage();");

fs.writeFileSync('src/components/ArticlesSection.tsx', content, 'utf-8');
