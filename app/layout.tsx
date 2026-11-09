import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: { default: "Studio Nini — Graphisme événementiel sur mesure", template: "%s — Studio Nini" },
  description: "Identité visuelle, papeterie, décoration, goodies et expériences sur mesure pour mariages, EVJ, anniversaires et événements privés.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr"><body>
    <SiteHeader />
    {children}
    <SiteFooter />
  </body></html>;
}
