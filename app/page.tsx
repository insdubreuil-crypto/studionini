import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Justine & Yvan", type: "Identité de mariage", image: "/projects/justine-yvan-univers.png", className: "project-wide" },
  { title: "Sol & Novia", type: "Univers d’EVJF", image: "/projects/sol-novia.png", className: "project-tall" },
  { title: "Marie & Pierre-Philippe", type: "Papeterie sur mesure", image: "/projects/papeterie-marie-pierre.jpg", className: "project-photo" },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Studio Nini — accueil"><span className="brand-mark" aria-hidden="true"><i /><b /></span><span className="brand-name"><small>studio</small>nini</span></Link>
      <nav aria-label="Navigation principale"><a href="#projets">Projets</a><a href="#prestations">Prestations</a><a href="#studio">Le studio</a><a href="#contact">Contact</a></nav>
      <a className="button button-small" href="#contact">Parler de votre projet</a>
    </header>

    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">Identités · Faire-part · Illustrations</p><h1>Des univers graphiques sur mesure pour les événements <em>qui comptent.</em></h1><p className="hero-intro">À partir de votre histoire, de votre lieu et de vos envies, Studio Nini imagine un langage visuel unique — puis le décline sur chaque détail de votre événement.</p><div className="hero-actions"><a className="button" href="#projets">Découvrir les projets</a><a className="text-link" href="#prestations">Explorer les prestations <span>↘</span></a></div></div>
      <div className="hero-art"><div className="hero-image hero-image-main"><Image src="/projects/papeterie-marie-pierre.jpg" alt="Faire-part de mariage illustré tenu en main" fill priority sizes="(max-width: 800px) 90vw, 42vw" /></div><div className="hero-image hero-image-note"><Image src="/projects/programme-mariage.jpg" alt="Programme de mariage illustré" fill sizes="20vw" /></div><span className="orbit orbit-saffron" /><span className="orbit orbit-sage" /><p className="hand-note">Des idées,<br />des histoires,<br /><strong>des souvenirs.</strong></p></div>
    </section>

    <section className="projects-section" id="projets"><div className="section-heading"><div><p className="eyebrow">Portfolio</p><h2>Projets sélectionnés</h2></div><p>Des créations pensées pour une histoire précise,<br />jamais pour ressembler à toutes les autres.</p></div><div className="project-grid">{projects.map((project,index)=><article className={`project-card ${project.className}`} key={project.title}><div className="project-image"><Image src={project.image} alt={`${project.title} — ${project.type}`} fill sizes="(max-width: 800px) 100vw, 45vw" /><span className="project-index">0{index+1}</span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span aria-hidden="true">↗</span></div></article>)}</div></section>

    <section className="manifesto"><div className="pattern" aria-hidden="true">n· n· n· n·</div><h2>Je ne crée pas seulement un faire-part. J’imagine le langage visuel de votre événement.</h2></section>

    <section className="services" id="prestations"><div className="section-heading"><div><p className="eyebrow">Ce que je crée</p><h2>Les prestations</h2></div></div><div className="service-grid">{[
      ["01","Identité d’événement","Logo ou monogramme, palette, typographies, motifs et direction artistique."],
      ["02","Faire-part & papeterie","Invitations, programmes, menus, marque-places et cartes de remerciement."],
      ["03","Illustrations sur mesure","Portraits, lieux, cartes, objets symboliques et pictogrammes originaux."],
      ["04","Déclinaisons","Signalétique, cadeaux, textile, décoration et supports numériques."],
    ].map(([number,title,copy])=><article className="service-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="studio" id="studio"><div className="studio-image"><Image src="/portrait-ines.png" alt="Inès, créatrice de Studio Nini" fill sizes="(max-width: 800px) 90vw, 35vw" /></div><div className="studio-copy"><p className="eyebrow">Derrière le studio</p><h2>Hello, moi c’est Nini.</h2><p>Graphiste et illustratrice, je transforme les personnes, les lieux et les détails qui comptent en univers graphiques singuliers.</p><p>Chaque projet commence par une rencontre et se dessine entièrement sur mesure, du premier croquis jusqu’aux supports qui accompagneront votre événement.</p><a className="text-link" href="mailto:bonjour@studionini.fr">Faire connaissance <span>→</span></a></div></section>

    <section className="contact" id="contact"><span className="contact-dot" /><p className="eyebrow">Votre projet</p><h2>Racontons ensemble<br />votre prochain <em>événement.</em></h2><a className="button button-light" href="mailto:bonjour@studionini.fr">Écrire à Studio Nini</a></section>
    <footer><div className="footer-brand">studio nini</div><p>Identités · Faire-part · Illustrations · Papeterie</p><p>France · Projets à distance</p></footer>
  </main>;
}
