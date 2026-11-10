/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const projects = [
  ["/client-assets/prestations/soletnovia-evjf.png", "Sol & Novia", "EVJF", "/prestations/sol-et-novia"],
  ["/client-assets/prestations/justineetyvan-mariage.png", "Justine & Yvan", "Mariage", "/prestations/justine-et-yvan"],
] as const;

const shortcuts = [
  ["/client-assets/prestations/soletnovia-evjf.png", "Identité", "#identite"],
  ["/client-assets/COMMUNES/jeu-de-plateau-evj.png", "Jeux", "#animation"],
  ["/client-assets/COMMUNES/papeterie-faire-part.png", "Papeterie", "#papeterie"],
  ["/client-assets/prestations/justineetyvan-mariage.png", "Décoration", "#et-apres"],
] as const;

const collections = [
  {
    id: "identite", n: "01", title: "L’identité",
    items: [
      ["/client-assets/accueil/logo-band-fifi.png", "Anniversaire", "Un logo qui raconte votre événement"],
      ["/client-assets/accueil/logo-sol-novia.png", "EVJF", "Un logo qui raconte votre événement"],
      ["/client-assets/accueil/logo-weekend-montagne.png", "Anniversaire", "Un logo qui raconte votre événement"],
      ["/client-assets/accueil/logo-mapifil.png", "Mariage", "Un logo qui raconte votre événement"],
    ],
  },
  {
    id: "papeterie", n: "02", title: "Papeterie",
    items: [
      ["/client-assets/COMMUNES/papeterie-faire-part.png", "Faire-part", "À votre image et complètement unique"],
      ["/client-assets/COMMUNES/papeterie-marque-place.png", "Marque-place", "Tout le monde s’y retrouve et on reste dans le thème"],
      ["/client-assets/COMMUNES/papeterie-site-web.png", "Site web", "Pour centraliser simplement les informations"],
      ["/client-assets/COMMUNES/papeterie-invitation.png", "Invitations", "Subtiles ou directes, futurs éléments de décoration"],
      ["/client-assets/COMMUNES/papeterie-carton-de-bienvenue.png", "Carton de bienvenue", "Pour donner les informations sur place"],
      ["/client-assets/COMMUNES/papeterie-livret-messe.png", "Livret de messe", "En accord avec tout le reste"],
      ["/client-assets/COMMUNES/papeterie-menu-chemin-table.png", "Menu", "Partie intégrante du chemin de table"],
      ["/client-assets/COMMUNES/papeterie-menu-indiv.png", "Menu", "Personnalisé et individuel"],
    ],
  },
  {
    id: "goodies", n: "03", title: "Goodies",
    items: [
      ["/client-assets/COMMUNES/goodies-tshirt-evj.png", "T-shirts", "À porter sans modération pendant l’événement"],
      ["/client-assets/COMMUNES/goodies-etiquettes.png", "Étiquettes", "La personnalisation dans les détails"],
      ["/client-assets/COMMUNES/goodies-chaussons.png", "Chaussons", "Un week-end confortable"],
      ["/client-assets/COMMUNES/goodies-tenues.png", "Tenues", "Un spa au programme, un peignoir en cadeau"],
      ["/client-assets/COMMUNES/goodies-biscuits.png", "Biscuits", "Pour se régaler pendant ou après la fête"],
      ["/client-assets/COMMUNES/goodies-tshirt-anniv.png", "T-shirts", "À porter sans modération pendant l’événement"],
      ["/client-assets/COMMUNES/goodies-fioles.png", "Fioles", "Un cadeau qui ne déçoit jamais"],
      ["/client-assets/COMMUNES/goodies-tot-bag.png", "Tote bag", "Classique et indémodable"],
    ],
  },
  {
    id: "animation", n: "04", title: "Animation",
    items: [
      ["/client-assets/COMMUNES/jeu-de-plateau-evj.png", "Jeu de plateau", ""],
      ["/client-assets/COMMUNES/jeu-de-plateau-anniv.png", "Jeu de plateau", ""],
      ["/client-assets/COMMUNES/magazine-humoristique.png", "Magazine humoristique", ""],
    ],
  },
] as const;

