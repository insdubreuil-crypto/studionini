"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["Papeterie", "/papeterie"],
  ["Prestations", "/prestations"],
  ["Le studio", "/le-studio"],
  ["Contact", "/creer-mon-projet#formulaire"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="nini-header">
    <div className="nini-shell nini-header-inner">
      <Link className="nini-brand" href="/" aria-label="Studio Nini - accueil">
        <Image src="/client-assets/brand/SVG/logo-studio-nini-bordeaux.svg" alt="Studio Nini" width={150} height={86} priority />
      </Link>
      <button className="nini-menu-button" type="button" aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen(!open)}>
        <span /><span /><span /><span className="sr-only">Menu</span>
      </button>
      <nav id="menu-principal" className={open ? "nini-nav is-open" : "nini-nav"} aria-label="Navigation principale">
        {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nini-header-cta" href="/creer-mon-projet" onClick={() => setOpen(false)}>Créer mon projet</a>
      </nav>
    </div>
  </header>;
}

export function SiteFooter() {
  return <footer className="nini-footer"><div className="nini-shell nini-footer-inner">
    <Link href="/" aria-label="Studio Nini - accueil"><Image src="/client-assets/brand/SVG/logo-studio-nini-jaune.svg" alt="Studio Nini" width={170} height={96}/></Link>
    <div><strong>STUDIO NINI</strong><a href="mailto:contact@studionini.fr">contact@studionini.fr</a><span>Lyon - projets partout en France</span></div>
    <nav aria-label="Liens légaux"><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Politique de confidentialité</a></nav>
  </div></footer>;
}
