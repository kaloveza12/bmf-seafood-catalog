import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const pages=['index.html','order/index.html','wholesale-mookata/index.html','shabu-supplies/index.html','seafood-wholesale/index.html','restaurant-startup/index.html','delivery/index.html','about-bmf/index.html','privacy/index.html'];
const failures=[];
const pass=[];
const assert=(condition,message)=>condition?pass.push(message):failures.push(message);

for(const file of pages){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  const label=file.replace('/index.html','/');
  assert((html.match(/<h1\b/gi)||[]).length===1,`${label}: exactly one H1`);
  assert(/<title>[^<]{10,}<[\/]title>/i.test(html),`${label}: title present`);
  assert(/<meta\s+name="description"\s+content="[^"]{50,}"/i.test(html),`${label}: meta description present`);
  assert(/<link\s+rel="canonical"\s+href="https:\/\/price\.bmf-seafood\.com\/[^"]*"/i.test(html),`${label}: canonical present`);
  assert(/property="og:title"/i.test(html)&&/property="og:description"/i.test(html)&&/property="og:image"/i.test(html),`${label}: Open Graph complete`);
  for(const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<[\/]script>/gi)){
    try{JSON.parse(match[1]);pass.push(`${label}: JSON-LD parses`)}catch(error){failures.push(`${label}: invalid JSON-LD (${error.message})`)}
  }
  for(const match of html.matchAll(/(?:href|src)="(\/[^"]+)"/gi)){
    const url=match[1].split(/[?#]/)[0];
    if(!url||url==='/'||url.startsWith('//'))continue;
    let local=path.join(root,decodeURIComponent(url));
    if(url.endsWith('/'))local=path.join(local,'index.html');
    assert(fs.existsSync(local),`${label}: local target exists ${url}`);
  }
}

const catalog=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8'));
const ids=catalog.products.map(product=>product.id);
assert(ids.length>0,'catalog: products present');
assert(new Set(ids).size===ids.length,'catalog: product IDs unique');
assert(catalog.products.every(product=>product.title&&Array.isArray(product.categories)&&product.categories.length),'catalog: required product text present');

const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const sitemapUrls=[...sitemap.matchAll(/<loc>https:\/\/price\.bmf-seafood\.com(.*?)<[\/]loc>/g)].map(match=>match[1]||'/');
assert(sitemapUrls.length===pages.length,'sitemap: all public pages listed once');
for(const url of sitemapUrls){const local=url==='/'?path.join(root,'index.html'):path.join(root,url,'index.html');assert(fs.existsSync(local),`sitemap: target exists ${url}`)}
const robots=fs.readFileSync(path.join(root,'robots.txt'),'utf8');
assert(/User-agent: OAI-SearchBot[\s\S]*?Allow: \//.test(robots),'robots: OAI-SearchBot allowed');
assert(/Sitemap: https:\/\/price\.bmf-seafood\.com\/sitemap\.xml/.test(robots),'robots: sitemap declared');

console.log(`PASS ${pass.length}`);
if(failures.length){console.error(`FAIL ${failures.length}`);for(const failure of failures)console.error(`- ${failure}`);process.exit(1)}
console.log('All SEO and static integrity checks passed.');
