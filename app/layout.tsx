import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Studio Nini — Graphisme événementiel sur mesure", template: "%s — Studio Nini" },
  description: "Identité visuelle, papeterie, décoration, goodies et expériences sur mesure pour mariages, EVJ, anniversaires et événements privés.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const nav = [["Papeterie","/#creations"],["Événementiel","/projets"],["Le studio","/studio"],["Contact","/contact"]];

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr"><body>
    <header className="site-header page-shell">
      <a className="brand-logo" href="/" aria-label="Studio Nini — accueil">
        <Image src="/logo-studio-nini-bordeaux.png" alt="Studio Nini" width={160} height={90} priority />
      </a>
      <nav aria-label="Navigation principale">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>
      <a className="header-contact" href="/contact">Créer mon projet</a>
    </header>
    {children}
    <footer className="site-footer"><div className="page-shell footer-inner"><a className="footer-logo" href="/" aria-label="Studio Nini — accueil"><Image src="/logo-studio-nini-creme.png" alt="Studio Nini" width={160} height={90}/></a><div><p>Graphisme événementiel entièrement sur mesure</p><p><a href="mailto:contact@studionini.fr">contact@studionini.fr</a> · Lyon & projets partout en France</p></div><nav aria-label="Navigation secondaire">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}<a href="/mentions-legales">Mentions légales</a></nav></div></footer>
  </body></html>;
}
