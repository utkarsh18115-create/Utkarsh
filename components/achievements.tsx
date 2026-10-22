import { site } from '@/content';
import { SectionHeading } from './section-heading';

export function Achievements() {
  const c = site.achievements;
  return <section className="section container" id="achievements">
    <div className="section-rule" />
    <SectionHeading {...c} />
    <div className="research-list">{c.items.map(item => <article className="research-row grid" key={item.name}>
      <h3>{item.name}</h3><div><p>{item.description}</p></div>
    </article>)}</div>
  </section>;
}
