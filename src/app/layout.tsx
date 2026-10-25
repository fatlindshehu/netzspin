import type { Metadata } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-jetbrains',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Netzspin',
  description:
    'Netzspin – Digitalagentur in Berlin für Webdesign, E-Commerce, Branding, digitale Strategie, Daten und KI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${plex.variable} ${jetbrains.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
