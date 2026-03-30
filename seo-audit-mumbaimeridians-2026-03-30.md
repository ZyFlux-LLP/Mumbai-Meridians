# SEO Audit: mumbaimeridians.com
**Date:** March 30, 2026
**Audited by:** Claude Code SEO Audit
**Site type:** Sports franchise — Indian Sailing League 2026

---

## Executive Summary

Mumbai Meridians is a sailing franchise site competing in ISL 2026. The site has a clean URL structure, HTTPS, and logical page architecture, but is missing several critical technical SEO basics that limit discoverability. The site was first discovered by Google on March 26, 2026 and is being actively crawled — fixes made now will be picked up quickly.

**Overall Health: 4/10**

### Top Priority Issues
1. No `robots.txt` file (confirmed via GSC — both HTTP and HTTPS versions return 404)
2. No XML sitemap
3. Zero canonical tags across all pages
4. www vs non-www domain split — non-www flagged as having problems in GSC
5. Contact page shows homepage title and meta description (critical duplicate)

---

## Google Search Console Crawl Stats Summary
*Source: GSC Crawl Stats export, March 30, 2026*

| Metric | Value |
|---|---|
| First crawled | March 26, 2026 |
| Total requests (Mar 28) | 167 |
| Avg response time (Mar 28) | 552ms |
| 200 OK | 83.76% |
| 404 Not Found | 10.66% |
| 301 Redirects | 3.05% |
| robots.txt not available | 2.54% |
| Unknown/failed requests | 13.20% |

### Googlebot Breakdown
| Bot type | Share |
|---|---|
| Desktop | 41.6% |
| Page resource load | 30.0% |
| Image | 14.7% |
| Smartphone | 6.6% |
| Other | 5.1% |
| AdsBot | 2.0% |

### Host Status
| Host | Requests | Status |
|---|---|---|
| www.mumbaimeridians.com | 139 | No problems |
| mumbaimeridians.com | 58 | **Problems last week** |

---

## Technical SEO Findings

### 1. Missing robots.txt
- **Impact:** High
- **Evidence:** GSC shows both `http://mumbaimeridians.com/robots.txt` and `https://mumbaimeridians.com/robots.txt` return 404. Accounts for 2.54% of all crawl requests.
- **Fix:** Create a `robots.txt` at the domain root with the following content:
  ```
  User-agent: *
  Allow: /

  Sitemap: https://www.mumbaimeridians.com/sitemap.xml
  ```
- **Priority:** Critical

---

### 2. No XML Sitemap
- **Impact:** High
- **Evidence:** `/sitemap.xml` and `/sitemap_index.xml` both return 404. Not submitted in GSC.
- **Fix:** Generate a sitemap covering all 6 indexable pages:
  - `https://www.mumbaimeridians.com/`
  - `https://www.mumbaimeridians.com/junior-sailing`
  - `https://www.mumbaimeridians.com/training`
  - `https://www.mumbaimeridians.com/events`
  - `https://www.mumbaimeridians.com/media`
  - `https://www.mumbaimeridians.com/contact`

  Submit via GSC: Indexing → Sitemaps → Add new sitemap.
- **Priority:** Critical

---

### 3. www vs Non-www Domain Split
- **Impact:** High
- **Evidence:** GSC Crawl Stats shows Google crawling both `www.mumbaimeridians.com` (139 requests, no problems) and `mumbaimeridians.com` (58 requests, **problems last week**). GSC also shows Google checking both `http://` and `https://` robots.txt on the non-www domain — indicating the site may be accessible on all 4 URL variants:
  - `http://mumbaimeridians.com`
  - `https://mumbaimeridians.com`
  - `http://www.mumbaimeridians.com`
  - `https://www.mumbaimeridians.com`
- **Fix:** Implement 301 redirects so all variants resolve to `https://www.mumbaimeridians.com`. This is a hosting/DNS-level setting. Choose www as canonical (it has more crawl requests and no problems).
- **Priority:** Critical

---

### 4. No Canonical Tags on Any Page
- **Impact:** High
- **Evidence:** No `<link rel="canonical">` found on any of the 6 pages audited.
- **Fix:** Add a self-referencing canonical tag to every page. Example:
  ```html
  <link rel="canonical" href="https://www.mumbaimeridians.com/training" />
  ```
- **Priority:** Critical

---

### 5. High 404 Rate (10.66%)
- **Impact:** High
- **Evidence:** ~1 in 10 Googlebot requests returns a 404. For a 6-page site this ratio is unusually high. Likely caused by broken asset paths on the non-www domain and missing files (robots.txt, sitemap, favicon).
- **Fix:** In GSC go to Pages → Not Indexed → "Not found (404)" to get the full list of 404 URLs. Redirect or fix each one.
- **Priority:** High

---

