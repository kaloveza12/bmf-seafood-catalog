# BMF Seafood website maintenance

- Live site: https://price.bmf-seafood.com
- Repository: https://github.com/kaloveza12/bmf-seafood-catalog
- Deployment: GitHub Pages from the `main` branch.
- Pull the latest `main` before every edit. Do not force-push.
- Preserve `CNAME`; it connects the custom domain.
- The site is a static single-page catalog. Most content, CSS, and JavaScript are in `index.html`.
- Product records are in the `products` array in `index.html`. Local images live in `assets/`.
- Keep product IDs unique. Category keys are: `pork`, `beef`, `frozen`, `seafood`, `meatballs`, `fried`, and `sauce`.
- Use optimized WebP images. Add `fit:'contain'` to full-page price sheets so prices and text are not cropped.
- Preserve existing Meta Pixel event tracking and mobile behavior.
- Validate HTML/inline JavaScript, verify asset URLs, then commit and push to `main`.
