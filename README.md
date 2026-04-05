# 🕌 Jeddah Salat Times

A fast, mobile-friendly web app displaying **daily Islamic prayer times for Jeddah, Saudi Arabia** with a real-time countdown to the next Salat — hosted free on GitHub Pages. Now includes a dedicated article page on the benefits of Salat.

## 📁 File Structure

```
salat-jeddah/
├── index.html               ← Main prayer times app
├── sitemap.xml              ← Sitemap for Google Search Console
├── robots.txt               ← Search engine crawl rules
├── og-preview.png           ← Social share preview image
├── README.md
└── benefits-of-salat/
    └── index.html           ← Article: Benefits of the 5 daily prayers
```

## ✨ Features

- 🕐 **Live clock** showing current Jeddah time (AST / UTC+3)
- 📅 **Hijri & Gregorian date** displayed together
- 🟡 **Next prayer highlighted** with a live countdown timer
- ✅ **Progress bar** showing elapsed time since last prayer
- 🔔 **Prayer notifications** — browser & iOS Add to Home Screen support
- 🌙 All 5 daily prayers: Fajr, Dhuhr, Asr, Maghrib, Isha
- 🔄 **Auto-refreshes** at midnight to load the next day's times
- 📱 **Fully responsive** — works on mobile and desktop
- ⚡ **Zero dependencies** — pure HTML + CSS + JavaScript
- 🌐 **SEO ready** — structured data, multilingual keywords, sitemap

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create the repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `salat-jeddah`
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload all files
1. Click **Add file → Upload files**
2. Drag & drop **all files and folders** — including the `benefits-of-salat/` subfolder
3. Click **Commit changes**

> ⚠️ Make sure the `benefits-of-salat/` folder is uploaded as a folder, not just its contents.

### Step 3 — Enable GitHub Pages
1. Go to **Settings → Pages**
2. Under *Source*, select **Deploy from a branch**
3. Choose **main** branch → **/ (root)**
4. Click **Save**

Your site will be live at:
```
https://YOUR-USERNAME.github.io/salat-jeddah/
```
(takes ~1 minute to deploy)

### Step 4 — Update canonical URLs
Replace `neutralmindexplorer` with your GitHub username in:
- `index.html` — canonical, og:url, all JSON-LD `url` fields
- `benefits-of-salat/index.html` — canonical, og:url, all JSON-LD `url` fields
- `sitemap.xml` — both `<loc>` entries

### Step 5 — Submit sitemap to Google
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your GitHub Pages URL as a property
3. Go to **Sitemaps** → submit `sitemap.xml`
4. Request indexing for both pages via URL Inspection

## 📡 Prayer Times Source

Times are fetched live from the [AlAdhan API](https://aladhan.com/prayer-times-api) using:
- **City:** Jeddah, Saudi Arabia
- **Calculation method:** Umm Al-Qura University, Makkah (Method 4)
- **Fallback:** Coordinates (21.4858°N, 39.1925°E) with 3-round retry

## 🔍 SEO

The app includes:
- Meta title, description, and multilingual keywords (English, Arabic, Malay, Indonesian, Turkish)
- JSON-LD structured data: `WebSite`, `WebApplication`, `FAQPage`, `BreadcrumbList`, `Article`
- Open Graph + Twitter Card tags
- Geo meta tags for Jeddah
- `sitemap.xml` with both pages
- Internal linking between main app and article page

## 🛠 Customisation

| What | Where |
|------|-------|
| City | `const CITY = 'Jeddah'` in `index.html` |
| Country | `const COUNTRY = 'Saudi Arabia'` |
| Calculation method | `const METHOD = 4` |
| Iqama offset (minutes) | `targetMin + 15` in `updateNextCard()` |
| Color theme | CSS variables in `:root {}` |

## 📄 License

MIT — free to use, modify, and share.
