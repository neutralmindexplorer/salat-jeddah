# 🕌 Jeddah Salat Times

A lightweight, single-file web app that displays **daily Islamic prayer times for Jeddah, Saudi Arabia** with a real-time countdown to the next Salat — hosted free on GitHub Pages.

## ✨ Features

- 🕐 **Live clock** showing current Jeddah time (AST / UTC+3)
- 📅 **Hijri & Gregorian date** displayed together
- 🟡 **Next prayer highlighted** with a live countdown timer
- ✅ **Progress bar** showing elapsed time since last prayer
- 🌙 All 5 daily prayers: Fajr, Dhuhr, Asr, Maghrib, Isha
- 🔄 **Auto-refreshes** at midnight to load the next day's times
- 📱 **Fully responsive** — works on mobile and desktop
- ⚡ **Zero dependencies** — pure HTML + CSS + JavaScript
- 🌐 **SEO ready** — structured data for Google indexing

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create the repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `salat-jeddah` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload the file
1. Click **Add file → Upload files**
2. Drag & drop the `index.html` file
3. Click **Commit changes**

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

### Step 4 — Update canonical URL
Open `index.html` and replace `yourusername` in these two lines with your GitHub username:
```html
<link rel="canonical" href="https://YOUR-USERNAME.github.io/salat-jeddah/" />
<meta property="og:url" content="https://YOUR-USERNAME.github.io/salat-jeddah/" />
```

## 📡 Prayer Times Source

Times are fetched live from the [AlAdhan API](https://aladhan.com/prayer-times-api) using:
- **City:** Jeddah, Saudi Arabia
- **Calculation method:** Umm Al-Qura University, Makkah (Method 4) — the official method used in Saudi Arabia

## 🔍 Getting Indexed on Google

1. After deploying, go to [Google Search Console](https://search.google.com/search-console)
2. Add your GitHub Pages URL as a property
3. Submit your `index.html` URL for indexing
4. Google will index it within a few days

The app already includes:
- `<meta name="description">` and keywords
- `<link rel="canonical">`
- JSON-LD structured data (`WebApplication` schema)
- Open Graph tags for social sharing

## 🛠 Customisation

| What | Where in `index.html` |
|------|----------------------|
| City | `const CITY = 'Jeddah'` |
| Country | `const COUNTRY = 'Saudi Arabia'` |
| Calculation method | `const METHOD = 4` |
| Iqama offset (minutes) | `targetMin + 15` in `updateNextCard()` |
| Color theme | CSS variables in `:root {}` |

## 📄 License

MIT — free to use, modify, and share.
