import { site } from '@/content';
import { SectionHeading } from './section-heading';

export function Skills() {
  const c = site.skills;
  return <section className="section container" id="skills">
    <div className="section-rule" />
    <SectionHeading {...c} />
    <dl className="skills-list">{c.items.map(item => <div className="skills-row" key={item.name}>
      <dt className="label">{item.name}</dt><dd>{item.description}</dd>
    </div>)}</dl>
  </section>;
}
