import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "Justine & Yvan", type: "Mariage", work: "Faire-part, papeterie du jour J, site & décoration", image: "/portfolio/justine-yvan/table-decoration.png", href: "/projets/justine-yvan" },
  { title: "Sol & Novia", type: "EVJF", work: "Goodies, jeu personnalisé, brunch & décoration", image: "/projects/sol-novia.png", href: "/projets/sol-novia" },
  { title: "Marie-Pierre & Philippe", type: "Mariage", work: "Faire-part illustré, programme & papeterie", image: "/projects/papeterie-marie-pierre.jpg", href: "/projets/marie-pierre-philippe" },
  { title: "Club Alba", type: "Anniversaire", work: "Invitations, menus, papeterie & mise en scène", image: "/projects/weekend-montagne.png", href: "/projets/club-alba" },
];

export default function Home() {
  return <main className="commerce-home">
    <section className="commerce-hero page-shell">
      <div className="commerce-hero-copy"><p className="kicker">Papeterie & décoration événementielles</p><h1>Des univers singuliers pour vos événements.</h1><p>Faire-part, papeterie du jour J et détails décoratifs imaginés sur mesure pour donner une vraie cohérence à votre célébration.</p><a className="text-link" href="/projets">Découvrir les projets <ArrowRight size={15}/></a></div>
      <a className="commerce-hero-image" href="/projets/justine-yvan"><Image src="/portfolio/justine-yvan/faire-part.png" alt="Papeterie sur mesure du mariage de Justine et Yvan" fill priority sizes="(max-width: 800px) 100vw, 65vw" /><span>Projet 01 · Justine &amp; Yvan</span></a>
    </section>
    <p className="home-manifesto page-shell">Chaque projet commence par votre histoire.</p>
    <section className="compact-projects page-shell">
      <div className="compact-section-head"><div><p className="kicker">Projets choisis</p><h2>Des célébrations, quatre univers.</h2></div><a className="text-link" href="/projets">Voir tous les projets <ArrowRight size={14}/></a></div>
      <div className="commercial-project-grid">{projects.map((project) => <a className="commercial-project-card" href={project.href} key={project.title}><div className="commercial-project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="commercial-project-info"><div><h3>{project.title}</h3><p><b>{project.type}</b> · {project.work}</p></div><ArrowRight size={18}/></div></a>)}</div>
    </section>
    <section className="home-ribbon"><p>Du premier courrier au dernier détail.</p></section>
    <section className="commercial-services page-shell">
      <div className="compact-section-head"><div><p className="kicker">Le studio vous accompagne</p><h2>Une offre claire, adaptée à votre événement.</h2></div><a className="text-link" href="/prestations">Toutes les prestations <ArrowRight size={14}/></a></div>
      <div className="commercial-services-grid"><article><span>01</span><h3>Faire-part & papeterie</h3><p>Save the date, invitations, menus, marque-places et cartes assorties.</p></article><article><span>02</span><h3>Décoration de table</h3><p>Une composition cohérente pour relier chaque détail de votre réception.</p></article><article><span>03</span><h3>Signalétique & mise en scène</h3><p>Plans de table, panneaux, décors papier et éléments d’accueil sur mesure.</p></article></div>
    </section>
    <section className="commercial-about page-shell"><div className="commercial-about-image"><Image src="/portrait-ines.png" alt="La créatrice de Studio Nini" fill sizes="(max-width: 700px) 100vw, 36vw" /></div><div><p className="kicker">Bonjour, moi c’est Justine</p><h2>Des créations pensées pour être belles, utiles et personnelles.</h2><p>Je vous accompagne de la première idée aux fichiers prêts à imprimer, avec une proposition simple, cohérente et adaptée à votre événement.</p><a className="text-link" href="/studio">Découvrir mon approche <ArrowRight size={14}/></a></div></section>
    <section className="final-cta compact-cta"><p className="kicker">Votre projet</p><h2>Parlons de ce que vous imaginez.</h2><p>Expliquez-moi votre événement : je vous réponds avec une première orientation.</p><a className="button" href="/contact">Me contacter <ArrowRight size={16}/></a></section>
  </main>;
}
