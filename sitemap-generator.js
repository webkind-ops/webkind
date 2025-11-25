// sitemap-generator.js
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === ROUTES (generated from your App.jsx / main.jsx) ===
const routes = [
  '/',
  '/work',
  '/aim',
  '/services',
  '/pricing',
  '/contact'
];
// =======================================================

const siteUrl = 'https://www.webkind.space'; // <- change to your real custom domain
const now = new Date().toISOString();

function makeUrl(loc, lastmod = now, changefreq = 'monthly', priority = 0.5) {
  return `  <url>
    <loc>${siteUrl}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = routes.map(r => makeUrl(r)).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outDir = path.join(__dirname, 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml generated at ./public/sitemap.xml');