const posters = [
  "/client-assets/COMMUNES/affiche-anniv-sud.png",
  "/client-assets/COMMUNES/affiche-cousinade.png",
  "/client-assets/COMMUNES/affiche-retour-anniv.png",
  "/client-assets/COMMUNES/affiche-retour-weekend.png",
  "/client-assets/COMMUNES/affiche-spritz.png",
  "/client-assets/COMMUNES/affiche-vacances.png",
  "/client-assets/COMMUNES/affiche-weekend-ski.png",
  "/client-assets/COMMUNES/tableau-souvenir-voyage.png",
] as const;

export default function Home() {
  return <main className="nini-page">
    <section className="nini-home-hero"><div className="nini-shell"><div>
      <p className="nini-kicker">Graphisme événementiel</p>
      <h1>Votre histoire.<br />Un univers unique.</h1>
      <p>Identité, papeterie, décoration, goodies et expériences sur mesure.</p>
      <a className="nini-button" href="/creer-mon-projet">Créer mon projet</a>
    </div></div></section>

    <section className="nini-projects nini-shell">
      <p className="nini-intro">Identité, papeterie, décoration, objets et organisation imaginés à partir de votre histoire et de vos besoins.</p>
      <div className="nini-project-grid">{projects.map(([src,title,type,href]) => <a href={href} key={href}>
        <div><Image src={src} alt={title} fill sizes="(max-width:700px) 100vw,50vw" /></div><span>{type}</span><h2>{title}</h2>
      </a>)}</div>
      <nav className="nini-home-shortcuts" aria-label="Accès direct aux créations">{shortcuts.map(([src,title,href]) => <a href={href} key={title}>
        <div><Image src={src} alt="" fill sizes="(max-width:620px) 50vw,25vw" /></div><span>{title}</span>
      </a>)}</nav>
      <h2 className="nini-manifesto">Différentes histoires, différents univers.</h2>
    </section>

    <section className="nini-creations nini-shell">
      <header><h2>Les créations</h2></header>
      {collections.map(group => <section id={group.id} key={group.id} className="nini-anchor-section">
        <div className="nini-section-heading"><span>{group.n}</span><h3>{group.title}</h3></div>
        <div className="nini-creation-grid">{group.items.map(([src,title,text],index) => <article key={`${group.id}-${index}`}>
          <div><Image src={src} alt={title} fill sizes="(max-width:600px) 50vw,25vw" /></div><h4>{title}</h4>{text && <p>{text}</p>}
        </article>)}</div>
      </section>)}

      <section id="et-apres" className="nini-anchor-section">
        <div className="nini-section-heading"><span>05</span><h3>Et après ?</h3></div>
        <div className="nini-after-copy"><h4>Affiches souvenirs</h4>
          <p>Tout le monde gardera en souvenir ses merveilleux goodies et toute la papeterie créée pour l’événement, mais si on allait encore plus loin ?</p>
          <p>Une affiche personnalisée des principaux intéressés ? Ou tout simplement en cadeau ?</p>
        </div>
        <div className="nini-poster-grid">{posters.map((src,index) => <figure key={src}><div>
          <Image src={src} alt={`Affiche souvenir personnalisée ${index + 1}`} fill sizes="(max-width:620px) 50vw,25vw" />
        </div></figure>)}</div>
      </section>
    </section>

    <section className="nini-process"><div className="nini-shell"><header><h2>Travaillons ensemble</h2><p>Aucun modèle à choisir, nous nous inspirons uniquement de vos idées.</p></header><div>{[
      ["01","Vous racontez","Votre événement, l'ambiance, vos inspirations et ce que vous souhaitez faire vivre."],
      ["02","Je vous guide","Je transforme vos idées en une direction claire et vous conseille."],
      ["03","Nous créons","Chaque élément est pensé puis décliné dans un ensemble cohérent."],
    ].map(x => <article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>
    <section className="nini-project-cta"><h2>Prêt à créer quelque chose d'unique ?</h2><a className="nini-button" href="/creer-mon-projet">Créer mon projet</a></section>
  </main>;
}
