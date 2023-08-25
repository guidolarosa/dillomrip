"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import Rellax from 'rellax';
import axios from "axios";
import { createOffer } from "@/utils/sanity";
import Cover from "./components/Cover";
import Fog from "./components/Fog";
import Offers from "./components/Offers";
import Branches from "./components/Branches";
import Gravestone from "./components/Gravestone";
import Footer from "./components/Footer";

export default function Home() {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);
  const [offerSent, setOfferSent] = useState(false)
  const typeRef: any = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 280,
      once: true,
    });

    const rellax = new Rellax('.rellax', {
      speed: 10,
      center: false,
      vertical: true,
    });

    if (typeRef.current != null) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > typeRef.current.getBoundingClientRect().y) {
          setShowTypeAnimation(true);
        }
      });
    }
  }, []);

  const handleOfferClick = async () => {
    try {
      const response = await createOffer({
        imageId: 2,
        offerText: 'Dillom te amooo 😍💙😭'
      });
      setOfferSent(true);
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center relative z-10">
      <Cover />
      <Fog />
      <Branches />
      <Gravestone />
      <Offers />
      <div className="flex flex-col items-center mb-[98px]">
        <p
          className="text-[24px] lg:text-[36px] text-center mb-[80px] h-[224px]"
          ref={typeRef}
        >
          {showTypeAnimation && (
            <>
              <TypeAnimation
                cursor={false}
                sequence={["Que en Balvanera tu música siempre se oiga,"]}
              />
              <br />
              <TypeAnimation
                cursor={false}
                sequence={[
                  "",
                  3000,
                  "La bandera de la RIP-Gang se eleva con gloria,",
                ]}
              />
              <br />
              <TypeAnimation
                cursor={false}
                sequence={[
                  "",
                  6000,
                  "Eterno serás en cada beat y acorde que flota.",
                ]}
              />
              <br />
              <TypeAnimation
                cursor={false}
                sequence={["", 9000, "Con Amor,"]}
              />
            </>
          )}
        </p>
        <div
          className="w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer"
          data-aos="fade-up"
          onClick={handleOfferClick}
        >
          <Image
            fill
            src="/leave-offer.svg"
            alt="Grave"
            className="object-contain"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
