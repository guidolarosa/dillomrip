import Image from "next/image";
import { useState, useEffect } from "react";

const SpiritOffer = (props: any) => {
  const [offerAnimated, setOfferAnimated] = useState(false);

  useEffect(() => {
    if (props.show) {
      setTimeout(() => {
        setOfferAnimated(true);
      }, 2000);
    }
  }, [props.show]);

  return (
    <div
      className={`spirit-offer grayscale w-[68px] aspect-square absolute transition-all left-[calc(50%-34px)] duration-[3000ms]`}
      style={{
        top: `${offerAnimated ? -580 : 0}px`,
        filter: `${offerAnimated ? 'grayscale(0)' : 'grayscale(1)'}`,
      }}
    >
      <Image src={props.offerImage} fill alt={"Ofrenda"} />
      <div
        className={
          "absolute w-full h-[24px] bottom-[-25px] flex justify-center"
        }
      >
        <div className="whitespace-nowrap text-center text-[18px] text-gray-400 absolute group-hover:text-white filter drop-shadow-[0px_0px_8px_black]">
          {props.offerText}
        </div>
      </div>
    </div>
  );
};

export default SpiritOffer;
