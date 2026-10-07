const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');
// Replace all duplicate imports
content = content.replace(/(import \{ WhatsAppFloat \} from '\.\/components\/WhatsAppFloat';\s*)+/g, "import { WhatsAppFloat } from './components/WhatsAppFloat';\n");
fs.writeFileSync('src/App.tsx', content, 'utf-8');
