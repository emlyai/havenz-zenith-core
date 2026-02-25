

## Plan: Remove External havenz.ai Links + Mobile UI/UX Audit

### Part 1: Replace External Links with In-App Modals

**Problem**: The Projects page cards link out to `havenz.ai/portfolio/...` URLs. These should instead open a popup/dialog with the project details inline.

**What changes**:

**1. Update `src/pages/Projects.tsx`**
- Remove the `<a href={project.link} target="_blank">` wrapper from each project card
- Instead, make each card clickable to open a Dialog (using the existing `@radix-ui/react-dialog` component)
- Add a state variable to track the selected project
- When a card is clicked, open a Dialog/modal showing:
  - The project image (full-width at top)
  - Project title, subtitle, category badge
  - Project description (expanded)
  - Additional details for each project (add a `details` field to the project data with bullet points about key features, location, size, etc.)
  - A "Contact Us About This Project" button linking to `/contact`
- The modal uses the existing dark card styling (`bg-card`, `border-border`) with a close button

**2. Images stay as-is** — The `havenz.ai/wp-content/uploads/` image URLs are just CDN asset URLs, not navigational links. They remain unchanged since they're just serving images.

**3. Expanded project data** — Each project in the `projects` array gets a new `details` array with 3-5 bullet points about the project (pulled from what was on the original portfolio pages):
  - AHI Red Deer: 480-acre campus, 8M+ sqft, clean energy, digital connectivity, mixed-use
  - Langdon: Data centre, transport hub, food resilience, clean power
  - Moon Haven: Country residential, cabin development, Alberta landscape
  - AHI Calgary: 7.9 acres, EV charging, district energy, smart mobility
  - Fort McMurray: Green lifestyle, trade center, sustainable commerce
  - RISE: Innovation hub, collaboration space, sustainable enterprise

---

### Part 2: Mobile UI/UX Audit & Fixes

After reviewing all pages, here are the mobile issues to address:

**A. Navbar (`src/components/Navbar.tsx`)**
- The "Projects" link is missing from the footer navigation — add it to the Footer nav links array

**B. Footer (`src/components/Footer.tsx`)**
- Add "Projects" to the navigation links array (currently missing)
- On mobile, the 4-column grid collapses to single column — this is fine, no change needed

**C. Hero sections (all pages)**
- The floating decorative circles (200px+) can overflow on small screens. Add `hidden sm:block` to the larger decorative elements on Index, About, Services, Projects, and Contact heroes to prevent horizontal scroll on mobile

**D. Index page (`src/pages/Index.tsx`)**
- Hero text `text-5xl` on mobile is fine but the CTA buttons stack correctly via `flex-col sm:flex-row` — no issue
- The marquee section is fine
- The "Latest Projects" grid already uses `grid-cols-1 md:grid-cols-3` — good

**E. Projects page (`src/pages/Projects.tsx`)**  
- The project modal needs to be mobile-optimized: on mobile it should be a full-screen sheet/drawer instead of a centered dialog (use the existing `useIsMobile` hook + `Drawer` component from vaul for mobile, `Dialog` for desktop)

**F. Contact page (`src/pages/Contact.tsx`)**
- The 40 animated star dots in the hero add unnecessary DOM elements and animation cost on mobile. Reduce to 15 on mobile or hide entirely with a media query approach
- The phone number `text-2xl` in the contact info section could overflow on very small screens — add `break-all` or reduce size

**G. About page (`src/pages/About.tsx`)**
- Timeline: the left-aligned marker on mobile (`left-6`) works correctly
- Team grid `grid-cols-2` on mobile is appropriate

---

### Technical Details

| File | Changes |
|------|---------|
| `src/pages/Projects.tsx` | Replace external `<a>` links with Dialog/Drawer modal; add expanded project details data; hide large decorative circle on mobile |
| `src/components/Footer.tsx` | Add "Projects" to nav links |
| `src/pages/Index.tsx` | Add `hidden sm:block` to large floating decorative circles |
| `src/pages/About.tsx` | Add `hidden sm:block` to floating circles in hero |
| `src/pages/Services.tsx` | Add `hidden sm:block` to floating circles in hero |
| `src/pages/Contact.tsx` | Add `hidden sm:block` to floating circle; reduce star count; constrain phone number text |

- Uses existing `Dialog` component from `src/components/ui/dialog.tsx` for desktop modals
- Uses existing `Drawer` from `vaul` for mobile modals (via `useIsMobile` hook)
- No new dependencies needed
- Image URLs from `havenz.ai/wp-content/uploads/` remain (they're CDN assets, not navigational links)

