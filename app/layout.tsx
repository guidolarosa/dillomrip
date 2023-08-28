import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "animate.css";
import "@splidejs/react-splide/css";
import Background from "./components/Background";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "DILLOM.RIP ",
  description: "La vida guió tu camino, La muerte tu destino, Solemne es nuestro rezo ante tu partida, Que tu alma en paz descanse, Esta es nuestra despedida.",
  authors: [{ name: 'Guido La Rosa', url: 'https://coyoteweb.studio' }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: "DILLOM.RIP ",
    description: "La vida guió tu camino, La muerte tu destino, Solemne es nuestro rezo ante tu partida, Que tu alma en paz descanse, Esta es nuestra despedida.",
    creator: '@dillom',
    images: ['https://i.ibb.co/2gf8cyL/share.jpg'],
  },
  openGraph: {
    title: "DILLOM.RIP ",
    url: 'https://dillom.rip',
    type: 'website',
    description: 'La vida guió tu camino, La muerte tu destino, Solemne es nuestro rezo ante tu partida, Que tu alma en paz descanse, Esta es nuestra despedida.',
    images: [
      {
        url: 'https://i.ibb.co/2gf8cyL/share.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.ibb.co/2gf8cyL/share.jpg',
        width: 1800,
        height: 1600,
        alt: 'Share',
      },
    ],
  }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/offers/ofrenda-1.png" sizes="any" />
      </head>

      <body className={`relative`}>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
