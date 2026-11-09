import Image from "next/image";

export type ProjectSection = {
  number?: string;
  eyebrow?: string;
  title: string;
  text: string;
  images: { src: string; alt: string; caption?: string }[];
  note?: string;
};

type Project = {
  eyebrow: string;
  title: string;
  intro: string;
  hero: string;
  heroAlt: string;
  band?: string;
  brief?: { kicker?: string; title: string; text: string; cardTitle?: string; cardText?: string };
  sections: ProjectSection[];
  summary: string[];
  ctaTitle?: string;
  ctaText?: string;
};

export function ProjectCollection({ project }: { project: Project }) {
  return <main className="nini-project">
    <header className="nini-project-hero nini-shell">
      <div><p className="nini-kicker">{project.eyebrow}</p><h1>{project.title}</h1><p>{project.intro}</p></div>
      <div className="nini-project-cover"><Image src={project.hero} alt={project.heroAlt} fill priority sizes="(max-width: 800px) 100vw, 46vw" /></div>
    </header>
    {project.band && <p className="nini-project-band">{project.band}</p>}
    <div className="nini-shell">
      {project.brief && <section className="nini-project-brief">
        <div><p className="nini-kicker">{project.brief.kicker ?? "Le brief"}</p><h2>{project.brief.title}</h2><p>{project.brief.text}</p></div>
        {project.brief.cardText && <aside><strong>{project.brief.cardTitle}</strong><p>{project.brief.cardText}</p></aside>}
      </section>}
      {project.sections.map((section, index) => <section className="nini-project-section" key={`${section.title}-${index}`}>
        <div className="nini-project-copy"><p className="nini-kicker">{section.number ? `${section.number} - ` : ""}{section.eyebrow ?? "Le projet"}</p><h2>{section.title}</h2><p>{section.text}</p></div>
        <div className={`nini-project-gallery images-${section.images.length}`}>
          {section.images.map((image) => <figure key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}
        </div>
        {section.note && <p className="nini-project-note">{section.note}</p>}
      </section>)}
    </div>
    <section className="nini-summary"><div className="nini-shell"><h2>Une création pensée<br/>du premier trait au dernier détail.</h2><div>{project.summary.map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}</div></div></section>
    <section className="nini-project-cta"><p className="nini-kicker">Votre histoire, votre univers</p><h2>{project.ctaTitle ?? "Et si votre événement commençait ici ?"}</h2><p>{project.ctaText ?? "Je crée une identité et des supports sur mesure pour que tout soit beau, cohérent et simple à vivre le jour J."}</p><a className="nini-button nini-button-green" href="/creer-mon-projet">Créer mon projet</a></section>
  </main>;
}
