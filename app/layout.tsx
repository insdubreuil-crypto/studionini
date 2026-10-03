import type { Metadata } from "next";
import Image from "next/image";
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
      <a className="brand-logo" href="/" aria-label="Studio Nini — accueil">
        <Image src="/logo-studio-nini-bordeaux.png" alt="Studio Nini" width={160} height={90} priority />
      </a>
      <nav aria-label="Navigation principale">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>
      <a className="header-contact" href="/contact">Parler de mon projet</a>
    </header>
    {children}
    <footer className="site-footer"><div className="page-shell footer-inner"><a className="footer-logo" href="/" aria-label="Studio Nini — accueil"><Image src="/logo-studio-nini-creme.png" alt="Studio Nini" width={160} height={90}/></a><div><p>Papeterie & décoration événementielles</p><p><a href="mailto:studio.nini@gmail.com">studio.nini@gmail.com</a> · France</p></div><nav aria-label="Navigation secondaire">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav></div></footer>
  </body></html>;
}
