import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-content";

const projects=[
  {title:"Justine & Yvan",label:"Mariage · Papeterie & décoration",copy:"Une célébration solaire où le citron et l’olivier relient chaque support, du faire-part à la table.",image:"/portfolio/justine-yvan/miroir-bienvenue.png",href:"/projets/justine-yvan"},
  {title:"Sol & Novia",label:"EVJF · Papeterie & décoration",copy:"Un week-end joyeux aux accents méditerranéens, décliné dans les jeux, la table et les petits détails.",image:"/portfolio/sol-novia/filles.png",href:"/projets/sol-novia"},
];
export default function Projets(){return <main><PageIntro kicker="Portfolio" title="Des projets qui racontent une histoire." copy="Chaque univers est imaginé sur mesure pour une personne, un lieu et une façon bien particulière de célébrer."/><section className="content-section page-shell project-list">{projects.map((p)=><article className="project-row" key={p.title}><div className="project-row-image"><Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 60vw"/></div><div className="project-row-copy"><p className="kicker">{p.label}</p><h2>{p.title}</h2><p>{p.copy}</p><Link className="text-link" href={p.href}>Découvrir le projet <ArrowRight size={15}/></Link></div></article>)}</section></main>}
