import { site } from '@/content';
import { SectionHeading } from './section-heading';

export function Research() {
  const c = site.research;
  return (
    <section className="section container" id="research">
      <div className="section-rule" />
      <SectionHeading {...c} />
      <div className="research-list">
        {c.items.map(item => <article className="research-row grid" key={item.name}>
          <h3>{item.name}</h3>
          <div>
            {item.description && <p>{item.description}</p>}
            {item.label && <p className="label muted">{item.label}</p>}
            {item.links?.map(link => <p className="label" key={link.href}><a href={link.href}>{link.label} ↗</a></p>)}
            {item.status && <p className="label muted">{site.ui.statusLabel} / {item.status}</p>}
          </div>
          <span className="research-mark" aria-hidden="true">↗</span>
        </article>)}
      </div>
    </section>
  );
}
