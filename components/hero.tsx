import { site } from '@/content';

export function Hero() {
  const c = site.hero;
  return <section className="hero container" aria-labelledby="hero-title"><div className="hero-top label"><span>{c.eyebrow}</span><span>{site.ui.previewLabel}</span></div><h1 id="hero-title"><span className="placeholder-marker label">{site.ui.placeholder}</span>{c.lines.map(line => <span className="hero-mask" key={line}><span className="hero-line">{line}</span></span>)}</h1><div className="hero-bottom grid"><div className="hero-meta label">{c.availability && <span><i className="status-dot" aria-hidden="true" />{c.availability}</span>}<span>{c.location}</span></div><p>{c.description}</p></div><div className="hero-foot label"><span>{c.footnote}</span><a href="#work">{c.scroll}<span aria-hidden="true"> ↘</span></a></div></section>;
}
