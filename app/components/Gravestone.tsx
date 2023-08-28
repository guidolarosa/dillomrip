import Image from "next/image";
import RIPOffer from "./RIPOffer";
import { useEffect, useState, useRef } from "react";
import LeftCandles from "./LeftCandles";
import LeftCandlesGroup from "./LeftCandlesGroup";
import RightCandles from "./RightCandles";
import RightCandlesGroup from "./RightCandlesGroup";
import { ripOffers } from "@/content/ripOffers";

const Gravestone = (props: any) => {
  const [gravestoneAnimated, setGravestoneAnimated] = useState(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 2000);
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  useEffect(() => {
    setGravestoneAnimated(!gravestoneAnimated);
  }, [timer]);

  return (
    <div className="gravestone-container relative z-10">
      <div className="gravestone w-[380px] h-[387px] md:w-[456px] md:h-[460px] relative">
        <Image
          fill
          src="/gravestone.png"
          alt="Grave"
          className={`object-contain`}
        />
        <LeftCandles />
        <LeftCandlesGroup />
        <RightCandles />
        <RightCandlesGroup />
        {ripOffers.map((offer: any, index: any) => (
          <RIPOffer
            key={index}
            index={index}
            position={offer.position}
            image={offer.image}
            name={offer.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Gravestone;
