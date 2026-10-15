import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  { title: "Faire-part sur mesure", category: "Avant l’événement", image: "/portfolio/justine-yvan/faire-part.png", href: "/prestations#invitations" },
  { title: "Programme du week-end", category: "Papeterie", image: "/projects/programme-mariage.jpg", href: "/prestations#papeterie" },
  { title: "Menus & marque-places", category: "Table", image: "/portfolio/justine-yvan/table-decoration.png", href: "/prestations#table" },
  { title: "Plan de table", category: "Signalétique", image: "/portfolio/justine-yvan/plan-de-table.png", href: "/prestations#signaletique" },
  { title: "Panneaux & décoration", category: "Mise en scène", image: "/portfolio/justine-yvan/photobooth-panneaux.png", href: "/prestations#signaletique" },
  { title: "Goodies personnalisés", category: "Souvenirs", image: "/portfolio/sol-novia/goodies.png", href: "/projets/sol-novia" },
  { title: "Jeu personnalisé", category: "Animation", image: "/portfolio/sol-novia/jeu.png", href: "/projets/sol-novia" },
  { title: "Étiquettes & petits détails", category: "Brunch & cadeaux", image: "/portfolio/sol-novia/brunch.png", href: "/prestations#papeterie" },
];

const projects = [
  { title: "Justine & Yvan", type: "Mariage", image: "/portfolio/justine-yvan/table-decoration.png", href: "/projets/justine-yvan" },
  { title: "Sol & Novia", type: "EVJF", image: "/projects/sol-novia.png", href: "/projets/sol-novia" },
  { title: "Marie-Pierre & Philippe", type: "Mariage", image: "/projects/papeterie-marie-pierre.jpg", href: "/projets/marie-pierre-philippe" },
  { title: "Club Alba", type: "Anniversaire", image: "/projects/weekend-montagne.png", href: "/projets/club-alba" },
];

export default function Home() {
  return <main className="catalog-home">
    <section className="catalog-hero page-shell">
      <div className="catalog-hero-copy"><p className="kicker">Studio Nini · Papeterie événementielle</p><h1>Des créations sur mesure pour célébrer vos plus beaux moments.</h1><p>Du faire-part à la décoration du jour J, chaque élément est pensé pour raconter votre événement avec simplicité et cohérence.</p><div className="catalog-actions"><a className="button" href="/prestations">Voir les prestations</a><a className="text-link" href="/contact">Demander un devis <ArrowRight size={14}/></a></div></div>
      <a className="catalog-hero-media" href="/projets/justine-yvan"><Image src="/portfolio/justine-yvan/faire-part.png" alt="Faire-part illustré réalisé par Studio Nini" fill priority sizes="(max-width: 760px) 100vw, 58vw"/><span>Projet mariage · Justine &amp; Yvan</span></a>
    </section>

    <section className="catalog-products page-shell">
      <header className="catalog-heading"><div><p className="kicker">Le catalogue</p><h2>Que pouvons-nous créer ensemble ?</h2></div><p>Chaque produit est adapté à votre thème, vos couleurs et votre événement.</p></header>
      <div className="product-grid">{products.map((product)=><a className="product-card" href={product.href} key={product.title}><div className="product-image"><Image src={product.image} alt={product.title} fill sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw"/></div><p>{product.category}</p><h3>{product.title}</h3><span>Découvrir →</span></a>)}</div>
      <div className="catalog-more"><a className="button button-outline" href="/prestations">Voir toutes les prestations <ArrowRight size={15}/></a></div>
    </section>

    <section className="catalog-projects">
      <div className="page-shell"><header className="catalog-heading"><div><p className="kicker">Quelques réalisations</p><h2>Un univers différent pour chaque histoire.</h2></div><a className="text-link" href="/projets">Tous les projets <ArrowRight size={14}/></a></header>
      <div className="mini-project-grid">{projects.map((project)=><a className="mini-project-card" href={project.href} key={project.title}><div><Image src={project.image} alt={project.title} fill sizes="(max-width: 560px) 100vw, 25vw"/></div><p>{project.type}</p><h3>{project.title}</h3></a>)}</div></div>
    </section>

    <section className="catalog-process page-shell"><header className="catalog-heading"><div><p className="kicker">Comment ça marche ?</p><h2>Un accompagnement simple.</h2></div></header><div className="catalog-process-grid"><article><span>01</span><h3>Vous me racontez</h3><p>Votre événement, vos envies et les supports dont vous avez besoin.</p></article><article><span>02</span><h3>Je vous conseille</h3><p>Nous définissons une sélection cohérente et adaptée à votre budget.</p></article><article><span>03</span><h3>Je crée sur mesure</h3><p>Chaque élément est conçu puis préparé pour votre événement.</p></article></div></section>

    <section className="catalog-about page-shell"><div className="catalog-about-image"><Image src="/portrait-ines.png" alt="Justine, créatrice de Studio Nini" fill sizes="(max-width: 700px) 100vw, 32vw"/></div><div><p className="kicker">Le studio</p><h2>Une interlocutrice unique pour votre projet.</h2><p>Je vous accompagne de la première idée aux derniers détails, avec des propositions claires et une création réellement personnalisée.</p><a className="text-link" href="/studio">Découvrir le studio <ArrowRight size={14}/></a></div></section>

    <section className="final-cta catalog-cta"><p className="kicker">Votre événement</p><h2>Vous avez une idée ? Parlons-en.</h2><p>Recevez une première réponse adaptée à votre projet.</p><a className="button" href="/contact">Me contacter <ArrowRight size={15}/></a></section>
  </main>;
}
