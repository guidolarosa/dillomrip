import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "animate.css";
import "@splidejs/react-splide/css";

export const metadata: Metadata = {
  title: "Dillom.RIP",
  description: "Dillom.RIP",
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
        <div
          className="absolute w-[100vw] h-full z-0 bg-[url(/bkg.jpg)] bg-[center_top_0rem] lg:bg-[center_top_-0rem] bg-[length:800px_auto] lg:bg-[length:100%_auto]"
          style={{
            backgroundAttachment: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        <header className="flex justify-center w-full py-[60px] lg:py-[68px] rellax">
          <div className="w-[320px] h-[48px] md:w-[600px] md:h-[90px] relative animate-floatLight">
            <Image src="/header.svg" fill alt="DillomRIP" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