### 6. Low Smartphone Crawl Rate
- **Impact:** High
- **Evidence:** Only 6.6% of Googlebot crawls are from Smartphone bot vs 41.6% from Desktop. Google uses mobile-first indexing — it primarily ranks based on the mobile version of your site.
- **Fix:** Check GSC → Experience → Mobile Usability for errors. Verify in GSC Settings that Googlebot Smartphone crawling is active.
- **Priority:** High

---

### 7. JS-Heavy Crawl Profile
- **Impact:** Medium
- **Evidence:** JavaScript accounts for 44.16% of all crawl requests. HTML is only 10.66%. The site relies heavily on client-side JS rendering.
- **Fix:** No immediate action needed at this scale, but be aware that JS-rendered content takes longer for Google to process. As the site grows, consider server-side rendering (SSR) for key pages.
- **Priority:** Low (monitor)

---

### 8. HTTPS & Mobile Viewport
- **Evidence:** Site loads over HTTPS; viewport meta tag `width=device-width, initial-scale=1` present.
- **Status:** Pass

---

### 9. URL Structure
- **Evidence:** Clean, readable URLs — `/junior-sailing`, `/training`, `/events`, `/media`, `/contact`
- **Status:** Pass

---

## On-Page SEO Findings

### 10. Contact Page — Duplicate Title & Meta Description
- **Impact:** High
- **Evidence:** `/contact` uses the homepage title *"Mumbai Meridians | Riding the Winds of Umiam"* and homepage meta *"Mumbai Meridians — India's premier sailing franchise dedicated to elevating Indian sailing to the global stage."* Google may choose which version to surface unpredictably.
- **Fix:**
  - Title: `Contact Mumbai Meridians | Sailing Inquiries & Partnerships`
  - Meta: `Get in touch with Mumbai Meridians for junior sailing programs, sponsorship, or general inquiries. Based in Mumbai, Maharashtra.`
- **Priority:** Critical

---

### 11. Homepage — Title & H1 Not Keyword-Optimized
- **Impact:** High
- **Evidence:**
  - Title: `"Mumbai Meridians | Riding the Winds of Umiam"` — tagline contains no sailing or sports keywords
  - H1: `"Mumbai Meridians"` — brand name only
- **Fix:**
  - Title: `Mumbai Meridians | Indian Sailing Franchise | ISL 2026`
  - H1: `Mumbai Meridians — India's Premier Sailing Team`
- **Priority:** High

---

### 12. Events Page — H1 Doesn't Match Page Intent
- **Impact:** Medium
- **Evidence:** Title is `"Events & Team | Mumbai Meridians"` but H1 is `"Meet the Team"`. Mixed signals — the page covers both race calendar and team roster.
- **Fix:** Either split into `/events` and `/team`, or align H1 with primary intent:
  - H1: `"ISL 2026 Events & Race Calendar"`
  - Move "Meet the Team" to an H2
- **Priority:** Medium

---

### 13. Training Page — H1 Not Keyword-Optimized
- **Impact:** Medium
- **Evidence:** H1 is `"Precision Performance"` — evocative but not searchable.
- **Fix:**
  - H1: `"Sailing Training Programs | Mumbai Meridians"`
  - Title: `"Sailing Training Programs & Fleet | Mumbai Meridians"`
- **Priority:** Medium

---

### 14. No Open Graph / Social Meta Tags
- **Impact:** Medium
- **Evidence:** No `og:title`, `og:description`, `og:image`, or Twitter Card tags on any page.
- **Fix:** Add to every page. Minimum for homepage:
  ```html
  <meta property="og:title" content="Mumbai Meridians | Indian Sailing Franchise" />
  <meta property="og:description" content="India's premier sailing franchise competing in ISL 2026 at Umiam Lake." />
  <meta property="og:image" content="https://www.mumbaimeridians.com/og-image.jpg" />
  <meta property="og:url" content="https://www.mumbaimeridians.com/" />
  <meta property="og:type" content="website" />
  ```
  Critical for WhatsApp shares, Instagram stories, and Twitter — high-value channels for a sports franchise.
- **Priority:** Medium

---

### 15. Media Gallery — Generic Image Alt Text
- **Impact:** Medium
- **Evidence:** All 33 gallery images use alt text like `"Mumbai Meridians photo 1"`, `"Mumbai Meridians photo 2"`. Logo images have empty `alt=""`.
- **Fix:**
  - Descriptive alt text: `"Mumbai Meridians sailors racing at Umiam Lake ISL 2026 Shillong"`
  - Logo: `alt="Mumbai Meridians Logo"`
  - Google Image Search is a real traffic source for sports teams.
- **Priority:** Medium

---

