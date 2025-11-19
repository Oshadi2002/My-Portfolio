# Design Guidelines: K.L Kumanayaka Developer Portfolio

## Design Approach
**Reference-Based Approach** inspired by Linear's clean minimalism, GitHub's developer aesthetic, and Notion's content organization. This creates a professional yet modern portfolio that emphasizes technical credibility while maintaining visual appeal.

**Key Principles:**
- Technical sophistication with approachable design
- Content-first hierarchy emphasizing projects and skills
- Subtle animations that enhance, not distract
- Professional credibility for internship opportunities

## Color Palette

**Dark Mode (Primary):**
- Background: 220 15% 8% (deep charcoal)
- Surface: 220 15% 12% (elevated surfaces)
- Primary: 210 100% 60% (professional blue)
- Accent: 160 85% 45% (success green for CTAs)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 65%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 210 100% 50%
- Accent: 160 75% 40%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 45%

## Typography
- **Headings:** Inter (font-bold to font-black, tracking-tight)
- **Body:** Inter (font-normal, leading-relaxed)
- **Code/Tech:** JetBrains Mono for tech stacks
- **Scale:** text-5xl → text-4xl → text-2xl → text-xl → text-base

## Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-8 (cards), gap-4 (content)
- Container: max-w-6xl mx-auto px-6

## Core Sections & Components

### 1. Hero Section (80vh)
- Split layout: Left (60%) content, Right (40%) professional headshot placeholder
- Large typography: Name in text-6xl font-black, Title in text-2xl text-secondary
- Dual CTAs: "View Projects" (primary) + "Download CV" (outline with blur backdrop on dark bg)
- Floating tech stack badges below CTAs
- Subtle gradient overlay on hero image side

### 2. About/Profile Section
- Full-width container with centered max-w-4xl
- Profile text in 2-column layout (md:grid-cols-2)
- Left: Professional summary from CV
- Right: Quick stats cards (Education level, Projects completed, Tech skills count)
- Pill-style badges for languages (English, Sinhala)

### 3. Projects Showcase
- 3-column grid (lg:grid-cols-3, md:grid-cols-2, sm:grid-cols-1)
- Card design with:
  - Project thumbnail placeholder (16:9 aspect ratio)
  - Tech stack badges (small, outlined)
  - Title + description
  - Hover: subtle lift (scale-105) + glow effect
- Feature the 3 projects: RDMS, Student Management System, Tourism Website

### 4. Education Timeline
- Vertical timeline with connector lines
- Each entry: Icon (graduation cap) + Institution + Duration + Achievement pills
- Staggered layout for visual interest
- Display: HNDIT → A/L → O/L with expanding details

### 5. Skills Matrix
- Multi-category grid layout
- Technical Skills: Badge cloud with proficiency indicators
- Soft Skills: Icon + text cards (4-column grid becomes 2-col on tablet)
- Interactive: Hoverable skill cards with subtle color shift

### 6. Contact Section
- 2-column split: Contact form (left) + Info cards (right)
- Info cards stack: Email, Phone, Location, Social (LinkedIn, GitHub)
- Each card: Icon + Label + Link/Text
- Form: Modern input styling with floating labels

### 7. Footer
- Full-width dark surface
- Center-aligned: Quick links + Social icons + Copyright
- Minimal, single-row layout

## Component Library

**Buttons:**
- Primary: bg-primary, rounded-lg, px-6 py-3, font-semibold
- Outline: border-2, backdrop-blur-sm bg-white/10 (on dark), hover:bg-white/20

**Cards:**
- Rounded-xl, border border-white/10, bg-surface
- Padding: p-6
- Hover: ring-2 ring-primary/20, translate-y-[-4px]

**Badges:**
- Pill shape: rounded-full px-3 py-1 text-sm
- Tech stack: bg-primary/10 text-primary border border-primary/20

**Icons:**
- Use Heroicons via CDN
- Size: h-5 w-5 (inline), h-8 w-8 (feature icons)

## Images
- **Hero Image:** Professional headshot or workspace setup (right side of hero, 40% width)
- **Project Thumbnails:** UI mockups or project screenshots (3 images, 16:9 ratio)
- **Decorative:** Subtle gradient overlays, no additional images needed

## Animations
**Minimal & Purposeful:**
- Scroll fade-in for sections (opacity + translateY)
- Card hover effects only (scale + shadow)
- No page transitions, no parallax
- Smooth scrolling for anchor links

## Accessibility
- Dark mode as default with seamless light mode toggle
- Form inputs maintain consistent dark styling
- All interactive elements: min 44px touch targets
- Proper heading hierarchy (h1 → h2 → h3)
- High contrast ratios (4.5:1 minimum)

**Critical Implementation Notes:**
- Use natural section heights, not forced 100vh everywhere
- Multi-column layouts for Projects (3-col) and Skills (4-col), stack on mobile
- Consistent vertical rhythm: py-20 for sections
- Hero uses viewport height (80vh) for impact, other sections flow naturally