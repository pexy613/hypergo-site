<!-- hg-version 2026-10-05-1800 -->
# HyperGo Design System (as built)

Generated from the repo code (pexy613/hypergo-site) on 2026-10-05. It describes what exists in the code today, not a target, except section 9 (decided target looks), section 10a (approved standards) and section 10b (open decisions).

Legend: **GF.css** = global-footer.css (2026-10-04-2003) · **GF1** = global-footer-1.js (2026-10-05-1428) · **GF2** = global-footer-2.js · **GL** = global-launch.js · **WH** = web-head.css · **WC** = web-custom.css · **WF** = web-footer.js · **AF** = app-footer.js. Words in brackets are runtime style ids (e.g. GF1 (extra) = `hg-extra-style`, (cat) = `hg-cat-style`, (home88) = `hg-home-v88`, (acct), (lang), (forms), (nav), (cart), (wm), (ph), (rtl); GL (launch); WF (catnav), (brands-fill), (sp)). `Lnnn` = line number in that file. "Mobile" = `max-width:959.98px` (some rules use `959px`), "Desktop" = `min-width:960px`. Global = website + app.

---

## 1. Colors

### Backgrounds
| Value | Where | File |
|---|---|---|
| `#8640FC` | Mobile home header root (inline), desktop `#AppBar`, search header, account header + hero, category page header + desktop title band, address editor header, status strip (search/account/category/address pages) | GF1 L75, L376, (extra) L1761/L1864/L2304, (acct) L1262/L1267/L1274, (forms) L1577/L1604; GF.css L37-38; AF L50 |
| `#5A29DE` | App `html` + `body` background (inline !important, app only) | AF L13, L19 |
| `#FAFAFC` | `body,.v-application` everywhere | GF1 (extra) L1724 |
| `#FFFFFF` / `#fff` | Home canvas (`#MultiVendorHome`, `#ProductCategories`, `#hg-cat-rows`), search page, cards, account page, sheets, launch section | GF1 (home88) L2346, (cat) L2631; GF.css L36, L880; GL L48 |
| `#FAF9FC` | Desktop profile page | GF.css L1434 |
| `#F7F3FF` | Desktop profile user-details box | GF.css L1441 |
| `#F8F5FF` | Selected language card | GF.css L1467; GF1 (lang) L1508 |
| `#F6F4FB` | Form fields (edit profile, address) | GF1 (forms) L1571 |
| `#FAFAFA` | Filter sheet side rail | GF1 (extra) L2200 |
| `#FAF8FF` | Account row pressed | GF1 (acct) L1305 |
| `#F7F5FA` | Category tile pressed | GF1 (cat) L2705 |
| `#F6F6F8` | Search page field | GF.css L41 |
| `#FFF3E5` | "Not accepting orders" box | GF1 (extra) L2072 |
| Hero gradient `linear-gradient(120deg,#4D22C7 0%,#5A29DE 45%,#6C35E8 72%,#8640FC 100%)` + overlays `rgba(204,203,227,.10)`, `rgba(204,203,227,.07)`, `rgba(204,203,227,.13)`, `rgba(204,203,227,0)`, `rgba(34,14,110,.42)`, `rgba(34,14,110,0)` | Home hero | GF1 (cat) L2637 |
| `linear-gradient(135deg,#6C35F0,#5A29DE)` | Store checkout bar (mobile) | GF1 (extra) L2180 |
| `linear-gradient(180deg,#efeaff 0%,#d9d0fd 100%)` | Launch card | GL L53 |
| `rgba(255,255,255,.58)` | Launch glass tiles | GL L72 |

### Text
| Value | Where | File |
|---|---|---|
| `#1B2023` | Main text: product names, prices, titles, store name, search page | GF.css (many, e.g. L36, L180, L271); GF1 (extra) L1925, (cat) L2631 |
| `#262A33` | Input text, account row titles, language names, search circle labels, desktop brand names | GF1 L1312, L1510, L1589, L1775, L1788; GF.css L1008 |
| `#302C35` | Search chips | GF.css L64, L114, L949 |
| `#000` | Edit-profile title, address confirm h2, search "Shop by category" heading | GF1 (forms) L1583, L1614; (extra) L1780 |
| `#FFFFFF` / `#fff` | Text on purple (header location, titles, buttons) | GF1 L126, L196, L1270, L1866 |
| `#EEEDF7` / `#CCCBE3` | Hero headline / hero kicker + paragraph | GF1 (cat) L2643 / L2642, L2644 |
| `#77727F` | Secondary meta (home sub, search meta, result count) | GF1 (cat) L2660, L2669; GF.css L76, L123, L1527 |
| `#767676` | Merchant info, store subtitle, popup description | GF1 (extra) L1872, L1898, L1927 |
| `#5C5C5C` | Store tagline/meta, category tabs, filter tabs | GF1 (extra) L2060, L2075, L2202 |
| `#8A8A8A` | Product description (row layout) | GF.css L711, L843; GF1 (extra) L2023 |
| `#817B88` | Search discovery subtitle | GF.css L61, L922 |
| `#8A849C` | Uppercase group labels, account value, field labels | GF1 L1293, L1316, L1620, L2206 |
| `#5B5670` | Form labels | GF1 (forms) L1586, L1637 |
| `#6B7280` | Bottom-nav inactive, search-field icon | GF1 (nav) L1040, (extra) L1773 |
| `#1F2430` / `#2A2F38` | Header placeholder text / header search icon | GF1 L68, L954 / L347, L376 |
| `#8A8F95` | Search page placeholder | GF1 (extra) L1776 |
| `#4E4658` | Popular chips | GF.css L65, L959 |
| `#676171` | Disabled button text | GF.css L1371-1375 |
| `#5F5B68` | Desktop checkout bar text | GF.css L1401 |
| `#9A4508` | "Not accepting orders" text | GF1 (extra) L2073 |
| `rgba(27,32,35,.68)` / `.55` | "More stores" meta / category line | GF1 (cat) L2698, L2700 |
| Launch: `#2e1a87`, `#3b1fa8`, `#5b3fd0`, `#6d4fd6`, `#8a76e0`, `#4c2fb8` | Card text, date/digits, pill, units, Arabic sub, footer | GL L53, L68, L66, L77, L79, L86 |

### Accents / brand
| Value | Where | File |
|---|---|---|
| `#5A29DE` | Primary accent: active tab/nav, links, "+" icon, buttons, focus, accent bar, spinner | everywhere (GF.css 27x, GF1 42x) |
| `#8640FC` | Header purple (see Backgrounds) | GF1, GF.css |
| `#6C35E8`, `#4D22C7`, `#6C35F0` | Gradient stops only | GF1 L2637, L2180 |
| `#8B62F1` | Pull-to-refresh dots | GF1 (extra) L1743 |
| `#FF4000` (with `#FF9A5E`, `#FF6A2A`, `#E23A04`) | Hero orange circle; search cart badge | GF1 (cat) L2639; GF.css L48 |
| `#ACE4AA` (with `#D6F4D4`, `#8DD08B`) | Hero green circle | GF1 (cat) L2640 |
| `#CCCBE3` | "More stores" card + logo border, arrow button borders, hero text | GF1 (cat) L2694-2695, L2745; WF (catnav) L329 |
| `#F2ECFF` | Light purple fills (qty stepper, active profile row, secondary button, selected chip) | GF.css L1388, L1402, L1447; GF1 L1600, L1640 |
| `#F6F2FF` + border `#E9E0FF` | "See all" / "View all" pills | GF1 (cat) L2661; GF.css L1675-1677 |
| `#F2EEFF` | Coupon close button, cart row divider | GF.css L1336, L1339 |
| `#341A76` | Cart stepper number | GF.css L1390 |
| `#7c3aed` → `#c084fc` | Launch progress bar | GL L84 |

### Borders / dividers
| Value | Where | File |
|---|---|---|
| `#EEECEF` | Search rows, store product rows, search tabs | GF.css (51x) |
| `#F0F0F0` | Store rows (GF1), category list, filter rows, "More stores" last row | GF1 L1869, L2014, L2150, L2207 |
| `#E5E5E5` | Store logo, category nav underline, popup buttons, filter clear | GF1 L1883, L1921, L1947, L2216 |
| `#EAE4F5` | Checkout cards, profile cards, language/address cards | GF.css L1352, L1394, L1439 |
| `#ECE9EF` | Category tiles, search tabs underline, merchant cover | WH L245; GF1 (cat) L2704; GF.css L70, L74 |
| `#ECEAEF` | Home feature/brand/logo/compact cards | GF1 (cat) L2665, L2673, L2681, L2684 |
| `#E7E5EA` | Search field + back circle + search cart | GF.css L41, L43, L46 |
| `#E7E3EA`, `#DDD7E8`, `#E5E2E8` | Search chips / popular chips | GF.css L64, L65, L114 |
| `#E9E6EC` | Search brand tiles | GF.css L68, L997 |
| `rgba(27,32,35,.08)` | Merchant list rows | GF1 (extra) L1823, L1835, L1851 |
| `rgba(27,32,35,.10)` | Home search pill border | GF1 L266 |
| `rgba(27,32,35,.06)` | Bottom nav top border | GF1 (nav) L1040 |
| `rgba(27,32,35,.14)` | Filter-button divider in pill | GF1 (extra) L1752 |
| `#F0EBFA`, `#EFEAFB`, `#C9C2DD`, `#E4DEF5`, `#F0ECF8`, `#EEE9F6`, `#EAE7EE`, `#F2F0F3`, `#F0EEF2`, `#F2F2F2`, `#ddd5fb` | Account rows, language card, radio, address divider, sheet divider, add-btn/cart rows, home divider, category-block divider, compact divider, popup bar, launch card | GF1 L1295, L1507, L1511, L1571, L1595, L2355, L2677, L2685, L1901; GF.css L1382, L1413; GL L53 |

