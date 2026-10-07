const fs = require('fs');
let content = fs.readFileSync('src/components/WhatsAppFloat.tsx', 'utf-8');

content = content.replace("bottom-8 right-8", "bottom-10 right-10");

fs.writeFileSync('src/components/WhatsAppFloat.tsx', content, 'utf-8');
