import Image from "next/image";
import RIPOffer from "./RIPOffer";
import { useEffect, useState, useRef } from "react";

const ripOffers = [
  {
    name: "@ odd mami",
    position: "bottom-[-28%] left-[-17%]",
    image: "/rip-offers/ofrenda ripgang-6.png",
  },
  {
    name: "@Muerejoven",
    position: "left-[5%] bottom-[-16%]",
    image: "/rip-offers/ofrenda ripgang-4.png",
  },
  {
    name: "@k4",
    position: "left-[30%] bottom-[-10%]",
    image: "/rip-offers/ofrenda ripgang-7.png",
  },
  {
    name: "@lil quentin",
    position: "left-[45%] bottom-[-20%]",
    image: "/rip-offers/ofrenda ripgang-1.png",
  },
  {
    name: "@Broke Carrey",
    position: "left-[63%] bottom-[-10%]",
    image: "/rip-offers/ofrenda ripgang-2.png",
  },
  {
    name: "@Saramalacara",
    position: "left-[78%] bottom-[-0]",
    image: "/rip-offers/ofrenda ripgang-5.png",
  },
];

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
    <div className="gravestone-container">
      <div className="gravestone w-[235px] h-[307px] md:w-[456px] md:h-[460px] relative">
        <Image
          fill
          src="/gravestone.png"
          alt="Grave"
          className={`object-contain`}
        />
        <div className="left-candles w-[128px] aspect-square absolute bottom-[12px] left-[-30px]">
          <div className="candles w-full h-full absolute bottom-0 left-0">
            <Image
              fill
              src="/candles/1.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-full h-full absolute bottom-0 left-[-32px]">
            <Image
              fill
              src="/candles/3.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-full h-full absolute bottom-[-24px] left-[-52px]">
            <Image
              fill
              src="/candles/3.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
        </div>
        <div className="right-candles w-[128px] aspect-square absolute bottom-[-12px] right-[-60px]">
          <div className="candles w-full h-full absolute bottom-[60px] left-[-50px]">
            <Image
              fill
              src="/candles/2.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-full h-full absolute bottom-[24px] left-[-24px]">
            <Image
              fill
              src="/candles/1.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-full h-full absolute bottom-[0] left-[0]">
            <Image
              fill
              src="/candles/1.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-full h-full absolute bottom-[-8px] left-[-18px] scale-75 origin-bottom">
            <Image
              fill
              src="/candles/2.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-full h-full absolute bottom-[-24px] left-[-40px] scale-75 origin-bottom">
            <Image
              fill
              src="/candles/3.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
          <div className="candles w-full h-full absolute bottom-[-8px] left-[-62px] scale-75 origin-bottom">
            <Image
              fill
              src="/candles/3.gif"
              alt="Candles"
              className="object-contain"
            />
          </div>
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
