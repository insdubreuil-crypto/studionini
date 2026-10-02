import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sol & Novia — EVJF sur mesure",
  description: "Papeterie, jeu, décoration et goodies imaginés sur mesure pour l’EVJF Sol & Novia.",
};

const details = [
  {
    image: "filles.png",
    title: "Identité & tee-shirts",
    text: "Un univers joyeux et solaire, décliné sur des tee-shirts qui rassemblent toute la team et lancent le week-end avec style.",
    alt: "Les amies de Solène portent les tee-shirts personnalisés Sol & Novia",
  },
  {
    image: "jeu.png",
    title: "Jeu personnalisé",
    text: "Un jeu sur mesure rempli d’anecdotes, de défis et de fous rires pour animer les soirées et créer des souvenirs inoubliables.",
    alt: "Le plateau de jeu personnalisé Sol & Novia",
  },
  {
    image: "brunch.png",
    title: "Brunch & étiquettes",
    text: "Des goodies gourmands et des étiquettes personnalisées pour transformer les petits moments en souvenirs mémorables.",
    alt: "La table du brunch et ses étiquettes personnalisées Sol & Novia",
  },
  {
    image: "decoration.png",
    title: "Décoration en papier",
    text: "Une papeterie pensée jusque dans les moindres détails : affiches, guirlandes et petits mots pour habiller chaque lieu du week-end.",
    alt: "La décoration en papier du week-end Sol & Novia",
  },
];

export default function SolNovia() {
  return <main className="sol-project">
    <section className="sol-hero page-shell">
      <div className="sol-hero-copy">
        <p className="sol-eyebrow">EVJF · PAPETERIE · GOODIES · EXPÉRIENCES</p>
        <h1>Sol &amp; Novia</h1>
        <p className="sol-lead">Un univers joyeux pour donner un fil conducteur à tout un week-end.</p>
        <Link className="button button-outline" href="/projets">Voir les autres projets <span aria-hidden="true">→</span></Link>
      </div>
      <p className="sol-side-note">Du soleil,<br/>des amies<br/>et des souvenirs<br/>pour la vie</p>
    </section>

    <div className="sol-cover page-shell">
      <Image src="/portfolio/sol-novia/filles.png" alt="Les amies de Solène trinquent pendant son EVJF Sol & Novia" fill priority sizes="(max-width: 900px) 100vw, 1440px" />
    </div>

    <section className="sol-origin page-shell">
      <span aria-hidden="true" />
      <div><h2>Solène devient la Novia.</h2><p>La novia signifie « la mariée » en espagnol.<br/>Le nom Sol &amp; Novia est né de ce jeu de mots autour de Solène.</p></div>
      <span aria-hidden="true" />
    </section>

    <section className="sol-story page-shell">
      <div>
        <h2>Des détails qui racontent le week-end.</h2>
        <p>Les illustrations font écho aux activités du week-end, tandis que les couleurs sont inspirées de l’invitation de la mariée. Chaque création devient une pièce du puzzle, pour une expérience cohérente du début à la fin.</p>
      </div>
      <p className="sol-story-note">Mêmes amies,<br/>autres aventures</p>
    </section>

    <section className="sol-details page-shell" aria-label="Les créations du projet Sol et Novia">
      {details.map((detail) => <article className="sol-detail" key={detail.title}>
        <div className="sol-detail-image"><Image src={`/portfolio/sol-novia/${detail.image}`} alt={detail.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <h3>{detail.title}</h3>
        <p>{detail.text}</p>
      </article>)}
    </section>

    <section className="sol-quote page-shell">
      <blockquote>Du logo au jeu,<br/>chaque création devient un souvenir<br/>du week-end.</blockquote>
      <p>Une idée en tête pour un projet qui vous ressemble ?</p>
      <h2>Parlons-en !</h2>
      <Link className="button" href="/contact">Nous contacter <span aria-hidden="true">→</span></Link>
    </section>
  </main>;
}
