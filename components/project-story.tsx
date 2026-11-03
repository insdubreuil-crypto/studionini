import Image from "next/image";
import { ArrowRight } from "lucide-react";

type StoryImage={src:string;title:string;copy:string};
type Story={eyebrow:string;title:string;lead:string;hero:string;heroAlt:string;brief:string;idea:string;services:string[];images:StoryImage[];note?:string};

export function ProjectStory({story}:{story:Story}){return <main className="story-page">
  <header className="story-head page-shell"><div><p className="kicker">{story.eyebrow}</p><h1>{story.title}</h1><p>{story.lead}</p></div><a className="text-link" href="/projets">Toutes les réalisations <ArrowRight size={14}/></a></header>
  <div className="story-hero page-shell"><Image src={story.hero} alt={story.heroAlt} fill priority sizes="(max-width:900px) 100vw, 1240px"/></div>
  <section className="story-summary page-shell"><div><p className="kicker">Le brief</p><h2>{story.brief}</h2></div><div><p className="kicker">L’idée créative</p><p>{story.idea}</p><div className="story-services">{story.services.map(item=><span key={item}>{item}</span>)}</div></div></section>
  {story.note&&<p className="concept-note page-shell">{story.note}</p>}
  <section className="story-grid page-shell">{story.images.map(image=><article key={image.src}><div><Image src={image.src} alt={image.title} fill sizes="(max-width:700px) 100vw, 50vw"/></div><h3>{image.title}</h3><p>{image.copy}</p></article>)}</section>
  <section className="final-cta compact-cta"><p className="kicker">Une histoire différente, un résultat différent</p><h2>Créons votre propre univers.</h2><a className="button" href="/contact">Créer mon projet <ArrowRight size={15}/></a></section>
</main>}
