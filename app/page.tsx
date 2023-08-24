"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Cover from "./components/Cover";
import Fog from "./components/Fog";
import Branches from "./components/Branches";
import AOS from "aos";
import moment from "moment";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/Footer";

export default function Home() {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);
  const typeRef: any = useRef(null);

  useEffect(() => {
    AOS.init();

    if (typeRef.current != null) {
      console.log(typeRef.current.getBoundingClientRect());
      window.addEventListener("scroll", () => {
        if (window.scrollY > typeRef.current.getBoundingClientRect().y) {
          setShowTypeAnimation(true);
        }
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center relative z-10 xl:h-[2653px]">
      <Cover />
      <Fog />
      <Branches />
      <div className="gravestone-container">
        <div className="gravestone w-[235px] h-[307px] md:w-[456px] md:h-[590px] relative animation-shake">
          <Image
            fill
            src="/gravestone.png"
            alt="Grave"
            className="object-contain"
          />
          <div className="candles w-[128px] aspect-square absolute bottom-[12px] left-[-106px]">
            <Image
              fill
              src="/left-candles.png"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-[184px] aspect-square absolute bottom-[-24px] right-[-140px]">
            <Image
              fill
              src="/right-candles.png"
              alt="Candles"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="offers-container h-[320px]"></div>
      <div className="flex flex-col items-center mb-[825px]">
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
        <div className="w-[331px] h-[80px] relative" data-aos="fade-up">
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