### Badges / alerts
| Value | Where | File |
|---|---|---|
| `#D93600` + `#fff` text | Product discount badge | GF.css L392; GF1 (extra) L1892, L2302 |
| `#FF3B4E` (border `#8640FC`) | Header cart badge | GF1 (cart) L1107-1108 |
| `#FF4000` | Search page cart badge | GF.css L48 |
| `#fff` bg + `#5A29DE` text | Checkout-bar count badge | GF1 (extra) L2187 |
| `#E5384F` | Log out row, error field border, delete button text | GF1 L1317, L1591, L1601 |
| `#FFECEF` | Delete button background (edit profile) | GF1 (forms) L1601 |

### Buttons
| Value | Where | File |
|---|---|---|
| `#5A29DE` bg + `#fff` | Primary buttons (account/checkout/cart/filter apply/popup add/address submit/hero CTA text) | GF.css L1363, L1392, L1404; GF1 L1599, L1643, L1909, L2218 |
| `#E6E1EC` / `#D6D0E3` | Disabled primary | GF.css L1371 / L1375 |
| `#FFFFFF` + `#5A29DE` icon | "+" add button | GF.css L313-314; GF1 L1980-1981 |
| `rgba(255,255,255,.18)` (`.3` pressed) | Header cart button; desktop filled cart pill | GF1 (cart) L1102, L1104; L407 |
| `rgba(255,255,255,.2)` | Account hero edit button | GF1 (acct) L1283 |
| `#F5F5F5` | Filter close button | GF1 (extra) L2198 |
| `#000` bg, `#fff` text, `2px solid #000` | Launch "Download HyperGo" | GL L90-91 |
| `#F7F7FB` | Web category-row arrows | WF (catnav) L329 |

### Skeleton / placeholder
| Value | Where | File |
|---|---|---|
| `#EFEEF5`, `#F4F3F8` | Website home placeholder shapes (banner + cards) | WH L281, L292-294 |
| `#EEECEF` | App search loading placeholder | GF.css L1727-1737 |
| `#F7F7F8` | Product image backing (GF.css), home feature image | GF.css L84, L233, L665; GF1 (cat) L2666 |
| `#F5F5F5` / `#f5f5f5` | Product image backing (GF1, WF), Nearby merchant tile | GF1 L1940, L2107, L2282; WF (sp) L618; GF1 L1802 |
| `#F0F0F0` + `#DCDCDC` | No-photo placeholder SVG | GF1 L2919-2921 |
| `#EDE7FF` ring + `#5A29DE` top | Page-load / language veil spinner | WH L193-194; GF1 L3241 |

### Other one-offs
| Value | Where | File |
|---|---|---|
| `#111` | Cart bag icon fill (header + search) | GF1 L1123; GF2 L4; GF.css L1141 |
| `#CFC9DF` | Account row chevron | GF1 (acct) L1314 |
| `#C9C3D9` | Filter radio off | GF1 (extra) L2210 |
| `#DCD5EE` | Sheet grab handle | GF1 (forms) L1581 |
| `#1B1F2A` | Address type chip text | GF1 (forms) L1638 |
| `#9E9E9E` | Popup stepper minus | GF1 L1906, L2328 |
| `#AAA4B0` | Meta dot | GF1 (cat) L2670 |
| `#EFEEF7` | Hero logo tile | GF1 (cat) L2652 |
| `rgba(255,255,255,.62)` | Checkout strike-through price | GF1 (extra) L2190 |
| `rgba(91,63,208,.16)` | Launch bar track | GL L82 |
| `rgba(0,0,0,.72)` | Temp diagnostic panel only (not design) | AF L420 |

---

## 2. Typography

**Families (declared in code)**
- English: no family is declared anywhere in the repo; every rule uses `font-family:inherit` (GF1 L1274, L1285, L1780-1782; GL L53; WC). See UNKNOWN 1.
- Arabic (website only): `"IBM Plex Sans Arabic", Arial, sans-serif !important` on `html:lang(ar) body, button, input, textarea, select` and `html:lang(ar) body *` (WH L7-28); same stack for `.hg-landing:lang(ar)` and `#MainFooter:lang(ar)` (WH L65-71, L153-159).
- Arabic in launch sub-labels: `'IBM Plex Sans Arabic','Noto Sans Arabic',sans-serif` (GL L79).
- Monospace (temp diagnostic only): `9px/1.3 Menlo,Consolas,monospace` (AF L420).

**Arabic-specific weights (WH, website only):** body/inputs 500; `h1,h2` 700, letter-spacing 0; `h3-h6` 600, letter-spacing 0; `button,a` 600. Landing (`.hg-landing:lang(ar)`): hero title 700 / -.015em / 1.12; section title 700 / -.01em / 1.2; seller h2 700 / -.01em / 1.18; body 500; buttons + strip 600. Footer link labels 15px / 1.5 (14px at `max-width:700px`), copyright 13px (WC).

### Sizes (size / weight / line-height / letter-spacing)
| Element | Mobile | Desktop | File |
|---|---|---|---|
| Hero kicker | 11.5px / 600 / ls .12em, uppercase | 12.5px | GF1 (cat) L2642, L2714 |
| Hero headline | 28px / 700 / 1.08 / -.025em | 42px | GF1 (cat) L2643, L2715 |
| Hero paragraph | 14px / 1.4 | 17px | GF1 (cat) L2644, L2716 |
| Home section title `.hg-sec-title` | 17.5px / 760 / 1.18 / -.018em | 22px | GF1 (cat) L2659, L2729 |
| Home section subtitle | 11.5px | same | GF1 (cat) L2660 |
| Search discovery title | 17px / 720 / 1.2 / -.012em | 20px / 700 / 1.2 | GF.css L60, L911-917 |
| Search discovery subtitle | 11.5px | 13px / 1.35 | GF.css L61, L919-924 |
| Store name | 20px / 700 / 1.25 / -.01em | 28px / 700 / 1.25 | GF1 (extra) L1925, L2257 |
| Store subtitle line | 14px / 400 | 15px / 400 | GF1 (extra) L1927, L2259 |
| Store section title | see CONFLICT 6 | 26px / 700 / -.01em | GF1 (extra) L2273 |
| Store category tabs | 14px / 500, active 600 | 15px / 500, active 600 | GF1 (extra) L2075-2076, L2268-2269 |
| Product name (store) | see CONFLICT 7 | 16px / 400 / 1.3 | GF.css L403-409; GF1 (extra) L2287 |
| Price (store) | see CONFLICT 7 | 16px / 500 | GF.css L410-414; GF1 (extra) L2289 |
| Product name (search results) | 13px / 600 / 1.28 or 1.3 | 14px / 500 / 20px (searched rail) | GF.css L87, L132, L1429 |
| Price (search results) | 13px / 650 (later 700 for queried) | 14px / 600 / 20px | GF.css L90, L1651, L1432 |
| Product popup name | 20px / 700 / 1.3 (sheet) | 22px / 700 / 1.3 (modal) | GF1 (extra) L1897, L2318 |
| Product popup description | 14px / 20px / 400 | same | GF1 (extra) L1898, L2319 |
| Product description (row layout) | 13px / 400 / 1.3 (also 12.5px, see CONFLICT 7) | hidden | GF.css L712; GF1 L2288 |
| Merchant row title | 14px (search/category), 15px / 600 / 1.3 (category page) | 15px / 600 / 1.3 | GF1 (extra) L1840, L1871, L2311 |
| Merchant info | 13px / 1.35 (category), 11.5px (search), 12.5px / 1.35 (search group) | 13px / 1.35 | GF1 L1872; GF.css L76, L123 |
| Header location / "Deliver to" / place name | 14px / 400 / 400 / 700, white | same (desktop label inline) | GF1 L130-139, L197-204, L418 |
| Header search placeholder | 14px / 400 | 15px / 500 | GF1 L365, L475 |
| Search page input | 14px / 400 (extra) vs 15px (GF.css) | — | GF1 L1775; GF.css L42 |
| Feature card name / meta | 12.5px / 710 / 1.25 ; 11.5px | same | GF1 (cat) L2668-2669 |
| Brand tile name | 10px / 650 / 1.2 (web: 11.5px) | web: 13.5px (600px+: 12.5px) | GF1 (cat) L2674; WF (brands-fill) L447-451 |
| Logo card name | 10.5px / 680 / 13px | same | GF1 (cat) L2682 |
| Compact card name | 13px / 700 | same | GF1 (cat) L2687 |
| "More stores" card name | 14px / 700 / 1.25 | 15px | GF1 (cat) L2697, L2751 |
| Category tile label | 11px / 650 / 13px | — | GF1 (home88) L2354 |
| Search category circle label | 11.5px / 500 / 1.25 | — | GF1 (extra) L1788; GF.css L55 |
| Bottom-nav label | 9.5px / 1.2 (Arabic 10.5px / 1.6) | — | GF1 (nav) L1046-1047 |
| Account hero greeting / name / sub | 12px / 1.3 ; 22px / 700 / 1.25 / -.01em (guest 19px) ; 12px / 1.4 | — | GF1 (acct) L1278-1281 |
| Account group label | 11.5px / 600 / 1.2 / ls .08em, uppercase | — | GF1 (acct) L1293 |
| Account row title | 14px / 500 / 1.3 | 14px / 20px | GF1 (acct) L1312; GF.css L1451 |
| Page header title (account, category) | 17px / 700 | category band h1 26px / 700 / 1.2 | GF1 L1270, L1866, L2305 |
| Buttons | 14px / 700 (primary), 15px / 700 (edit profile), 16px / 700 (address submit), 15px / 600 (filter footer, popup add) | same | GF.css L1363; GF1 L1597, L1643, L2215, L1911 |
| Chips | 12px / 620 (search chips), 11.5px (popular), 12.5px / 600 / 1 (hero links) | 14px / 600 / 1.2 (search chips), 14px (hero links) | GF.css L64, L114, L951-953; GF1 (cat) L2648, L2718 |
| "See all" / "View all" | 12px / 750 (home) ; 12px or 13px / 700 (search) | — | GF1 (cat) L2661; GF.css L144, L1661 |
| Launch | pill clamp(11px,1.5cqw,15px)/600/ls 6px; date clamp(34px,5cqw,58px)/800/1.05/-.6px; digits clamp(30px,5cqw,56px)/800/1/-.5px tabular; units clamp(9px,1.2cqw,12px)/700/ls 1.6px; foot clamp(11.5px,1.5cqw,16px)/600; live clamp(30px,5cqw,58px)/900/1.15; button 14px/600/1.2 | container-query based | GL L66-91 |

