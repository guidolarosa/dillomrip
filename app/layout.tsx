import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "animate.css";
import "@splidejs/react-splide/css";
import Background from "./components/Background";
import Header from "./components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DILLOM.RIP ",
  description: "Que tu alma en paz descanse. Esta es nuestra despedida.",
  authors: [{ name: "Guido La Rosa", url: "https://coyoteweb.studio" }],
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
    card: "summary_large_image",
    title: "DILLOM.RIP ",
    description: "Que tu alma en paz descanse. Esta es nuestra despedida.",
    creator: "@dillom",
    images: ["https://i.ibb.co/5BJnvtx/thumb.png"],
  },
  openGraph: {
    title: "DILLOM.RIP ",
    url: "https://dillom.rip",
    type: "website",
    description: "Que tu alma en paz descanse. Esta es nuestra despedida.",
    images: [
      {
        url: "https://i.ibb.co/5BJnvtx/thumb.png",
        width: 800,
        height: 600,
      },
    ],
  },
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
      {/* Google Tag Manager */}
      <Script id="gtag-src" async src="https://www.googletagmanager.com/gtag/js?id=G-E73NG0YE3J"></Script>
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E73NG0YE3J');`
        }
      </Script>
      {/* End Google Tag Manager */}

      <body className={`relative`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-532F9R96"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
