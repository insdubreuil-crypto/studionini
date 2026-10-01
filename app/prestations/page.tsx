import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-content";

const services=[
  ["Invitations & faire-part","Des créations uniques pour annoncer votre événement et donner le ton dès le premier courrier.","/portfolio/justine-yvan/faire-part.png"],
  ["Papeterie du jour J","Menus, marque-places, programmes et cartes assortis pour une table cohérente.","/portfolio/justine-yvan/table-decoration.png"],
  ["Décoration de table","Une mise en scène sensible de vos tables, des matières aux petits détails.","/portfolio/justine-yvan/table-decoration.png"],
  ["Signalétique & éléments de décor","Miroirs de bienvenue, plans de table, panneaux et flèches pour accueillir et guider.","/portfolio/justine-yvan/plan-de-table.png"],
];
export default function Prestations(){return <main><PageIntro kicker="Prestations" title="Papeterie et décoration pensées pour vos événements." copy="Un accompagnement sur mesure pour créer un ensemble élégant et cohérent, du premier courrier jusqu’au jour J."/><section className="content-section page-shell services-page-grid">{services.map(([title,copy,image])=><article className="service-feature" key={title}><Image src={image} width={1100} height={800} alt={title}/><h2>{title}</h2><p>{copy}</p></article>)}</section><section className="final-cta"><p className="kicker">Votre projet</p><h2>Imaginons ce qui vous ressemble.</h2><Link className="button" href="/contact">Me parler de mon projet <ArrowRight size={16}/></Link></section></main>}
