# Stéphane Perfetti EI — showcase site

One-page French showcase site for an independent systems and network
administrator based in Montpellier (Hérault). Live at
<https://stephane-perfetti.fr>.

Built with [Astro](https://astro.build) as static HTML, with plain CSS and a few
lines of vanilla JavaScript (theme toggle, typewriter line, copy button). No UI
framework, no tracking, no cookies.

## Credits

Started from the MIT-licensed SWP Freelancer Portfolio theme, then reworked:
French content, blue palette, dark/light toggle, new sections and artwork. The
original licence and third-party credits are kept in [LICENSE](LICENSE) and
[CREDITS.md](CREDITS.md).

## Requirements

- Node.js 22.12 or later

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server on `localhost:4321` |
| `npm run build`   | Build the static site into `dist/`       |
| `npm run preview` | Preview the production build             |

After a content schema change, restart with `npx astro dev --force`.

## Project structure

```text
src/
  config/site.ts      Single source of truth: identity, contact, legal data, SEO
  data/               Texts of the home page (hero, about, FAQ, navigation...)
  content/
    services/         One Markdown file per mission
    projects/         One Markdown file per showcased project
  components/         Astro components (home sections, cards, schematic artwork)
  pages/
    index.astro       The one-page site
    mentions-legales.astro
    robots.txt.ts     Generated robots.txt (sitemap URL included)
    _*                Pages disabled by the underscore prefix
  lib/jsonld.ts       schema.org structured data, built from site.ts
  styles/             tokens.css (colours, fonts), base, components, sections
public/               Icons, fonts, images, CNAME
```

Colours and fonts live in `src/styles/tokens.css`. Identity, contact details and
legal data live in `src/config/site.ts`; the footer, the legal page and the
JSON-LD read from it.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages (repository setting: Pages > Source > GitHub
Actions). The custom domain is declared in `public/CNAME`.

## Licence

The theme source is MIT licensed, see [LICENSE](LICENSE). The texts, photo and
brand elements of this site belong to Stéphane Perfetti.
