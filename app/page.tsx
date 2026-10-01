import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard, ServiceCard } from "@/components/site-content";

export default function Home() {
  return <main>
    <section className="home-hero page-shell">
      <div className="home-hero-copy"><p className="kicker">Papeterie & décoration événementielles</p><h1>Vos idées.<br />Une histoire.<br /><em>Un univers à créer.</em></h1><p className="intro">Studio Nini imagine une papeterie et une décoration sur mesure, pensées pour raconter votre événement avec justesse.</p><Link className="button" href="/projets">Découvrir les projets <ArrowRight size={16} /></Link></div>
      <div className="home-hero-media"><Image src="/portfolio/justine-yvan/table-decoration.png" alt="Décoration de table du mariage de Justine et Yvan" fill priority sizes="(max-width: 800px) 100vw, 54vw" /></div>
    </section>
    <section className="section page-shell"><header className="section-title"><p className="kicker">Projets sélectionnés</p><h2>Des histoires mises en scène.</h2></header><div className="featured-grid"><ProjectCard href="/projets/justine-yvan" image="/portfolio/justine-yvan/miroir-bienvenue.png" title="Justine & Yvan" label="Mariage · Papeterie & décoration" /><ProjectCard href="/projets/sol-novia" image="/portfolio/sol-novia/filles.png" title="Sol & Novia" label="EVJF · Papeterie & décoration" /></div><div className="center-link"><Link className="text-link" href="/projets">Voir tous les projets <ArrowRight size={15} /></Link></div></section>
    <section className="section section-soft"><div className="page-shell"><header className="section-title centered"><p className="kicker">Ce que je crée</p><h2>Du premier courrier au jour J.</h2></header><div className="service-grid"><ServiceCard number="01" title="Invitations & faire-part" text="Des créations uniques pour annoncer votre histoire." /><ServiceCard number="02" title="Papeterie du jour J" text="Menus, marque-places et supports assortis." /><ServiceCard number="03" title="Décoration de table" text="Une mise en scène cohérente jusque dans les détails." /><ServiceCard number="04" title="Signalétique & décor" text="Des éléments qui accueillent, guident et émerveillent." /></div><div className="center-link"><Link className="button button-outline" href="/prestations">Découvrir les prestations <ArrowRight size={16} /></Link></div></div></section>
    <section className="split-callout page-shell"><div className="split-callout-media"><Image src="/portrait-ines.png" alt="La créatrice de Studio Nini dans son atelier" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="split-callout-copy"><p className="kicker">Le studio</p><h2>Chaque projet commence par une rencontre.</h2><p>Je vous accompagne pour donner une direction claire à vos envies et créer un ensemble sensible, élégant et entièrement personnel.</p><Link className="text-link" href="/studio">Découvrir le studio <ArrowRight size={15} /></Link></div></section>
    <section className="final-cta"><p className="kicker">Votre événement</p><h2>Parlons de ce que vous avez en tête.</h2><p>Une date, un lieu ou une couleur suffisent pour commencer.</p><Link className="button" href="/contact">Me parler de mon projet <ArrowRight size={16} /></Link></section>
  </main>;
}
