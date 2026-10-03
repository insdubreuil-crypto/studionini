import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-content";

const projects=[
  {title:"Justine & Yvan",label:"Mariage · Papeterie & décoration",copy:"Une célébration solaire où le citron et l’olivier relient chaque support, du faire-part à la table.",image:"/portfolio/justine-yvan/miroir-bienvenue.png",href:"/projets/justine-yvan"},
  {title:"Sol & Novia",label:"EVJF · Papeterie & décoration",copy:"Un week-end joyeux aux accents méditerranéens, décliné dans les jeux, la table et les petits détails.",image:"/portfolio/sol-novia/filles.png",href:"/projets/sol-novia"},
];
export default function Projets(){return <main><PageIntro kicker="Portfolio" title="Des projets qui racontent une histoire." copy="Chaque univers est imaginé sur mesure pour une personne, un lieu et une façon bien particulière de célébrer."/><section className="content-section page-shell project-list">{projects.map((p)=><a className="project-row" href={p.href} key={p.title}><div className="project-row-image"><Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 60vw"/></div><div className="project-row-copy"><p className="kicker">{p.label}</p><h2>{p.title}</h2><p>{p.copy}</p><span className="text-link">Découvrir le projet <ArrowRight size={15}/></span></div></a>)}</section><section className="final-cta"><p className="kicker">Votre histoire</p><h2>Le prochain univers sera peut-être le vôtre.</h2><a className="button" href="/contact">Parler de mon projet <ArrowRight size={16}/></a></section></main>}
