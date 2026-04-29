# Favicon asset specification (PR-MKT-2 prep)

## Purpose

This document specifies the favicon and PWA icon asset set required for the marketing site. The current site uses an inline SVG emoji as a data URI — functional but doesn't satisfy iOS home-screen, Android home-screen, Windows pinned-tile, or older browsers that ignore SVG favicons.

When asset files are produced (by Omar or a designer), drop them into the repo per the file paths below and apply the HTML changes per the second section. PR-MKT-2 ships when both are in place.

## Asset files required

All paths are relative to repo root. Files go directly in repo root, not under a `public/` directory (the site has no `public/`).

| File | Format | Dimensions | Purpose |
|---|---|---|---|
| favicon.ico | ICO | 16x16 + 32x32 + 48x48 multi-resolution | Browser tab icon, older browsers, Windows shortcuts |
| favicon-16x16.png | PNG | 16x16 | Browser tab icon, modern browsers |
| favicon-32x32.png | PNG | 32x32 | Browser tab icon, high-DPI displays |
| apple-touch-icon.png | PNG | 180x180 | iOS home-screen icon |
| android-chrome-192x192.png | PNG | 192x192 | Android home-screen icon |
| android-chrome-512x512.png | PNG | 512x512 | Android splash screen, PWA install |
| safari-pinned-tab.svg | SVG | Vector, monochrome | Safari pinned tab |
| site.webmanifest | JSON | n/a | PWA manifest |

## Design constraints

The Apple touch icon must NOT have transparency. iOS renders transparent areas as black and the result looks broken. The shield mark should sit on a solid brand-colored square filling the full image.

Android Chrome 512x512 is also used as the PWA splash screen. Same rule: solid background, no transparency.

Safari pinned tab SVG must be monochrome. Safari fills the icon with the user's accent color, so any multicolor source becomes a single color anyway.

All raster icons should be visually consistent with the inline SVG emoji shield currently in use. The shield motif should remain the brand mark.

Brand background color is `#0F172A` (the theme-color set in PR-MKT-1).

## site.webmanifest contents

```json
{
  "name": "Benefit Guardian",
  "short_name": "Benefit Guardian",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0F172A",
  "background_color": "#0F172A",
  "display": "standalone",
  "start_url": "/"
}
```

## HTML changes required

Add these tags to the `<head>` of every public HTML file (`index.html`, `about.html`, `privacy.html`, `404.html`), replacing the existing inline SVG favicon link:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0F172A" />
<link rel="manifest" href="/site.webmanifest" />
```

The existing inline SVG data URI favicon link should be removed.

## Asset generation options

Three paths to producing the asset files:

1. Hand off the existing emoji shield design to a designer who produces the full set. Most polished result, slowest.
2. Use a free tool like realfavicongenerator.net which takes a single source image (256x256 or larger PNG) and generates the entire set including the .webmanifest. Acceptable polish, fast.
3. Hand-render with a vector tool (Figma, Illustrator). Highest control, requires design skills.

Option 2 is recommended for speed. The existing SVG emoji shield can be rendered at 1024x1024 PNG, fed into the generator, and the full asset set drops out in one operation.

## Out of scope

This document does not produce the asset files. It specifies what's needed when they're produced. Asset generation is Omar's call — design, generator, or hire.

This document does not ship the HTML changes. PR-MKT-2 (the actual deployment) ships when assets exist in the repo and the HTML changes are applied in the same PR.

## When PR-MKT-2 ships

When asset files are produced and dropped into the repo per this spec. Single PR adds the assets plus the HTML link-tag changes.

## Suggested merge strategy

Squash merge.