---

## 3. Spacing and layout

**Side gutters (mobile):** 16px is used on almost every block (home section heads/rails `padding:0 16px`, search 16px, category row `scroll-padding-inline:16px`, `#ProductCategories>.tw-px-4` 16px) — GF1 (cat) L2658, L2663; GF1 (home88) L2351; GF.css L104-111. Exceptions: 18px start padding on `.hg-logo-rail` / `.hg-compact-rail` (GF1 (cat) L2679, L2683) and on search circles in GF1 (extra) L1783 (later GF.css L106 sets 16px); account list 20px (GF1 (acct) L1287); edit-profile sheet 22px (GF1 (forms) L1582-1584); home hero `margin:4px 16px 30px` (GF1 (cat) L2637).

**Search page canvas (mobile):** `width:calc(100vw + 32px)`, `margin-left:-16px`, `margin-right:0` (GF.css L1113-1120); app Arabic `margin-right:-16px` (GF.css L1776). Header `min-height:76px` (L1515).

**Max content widths (desktop)**
| Block | Value | File |
|---|---|---|
| Home sections `#hg-cat-rows` | 1240px, padding 0 20px **and** 1200px, padding 0 24px 40px | GF1 (cat) L2709; (extra) L2235 — CONFLICT 9 |
| Website home placeholder | 1240px | WH L305 |
| Store page header / sections | 1200px column, side padding 24px; tabs `padding-inline:max(24px,calc((100% - 1200px) / 2 + 24px))` | GF1 (extra) L2249, L2267, L2270 |
| Search discovery | 1180px, then 1350px, then none | GF.css L147, L888, L1051 — CONFLICT 10 |
| Profile pages | 1260px, padding 30px 28px 60px, sidebar 300px, gap 28px | GF.css L1435-1437 |
| Category list page | 1248px | GF1 (extra) L2303 |
| Fixed checkout bar | 1200px, padding 10px 20px | GF.css L1400 |
| Launch card | 1100px; section padding 14px 16px 8px (mobile), 40px 48px 24px (desktop) | GL L48-52 |

**Gaps between sections**
| Where | Mobile | Desktop | File |
|---|---|---|---|
| `#hg-cat-rows` block | margin 4px 0 38px | 16px auto 50px (cat) / 8px auto 40px !important (extra) | GF1 L2631, L2709, L2235 |
| `.hg-sec` / `.hg-cat-block` | 0 0 32px / 0 0 31px; next block border-top + padding-top 24px | 40px | GF1 (cat) L2656, L2675-2677, L2725 |
| Home page-builder sections | margin-bottom 32px | — | GF1 (home88) L2349 |
| `#ProductCategories` | 6px 0 24px (home88) vs 8px top/bottom (extra) | — | GF1 L2350, L1811 |
| Search discovery section | 22px 0 30px, later 14px 0 24px | 30px 0 38px | GF.css L58, L108, L901 |
| Store Recommended section | margin-top 30px | 44px | GF1 (extra) L2074, L2272 |
| Bottom padding for nav (home) | `calc(96px + env(safe-area-inset-bottom,0px))` | — | GF1 (extra) L1919 |

**Grids and rails**
| Component | Mobile | Desktop | File |
|---|---|---|---|
| Category icons | 2 rows, columns `calc((100% - 30px) / 4)`, gap 9px 10px, swipe, snap | 1 row, 98px columns, gap 12px | WH L225-259; GF1 (cat) L2702-2708 |
| Discover / feature rail | cards 158px, gap 11px | 208px | GF1 (cat) L2663-2665, L2732 |
| Brands near you | 2-row scroller, 68px columns, gap 13px 11px | 86px, gap 16px 16px | GF1 (cat) L2671, L2734 |
| Brands near you (website override) | 4 cols, gap 16px 12px (600px+: 5 cols, 18px 16px) | 7 cols, 2 rows, gap 22px 20px | WF (brands-fill) L442-451 |
| Logo rail | 88px cards, gap 12px | 108px | GF1 (cat) L2679-2680, L2737 |
| Compact rail | 2 rows x 64px, 216px columns, gap 8px 10px | 74px rows, 286px columns | GF1 (cat) L2683, L2739 |
| More stores near you | card `calc((100% - 8px) / 2.3)`, gap 12px (600px+: `calc((100% - 20px) / 3.3)`) | `calc((100% - 64px) / 4.3)`, gap 16px | GF1 (cat) L2692-2701, L2748-2749 |
| Native Nearby Merchants (when shown) | 2 rows, 80px columns, gap 16px 12px | — | GF1 (extra) L1795 |
| Store product grid | see CONFLICT 7 / 8 | 5 cols, gap 40px 28px | GF1 (extra) L2123, L2275; GF.css L1471 |
| Store product grid (website `hg-sp-row`) | 2 cols, gap 28px 12px (600px+: 3 cols, 32px 20px) | 5 cols, 40px 28px | WF (sp) L603-606 |
| Search product rails | gap 12px, cards 146px / 136px | searched rail 160px cards, gap 12px | GF.css L124-126, L1236, L1420-1421 |
| Search chips | flex gap 8px; popular = 2-row grid gap 8px | wrap, gap 10px | GF.css L62, L113, L930 |
| Search brands | gap 12px, 72px tiles | gap 14px, 96px | GF.css L66-68, L971, L984 |
| Search category circles | 2 rows, 68px columns, gap 14px 4px; later column-gap 10px, row-gap 18px | — | GF1 (extra) L1783; GF.css L52, L1134-1137 |
| Launch tiles | 4 cols, gap clamp(8px,1.4cqw,16px), max 640px | same | GL L71 |

**Card padding:** feature body 8px 9px 9px; "More stores" card 16px 12px 14px (desktop 20px 16px 18px); compact body 0 10px; hero 24px 20px 20px (desktop 40px 44px 36px); merchant rows 16px; store product rows 18px 4px; search result group 14px 16px 16px / 14px 16px 18px / 16px 16px 18px; launch body clamp(24px,3cqw,40px) clamp(14px,3cqw,40px) clamp(18px,9cqw,110px) — GF1 (cat) L2667, L2694, L2686, L2637; GF.css L121, L1215, L1536; GL L57.

**Zoom:** `#app .v-main:not(#MultiVendorSearch)` and profile container use `zoom:1` (HG_ZOOM = 1) — GF1 (extra) L1707, L1737-1738.

---

## 4. Shapes

