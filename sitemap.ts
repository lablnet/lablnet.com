import routes from './src/router/routes';
import * as fs from 'fs';
import * as path from 'path';

let base_url = 'https://www.lablnet.com/';
let sitemap_string: string = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// loop thru routes and add to sitemap
routes.forEach(route => {
    if (route.name !== '404') {
        sitemap_string += `<url>
            <loc>${base_url}${route.path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>` + '\n';
    }
});

sitemap_string += `</urlset>`;

// save sitema to public directory.
let sitemap_path: string = path.join(__dirname, './public/sitemap.xml')
fs.writeFileSync(sitemap_path, sitemap_string)
