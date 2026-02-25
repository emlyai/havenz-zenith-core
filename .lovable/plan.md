

## Plan: Add Projects Page and Incorporate Original Website Imagery

### What We're Building
A new **Projects** page showcasing all 6 Havenz projects with images sourced from the original website, plus incorporating more photography into existing pages (Index, About) to add visual richness — all while maintaining the current dark, tech-forward design system.

---

### Changes Overview

**1. New file: `src/pages/Projects.tsx`**
- Dark hero section with gradient text heading "Our Projects"
- 6 project cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Each card uses the actual project render/photo from havenz.ai as a cover image
- Cards have hover animations (lift + overlay reveal), category badges, and project descriptions
- Projects data sourced from the original site:
  - AHI Red Deer — Sustainable Innovation Campus (Flagship)
  - Havenz Sustainable Energy Centre — Langdon (Data Centre & Transport Hub)
  - Moon Haven — Country Residential & Cabin Development (Sustainable Living)
  - AHI Calgary — Smart Mobility and Energy Hub
  - AHI Fort McMurray — Green Lifestyle and Trade Center
  - RISE Headquarters
- Images loaded directly from `havenz.ai/wp-content/uploads/` URLs
- Each card links to a detail view or opens the original site URL in a new tab
- Bottom CTA section linking to Contact

**2. Update `src/components/Navbar.tsx`**
- Add "Projects" link between "Services" and "Contact" in the `navLinks` array

**3. Update `src/App.tsx`**
- Import the new Projects page
- Add route: `<Route path="/projects" element={<Projects />} />`

**4. Update `src/pages/Index.tsx`**
- **Flagship Project section**: Add the AHI Red Deer hero render image (`Enscape_1-min.png`) as a visual element alongside the text
- **Discover Our Story section**: Add stock photography from the original site (e.g., `shutterstock_2248569293`, `programming-with-business-people`) as background accents or card images
- **New "Latest Projects" preview**: Replace or augment the "Discover Our Story" grid with a 3-card project preview that links to `/projects`, using actual project imagery
- Update the Flagship Project "Discover More" button to link to `/projects` instead of `/about`

**5. Update `src/pages/About.tsx`**
- **Energy Haven Partnership section**: Replace the abstract placeholder (emoji ⚡ box) with an actual image from the original site (e.g., the Langdon energy centre render)
- **Story section**: Add a project render image alongside the text to break up the all-text layout

---

### Technical Details

- All project images use external URLs from `havenz.ai/wp-content/uploads/` — no need to download/host them
- Images use `loading="lazy"` and `object-cover` for performance and responsive fit
- Project cards use `framer-motion` for hover animations (`whileHover`, `scale`, `y` transforms) consistent with existing patterns
- Category badges use the existing accent color system (`bg-accent/10 text-accent`)
- Page follows the same component structure: `PageTransition > Navbar > sections > Footer`
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

### Files Modified
| File | Action |
|------|--------|
| `src/pages/Projects.tsx` | Create |
| `src/App.tsx` | Add route |
| `src/components/Navbar.tsx` | Add "Projects" nav link |
| `src/pages/Index.tsx` | Add project imagery to Flagship section + project preview cards |
| `src/pages/About.tsx` | Replace placeholder visuals with real images |

