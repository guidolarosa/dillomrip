'use client'

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createOffer } from "@/utils/sanity";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const LeaveOffer = (props) => {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);
  const [offerSent, setOfferSent] = useState(false);
  const [offerText, setOfferText] = useState("");

  const typeRef = useRef(null);
  const splideRef = useRef(null);

  useEffect(() => {
    if (typeRef.current != null) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > typeRef.current.getBoundingClientRect().y) {
          setShowTypeAnimation(true);
        }
      });
    }
  });

  const onOfferUpdate = (e ) => {
    setOfferText(e.target.value);
  };

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

  const onSplideMove = (e ) => {
    console.log(e)
    // console.log(splideRef.current)
  }

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
    <div className="flex flex-col items-center mb-[98px]">
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
      <div>
        <div className="w-[320px] aspect-square mt-[42px] flex flex-col relative">
          <div className="absolute w-full h-full flex justify-center top-[-58px] pointer-events-none">
            <div className="w-[116px] h-[174px] relative">
              <Image src={"/fire-selector.png"} fill alt={"Ofrenda"} />
            </div>
          </div>
          <Splide
            ref={splideRef}
            paginationUpdated={() => {
              console.log('hello')
            }}
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
          <input
            value={offerText}
            placeholder="Dejá tu ofrenda..."
            className="mt-20 bg-transparent border-b text-center text-[32px]"
            onChange={onOfferUpdate}
          />
        </div>
      </div>
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
  );
};

export default LeaveOffer;
