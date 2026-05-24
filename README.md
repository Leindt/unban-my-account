# Unban My Account

> Premium social media account recovery service — Instagram, TikTok, Facebook, X (Twitter), YouTube and more.

## Overview

Static website for **UnbanMyAccount.com**, built with vanilla HTML, CSS and JavaScript. Design system: **Adora** (Digital Canvas with Violet Bloom) — light theme, Action Violet (`#592eff`) as primary brand color.

**Key stats shown on site:** 94% success rate · 12,000+ clients · 3–7 day turnaround · From $3,000.

## Pages

| File | Route |
|------|-------|
| `index.html` | `/` — Home |
| `about.html` | `/about` |
| `services.html` | `/services` |
| `how-it-works.html` | `/how-it-works` |
| `pricing.html` | `/pricing` |
| `faq.html` | `/faq` |
| `blog.html` | `/blog` |
| `contact.html` | `/contact` |
| `blog/account-recovery-guide.html` | Blog post |
| `blog/tiktok-shadowban-fix.html` | Blog post |
| `blog/why-was-my-instagram-banned.html` | Blog post |

## Assets

```
assets/
  styles.css   — Global stylesheet (Adora design system)
  main.js      — Shared interactions (nav, scroll reveal, FAQ, counters)
```

## Tech Stack

- **HTML5** — Semantic, SEO-optimised markup with structured data (JSON-LD)
- **CSS3** — Custom properties, responsive grid/flexbox layout
- **Vanilla JS** — IntersectionObserver scroll reveal, mobile nav, FAQ accordion, animated counters
- **Fonts** — Montserrat (headlines) + Plus Jakarta Sans (body) via Google Fonts
- **SEO** — Sitemap, robots.txt, Open Graph, Twitter Card, canonical URLs

## Design System — Adora

| Token | Value | Role |
|-------|-------|------|
| `--color-action-violet` | `#592eff` | CTAs, primary buttons |
| `--color-rich-violet` | `#21164c` | Headlines |
| `--color-slate-text` | `#353241` | Body text |
| `--color-canvas-white` | `#ffffff` | Backgrounds |
| `--color-cloud-mist` | `#e0e0db` | Borders / dividers |

## Local Development

No build step required — open any HTML file directly or serve with any static server:

```bash
# Python
python -m http.server 3000

# Node (npx)
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

## Deployment

Hosted on **Hostinger** (pending). Domain: `unbanmyaccount.com`.

Upload all files to the `public_html` folder via hPanel File Manager or FTP.

---

Design generated with [Claude Design](https://claude.ai) · Adora style reference.
