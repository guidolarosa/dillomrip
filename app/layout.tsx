import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css"
import "animate.css"

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
        <div className="absolute w-[100vw] h-full z-0">
          <Image
            src="/bkg.jpg"
            fill
            alt="Background"
            className="object-cover object-[0_-240px]"
          />
        </div>
        <header className="flex justify-center w-full py-[90px]">
          <div className="w-[320px] h-[48px] md:w-[600px] md:h-[90px] relative animate-float">
            <Image src="/header.svg" fill alt="DillomRIP" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
