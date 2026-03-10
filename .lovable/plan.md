

## Plan: Export Document Details into Portfolio Projects

The document contains two real portfolio projects with actual flyer images and details. I will update the projects data and copy the relevant images into the codebase.

### Projects Extracted from Document

**1. SOSSA Fest 2024** (replaces existing "SOSSA Connects" entry)
- Multi-day campus festival at University of Lagos, June 24-29, 2024
- Included: Main festival branding, Mr & Miss SOSSA pageant, Blood Drive (partnered with Mr. White Foundation), Linktree hub
- Sponsors: 7UP, Viet Gold, Eltee Skhillz, Beloxxi, Tolex
- Analytics: 146 Linktree views, 96 clicks, 65.75% CTR
- Instagram link: `https://www.instagram.com/p/DJygDAvI-SX/`

**2. Vibe Tribe x Ravers "Rewind" Party** (new project entry)
- Y2K-themed house party, June 14, 2024
- Organized as Social Secretary of Geography & Planning department, UNILAG
- Tickets: Single 8K, Couple 15K
- Video: `https://www.instagram.com/p/DJygDAvI-SX/`

### Implementation Steps

1. **Copy images to `src/assets/`**
   - `img_p0_1.jpg` -> `src/assets/sossa-fest-branding.jpg` (main SOSSA Fest flyer)
   - `img_p1_1.jpg` -> `src/assets/sossa-mr-miss.jpg` (Mr & Miss SOSSA flyer)
   - `img_p2_1.jpg` -> `src/assets/sossa-blood-drive.jpg` (Blood Drive flyer)
   - `img_p6_1.jpg` -> `src/assets/rewind-party.jpg` (Rewind Y2K party flyer)

2. **Update `src/data/projects.ts`**
   - Replace the "sossa-connects" entry with real SOSSA Fest 2024 details (real context, results with Linktree analytics, sponsor partnerships, blood drive initiative)
   - Add a new "rewind-y2k-party" project under "Events & Activations" category with real details about the department house party
   - Update images to use imported assets instead of Unsplash stock photos

3. **Update the SOSSA Fest case study** to include gallery images (Mr & Miss SOSSA, Blood Drive flyers) by adding an optional `galleryImages` field to the `Project` interface and rendering them on the `CaseStudyDetail` page.

### Technical Details

- Add `galleryImages?: string[]` and `instagramLink?: string` fields to the `Project` interface
- Import images via ES6 modules (`import sossaFest from "@/assets/sossa-fest-branding.jpg"`)
- Update `CaseStudyDetail.tsx` to render gallery images and Instagram link if present

