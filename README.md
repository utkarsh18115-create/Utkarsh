# Utkarsh Tiwari portfolio

Single-page Next.js App Router portfolio. `DESIGN.md` defines the visual direction and interaction rules. Editable copy lives in `content/site.json`.

## Run

Requires Node.js 20.9 or later.

```powershell
npm ci
npm run dev
```

Open http://localhost:3000. For a production check:

```powershell
npm run lint
npm run typecheck
npm run build
npm start
```

The build fails if the generated home page contains a visible placeholder marker.

## Page

Selected work, Experience, Research, Education, Achievements, Skills, and Now appear in numbered order. Contact follows in the footer. The Inspiration component remains hidden until its content list is populated. Availability, the CV download, and unspecified milestones are hidden while their content is unavailable. Add the CV PDF to `public/Utkarsh_Tiwari_CV.pdf`, then set `footer.cvHref` and `ui.cv` in `content/site.json`.

All three work rows expand to show sourced details and links. There are no illustrative demos or dummy data series. The Now section retains its scroll interaction; the footer wordmark responds to a mouse and respects reduced motion.
