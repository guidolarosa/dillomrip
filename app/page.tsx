"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import Rellax from "rellax";
import Cover from "./components/Cover";
import Fog from "./components/Fog";
import Offers from "./components/Offers";
import Branches from "./components/Branches";
import Gravestone from "./components/Gravestone";
import Footer from "./components/Footer";
import Butterflies from "./components/Butterflies";
import Fire from "./components/Fire";

export default function Home() {
  const [showCover, setShowCover] = useState(true);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 280,
      once: true,
    });

    const rellax = new Rellax(".rellax", {
      speed: 10,
      center: false,
      vertical: true,
    });
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center relative z-10 md:mb-[-120px]">
        {showCover && <Cover setShowPage={setShowPage} audioFile={"/audio-final.mp3"} />}
        <Fire />
        <Branches />
        <Butterflies />
        <Fog />
        {showPage && (
          <>
            <Gravestone vandalized />
            <Offers large offersQuantity={500}/>
          </>
        )}
      </main>
      <Footer 
        countdown={false}
      />
    </>
  );
}
