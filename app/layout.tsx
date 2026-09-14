import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Nini — Design graphique événementiel",
  description: "Identités visuelles, faire-part, papeterie et illustrations sur mesure pour vos événements.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
