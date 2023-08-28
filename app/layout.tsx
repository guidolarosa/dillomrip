import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "animate.css";
import "@splidejs/react-splide/css";
import Background from "./components/Background";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Dillom.RIP",
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
    title: "Dillom.RIP",
    description: "La vida guió tu camino, La muerte tu destino, Solemne es nuestro rezo ante tu partida, Que tu alma en paz descanse, Esta es nuestra despedida.",
    creator: '@dillom',
    images: ['https://i.ibb.co/2gf8cyL/share.jpg'],
  },
  openGraph: {
    title: "Dillom.RIP",
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
        <meta name="robots" content="nofollow, noindex" />
        <meta
          name="image"
          content="https://i.ibb.co/2gf8cyL/share.jpg"
        />
        <meta property="title" content="Home - Dillom" />
        <meta
          property="description"
          content="@odd mami @Muerejoven @k4 @ill quentin @Broke Carrey @Saramalacara La vida guió tu camino, La muerte tu destino, Solemne es nuestro rezo ante tu partida, Que tu alma en paz descanse, Esta es nuestra despedida. : 00 : 00 : 00"
        />
        <meta property="url" content="https://www.dillom.rip/" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Dillom" />
        <meta
          property="og:description"
          content="@odd mami @Muerejoven @k4 @ill quentin @Broke Carrey @Saramalacara La vida guió tu camino, La muerte tu destino, Solemne es nuestro rezo ante tu partida, Que tu alma en paz descanse, Esta es nuestra despedida. : 00 : 00 : 00"
        />
        <meta property="og:url" content="https://www.dillom.rip/" />
        <meta property="og:site_name" content="Dillom" />
        <meta property="og:updated_time" content="2023-08-27T18:18:34+00:00" />
        <meta
          property="og:image"
          content="https://i.ibb.co/2gf8cyL/share.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://i.ibb.co/2gf8cyL/share.jpg"
        />
        <meta property="og:image:width" content="1013" />
        <meta property="og:image:height" content="1800" />
        <meta property="og:image:alt" content="Home" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="article:published_time"
          content="2023-08-23T14:28:55+00:00"
        />
        <meta
          property="article:modified_time"
          content="2023-08-27T18:18:34+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Dillom" />
        <meta
          name="twitter:description"
          content="@odd mami @Muerejoven @k4 @ill quentin @Broke Carrey @Saramalacara La vida guió tu camino, La muerte tu destino, Solemne es nuestro rezo ante tu partida, Que tu alma en paz descanse, Esta es nuestra despedida. : 00 : 00 : 00"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/2gf8cyL/share.jpg"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="damianriva" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
      </head>

      <body className={`relative`}>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
