import site from './site.json';

export { site };
export type Project = (typeof site.work.items)[number];
export type ContentLink = Project['links'][number];
export type ResearchEntry = (typeof site.research.items)[number];
export type ExperienceEntry = (typeof site.experience.items)[number];
export type FooterContent = typeof site.footer;
