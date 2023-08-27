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
import LeaveOffer from "./components/LeaveOffer";
import Poem from "./components/Poem";
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
    <main className="flex min-h-screen flex-col items-center relative z-10">
      {showCover && <Cover setShowPage={setShowPage} />}
      <Branches />
      <Butterflies />
      <Fog />
      {showPage && (
        <>
          <Gravestone />
          <Offers />
          <Poem />
          <LeaveOffer />
        </>
      )}
      <Footer />
    </main>
  );
}