### Border radii
| Element | Value | File |
|---|---|---|
| Header bottom corners | 26px (mobile home), 24px (desktop AppBar), 22px or 24px (search), 22px (account/category), 26px (account hero), 24px (address editor, store cover) | GF1 L77, L391, (extra) L1761, L2055, (acct) L1268, L1274, (forms) L1604; GF.css L37, L1039 — CONFLICT 2 |
| Home search pill | 18px (36px tall) | GF1 L260 |
| Desktop search pill | 21px (42px tall) | GF1 L428 |
| Search page field | 999px | GF1 (extra) L1763; GF.css L1330 (focus) |
| Form fields | 14px | GF1 (forms) L1587, L1617 |
| Category tile / its image | 14px / 12px (also `.tw-aspect-square` 12px then 11px) | WH L241, L248; GF1 (cat) L2704-2706, (extra) L1814, (home88) L2353 |
| Home hero | 20px (desktop 24px) | GF1 (cat) L2637, L2710 |
| Hero logo tile | 14px (desktop 20px) | GF1 (cat) L2652, L2721 |
| Feature card / logo card image | 15px | GF1 (cat) L2665, L2681 |
| Brand tile | 14px (search brand 14px mobile, 16px desktop) | GF1 (cat) L2673; GF.css L68, L998 |
| Compact card | 12px | GF1 (cat) L2684 |
| "More stores" card / image | 16px / 16px (desktop 18px / 18px) | GF1 (cat) L2694-2695, L2749-2750 |
| Product image | 14px, 15px or 16px — CONFLICT 7 | GF.css L232, L25, L664; GF1 L2107 |
| Merchant thumbnails | 14px; search 13px (queried) | GF1 (extra) L1825; GF.css L1207 |
| Store logo | 12px (mobile 62px), 16px (desktop 88px) | GF1 (extra) L1921, L2253 |
| Store cover | `0 0 24px 24px` (mobile), 20px (desktop) | GF1 (extra) L2055, L2250 |
| Chips | 11px / 12px (search), 999px (popular, hero links, see all, view all), 14px (address type) | GF.css L64, L947, L114; GF1 L2648, L1638 |
| Buttons | 50% ("+", cart, arrows), 13px (primary account/checkout), 14px (cart checkout), 16px (sheet buttons, address submit), 12px (desktop cart-btn), 999px (popup add, filter footer, hero CTA, steppers), 8px (launch download) | GF.css L1362, L1392, L1404; GF1 L1597, L1643, L1909, L2215, L1285; GL L90 |
| Checkout bar | `18px 18px 0 0` | GF1 (extra) L2180 |
| Sheets / panels | `26px 26px 0 0` (edit profile), `22px 22px 0 0` (filter), `20px 20px 0 0` (address footer), 20px (desktop product modal) | GF1 L1579, L2195, L1642, L2316 |
| Cards (account/checkout) | 16px, 18px, 14px | GF.css L1394, L1439, L1398, L1462 |
| Language card | 16px (mobile), 14px (desktop) | GF1 (lang) L1507; GF.css L1466 |
| Badges | discount 6px; cart badge 50% / 9px (number); search cart badge 9px; checkout badge 50% | GF.css L391, L48; GF1 L1107-1110, L2187 |
| Order warning | 8px | GF1 (extra) L2072 |
| Launch card / tiles / bar | 26px / 18px / 9px | GL L52, L72, L82 |
| Accent bar (category heading) | `0 4px 4px 0` (mobile), 3px (desktop) | GF1 (cat) L2676; GF.css L450 |

### Borders
Card borders are 1px hairlines (colors in section 1). Exceptions: language card `2px solid #EFEAFB` (GF1 (lang) L1507); radio `2px solid #C9C2DD` (L1511); form fields `1.5px solid transparent` → `#5A29DE` focused (GF1 (forms) L1587, L1590); cart badge `2px solid #8640FC` (L1108); launch button `2px solid #000` (GL L90). Store product cards and grid tiles are set borderless (`border:0`, `::before/::after` hidden) — GF.css L154-173, L1290-1319; WF (sp) L610-614.

### Box-shadows (exact)
| Value | Where | File |
|---|---|---|
| `0 1px 2px rgba(27,32,35,.018)` | Category tiles, brand/logo/compact cards | WH L246; GF1 (cat) L2673, L2681, L2684, L2704 |
| `0 1px 2px rgba(27,32,35,.02)` | Feature card | GF1 (cat) L2665 |
| `0 1px 2px rgba(27,32,35,.03)` | Search chips | GF.css L64, L950 |
| `0 1px 6px rgba(60,30,140,.12)` | Search category circles | GF1 (extra) L1786; GF.css L54 |
| `0 1px 4px rgba(0,0,0,.10)` | "+" button (GF1) | GF1 L1959, L1980, L2115, L2297 |
| `0 1px 4px rgba(27,32,35,.12)` | "+" button (GF.css v99) | GF.css L315 |
| `0 2px 6px rgba(34,18,78,.08)` | "+" button on store/filtered pages | GF.css L1414 |
| `0 2px 6px rgba(0,0,0,.10)` | Merchant row thumbnails | GF1 (extra) L1825, L1837, L1853, L2308 |
| `0 2px 8px rgba(0,0,0,.14)` | Store floating buttons | GF1 (extra) L1930 |
| `0 2px 8px rgba(0,0,0,.12)` | Order warning | GF1 (extra) L2072 |
| `0 2px 8px rgba(0,0,0,.16)` | Store qty counter | GF1 (extra) L2220 |
| `0 2px 8px rgba(27,32,35,.12)` | Web category arrows | WF (catnav) L329 |
| `0 2px 10px rgba(60,30,140,.06)` | Language card | GF1 (lang) L1507 |
| `0 -6px 24px rgba(27,32,35,.07)` | Bottom nav | GF1 (nav) L1040 |
| `0 -8px 24px rgba(27,32,35,.07)` / `.08` | Cart panel footer / fixed checkout bar, address footer | GF.css L1391, L1399; GF1 L1642 |
| `0 -6px 24px rgba(90,41,222,.28)` | Store checkout bar | GF1 (extra) L2180 |
| `0 6px 18px rgba(90,41,222,.18)` | Account/category headers | GF1 (acct) L1268, (extra) L1864 |
| `0 8px 22px rgba(90,41,222,.2)` | Address editor header | GF1 (forms) L1604 |
| `0 6px 18px rgba(40,10,120,.22)` | Address search field | GF1 (forms) L1613 |
| `0 7px 18px rgba(90,41,222,.18)` | Primary account/checkout buttons | GF.css L1364, L1368 |
| `0 8px 18px rgba(90,41,222,.2)` | Cart checkout action | GF.css L1392 |
| `0 6px 16px rgba(90,41,222,.18)` | Desktop cart-btn | GF.css L1404 |
| `0 8px 20px rgba(90,41,222,.28)` | Edit-profile primary, address submit | GF1 (forms) L1599, L1643 |
| `0 8px 26px rgba(34,18,78,.04)` | Desktop profile sidebar | GF.css L1439 |
| `inset 0 0 0 1px rgba(204,203,227,.20), inset 0 1px 0 rgba(238,237,247,.28), 0 12px 28px -14px rgba(52,22,150,.55)` | Home hero | GF1 (cat) L2637 |
| `inset 0 1px 0 rgba(250,250,254,.95), 0 1px 2px rgba(27,14,80,.18), 0 6px 14px -4px rgba(27,14,80,.30), 0 16px 30px -12px rgba(27,14,80,.40)` | Hero logo tiles | GF1 (cat) L2652 |
| `0 18px 40px -18px rgba(91,63,208,.55)` / `0 10px 22px -12px rgba(91,63,208,.55)` | Launch card / tiles | GL L54, L73 |
| Focus: `outline:3px solid #5A29DE; offset 3px` / `0 0 0 2px rgba(90,41,222,.38)` / `0 0 0 4px rgba(90,41,222,.12)` | Global focus / search pill / form fields | GF.css L1324, L1330; GF1 (forms) L1590 |

---

## 5. Components

**Purple header, home, mobile (Global, mobile layout only)** — GF1 `applyHyperGoHeader()` L18-367 (inline styles)
- Root `#MultiVendorHeaderRoot`: `#8640FC`, radius `0 0 26px 26px`, no shadow, scrolls away (`position:relative`). Search row padding `10px 16px 30px`.
- Pill: 36px tall, `#FFFFFF`, radius 18px, border `1px solid rgba(27,32,35,.10)`; input padding `0 12px 0 38px` (Arabic `0 38px 0 12px`), 14px, line-height 36px; extra `padding-inline-end:48px` (GF1 (extra) L1756).
- Icon: 18px magnifier at `left:8px`, stroke `#2A2F38` 1.8. Rotating placeholder "Search for" + word, `#1F2430`, 14px / 400 at 38px.
- Filter: 42 x 36px at end of pill, 1px divider `rgba(27,32,35,.14)`, 18px tune icon `#5A29DE` (GF1 (extra) L1750-1755).
- Location: white, 14px / 400, "Deliver to" label, place name 700.
- Cart button: 38px circle `rgba(255,255,255,.18)`, `right:16px`, `top:calc(var(--native-status-bar-height,0px) + 7px)`, 22px bag `#111`; badge dot 11px `#FF3B4E` with `2px solid #8640FC`, number badge 17px tall, 10px / 700 (GF1 (cart) L1101-1111).
- Watermark: outline logo 190px, `right:6px; bottom:-24px`, opacity 0 → 0.55 over first 50px of scroll, clipped (GF1 (wm) L492-506).

**Purple header, desktop website** — GF1 `applyHyperGoDesktop()` L372-483: `#AppBar` `#8640FC`, radius `0 0 24px 24px`, `position:absolute`; text/icons white; pill 42px, radius 21px, input padding-left 42px, 15px; icon 18px `#2A2F38` at 11px; placeholder 15px / 500; logo `filter:brightness(0) invert(1)`; filled cart `rgba(255,255,255,.18)`.

**Search page header (mobile)** — see CONFLICT 3. GF.css: flex, gap 10px, `#8640FC`, padding `12px 16px 20px`, radius `0 0 24px 24px`, min-height 76px, sticky under status bar; cart 40px circle `#fff`, border `#E7E5EA`, badge `#FF4000` 17px, 10px / 800 (L37-49, L1515). App only: pinned-header shift variables, no field loading bar (GF.css L1696-1706).

**Category icons (home)** — tile radius 14px, padding `5px 5px 6px`, `#fff`, border `1px solid #ECE9EF`, shadow `0 1px 2px rgba(27,32,35,.018)`, image radius 12px, pressed `#F7F5FA` + `scale(.985)`; label 11px / 650 / 13px `#1B2023` (WH L239-248; GF1 (cat) L2704-2706; (home88) L2354). Website desktop: 36px arrow buttons, `#F7F7FB`, border `#CCCBE3` (WF (catnav)).

