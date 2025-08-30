# AKRIN IT Consulting Website - Project Index (Auto-Generated)

## Stack
- Next.js 15 (App Router), React 19, TypeScript 5
- Tailwind CSS 3, Radix UI, Framer Motion, Tailwind Animate, Preline
- i18next/next-i18next, Zod, React Hook Form, Three.js, TinyMCE
- Jest/RTL/JS-DOM, Playwright, ESLint, Sharp

## Key Config
- `next.config.mjs`: image remotePatterns, trailingSlash=false; build ignores type and eslint errors
- `tailwind.config.ts`: extended Fortitude scale, preline plugin, content globs include `app`, `components`, `src`, `screens`, and `node_modules/preline/preline.js`
- `tsconfig.json`: strict, paths `@/*`
- `netlify.toml`: build with `@netlify/plugin-nextjs`, publish `.next`
- `middleware.ts`: strips trailing slashes except root, matcher excludes `api`, `_next`, and static files

## Environment Variables (found in code)
- Public: `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- Server: `GOOGLE_VERIFICATION_CODE`, `SERANKING_API_KEY`, `SERANKING_API_BASE_URL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SALES_EMAIL`, `BUSINESS_EMAIL`, `RECAPTCHA_SECRET_KEY`, `CALENDLY_LINK`, `DEEPL_API_KEY`

## App Routes (`/app`)
- Root: `/` → `app/page.tsx`
- Layout: `app/layout.tsx`
- Dynamic slug: `/[slug]` → `app/[slug]/page.tsx`
- About: `/about` → `app/about/page.tsx`
- Blog:
  - `/blog` → `app/blog/page.tsx`
  - `/blog/[slug]` → `app/blog/[slug]/page.tsx`
- Contact: `/contact` → `app/contact/page.tsx`
- Contact Form demo: `/contact-form` → `app/contact-form/page.tsx`
- Book consultation: `/book-consultation` → `app/book-consultation/page.tsx`
- Book reservation: `/book-reservation` → `app/book-reservation/page.tsx`

- Cookies: `/cookies` → `app/cookies/page.tsx`
- Privacy: `/privacy` → `app/privacy/page.tsx`
- Terms: `/terms` → `app/terms/page.tsx`
- Services index: `/services` → `app/services/page.tsx`
- Services detail pages:
  - `/services/cloud-infrastructure` → `app/services/cloud-infrastructure/page.tsx`
  - `/services/cybersecurity` → `app/services/cybersecurity/page.tsx`
  - `/services/it-consulting-project-management` → `app/services/it-consulting-project-management/page.tsx`
  - `/services/it-managed-services` → `app/services/it-managed-services/page.tsx`
  - `/services/it-managed-services-v2` → `app/services/it-managed-services-v2/page.tsx`
  - `/services/it-security` → `app/services/it-security/page.tsx`
  - `/services/network-penetration-testing` → `app/services/network-penetration-testing/page.tsx`
  - `/services/wifi-assessment` → `app/services/wifi-assessment/page.tsx`
  - `/services/wifi-design` → `app/services/wifi-design/page.tsx`
- Admin:
  - `/admin` → `app/admin/page.tsx`
  - `/admin/analytics` → `app/admin/analytics/page.tsx`
  - `/admin/seo` → `app/admin/seo/page.tsx`
  - `/admin/content` → `app/admin/content/page.tsx`
  - `/admin/content/list` → `app/admin/content/list/page.tsx`
  - `/admin/content/create` → `app/admin/content/create/page.tsx`
  - `/admin/content/analytics` → `app/admin/content/analytics/page.tsx`
  - `/admin/content/media` → `app/admin/content/media/page.tsx`
  - `/admin/test-ai` → `app/admin/test-ai/page.tsx`
  - `/admin/debug-ai` → `app/admin/debug-ai/page.tsx`
- Fortitude demo: `/fortitude-demo` → `app/fortitude-demo/page.tsx`
- Sitemap/robots: `app/sitemap.ts`, `app/robots.ts`
- JA localized routes (`/ja/*`):
  - Dynamic: `/ja/[slug]` → `app/ja/[slug]/page.tsx`
  - Blog: `/ja/blog`, `/ja/blog/[slug]`
  - Services: `/ja/services/*` with pages for cloud-infrastructure, cybersecurity, it-consulting-project-management, it-managed-services, it-security, network-penetration-testing, wifi-assessment, wifi-design

## API Routes (`/app/api`)
- Admin
  - `POST /api/admin/categories` → `app/api/admin/categories/route.ts`
  - `GET/POST /api/admin/content` → `app/api/admin/content/route.ts`
  - `GET /api/admin/content/analytics` → `app/api/admin/content/analytics/route.ts`
  - `GET/PUT/DELETE /api/admin/content/[id]` → `app/api/admin/content/[id]/route.ts`
  - `GET/POST /api/admin/media` → `app/api/admin/media/route.ts`
  - `GET/DELETE /api/admin/media/[id]` → `app/api/admin/media/[id]/route.ts`
  - `POST /api/admin/keywords` → `app/api/admin/keywords/route.ts`
  - `POST /api/admin/seo/analyze-content` → `app/api/admin/seo/analyze-content/route.ts`
- Contact & booking
  - `POST /api/contact` → `app/api/contact/route.ts`
  - `POST /api/book-reservation` → `app/api/book-reservation/route.ts`
  - `POST /api/leads` → `app/api/leads/route.ts`
  - `POST /api/schedule` → `app/api/schedule/route.ts`
- SEO
  - `POST /api/seo/analyze` → `app/api/seo/analyze/route.ts`
  - `POST /api/seo/keywords` → `app/api/seo/keywords/route.ts`
  - `GET /api/seo/reports` → `app/api/seo/reports/route.ts`
  - `POST /api/seo/report` → `app/api/seo/report/route.ts`
  - `GET /api/seo/audit/[id]` → `app/api/seo/audit/[id]/route.ts`
  - `GET /api/seo/test-connection` → `app/api/seo/test-connection/route.ts`
- Translation
  - `POST /api/translate` → `app/api/translate/route.ts`

## Components (`/components`)
- Core: `Navbar.tsx`, `footer.tsx`, `theme-provider.tsx`, `hreflang-links.tsx`
- UI: `components/ui/*` (accordions, alerts, buttons, cards, dialogs, dropdowns, inputs, nav, tables, etc.)
- SEO: `components/seo/*` (dashboard, keyword tracking, competitor analysis, head)
- Blog: newsletter form, reading progress, social share, TOC
- Services: `service-*`, `professional-*`, `services-contact-form.tsx`
- Media: `media/media-library.tsx`
- ReCAPTCHA: `recaptcha*.tsx`
- Visuals: `video-hero*.tsx`, `hero-visual-singularity.tsx`, `particle-background.tsx`, `MonogramReactor.tsx`, `hero-slider.tsx`, `premium-hero-slider.tsx`

## Libraries (`/lib`)
- SEO: `seo.ts`, `seo-utils.ts`, `seo-optimizer.ts`, `global-seo-optimizer.ts`, `seo-report-generator.ts`
- Content/blog: `blog-data.ts`, `metadata-helpers.ts`
- Email: `email.ts`, `email-service.ts`, `email-templates.ts`
- i18n: `i18n.ts`
- Data: `db.ts` (mock), `service-metadata.ts`, `logo-utils.ts`, `mobile-utils.ts`, `utils.ts`, `seranking-api.ts`

## Hooks & Contexts
- Hooks: `hooks/use-mobile.tsx`, `hooks/use-mounted.tsx`, `hooks/use-toast.ts`
- Contexts: `contexts/language-context.tsx`

## Public assets (`/public`)
- Images/logos, videos, fonts, locales (`/public/locales/{en,ja}/common.json`), favicons, manifests

## NPM Scripts
- `dev`, `build`, `start`, `lint`, `test`, `test:watch`, `test:coverage`, `test:ci`

## Notes
- Trailing-slash redirect via middleware
- i18n via route segments under `/ja` + `i18next`
- Recaptcha v2/v3 supported; env-required endpoints log missing config
- Type and lint errors ignored at build; ensure CI coverage if enabling

