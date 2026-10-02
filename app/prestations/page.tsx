import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-content";

const services=[
  ["invitations","Invitations & faire-part","Des créations uniques pour annoncer votre événement et donner le ton dès le premier courrier.","/portfolio/justine-yvan/faire-part.png"],
  ["papeterie","Papeterie du jour J","Menus, marque-places, programmes et cartes assortis pour une table cohérente.","/portfolio/justine-yvan/table-decoration.png"],
  ["table","Décoration de table","Une mise en scène sensible de vos tables, des matières aux petits détails.","/portfolio/justine-yvan/photobooth-panneaux.png"],
  ["signaletique","Signalétique & éléments de décor","Miroirs de bienvenue, plans de table, panneaux et flèches pour accueillir et guider.","/portfolio/justine-yvan/plan-de-table.png"],
];
export default function Prestations(){return <main><PageIntro kicker="Prestations" title="Papeterie et décoration pensées pour vos événements." copy="Un accompagnement sur mesure pour créer un ensemble élégant et cohérent, du premier courrier jusqu’au jour J."/><nav className="service-jump page-shell" aria-label="Catégories de prestations">{services.map(([id,title])=><a href={`#${id}`} key={id}>{title}</a>)}</nav><section className="content-section page-shell services-page-grid">{services.map(([id,title,copy,image])=><article className="service-feature" id={id} key={title}><Image src={image} width={1100} height={800} alt={title}/><h2>{title}</h2><p>{copy}</p><Link className="text-link" href="/contact">Demander un devis <ArrowRight size={15}/></Link></article>)}</section><section className="process-band"><div className="page-shell"><p className="kicker">Comment ça se passe ?</p><div className="process-steps"><div><b>01</b><h3>Vous racontez</h3><p>Votre événement, vos envies et votre histoire.</p></div><div><b>02</b><h3>Je vous guide</h3><p>Une direction claire, adaptée à votre budget.</p></div><div><b>03</b><h3>Nous créons</h3><p>Un ensemble cohérent, prêt pour le grand jour.</p></div></div></div></section><section className="final-cta"><p className="kicker">Votre projet</p><h2>Imaginons ce qui vous ressemble.</h2><Link className="button" href="/contact">Me parler de mon projet <ArrowRight size={16}/></Link></section></main>}
