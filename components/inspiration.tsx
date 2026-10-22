import { site } from '@/content';
import { SectionHeading } from './section-heading';

type InspirationItem = { type: string; title: string; author: string; note: string };

export function Inspiration() {
  const c = site.inspiration;
  const items: InspirationItem[] = c.items;
  if (items.length === 0) return null;
  return <section className="section container" id="inspiration"><div className="section-rule" /><SectionHeading {...c} /><div className="reading-list">{items.map((item, index) => <article className="reading-row grid" key={index}><span className="label muted">{item.type}</span><div><h3>{item.title}</h3><p className="label muted">{item.author}</p></div><p>{item.note}</p></article>)}</div></section>;
}
