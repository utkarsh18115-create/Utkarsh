import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const output = join(process.cwd(), '.next', 'server', 'app', 'index.html');
let html;
try {
  html = readFileSync(output, 'utf8');
} catch {
  throw new Error(`Could not inspect the production page at ${output}`);
}

const marker = '[Placeholder]';
const encoded = ['&#91;Placeholder&#93;', '&#x5b;Placeholder&#x5d;', '\\u005bPlaceholder\\u005d'];
if ([marker, ...encoded].some(value => html.toLowerCase().includes(value.toLowerCase()))) {
  throw new Error('Production HTML contains a visible placeholder marker.');
}
console.log('Production HTML placeholder check passed.');
