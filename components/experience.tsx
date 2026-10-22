import { site } from '@/content';
import { SectionHeading } from './section-heading';

export function Experience() {
  const c = site.experience;
  return <section className="section container" id="experience">
    <div className="section-rule" />
    <SectionHeading {...c} />
    <div className="research-list">{c.items.map(item => <article className="research-row grid" key={item.organization}>
      <div className="experience-heading"><h3>{item.role}</h3><p>{item.organization}</p></div>
      <div><p>{item.description}</p>{item.links?.map(link => <p className="label" key={link.href}><a href={link.href}>{link.label} ↗</a></p>)}</div>
      {(item.dates || item.location) && <p className="experience-meta label muted">{item.dates}{item.dates && item.location && ' / '}{item.location}</p>}
    </article>)}</div>
  </section>;
}