**Chips** — Recent searches `.hg-sd-chip`: border `#E7E3EA`, `#fff`, radius 11px, padding 8px 11px, 12px / 620 (desktop: min-height 38px, padding 9px 14px, radius 12px, 14px / 600). Suggestion chips `.pop`: radius 999px, padding 7px 11px, border `#E5E2E8`, 11.5px, "↗" prefix `#5A29DE` 12px / 700 (desktop border `#DDD7E8`, 14px) — GF.css L64-65, L113-115, L938-967. Hero links: 36px tall (desktop 42px), padding 0 14px, 999px, `rgba(204,203,227,.16)`, border `rgba(204,203,227,.42)`, blur(10px) — GF1 (cat) L2648.

**Brand / merchant cards** — Home "Brands near you" `.hg-brand-img` 68px (desktop 86px; website fluid 1/1), radius 14px, `#fff`, border `#ECEAEF`. Logo rail `.hg-logo-img` 88px (desktop 108px), radius 15px. Compact card 64px tall (74px), radius 12px. "More stores near you" `.hg-row`: transparent, border `1px solid #CCCBE3`, radius 16px, centered 84px logo (600px+: 96px; desktop 108px). Feature card 158px, image 100px tall (desktop 132px) `#F7F7F8`. Search "Brands near you" `.hg-sd-brand-img` 72px / radius 14px (desktop 96px / 16px), border `#E9E6EC`. Logo background sizes: CONFLICT 13.

**Product cards** — Store pages, search, recommended: see CONFLICTS 7, 8, 11. Common pieces: square image, `object-fit:cover`; name max 2 lines (`-webkit-line-clamp:2`); description hidden on tiles, 1 line on rows; borderless.

**Section titles** — Home: `.hg-sec-title` + `.hg-sec-sub`; category blocks have a 3px `#5A29DE` accent bar at opacity .82 (mobile: block-level bar 30px tall at `left:0`; desktop: bar 22px tall beside the heading, `inset-inline-start:0`) — GF1 (cat) L2676; GF.css L435-454. "See all" pill `.hg-all`: 12px / 750, padding 5px 9px, 999px, `#F6F2FF` + `#E9E0FF`.

**Home hero (generated)** — GF1 (cat) L2636-2655: radius 20px, padding 24px 20px 20px, min-height 168px (desktop 220px, 40px 44px 36px, radius 24px); gradient (section 1); orange circle 100px top-end, green circle 100px bottom-end (desktop 190px / 150px); copy max-width 86% (desktop 58%); up to 3 logo tiles 54px rotated -3/3/-2deg (desktop 80px, absolute); fade-in `hgHeroIn`.

**Launch countdown (GL, Global, top of home)** — Card radius 26px, gradient `#efeaff → #d9d0fd`, border `#ddd5fb`, max 1100px; text centered over image (`aspect-ratio:1672/941`, top masked 0→26%); pill "Launching", date, 4 glass tiles (radius 18px, `rgba(255,255,255,.58)`, border `rgba(255,255,255,.9)`, blur 8px), progress bar 5px (`#7c3aed → #c084fc`), footer line. After launch: "Live now!" + "Start shopping" + black "Download HyperGo" button (12px 24px, radius 8px; hidden in the app).

**Buttons**
- "+" add: CONFLICT 12.
- Primary purple: `#5A29DE`, white text; sizes/radii in section 4; disabled `#E6E1EC` / `#D6D0E3` with `#676171`.
- Product popup: stepper 127 x 50px, radius 999px, border `#E5E5E5`; "Add item" 50px, radius 999px, `#5A29DE`, 15px / 600 (GF1 (extra) L1903-1911, L2325-2333).
- Store checkout bar (mobile): full-width, min-height 60px, radius `18px 18px 0 0`, gradient `#6C35F0 → #5A29DE`, label 15px / 700, price 16.5px / 800 (GF1 (extra) L2180-2192).
- "View all" / "See all": CONFLICT 14.
- More-stores arrows (desktop): 36px circle, border `#CCCBE3`, hover border `#1B2023` (GF1 (cat) L2745-2746).
- "Become a Vendor": not in our code; in reference/home.html (snapshot) it is Hyperzod's own inline style: background `rgb(0, 0, 0)`, text `rgb(255, 255, 255)`, `tw-rounded-lg tw-border-2 tw-px-8 tw-py-3.5 tw-text-sm tw-font-semibold`. GL's download button copies that look (comment GL L89).

**Badges** — Discount: `#D93600`, `#fff`, 12px / 700 / 1.2, radius 6px, padding 4px 7px, letter-spacing .02em (GF.css L389-398; GF1 L1892, L2302). Cart badges: section 1 + CONFLICT 15.

**Loading / skeleton** — Website page-load veil: white full screen + 38px spinner (4px `#EDE7FF`, top `#5A29DE`) (WH L174-203). Website home placeholder: banner 316px tall, radius 20px `#EFEEF5`, title/sub bars, 158px card blocks (desktop 302px / 24px, 208px cards) (WH L262-330). App search loading: result-shaped bars `#EEECEF`, 136px tiles, pulsing (GF.css L1711-1754). No-photo product: grey SVG `#F0F0F0` / `#DCDCDC` (GF1 L2915-2923). Language-switch veil: same spinner (GF1 L3240-3241).

**Empty state ("No results found")** — no rule in the repo targets it. See UNKNOWN 7.

**Bottom nav (mobile/app)** — GF1 (nav) L1039-1061: `#fff`, text `#6B7280`, active `#5A29DE`, shadow `0 -6px 24px rgba(27,32,35,.07)`, top border `rgba(27,32,35,.06)`; mask icons 19px (home 15 x 17px), labels 9.5px; item padding `8px 12px 5px`, gap 2px; Cart tab hidden (cart lives in the header).

**Other styled screens (Global, mobile unless noted)** — Account hero + grouped rows (GF1 (acct)); language cards (GF1 (lang); desktop GF.css L1458-1469); edit-profile sheet + address editor (GF1 (forms)); filter sheet + store qty counter (GF1 (extra) L2195-2226); cart panel, checkout, coupon, profile desktop (GF.css L1333-1469). Values are included in sections 1 and 4.

---

## 6. Motion
| Name / property | Duration / easing | Applies to | File |
|---|---|---|---|
| `hgBootOut` (opacity 0, hidden) | .25s ease forwards; failsafe delay 10s (veil), 12s (placeholders) | Website page-load veil + placeholders | WH L171-203, L282 |
| `hgBootSpin` / `hgspin` (rotate 360deg) | .8s linear infinite | Veil spinners | WH L172, L196; GF.css L2; GF1 L3241 |
| `hgNativeBack` (visibility visible) | 0s linear 12s forwards | Hidden native tiles failsafe | WH L222, L252 |
| Language veil opacity | in .12s ease, out .25s ease | Language switch | GF1 L3240, L3255 |
| `hgSkPulse` (opacity .55 → 1) | 1.2s ease-in-out infinite alternate | App search loading | GF.css L1693, L1738 |
| `hgGoo` (translateX 0/13px/-13px) | 1.8s ease-in-out infinite backwards, delays .24s / .48s | Pull-to-refresh dots | GF1 (extra) L1744-1748 |
| Pull-to-refresh | dots `transform .25s ease`; content `opacity .5s ease`; pull 230px, gap 30px, min 700ms | Home | GF1 L1745, L2450-2486 |
| Rotating placeholder | every 4000ms; sweep 1000ms `cubic-bezier(.35,0,.35,1)`; new word fade 350ms ease-out | Header search | GF1 L818, L867-895 |
| Header watermark | opacity 0 → .55 over 50px scroll (no transition) | Mobile header | GF1 L503-507 |
| `hgHeroIn` (opacity 0 → 1) | .7s ease-out both | Home hero | GF1 (cat) L2636-2637 |
| Hero links | `background-color .2s ease, border-color .2s ease, transform .2s ease`; hover `translateY(-1px)` | Home hero (hover devices) | GF1 (cat) L2648-2649 |
| Category tile press | `scale(.985)` (no transition set) | Category icons | GF1 (cat) L2705 |
| Rails scroll buttons | `scrollBy(... behavior:"smooth")` | More-stores arrows, web category arrows | GF1 L2852; WF L375 |
| Web category arrows | `opacity .15s ease, border-color .15s ease` | WF (catnav) L329 |
| Search rail | `transition:none`, `transform:none` | Queried search rails | GF.css L1619-1620 |
| Status strip (app) | no transition; purple → white over 56px scroll, white alpha .55 → 1 over 12px | Home status bar | AF L50-91 |
| `hgLaunchFlip` (from translateY(-45%) scale(.9), opacity 0) | .45s `cubic-bezier(.2,.9,.3,1.2)` | Countdown digits | GL L75-76 |
| `hgLaunchGlow` (shadow pulse) | 2s ease-in-out infinite | Seconds tile | GL L80-81 |
| Launch bar width | 1.2s ease | Progress bar | GL L84 |
| Reduced motion | `animation:none; transition:none` | `.hg-wm,.hg-ptr-logo,.hg-feature,.hg-logo-card,.hg-sd-chip,.hg-lang-card` and rails; `#hg-launch *`; placeholder sweep skipped | GF.css L1496-1499; GL L95; GF1 L859-860 |

---

## 7. Arabic/RTL rules that already exist

