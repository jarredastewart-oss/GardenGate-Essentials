# Validation — 12 October 2026

Passed:
- Static production build (`npm run build`) and JavaScript syntax check.
- Browser layout checks at 320×568, 360×800, 390×844, 430×932, 844×390, 768×1024, and 1440×900: no horizontal page overflow.
- Mobile navigation opens, Escape closes it, and keyboard focus returns to the menu button.
- All 11 external shopping/image links target the exact supplied Amazon product URL.
- No broken loaded images and no browser warning/error logs during initial checks.
- Visual inspection of desktop and mobile opening compositions.

Implementation safeguards:
- Reduced motion disables transitions and parallax and responds to preference changes.
- Semantic HTML, skip link, visible focus, normal scrolling, persistent header, reserved image dimensions.
- Essential content and shopping links do not depend on JavaScript.
- No animation sequence, animation preload, or decoded frame cache. Animation transfer: 0 bytes. Motion is a bounded transform of still imagery.

Not tested:
- Browser emulation of reduced-motion preference changes and JavaScript-disabled loading (implemented, not runtime-tested).
- Physical iOS Safari and Android Chrome devices, on-device toolbar/keyboard changes.
- Field Core Web Vitals and throttled lab performance. No performance score claimed.
- Amazon checkout/product availability (external destination is user-supplied).

Media sizes are recorded below after optimization.

- everyday-care.webp: 82 KiB
- living-room.webp: 277 KiB
- logo.webp: 21 KiB
- natural-wool.webp: 88 KiB
- neutral-colors.webp: 80 KiB
- simple-care.webp: 70 KiB
- wool-dryer-balls.webp: 122 KiB
- All image files: 740 KiB
