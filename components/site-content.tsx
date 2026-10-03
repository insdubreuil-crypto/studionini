import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({href,image,title,label}:{href:string;image:string;title:string;label:string}) {
  return <a href={href} className="project-card"><div className="project-card-image"><Image src={image} alt={title} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="project-card-meta"><div><h3>{title}</h3><p>{label}</p></div><ArrowUpRight aria-hidden="true" /></div></a>;
}

export function ServiceCard({number,title,text,href}:{number:string;title:string;text:string;href?:string}) {
  const content = <><span>{number}</span><h3>{title}</h3><p>{text}</p>{href && <b>En savoir plus →</b>}</>;
  return href ? <a className="service-card" href={href}>{content}</a> : <article className="service-card">{content}</article>;
}

export function PageIntro({kicker,title,copy}:{kicker:string;title:string;copy?:string}) {
  return <header className="page-intro page-shell"><p className="kicker">{kicker}</p><h1>{title}</h1>{copy && <p>{copy}</p>}</header>;
}
