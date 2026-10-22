# DESIGN.md: Utkarsh Tiwari portfolio

## Purpose
One site for research committees and engineering hiring managers worldwide. Within ten seconds a visitor should know who he is, what he builds, and what is still in progress.

## Mood
Quiet, light, editorial. Paper and ink. Confidence comes from scale, spacing and restraint, not decoration. Motion is deliberate and always tied to meaning.

## Color tokens (light theme only)
paper: #F3F0E9
paperRaised: #EAE6DC
ink: #151512
inkMuted: #6B6A63
rule: #D8D4C8
accent: #2F5D50

Accent is used for one thing per screen: a status dot, an active link, or a hover underline. Focus ring: 2px ink with 3px offset.
No gradients. No shadows. Depth comes from paperRaised blocks and 1px rules.

## Typography
Display and body: Schibsted Grotesk, self hosted.
Labels and status tags: Geist Mono, uppercase, letter spacing 0.08em.

Scale (fluid, using clamp between mobile and desktop):
wordmark: 14vw to 18vw, weight 600, tight tracking, uppercase
h1: 56px to 120px, weight 500, line height 0.95
h2: 32px to 56px, weight 500
body: 18px, line height 1.55, weight 400, max width 62 characters
label: 12px mono uppercase

Left aligned. Sentence case everywhere except the wordmark and labels.

## Layout
12 column grid, max width 1320px. Side gutters 24px on mobile, 48px on desktop. Section spacing 160px on desktop, 96px on mobile. 1px rules between sections. Border radius 0 everywhere except status dots.

## Sections in order
1. Header: name small on the left, links on the right (Work, Experience, Research, Now, CV, Contact). Hide the CV link while no file is available.
2. Hero: one positioning line as h1, one sentence beneath, a label line with location and availability.
3. Selected work (01): numbered rows for Litmus, vaak, and TerraQ. Each row has title, one line, stack labels, status tag, and an expandable preview of sourced text and links. No demo runs in a preview.
4. Experience (02): C-DAC, CybraneX, NLIP Lab, Aryahs World Infotech, and confidential freelance work. Show role, organization, dates, location, and short description when supplied.
5. Research (03): a linked TerraQ research output, E2 Calonics paper presentation selection, and a paper in preparation.
6. Education (04): degree, institution, dates, CGPA, and certifications.
7. Achievements (05): hackathon outcomes, paper selection, and ISRC leadership.
8. Skills (06): compact grouped list.
9. Now (07): current work, status, and known next steps. Hide unspecified milestones.
10. Inspiration: keep the component hidden until real papers and books are supplied.
11. Footer (08): contact lines and a huge wordmark reading UTKARSH TIWARI with magnetic letters. Hide the CV download while the file is unavailable.

Status tags allowed: Shipped, In progress, Research, Confidential, In preparation.

## Motion
Principles: motion explains, never decorates. One idea per section. Nothing loops except the footer interaction. Reduced motion preference: no transforms, instant state changes, simple fades at most.

Tokens, kept in one file:
duration fast 0.2s, base 0.6s, slow 1.0s
easeOut [0.16, 1, 0.3, 1]
easeInOut [0.65, 0, 0.35, 1]
stagger 0.06s

Specs:
1. Hero lines reveal with a mask, rising 110 percent into place.
2. Section rules draw from left to right on enter.
3. Project rows: on hover the title shifts 12px and a preview appears. Each row expands to show sourced details and links.
4. Shared element transition from a project row into its case study using layout animation.
5. The Now section is pinned and scroll linked.
6. Footer wordmark: letters move toward the cursor inside a radius of 160px with strength 0.35 and return with an elastic ease. Disabled on touch devices and with reduced motion.
7. Page transitions stay under 500ms.
8. Smooth scroll with Lenis, synced to GSAP ScrollTrigger.

## Interactive content
Do not add interactive demonstrations without working real data. Project details may expand to show sourced text and links.

## Content rules
All copy lives in the content folder. Say final year, never third year. Do not claim anything that is not in the content folder. Freelance clients are never named; use "Confidential clients under NDA". Never use test counts as headline metrics. Show what remains for in-progress items when known; hide an unprovided milestone. No visible production copy may contain "[Placeholder]".

## Accessibility and performance
Contrast AA or better, full keyboard navigation, visible focus, semantic headings, alt text on all images. Mobile Lighthouse performance target 95 or higher, LCP under 2.0s. Self hosted fonts with swap loading. Use Next.js image handling.

## Do not
No gradient blobs. No glassmorphism. No emoji icons. No uniform card grids. No purple or blue gradient accents. No centered hero with two buttons. No fade up on every element. No stock illustrations. No sentence like "passionate developer".
