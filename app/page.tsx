"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import { getOffers } from "@/utils/sanity";
import Cover from "./components/Cover";
import Fog from "./components/Fog";
import Branches from "./components/Branches";
import Gravestone from "./components/Gravestone";
import Footer from "./components/Footer";
import Offer from "./components/Offer";

export default function Home() {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);
  const [offers, setOffers] = useState([]);
  const typeRef: any = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 280,
      once: true,
    });

    if (typeRef.current != null) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > typeRef.current.getBoundingClientRect().y) {
          setShowTypeAnimation(true);
        }
      });
    }

    const getRandomArbitrary = (min : any, max : any) => {
      return Math.random() * (max - min) + min;
    }

    getOffers().then((data) => {
      setOffers(
        data.map((rawData: any) => ({
          ...rawData,
          left: getRandomArbitrary(10, 90),
          top: getRandomArbitrary(30, 70),
        }))
      );
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center relative z-10 xl:h-[2653px]">
      <Cover />
      <Fog />
      <Branches />
      <Gravestone />
      <div className="offers-container h-[320px] w-full relative">
        {offers.map((offer: any, index: number) => (
          <Offer
            key={index}
            index={index}
            left={offer.left}
            top={offer.top}
            text={offer.text}
            image={`/offers/ofrenda-${offer.imageId}.png`}
          />
        ))}
      </div>
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