- **Fonts (website):** `html:lang(ar)` → IBM Plex Sans Arabic stack, weights 500/600/700, letter-spacing 0 on headings (WH L7-58); `.hg-landing:lang(ar)` landing typography (WH L65-148); `#MainFooter:lang(ar)` font (WH L153-159).
- **Footer (website):** `#MainFooter:lang(ar)` direction rtl; English link text hidden (`font-size:0`) and Arabic text shown via `::after` (15px / 1.5; 14px at ≤700px; copyright 13px); `unicode-bidi:isolate` (WC whole file).
- **Placeholders mirrored:** `html[dir="rtl"]` home placeholder bars start at 100% and card blocks run 270deg (WH L297-329); `html[dir="rtl"].hg-native-app` search skeleton mirrored (GF.css L1741-1754).
- **"+" / add-control position:** `html[dir='rtl']` / `html[lang^='ar']` flip `right` → `left` at 8px, 4px or 10px (GF.css L92, L340-348, L602-606, L739-743, L871-875; GF1 (extra) L2020, L2113, L2294). Non-RTL rules are written as `html:not([dir='rtl']):not([lang^='ar'])` (GF1 L1952, L2019).
- **Arrows flipped with `scaleX(-1)`** in `html[lang^='ar']`: search back icon (GF1 (rtl) L788, (extra) L1769), page-header back buttons + orders back (L1734), account back + row chevrons (GF1 (acct) L1272, L1315), address editor back (GF1 (forms) L1611), category page back (L1868). `html[dir='rtl']` flips the More-stores arrow icons (GF1 (cat) L2747).
- **Mirrored placement:** header cart `left:16px`, watermark `left:6px` with mirrored clip (GF1 (cart) L1105-1106); filter button radius `18px 0 0 18px` (GF1 (extra) L1751); search field icon padding `0 0 0 8px` (L1771); product popup back button `right:16px` (L1884) and add bar padding `12px 20px 24px 16px` (L1902); checkout badge `left:-9px` (L2192).
- **JS mirroring (`hgIsAr()`):** pill input padding and icon side, desktop search icon `right:11px` and input padding, placeholder overlay `direction:rtl` with right offset and reversed sweep, Arabic labels ("التوصيل إلى", nav names, category names) — GF1 L189, L295, L357-360, L443-461, L864-888, L939-955.
- **Hero:** RTL gradients mirrored (245deg / 270deg / 240deg, radial at 80%) and letter-spacing 0 on kicker/headline (GF1 (cat) L2638, L2645).
- **Launch:** Arabic pill/date/unit letter-spacing 0, date line-height 1.25, larger Arabic pill and unit sizes; RTL progress bar 270deg (GL L67, L69, L78, L85).
- **Nav labels:** Arabic 10.5px / 1.6, no clamp; extra top padding (GF1 (nav) L1047-1048).
- **App search canvas, Arabic:** `margin-right:-16px` (GF.css L1776).
- **LTR islands:** phone inputs and counters forced `direction:ltr` (GF1 (forms) L1593-1594); account phone/email wrapped in `<bdi dir="ltr">` (L1417); meta parts wrapped in `<bdi>` (L2830).
- **Logical properties used:** `padding-inline-start`, `inset-inline-start/end`, `margin-inline(-start/-end)`, `scroll-padding-inline`, `border-inline`, `inset-inline` (WH L278; GF.css L40, L43, L139, L446; GF1 many), `text-align:start/end` (GF.css L1348, L1646).
- **Physical on purpose:** website category arrows stay physical left/right (WF L306-311, L325-332).

---

## 8. Differences between the website and the app (code only)

- **Website-only files:** WH (Arabic font stack; page-load veil; home category row and "Nearby Merchants" placeholders from first paint), WC (Arabic footer labels), WF (Arabic text translation; category-row arrow buttons at ≥960px; "Brands near you" fluid 4/5/7-column grid; store sections `hg-sp-*` grid; veil release).
- **App-only file:** AF — sets `html.hg-native-app`; paints `html`/`body` `#5A29DE` (inline !important); drives the status strip (purple at rest on Home, fades to white on scroll, stays `rgb(134,64,252)` on Search). Temporary diagnostics in AF (`TEMP-DIAGNOSTIC` hgdiag panel, `TEMP-ERUDA` Eruda loader) are not part of the design.
- **App-only rules inside Global files (`html.hg-native-app`):** search header shift variables, no field loading bar, native category grid stays while typing, result-shaped loading skeleton, header container `min-height:100vh`, Arabic `margin-right:-16px` (GF.css L1690-1778); launch "Download HyperGo" hidden (GL L94, L166); GF2 never pins the search header and starts live search through the page address in the app (GF2 L128-136, L187-195).
- **Desktop vs mobile layout (both platforms, by width):** the desktop header (`#AppBar`, ≥960px) only exists at desktop widths; the mobile header + watermark + header cart run only when the mobile search row is visible (GF1 L60-61). Most store-page rules are split by `.merchant-mobile-view` vs `:not(.merchant-mobile-view)`; GF.css v99+ rules are viewport-based because, per its comment, Hyperzod "does not reliably add .merchant-mobile-view to every mobile shop renderer" (GF.css L151-153).
- **Status-bar rules:** `.native-status-bar-bg` purple/transparent rules sit in Global CSS/JS (GF.css L38; GF1 L1262, L1577, L1760, L1863, L1894, L2064); AF describes this strip as "the app's own strip element" (AF L48).
- **Background:** website body `#FAFAFC` (GF1 (extra)) / home `#FFFFFF` (home88); app adds `#5A29DE` on `html`/`body` (AF) — CONFLICT 5.

---

## 9. Decided by Nouf (target look)

Store page product sections: all product sections on store pages should use the borderless grid that wraps to new rows (like the Ankle Socks and Animal Socks sections), not the bordered sideways-scrolling row. This is the target look; the code may not fully match it yet.

Code that currently implements a wrapping borderless grid:
- WF (sp) L585-718 (website only): any product row not already styled is marked `.hg-sp-row` and laid out 2 cols (gap 28px 12px), 3 cols at ≥600px (32px 20px), 5 cols at ≥960px (40px 28px); cells borderless, arrows and slider duplicates hidden.
- GF1 (extra), desktop: `.scheme-merchant-page .product-horizontal-cards` 5 cols, gap 40px 28px (L2123), and `.scheme-product-recommendation-section .v-col>.tw-grid, #merchant-content .cat-section .special-listing-inner>.tw-grid` 5 cols, gap 40px 28px (L2275).
- Mobile store rules currently in the code: one row per line list (GF.css v102 L609-876) and Recommended Products as a sideways row (GF1 (extra) L1934; GF.css L10-11).

Store and merchant logos: fit fully inside their box (`contain`) everywhere, on the website and in the app, never cropped. Decided 2026-10-05, see 10a #13. The code may not match yet.

---

## 10. CONFLICTS (all 27 resolved 2026-10-05; the chosen standards are in 10a, the notes below are the evidence)

