# BMF Seafood website maintenance

- Live site: https://price.bmf-seafood.com
- Repository: https://github.com/kaloveza12/bmf-seafood-catalog
- Deployment: GitHub Pages from the `main` branch.
- Pull the latest `main` before every edit. Do not force-push.
- Preserve `CNAME`; it connects the custom domain.
- The site is a static single-page catalog. Most content, CSS, and JavaScript are in `index.html`.
- Primary product records are in `catalog.json`, managed by Pages CMS via `.pages.yml`. Local images live in `assets/`.
- `index.html` retains a built-in fallback catalog. Keep it functional so a malformed or unavailable `catalog.json` never blanks the live site.
- When making product changes in code, update `catalog.json` first and keep the fallback catalog in `index.html` reasonably synchronized.
- The admin gateway is `admin.html`; authentication and editing happen through Pages CMS with GitHub access.
- Keep product IDs unique. Category keys are: `pork`, `beef`, `frozen`, `seafood`, `meatballs`, `fried`, and `sauce`.
- Use optimized WebP images. Add `fit:'contain'` to full-page price sheets so prices and text are not cropped.
- Preserve existing Meta Pixel event tracking and mobile behavior.
- Validate HTML/inline JavaScript, verify asset URLs, then commit and push to `main`.
