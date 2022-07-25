"use strict";
exports.__esModule = true;
var routes_1 = require("./src/router/routes");
var fs = require("fs");
var path = require("path");
var base_url = 'https://www.lablnet.com/';
var sitemap_string = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">";
// loop thru routes and add to sitemap
routes_1["default"].forEach(function (route) {
    if (route.name !== '404') {
        sitemap_string += "<url>\n            <loc>" + base_url + route.path + "</loc>\n            <lastmod>" + new Date().toISOString() + "</lastmod>\n            <changefreq>monthly</changefreq>\n            <priority>0.5</priority>\n        </url>" + '\n';
    }
});
sitemap_string += "</urlset>";
// save sitema to public directory.
var sitemap_path = path.join(__dirname, './public/sitemap.xml');
fs.writeFileSync(sitemap_path, sitemap_string);
