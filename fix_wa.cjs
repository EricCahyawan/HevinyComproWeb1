const fs = require('fs');
let content = fs.readFileSync('src/components/WhatsAppFloat.tsx', 'utf-8');
content = content.replace(" animate-bounce-soft", "");
fs.writeFileSync('src/components/WhatsAppFloat.tsx', content, 'utf-8');
