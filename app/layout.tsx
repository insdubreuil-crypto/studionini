import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Studio Nini — Papeterie & décoration événementielles", template: "%s — Studio Nini" },
  description: "Papeterie et décoration événementielles sur mesure pour mariages, EVJF et célébrations.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const nav = [["Projets","/projets"],["Prestations","/prestations"],["Galerie","/galerie"],["Le studio","/studio"],["Contact","/contact"]];

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr"><body>
    <header className="site-header page-shell">
      <Link className="brand" href="/" aria-label="Studio Nini — accueil"><span className="brand-small">studio</span><strong>nini</strong></Link>
      <nav aria-label="Navigation principale">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="header-contact" href="/contact">Parler de mon projet</Link>
    </header>
    {children}
    <footer className="site-footer"><div className="page-shell footer-inner"><Link className="brand brand-light" href="/"><span className="brand-small">studio</span><strong>nini</strong></Link><div><p>Papeterie & décoration événementielles</p><p>France · projets à distance</p></div><nav aria-label="Navigation secondaire">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<a href="#" aria-label="Instagram">Instagram</a></nav></div></footer>
  </body></html>;
}
