"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createOffer } from "@/utils/sanity";
const { Splide, SplideSlide } = require("@splidejs/react-splide");

const LeaveOffer = (props: any) => {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);
  const [offerSent, setOfferSent] = useState(false);
  const [offerText, setOfferText] = useState("");
  const [offerImageId, setOfferImageId] = useState(0);
  const [offerHidden, setOfferHidden] = useState(true);
  const [offerValid, setOfferValid] = useState(false);
  const [offerMove, setOfferMove] = useState(316);
  const [offerPositioned, setOfferPositioned] = useState();

  const typeRef: any = useRef(null);
  const splideRef: any = useRef(null);

  useEffect(() => {
    if (typeRef.current != null) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > typeRef.current.getBoundingClientRect().y) {
          setShowTypeAnimation(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (offerSent) {
      setTimeout(() => {
        setOfferMove(-300);
      }, 2000);
    }
  }, [offerSent]);

  const onOfferUpdate = (e: any) => {
    setOfferText(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 40) {
      setOfferValid(true);
    } else {
      setOfferValid(false);
    }
  };

  const handleOfferClick = () => {
    setOfferHidden(false);
  };

  const submitOffer = async () => {
    let activeSlideId: any = document
      .querySelector(".splide__slide.is-active:not(.splide__slide--clone)")
      ?.getAttribute("id");
    let imageId = activeSlideId.substr(activeSlideId.length - 1);
    setOfferImageId(parseInt(imageId) - 1);
    try {
      const response = await createOffer({
        imageId: imageId,
        text: offerText,
      });
      setOfferSent(true);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const offers = [
    "/offers/ofrenda-1.png",
    "/offers/ofrenda-2.png",
    "/offers/ofrenda-3.png",
    "/offers/ofrenda-4.png",
    "/offers/ofrenda-5.png",
    "/offers/ofrenda-6.png",
    "/offers/ofrenda-7.png",
    "/offers/ofrenda-8.png",
    "/offers/ofrenda-9.png",
  ];

  return (
    <div className="flex flex-col items-center mb-[98px] mt-20 relative">
      <p
        className="text-[24px] lg:text-[36px] text-center mb-[80px] h-[180px]"
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
            <TypeAnimation cursor={false} sequence={["", 9000, "Con Amor,"]} />
          </>
        )}
      </p>
      <div
        className={`spirit-offer grayscale w-[68px] aspect-square absolute transition-all left-[calc(50%-34px)] duration-[3000ms] ${
          offerSent ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: `${offerMove}px`,
        }}
      >
        <Image src={offers[offerImageId]} fill alt={"Ofrenda"} />
        <div className={"absolute w-full h-[24px] bottom-[-25px] flex justify-center"}>
          <div className="whitespace-nowrap text-center text-[18px] text-gray-400 absolute group-hover:text-white filter drop-shadow-[0px_0px_8px_black]">
            {offerText}
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-1000 overflow-hidden h-0 opacity-0 blur-lg ${
          offerHidden ? "" : "h-[580px] opacity-100 blur-none"
        }`}
      >
        <div className="w-[320px] aspect-square mt-[42px] flex flex-col relative top-4">
          <div className="absolute w-full h-full flex justify-center top-[-58px] pointer-events-none">
            <div
              className={`w-[116px] h-[174px] relative transition-all ${
                offerSent ? "opacity-0 blur-lg" : "opacity-100 blur-none"
              }`}
            >
              <Image src={"/fire-selector.png"} fill alt={"Ofrenda"} />
            </div>
          </div>
          <div className={`${offerSent ? "splide-inactive" : ""}`}>
            <Splide
              ref={splideRef}
              options={{
                type: "loop",
                pagination: false,
              }}
            >
              {offers.map((offer, index) => (
                <SplideSlide key={index}>
                  <div className="w-full flex items-center justify-center">
                    <div className="w-[68px] aspect-square relative">
                      <Image src={offer} fill alt={"Ofrenda"} />
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <input
            value={offerText}
            placeholder="Dejá tu ofrenda..."
            className={`mt-20 bg-transparent border-b text-center text-[32px] mb-8 outline-none transition-all ${
              offerSent ? "opacity-0 height-0 overflow-hidden hidden m-0" : ""
            }`}
            onChange={onOfferUpdate}
          />
          <div
            className={`mt-10 ${offerSent ? "opacity-100" : "opacity-0 h-0 mt-0"}`}
          >
            <div
              className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] `}
              onClick={submitOffer}
            >
              <Image
                fill
                src="/compartir.svg"
                alt="Grave"
                className="object-contain"
              />
            </div>
          </div>
          <div
            className={`transition-all ${
              offerSent ? "opacity-0 height-0 overflow-hidden" : ""
            }`}
          >
            <div
              className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer ${
                offerValid ? "opacity-100" : "opacity-50 pointer-events-none"
              }`}
              onClick={submitOffer}
            >
              <Image
                fill
                src="/firmar.svg"
                alt="Grave"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transition-all opacity-0 ${
          !offerHidden ? "h-0" : "opacity-100"
        }`}
      >
        <div
          className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer`}
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
    </div>
  );
};

export default LeaveOffer;
