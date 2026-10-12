# GardenGate Essentials

Responsive marketing website recreated from supplied references. All shopping links open https://www.amazon.com/dp/B0H9YPZZKJ.

## Run and deploy
- `npm run dev` starts the local preview on port 4173.
- `npm run build` creates `dist/` with no third-party dependencies.
- Vercel uses the included `vercel.json` and automatically builds the connected main branch.

## Edit content
Edit `index.html` for all copy, navigation, product information, and Amazon destinations. Edit `styles.css` for palette, typography, spacing, and the 700px mobile breakpoint. Replace images in `assets/` while preserving filenames, or update their references.

## Media and motion
Original supplied logo and product photographs are optimized as WebP. The living-room backdrop is AI-generated, inspired by the supplied reference. It is illustrative, not a product photograph. All product geometry and packaging are preserved in original assets.
Parallax runs on scroll with requestAnimationFrame, bounded to 55px on desktop and 22px on mobile. Individual layer speeds are HTML data-speed attributes. Reduced-motion preferences disable parallax and transitions, including when changed during a visit. No video/image sequence is used or downloaded. Content remains usable without JavaScript.

## Content decisions
The site is a single landing page. Room categories lead to the one featured product rather than implying unavailable collections. No invented pricing, ratings, reviews, bestseller claim, certifications, phone number, address, or email signup is included. The placeholder newsletter was replaced with a functional Amazon link because no newsletter service was supplied.

## Verification
See VALIDATION.md for recorded checks and limitations.
