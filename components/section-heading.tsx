export function SectionHeading({ number, title, intro }: { number: string; title: string; intro: string }) {
  return <div className="section-heading grid"><div className="section-title"><span className="label section-number">{number}</span><h2>{title}</h2></div><p className="section-intro">{intro}</p></div>;
}
