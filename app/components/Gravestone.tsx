import Image from "next/image";
import RIPOffer from "./RIPOffer";
import { useEffect, useState, useRef } from "react";

const ripOffers = [
  {
    name: "@ odd mami",
    position: "bottom-[-120px] left-[-80px]",
    image: "/rip-offers/ofrenda ripgang-6.png",
  },
  {
    name: "@Muerejoven",
    position: "left-[30px] bottom-[-80px]",
    image: "/rip-offers/ofrenda ripgang-4.png",
  },
  {
    name: "@k4",
    position: "left-[140px] bottom-[-80px]",
    image: "/rip-offers/ofrenda ripgang-7.png",
  },
  {
    name: "@lil quentin",
    position: "left-[250px] bottom-[-40px]",
    image: "/rip-offers/ofrenda ripgang-1.png",
  },
  {
    name: "@Broke Carrey",
    position: "left-[320px] bottom-[-96px]",
    image: "/rip-offers/ofrenda ripgang-2.png",
  },
  {
    name: "@Saramalacara",
    position: "left-[340px] bottom-[-0px]",
    image: "/rip-offers/ofrenda ripgang-5.png",
  },
];

const Gravestone = (props: any) => {
  const [gravestoneAnimated, setGravestoneAnimated] = useState(true);
  const [timer, setTimer] = useState(0)
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 2000);
    return () => {
      clearInterval(animationInterval);
    };
  }, []);
  

  useEffect(() => {
    setGravestoneAnimated(!gravestoneAnimated)
  }, [timer]);


  return (
    <div className="gravestone-container">
      <div className="gravestone w-[235px] h-[307px] md:w-[456px] md:h-[590px] relative">
        <Image
          fill
          src="/gravestone.png"
          alt="Grave"
          className={`object-contain`}
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
