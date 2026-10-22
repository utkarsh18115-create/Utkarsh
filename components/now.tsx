import { site } from '@/content';

export function Now() {
  const c = site.now;
  return <section className="section container now-section" id="now"><div className="section-rule" /><div className="now-layout grid"><div className="now-pin"><span className="label section-number">{c.number}</span><h2>{c.title}</h2><p>{c.intro}</p><div className="now-progress" aria-hidden="true"><span /></div><span className="label muted now-hint">{c.hint}</span></div><div className="now-items">{c.items.map((item, index) => <article className="now-item" key={item.title}><div className="now-item-meta label"><span>{String(index + 1).padStart(2, '0')}</span><span>{site.ui.statusLabel} / {item.status}</span></div><h3>{item.title}</h3><p>{item.description}</p>{item.remaining && <p className="remaining">{item.remaining}</p>}</article>)}</div></div></section>;
}
