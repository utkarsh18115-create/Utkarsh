'use client';

import { Fragment, useState } from 'react';
import { site } from '@/content';
import { SectionHeading } from './section-heading';

export function SelectedWork() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="section container" id="work">
      <div className="section-rule" />
      <SectionHeading {...site.work} />
      <div className="project-list">
        {site.work.items.map(item => (
          <article className="project" key={item.id} data-open={open === item.id}>
            <button className="project-trigger grid" aria-expanded={open === item.id} aria-controls={`preview-${item.id}`} onClick={() => setOpen(open === item.id ? null : item.id)}>
              <span className="label project-number">{item.number}</span>
              <span className="project-copy">
                <span className="project-title">{item.title}</span>
                <span className="project-description">{item.description}</span>
                <span className="label muted">{item.stack}</span>
                {item.remaining && <span className="project-description muted">{item.remaining}</span>}
              </span>
              <span className="project-side">
                <span className="label status">{site.ui.statusLabel}<br />{item.status}</span>
                <span className="hover-preview" aria-hidden="true">
                  <svg viewBox="0 0 180 64" fill="none"><path d="M8 32 H172" stroke="currentColor" strokeWidth="1.5" />{[8, 60, 112, 164].map(x => <rect key={x} x={x} y="26" width="8" height="8" fill="var(--paper-raised)" stroke="currentColor" />)}</svg>
                  <span className="label">{item.preview}</span>
                </span>
                <span className="project-action label">{open === item.id ? site.ui.close : site.ui.open}<span aria-hidden="true">{open === item.id ? ' −' : ' +'}</span></span>
              </span>
            </button>
            <div id={`preview-${item.id}`} hidden={open !== item.id} className="project-detail">
              <div className="empty-preview">
                <h3>{item.preview}</h3>
                {item.details.map(detail => <p key={detail}>{detail}</p>)}
                {'bullets' in item && item.bullets && <ul className="project-bullets">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
                <p className="label">{item.links.map((link, index) => <Fragment key={link.href}>{index > 0 && <span aria-hidden="true"> / </span>}<a href={link.href}>{link.label}</a></Fragment>)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
