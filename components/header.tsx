import { site } from '@/content';

export function Header() {
  return <header className="header container" id="top"><a className="identity" href="#top">{site.header.name}</a><nav aria-label={site.ui.navigation}>{site.header.links.map(link => link.label === 'CV' && !site.footer.cvHref ? <span key={link.label} className="muted" aria-disabled="true">{link.label}</span> : <a key={link.label} href={link.href}>{link.label}</a>)}</nav></header>;
}
