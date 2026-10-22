import { site } from '@/content';
import { SectionHeading } from './section-heading';

export function Education() {
  const c = site.education;
  return <section className="section container" id="education">
    <div className="section-rule" />
    <SectionHeading {...c} />
    <div className="research-row grid"><h3>{c.degree}</h3><div><p>{c.institution}, {c.location}</p><p className="label muted">{c.dates} / {c.cgpa}</p></div></div>
    <div className="research-row grid"><h3>{c.certificationsLabel}</h3><div><ul className="certification-list">{c.certifications.map(item => <li key={item}>{item}</li>)}</ul></div></div>
  </section>;
}
