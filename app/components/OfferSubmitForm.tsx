import Image from "next/image";
import { useRef, useState } from "react";
const { Splide, SplideSlide } = require("@splidejs/react-splide");
import { offerImages } from '../../content/offerImages';

const OfferSubmitForm = (props: any) => {
  const splideRef: any = useRef(null);

  return (
    <div
      className={`transition-all duration-1000 overflow-hidden h-0 opacity-0 blur-lg ${
        props.show ? "h-[580px] opacity-100 blur-none" : ""
      }`}
    >
      <div className="w-[320px] aspect-square mt-[42px] flex flex-col relative top-4">
        <div className="absolute w-full h-full flex justify-center top-[-58px] pointer-events-none">
          <div
            className={`w-[116px] h-[174px] relative transition-all ${
              props.offerSent ? "opacity-0 blur-lg" : "opacity-100 blur-none"
            }`}
          >
            <Image src={"/fire-selector.png"} fill alt={"Ofrenda"} />
          </div>
        </div>
        <div className={`${props.offerSent ? "splide-inactive" : ""}`}>
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              pagination: false,
            }}
          >
            {offerImages.map((offer, index) => (
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
          value={props.offerText}
          placeholder="Dejá tu ofrenda..."
          className={`mt-20 bg-transparent border-b text-center text-[32px] mb-8 outline-none transition-all ${
            props.offerSent ? "opacity-0 height-0 overflow-hidden hidden m-0" : ""
          }`}
          onChange={props.onOfferUpdate}
        />
        <div
          className={`transition-all ${
            props.offerSent ? "opacity-0 height-0 overflow-hidden" : ""
          }`}
        >
          <div
            className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer ${
              props.offerValid ? "opacity-100" : "opacity-50 pointer-events-none"
            }`}
            onClick={props.submitOffer}
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
  );
};

export default OfferSubmitForm;
