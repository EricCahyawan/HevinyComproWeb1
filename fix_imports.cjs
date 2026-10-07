const fs = require('fs');

function addImport(file) {
    let content = fs.readFileSync(file, 'utf-8');
    if (!content.includes('import { useLanguage } from')) {
        content = content.replace("import React", "import { useLanguage } from '../LanguageContext';\nimport React");
        fs.writeFileSync(file, content, 'utf-8');
    }
}

addImport('src/components/ArticlesSection.tsx');
addImport('src/components/Hero.tsx');
