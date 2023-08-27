import Image from "next/image";
import { useRef, useState } from "react";
const { Splide, SplideSlide } = require("@splidejs/react-splide");
import { offerImages } from '../../content/offerImages';

const OfferSubmitForm = (props: any) => {
  const splideRef: any = useRef(null);

  const [offerValid, setOfferValid] = useState(false);

  const onOfferUpdate = (e: any) => {
    props.setOfferText(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 40) {
      setOfferValid(true);
    } else {
      setOfferValid(false);
    }
  };

  return (
    <div
      className={`transition-all duration-1000 h-full absolute top-0 ${
        props.show ? "opacity-100 blur-none" : "opacity-0 blur-lg pointer-events-none"
      }`}
    >
      <div className="w-[320px] aspect-square mt-[42px] flex flex-col relative top-4">
        <div className="absolute w-full h-full flex justify-center top-[-58px] pointer-events-none">
          <div
            className={`w-[116px] h-[174px] relative transition-all`}
          >
            <Image src={"/fire-selector.png"} fill alt={"Ofrenda"} />
          </div>
        </div>
        <div>
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
          className={`mt-20 bg-transparent border-b text-center text-[32px] mb-8 outline-none transition-all`}
          onChange={onOfferUpdate}
        />
        <div
          className={`transition-all`}
        >
          <div
            className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer ${
              offerValid ? "opacity-100" : "opacity-50 pointer-events-none"
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
