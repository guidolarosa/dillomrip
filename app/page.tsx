"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import Rellax from "rellax";
import axios from "axios";
import { createOffer } from "@/utils/sanity";
import Cover from "./components/Cover";
import Fog from "./components/Fog";
import Offers from "./components/Offers";
import Branches from "./components/Branches";
import Gravestone from "./components/Gravestone";
import Footer from "./components/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFirePreset } from "tsparticles-preset-fire";


export default function Home() {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);
  const [offerSent, setOfferSent] = useState(false);
  const typeRef: any = useRef(null);

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

    if (typeRef.current != null) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > typeRef.current.getBoundingClientRect().y) {
          setShowTypeAnimation(true);
        }
      });
    }
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFirePreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  const handleOfferClick = async () => {
    try {
      const response = await createOffer({
        imageId: 2,
        offerText: "Dillom te amooo 😍💙😭",
      });
      setOfferSent(true);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center relative z-10">
      <Particles
        className="w-[100vw] h-[100dvh] absolute z-90"
        id="tsparticles"
        options={{
          preset: 'fire',
          particles: {
            number: {
              value: 1000,
            },
            color: {
              value: ["#f55e2c", "#eddb18", "#ed1818"],
            },
            move: {
              direction: "top"
            },
            size: {
              value: 2,
              animation: {
                size_min: 0,
                enable: true,
              }
            }
          },
          background: {
            image: '',
            color: {
              value: 'transparent'
            }
          }
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
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
