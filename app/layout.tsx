import type { Metadata } from "next";
import Image from "next/image";
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
      <Link className="brand-logo" href="/" aria-label="Studio Nini — accueil">
        <Image src="/logo-studio-nini-bordeaux.png" alt="Studio Nini" width={160} height={90} priority />
      </Link>
      <nav aria-label="Navigation principale">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="header-contact" href="/contact">Parler de mon projet</Link>
    </header>
    {children}
    <footer className="site-footer"><div className="page-shell footer-inner"><Link className="footer-logo" href="/" aria-label="Studio Nini — accueil"><Image src="/logo-studio-nini-creme.png" alt="Studio Nini" width={160} height={90}/></Link><div><p>Papeterie & décoration événementielles</p><p><a href="mailto:studio.nini@gmail.com">studio.nini@gmail.com</a> · France</p></div><nav aria-label="Navigation secondaire">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div></footer>
  </body></html>;
}