1. **Purple for headers vs brand primary** · RESOLVED (10a #1)
   - `#8640FC`: mobile home header, desktop AppBar, search/account/category/address headers, status strip (GF1 L75, L376, L1761, L1267; GF.css L37; AF L50).
   - `#5A29DE`: buttons/accents; app `html`/`body` background (AF L13, L19); category accent bar.
   - Gradients add `#4D22C7`, `#6C35E8` (hero), `#6C35F0` (checkout bar), `#8B62F1` (pull-to-refresh), launch `#3b1fa8`/`#5b3fd0`/`#7c3aed` (GL).
2. **Header bottom-corner radius** · RESOLVED (10a #2)
   - 26px: mobile home header (GF1 L77), account hero (GF1 (acct) L1274).
   - 24px: desktop AppBar (GF1 L391), search header (GF.css L37, L1039), address editor (GF1 (forms) L1604), store cover (GF1 (extra) L2055).
   - 22px: search header (GF1 (extra) L1761), account header (GF1 (acct) L1268), category header (GF1 (extra) L1864).
3. **Search page header + field (mobile)** · RESOLVED (10a #3)
   - GF1 (extra) L1761-1776: padding `11px 16px`, margin -16px each side; field 38px, `#fff`, no border, radius 999px, padding 0 12px; control inset 38px; back arrow white 22px, no circle, box 34px at -42px; field icon `#6B7280`; input 14px / 400.
   - GF.css L37-45: padding `12px 16px 20px`, margin 0, gap 10px; field 44px, `#F6F6F8`, border `1px solid #E7E5EA`, padding 0 13px; control inset 42px; back button 36px white circle with `#E7E5EA` border at -44px, arrow `#1B2023` 18px; field icon `#73707A`; input 15px. Min-height 76px (L1515).
   - GF.css L33 comment: these search rules "outrank the legacy [data-color-scheme] styles, regardless of injection order".
4. **Main text color** · RESOLVED (10a #4): `#1B2023` (most), `#262A33` (inputs, account rows, labels), `#302C35` (chips), `#000` (edit-profile title, address h2, search heading — GF1 L1583, L1614, L1780), `#111` (cart icon).
5. **Page background** · RESOLVED (10a #5)
   - `#FAFAFC` on `body,.v-application`, all sizes (GF1 (extra) L1724).
   - `#FFFFFF` on home (`body:has(#MultiVendorHome)`, `#MultiVendorHome`, sections) (GF1 (home88) L2346) and search (GF.css L36, L881).
   - `#5A29DE` on app `html`/`body`, inline !important (AF L11-20).
6. **Store section title (mobile)** · RESOLVED (10a #6)
   - 22px / 700, margin-bottom 18px (GF1 (extra) L1931).
   - 18px / 1.25, margin-bottom 16px, margin-top 48px (GF.css v81 L7-8).
   - 18px / 700 / 1.25, margin-top 0, next sections 44px (GF.css v99 L175-189).
   - Desktop: 26px / 700, margin-bottom 22px (GF1 (extra) L2273).
7. **Store product card (mobile)** · RESOLVED (10a #7) — several systems target the same cards:
   - Tile 2-col grid: image radius 14px `#F5F5F5`, name 16px / 400, price 16px / 500, gap 32px 20px (GF1 (extra) L2101-2122).
   - Row layout v69: image 108px radius 16px, name 15px, description 13px `#8A8A8A`, price 14.5px, row padding 18px 4px, divider `#F0F0F0` (GF1 (extra) L2012-2025, L2149-2175).
   - v81 density: image 96px radius 15px, name 14px / 500 / 1.32, description 12.5px, price 14px, padding 16px 4px (GF.css L17-28).
   - v99 tile grid: 2 cols gap 28px 12px, image radius 14px `#F7F7F8`, name 14px / 500 / 1.32, price 14px / 500, description hidden (GF.css L192-293).
   - v101 tile grid again (GF.css L500-607).
   - v102 one row per line: image 108px radius 16px `#F7F7F8`, gap 16px, padding 18px 4px, divider `#EEECEF`, name 16px / 400 / 1.3, description 13px `#8A8A8A`, price 16px / 500 / 1.25 (GF.css L609-876). v102 is later in the same file, same media query and selectors as v101.
   - Website: `hg-sp-row` grid for remaining rows (WF (sp)).
8. **Recommended Products row (mobile)** · RESOLVED (10a #8)
   - 171px cards, gap 20px, image radius 14px `#F5F5F5`, name 16px / 400, price 16px / 500 (GF1 (extra) L1934-1946).
   - 146px cards, gap 12px, padding 0 16px 8px, name 14px / 500 / 1.32, price 14px (GF.css v81 L10-14; v101 L488-499).
9. **Home sections container (desktop)** · RESOLVED (10a #9)
   - `max-width:1240px; margin:16px auto 50px; padding:0 20px` (GF1 (cat) L2709).
   - `max-width:1200px; margin:8px auto 40px !important; padding:0 24px 40px !important` (GF1 (extra) L2235). Margin/padding here carry !important; the hg-cat-style values do not.
10. **Search discovery width (desktop)** · RESOLVED (10a #10): 1180px (GF.css L147) → 1350px !important (L888) → `max-width:none!important; margin-inline:0` (L1051, later in the file).
11. **Search result product cards** · RESOLVED (10a #11)
    - 146px tiles, name 13px / 600 / 1.28-1.3, price 13px / 650, image radius 14px `#F7F7F8` (GF.css L79-90, L126-135).
    - Queried (`.hg-has-query`): 136px tiles, name min-height 34px, price 13px / 18px, later weight 700; image `#fff` with border `#EEECEF` (GF.css L1235-1281, L1637-1654).
    - Native searched rail: 160px desktop / 136px mobile, name 14px / 500 / 20px, price 14px / 600 (GF.css L1421-1432, L1491-1494).
12. **"+" add button** · RESOLVED (10a #12)
    - 30px circle, `#fff`, svg 13px, shadow `0 1px 4px rgba(0,0,0,.10)`, border 0 (GF1 (extra) L1959, L1980, L2115, L2297).
    - 34px circle, `#FFFFFF`, svg 15px, shadow `0 1px 4px rgba(27,32,35,.12)`, border 0 (GF.css L298-319, L418-430; v81 L15).
    - Store/filtered pages: border `1px solid #EEE9F6`, shadow `0 2px 6px rgba(34,18,78,.08)` (GF.css L1412-1415).
    - Offset from image corner: 8px (GF.css L333-335; GF1 L1942, L1951), 10px (GF1 L2112, L2286, L2293), 4px (GF.css L733-735; GF1 L2018-2020, L2168).
13. **Logo background size** · RESOLVED (10a #13)
    - `.hg-brand-img`: `calc(100% + 6px) calc(100% + 6px)` (GF1 (cat) L2673); `calc(100% + 6px) auto !important` (GF.css L481); `contain !important` desktop (GF.css L455-459, earlier in file); website `contain !important` (WF (brands-fill) L446, comment: "only to beat global-footer.css").
    - `.hg-logo-img`: `calc(100% + 8px) calc(100% + 8px)` (GF1 (cat) L2681); `calc(100% + 8px) auto !important` (GF.css L476); `contain !important` desktop (GF.css L455).
    - Search brands and merchant thumbs: `contain` (GF.css L68, L1208); Nearby merchant logo `object-fit:cover` (GF1 L1803).
14. **"View all" / "See all"** · RESOLVED (10a #14)
    - Home `.hg-all`: pill, 12px / 750, padding 5px 9px, `#F6F2FF`, border `#E9E0FF` (GF1 (cat) L2661).
    - Search v97: transparent, 12px / 700, height 30px, no border (GF.css L144).
    - Search queried v94: pill 34px, padding 0 14px, 13px / 700, `#F6F2FF`, border `#E9E0FF`, 999px (GF.css L1657-1679).
    - Search group link: 13px `#5A29DE` (GF.css L1418-1419); native `[class*='view-all']` 12px, min-height 36px (GF.css L101).
15. **Cart / count badges** · RESOLVED (10a #15): header dot `#FF3B4E` 11px with `#8640FC` ring, number 10px / 700 (GF1 (cart)); search cart `#FF4000`, 10px / 800, line-height 17px (GF.css L48); checkout bar `#fff` + `#5A29DE`, 10.5px / 800 (GF1 L2187).
16. **Danger red** · RESOLVED (10a #16): `#E5384F` (log out, errors, delete) vs `#FF3B4E` (cart badge).
17. **Secondary (grey) text** · RESOLVED (10a #17): `#77727F`, `#767676`, `#5C5C5C`, `#8A8A8A`, `#817B88`, `#8A849C`, `#6B7280`, `#73707A`, `rgba(27,32,35,.68)` — each listed in section 1.
18. **Hairline divider color** · RESOLVED (10a #18): `#EEECEF`, `#F0F0F0`, `#E5E5E5`, `#EAE4F5`, `#ECE9EF`, `#ECEAEF`, `#F2F2F2`, `#F0EBFA`, `#EEE9F6`, `#EAE7EE`, `#F2F0F3`, `rgba(27,32,35,.08)` — section 1.
19. **Product image backing** · RESOLVED (10a #19): `#F5F5F5` (GF1, WF (sp)), `#F7F7F8` (GF.css), `#fff` + border `#EEECEF` (search queried), `#f5f5f5` (Nearby tile).
20. **Category icon tile image radius / gaps** · RESOLVED (10a #20): image 12px (WH L248; GF1 (cat) L2706); `.tw-aspect-square` 12px (GF1 (extra) L1814) then 11px (GF1 (home88) L2353); `.tw-grid` gap 14px (extra L1813) then 9px 10px (home88 L2352); label `.tw-h-10` height 28px (extra L1815) then `auto`, 11px (home88 L2354). hg-home-v88 is appended right after hg-extra-style in `ensureExtraStyle()` (GF1 L2342-2357).
21. **Merchant list thumbnails** · RESOLVED (10a #21): 84px (Recommended for you, GF1 L1825), 76px (search merchants tab and category page, L1837, L1853), 72px (category page mobile override L1870; desktop L2308; search GF.css L74), 68px radius 13px (queried search GF.css L1201-1207), 80px (Nearby, L1802).
22. **Search category circles row** · RESOLVED (10a #22): padding 2px 18px 8px, gap 14px 4px, heading 17px / 600 `#000` (GF1 (extra) L1780-1783) vs padding 16px, column-gap 10px, row-gap 18px, heading 18px / 760, margin 22px 0 14px (GF.css L51-52, L105-106, L1134-1137).
23. **Primary button radius / shadow** · RESOLVED (10a #23): 13px + `0 7px 18px rgba(90,41,222,.18)` (account/checkout), 14px + `0 8px 18px rgba(90,41,222,.2)` (cart), 12px + `0 6px 16px rgba(90,41,222,.18)` (desktop cart-btn), 16px + `0 8px 20px rgba(90,41,222,.28)` (sheets), 999px + none (popup add, filter footer), 8px black (launch).
24. **Search chip radius** · RESOLVED (10a #24): 11px mobile vs 12px desktop for `.hg-sd-chip`; popular chips 999px (GF.css L64, L947, L114, L958).
25. **Arabic font stack** · RESOLVED (10a #25): `"IBM Plex Sans Arabic", Arial, sans-serif` (WH) vs `'IBM Plex Sans Arabic','Noto Sans Arabic',sans-serif` (GL L79).
26. **Focus indicator** · RESOLVED (10a #26): outline `3px solid #5A29DE` offset 3px (GF.css L1324) vs search pill `0 0 0 2px rgba(90,41,222,.38)` (L1330) vs form fields `0 0 0 4px rgba(90,41,222,.12)` + `#5A29DE` border (GF1 (forms) L1590, L1635).
27. **Product popup name** · RESOLVED (10a #27): 20px (mobile bottom sheet, GF1 L1897) vs 22px (desktop modal, L2318).

---

## 10a. APPROVED STANDARDS (decided by Nouf, 2026-10-05)

These apply to a component only when a future change touches that component. Do not restyle code to match them, and don't mass-edit files.

1. Header purple: _Approved standard. The code may not match yet._ `#8640FC` for every header; `#5A29DE` for buttons and accents. Gradients only on their own features (hero, checkout bar, pull-to-refresh, launch). Evidence: `#8640FC` in all 19 header rules, web and app; `#5A29DE` accent in 72 places.
2. Header bottom corners: _Approved standard. The code may not match yet._ 24px (replaces 26px and 22px). Evidence: 6 rules (desktop AppBar, search header, address editor, store cover).
3. Search header and field (mobile): _Approved standard. The code may not match yet._ the GF.css set (L37-45, L1515): padding 12px 16px 20px, field 44px `#F6F6F8` with `1px solid #E7E5EA`, back button 36px white circle, arrow `#1B2023` 18px, input 15px, min-height 76px; greys follow #17. Evidence: newer, written to override the older set; 4+ search rules.
4. Main text color: no standard (Nouf: no change). Values as in the code today: `#1B2023` (most), `#262A33` (inputs, account rows, labels), `#302C35` (chips), `#000` (edit-profile title, address h2, search heading), `#111` (cart icon).
5. Page background: _Approved standard. The code may not match yet._ pages `#FFFFFF`. The app's `#5A29DE` on `html`/`body` behind the page (AF L11-20) stays exactly as it is, on purpose. Evidence: home and search use `#FFFFFF`; `#FAFAFC` used twice.
6. Store section title (mobile): _Approved standard. The code may not match yet._ 18px / 700 / 1.25, margin-top 0, 44px between sections; desktop stays 26px / 700, margin-bottom 22px. Evidence: 2 of 3 mobile rules use 18px; v99 is newest.
7. Store product card (mobile): _Approved standard. The code may not match yet._ 2-column tile grid, gap 28px 12px, image radius 14px on `#F5F5F5`, name 16px / 400 / 1.3, price 16px / 500, no borders. Evidence: matches the section 9 target; v102 rows go against it.
8. Recommended Products (mobile): _Approved standard. The code may not match yet._ 171px cards, gap 20px, image radius 14px `#F5F5F5`, name 16px / 400, price 16px / 500. Evidence: same card values as the target grid (if section 9 covers Recommended, it becomes a wrapping grid).
9. Home sections container (desktop): _Approved standard. The code may not match yet._ max-width 1200px, margin 8px auto 40px, padding 0 24px 40px. Evidence: has !important, so it is what shows today.
10. Search discovery width (desktop): _Approved standard. The code may not match yet._ max-width none (full width), margin-inline 0. Evidence: last rule in GF.css with !important.
11. Search result product cards: _Approved standard. The code may not match yet._ 146px tiles, name 13px / 600, price 13px / 650, image radius 14px, backing per #19. Evidence: discovery set has the most rules (GF.css L79-135).
12. "+" add button: _Approved standard. The code may not match yet._ 30px white circle, svg 13px, shadow `0 1px 4px rgba(0,0,0,.10)`, no border, 8px from the image corner. Evidence: 30px in 4 rules vs 3; 8px offset in 3 rules.
13. Logo sizing: _Approved standard. The code may not match yet._ Decided target: logos fit fully inside the box (`contain`) everywhere, website and app, never cropped (also in section 9). Evidence: desktop and website already use `contain`; mobile `calc(100% + 6px/8px)` crops.
14. "View all" / "See all": _Approved standard. The code may not match yet._ home pill, 12px / 750, padding 5px 9px, `#F6F2FF`, border `#E9E0FF`. Evidence: 2 of 4 variants use this pill, including home.
15. Cart / count badges: _Approved standard. The code may not match yet._ `#FF4000`; white stays on the purple checkout bar. Evidence: brand list sets Ultimate Orange for badges; `#FF3B4E` used once.
16. Danger red: _Approved standard. The code may not match yet._ `#E5384F`. Evidence: 6 uses (log out, errors, delete) vs 1.
17. Secondary grey text: _Approved standard. The code may not match yet._ `#5C5C5C` (replaces `#77727F`, `#767676`, `#8A8A8A`, `#817B88`, `#8A849C`, `#6B7280`, `#73707A`, `rgba(27,32,35,.68)`). Evidence: most uses (8), on store pages, darkest so easiest to read.
18. Hairline divider: _Approved standard. The code may not match yet._ `#EEECEF` (replaces the other 11). Evidence: 51 uses; next is `#F0F0F0` with 9.
19. Product image backing: _Approved standard. The code may not match yet._ `#F5F5F5`. Evidence: 9 uses vs 6; used in the target store grid.
20. Category icon tiles: _Approved standard. The code may not match yet._ hg-home-v88 values: image radius 11px, gap 9px 10px, label height auto, 11px. Evidence: loads after hg-extra-style, so home shows it today.
21. Merchant list thumbnails: _Approved standard. The code may not match yet._ 72px. Evidence: 3 rules (category mobile, category desktop, search); others 1-2.
22. Search category circles row: _Approved standard. The code may not match yet._ the GF.css set: padding 16px, column-gap 10px, row-gap 18px, heading 18px / 760, margin 22px 0 14px. Evidence: 4 rules; matches #3.
23. Primary button: _Approved standard. The code may not match yet._ radius 13px, shadow `0 7px 18px rgba(90,41,222,.18)` (replaces 12, 14, 16px). The launch section keeps its own look. Evidence: account and checkout, the main button screens.
24. Search chip radius: _Approved standard. The code may not match yet._ 12px for search chips; popular chips stay 999px (different chip type). Evidence: 11px vs 12px is one chip split by screen size.
25. Arabic font stack: _Approved standard. The code may not match yet._ `"Aktiv Grotesk Arabic","IBM Plex Sans Arabic","Noto Sans Arabic",sans-serif` (never embed Aktiv). Evidence: brand list; GL already uses this order minus Aktiv.
26. Focus indicator: _Approved standard. The code may not match yet._ `#5A29DE` border + `0 0 0 4px rgba(90,41,222,.12)` (replaces the 3px outline and the 2px pill ring). Evidence: 2 rules (forms) vs 1 each.
27. Product popup name: _Approved standard. The code may not match yet._ keep both: 20px mobile, 22px desktop. Evidence: normal mobile vs desktop sizing, like 18px vs 26px section titles.

---

## 10b. OPEN DECISIONS (not approved yet)

1. English font: proposal: set `"Aktiv Grotesk","Inter",system-ui,sans-serif` everywhere, replacing Hyperzod's Poppins. Our code doesn't load Inter yet. Not approved yet.
2. Arabic font in the app: proposal: put the #25 stack in a global file so the app gets it too; IBM Plex Sans Arabic is only loaded by the Web Head box today. Not approved yet.
3. "No results found": proposal: centered on `#FFFFFF`, title 16px / 600 `#1B2023`, line under it 14px `#5C5C5C`. Not approved yet.

---

## 11. UNKNOWN

1. The English font actually shown: the repo never declares one (only `inherit`). reference/*.html snapshots (may be outdated) show Hyperzod's `--primary-font:"Poppins",sans-serif` and Google Fonts links for Poppins, Inter and IBM Plex Sans Arabic; nothing confirms what the app loads.
2. Whether IBM Plex Sans Arabic loads in the app: its Google Fonts link lives in the Web Head box (CLAUDE.md), and the Arabic font rules are in WH (website only). No Arabic font rule exists for the app.
3. Hyperzod defaults not overridden in our files: base body font size/line-height, desktop header height, bottom-nav height, tab underline/indicator color on search and store tabs, default button and link colors, dialog sizes.
4. The final winner when two equal-strength rules sit in different runtime `<style>` elements or the `<link>` (GF.css vs GF1 style elements): their order in `<head>` depends on load timing, which the code does not fix.
5. Which product renderer and which class (`.merchant-mobile-view`, `.scheme-merchant-product-grid-card`, `.product-horizontal-cards`, other) a given store receives — decided by Hyperzod per store/build.
6. `.hg-cr-h`, `.hg-cr-t`, `.hg-cr-s`, `.hg-ml`, `.hg-mr` (GF1 (extra) L2236-2241, desktop): no code in the repo creates these classes, so whether anything uses them is unknown.
7. "No results found" / empty states: no rule in the repo styles them, and the snapshots contain none.
8. `.hg-landing` (WH Arabic rules, GF.css focus rule): the landing markup and its base CSS are not in the repo; HyperGo_Hyperzod_Reference.txt (cross-check only) says the landing source is separate and its current placement is not verified.
9. Where global-launch.js is loaded: its header says "Loaded by the Global Custom HTML Head box", while CLAUDE.md lists Global Head as empty and does not list this file.
10. `--native-status-bar-height` value (set by the native app; code falls back to `0px`) and the status-bar clock/icon color.
11. launch-countdown.jpg content: only its declared size 1672 x 941 is in code.
12. Exact pixel size of `cqw`/`clamp()`/`vw` values in the launch card and the 4.3/2.3-card rails on a given screen.
13. Website search loading state: the custom result-shaped skeleton is app-only; the website shows Hyperzod's own skeleton, whose look is not in our files.
14. Bottom-nav and header cart icon artwork beyond the SVG paths in GF1; real merchant logo/cover images (come from Hyperzod data).