### 16. Schema Markup — Unverified
- **Impact:** Medium
- **Evidence:** `web_fetch` cannot detect JavaScript-injected schema (JSON-LD). No in-HTML schema found, but may be JS-rendered.
- **Fix:** Verify at [Google Rich Results Test](https://search.google.com/test/rich-results). If no schema exists, implement:
  - `SportsOrganization` on homepage
  - `SportsEvent` on `/events` for each regatta
  - `Course` on `/junior-sailing` and `/training`
  - `BreadcrumbList` on all inner pages
- **Priority:** Medium (verify first)

---

## Page-by-Page Summary

| Page | Title | Meta Description | H1 | Canonical | Issues |
|---|---|---|---|---|---|
| `/` | Mumbai Meridians \| Riding the Winds of Umiam | Present | "Mumbai Meridians" only | Missing | Title/H1 not keyword-optimized, no OG tags |
| `/junior-sailing` | Junior Sailing \| Mumbai Meridians | Present | "Junior Sailing" | Missing | Minor — reasonably optimized |
| `/training` | Training & Fleet \| Mumbai Meridians | Present | "Precision Performance" | Missing | H1 not keyword-optimized |
| `/events` | Events & Team \| Mumbai Meridians | Present | "Meet the Team" | Missing | H1/title mismatch, mixed page intent |
| `/media` | Media Gallery \| Mumbai Meridians | Present | "Media Gallery" | Missing | 33 images with generic alt text |
| `/contact` | **Homepage title (duplicate)** | **Homepage meta (duplicate)** | "Contact Us" | Missing | Critical duplicate metadata |

---

## Content Findings

### 17. No Blog / News Section
- **Impact:** High (long-term organic growth)
- **Evidence:** No blog, news, or editorial section in navigation or internal links.
- **Fix:** Sailing franchises have strong keyword opportunities: regatta recaps, athlete profiles, junior sailing guides, ISL coverage, India sailing news. Add a `/news` or `/blog` section to grow organic traffic beyond branded searches.
- **Priority:** High (long-term)

---

### 18. Incomplete NAP (No Phone Number)
- **Impact:** Low
- **Evidence:** Contact page lists name, city-level address (`Mumbai, Maharashtra, India`), and email only. No phone number or street address.
- **Fix:** Add phone number if available. Ensure NAP matches exactly with Google Business Profile.
- **Priority:** Low

---

### 19. No Google Business Profile Mention
- **Impact:** Medium
- **Evidence:** No link to or mention of a Google Business Profile.
- **Fix:** Claim/create a Google Business Profile for Mumbai Meridians to get a knowledge panel on branded searches and add authority signals.
- **Priority:** Medium

---

## Prioritized Action Plan

### Critical — Do This Week
| # | Action |
|---|---|
| 1 | Create `robots.txt` at domain root |
| 2 | Generate and submit XML sitemap to GSC |
| 3 | Fix www/non-www redirect — 301 all variants to `https://www.mumbaimeridians.com` |
| 4 | Add canonical tags to all 6 pages |
| 5 | Fix contact page — unique title and meta description |

### High Impact — This Month
| # | Action |
|---|---|
| 6 | Rewrite homepage title and H1 with keyword-relevant copy |
| 7 | Add Open Graph tags sitewide |
| 8 | Verify schema markup via Rich Results Test; implement if missing |
| 9 | Fix Events page H1 / consider splitting into two pages |
| 10 | Fix Training page H1 to be keyword-relevant |
| 11 | Investigate 404 URLs in GSC → Pages → Not Indexed |
| 12 | Check mobile usability in GSC → Experience → Mobile Usability |

### Medium Impact — Next 60 Days
| # | Action |
|---|---|
| 13 | Rewrite all 33 media gallery image alt texts descriptively |
| 14 | Fix logo empty alt attributes |
| 15 | Claim/optimize Google Business Profile |
| 16 | Resolve non-www domain problems flagged in GSC |

### Long-Term Growth
| # | Action |
|---|---|
| 17 | Launch blog/news section targeting ISL coverage, Indian sailing, junior sailing guides |
| 18 | Build event-specific landing pages for each ISL regatta edition |
| 19 | Target informational keywords: "junior sailing programs Mumbai", "ISL 2026 India", "sailing training Maharashtra" |
| 20 | Build athlete profile pages (unique content, E-E-A-T signals) |

---

## Issues at a Glance

| Issue | Impact | Priority |
|---|---|---|
| No robots.txt | High | Critical |
| No XML sitemap | High | Critical |
| www vs non-www split (non-www has GSC problems) | High | Critical |
| No canonical tags sitewide | High | Critical |
| Contact page duplicate title/meta | High | Critical |
| Homepage title/H1 not keyword-optimized | High | High |
| 10.66% 404 rate | High | High |
| Low smartphone crawl rate (6.6%) | High | High |
| No Open Graph tags sitewide | Medium | High |
| Schema markup unverified | Medium | Medium |
| Events page H1 mismatch | Medium | Medium |
| Training page H1 generic | Medium | Medium |
| 33 images with generic alt text | Medium | Medium |
| No Google Business Profile | Medium | Medium |
| No blog/news section | High | Long-term |
| Incomplete NAP (no phone) | Low | Low |

---

*Audit conducted using: Google Search Console crawl stats, direct page fetches (web_fetch), manual analysis of HTML output. Schema markup could not be verified via web_fetch (JS-stripped) — recommend validating via Google Rich Results Test.*
