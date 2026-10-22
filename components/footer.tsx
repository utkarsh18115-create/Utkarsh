import { site } from '@/content';

export function Footer() {
  const c = site.footer;
  const [mailbox, domain] = c.email.split('@');
  return <footer className="footer container" id="contact"><div className="section-rule" /><div className="footer-top grid"><div><span className="label">{c.number} / Contact</span><h2>{c.title}</h2></div><div className="contact-lines"><p><a href={`mailto:${c.email}`}>{mailbox}@<wbr />{domain}</a></p><p><a href={c.socialHref}>{c.social}</a> / <a href={c.githubHref}>{c.github}</a></p><p className="label muted">{c.note}</p>{c.cvHref && <p id="cv" tabIndex={-1} className="label muted"><a href={c.cvHref}>{site.ui.cv}</a></p>}</div></div><div className="wordmark-caption label">{c.wordmarkLabel}</div><div className="wordmark" role="img" aria-label={c.wordmark}>{c.wordmark.split(' ').map((word, index) => <span className="wordmark-word" key={index} aria-hidden="true">{[...word].map((letter, i) => <span className="magnetic-letter" key={i}>{letter}</span>)}</span>)}</div><div className="footer-bottom label"><span>{c.copyright}</span><a href="#top">{site.ui.back} ↑</a></div></footer>;
}
