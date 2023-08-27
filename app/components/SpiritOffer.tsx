import Image from "next/image";
import { useState, useEffect } from "react";

const SpiritOffer = (props: any) => {
  const [offerAnimated, setOfferAnimated] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [top, setTop] = useState(0);
  const [color, setColor] = useState("grayscale(1)");
  const [transform, setTransform] = useState("scale(1)");
  const [shadow, setShadow] = useState("drop-shadow(0 0 0 transparent)");

  useEffect(() => {
    if (props.show) {
      setTimeout(() => {
        setAnimationStep(1);
      }, 2000);
      setTimeout(() => {
        setAnimationStep(2);
      }, 5000);
    }
  }, [props.show]);

  const handleTopStyle = (step: number) => {
    switch (animationStep) {
      case 0:
        setTop(0);
        break;
      case 1:
        setTop(-640);
        break;
      case 2:
        setTop(-640);
    }
  };

  const handleTransformStyle = (step: number) => {
    switch (animationStep) {
      case 0:
        setTransform(`scale(1)`);
        break;
      case 1:
        setTransform(`scale(1.5)`);
        break;
      case 2:
        setTransform(`scale(1)`);
    }
  };

  const handleColorStyle = (step: number) => {
    switch (animationStep) {
      case 0:
        setColor(`grayscale(1)`);
        break;
      case 1:
        setColor(`grayscale(0)`);
        break;
      case 2:
        setColor(`grayscale(0)`);
    }
  };

  const handleShadowStyle = (step : number) => {
    switch (animationStep) {
      case 0:
        setShadow('drop-shadow(0 0 0 transparent)');
        break;
      case 1:
        setShadow('drop-shadow(0 0 5px white)');
        break;
      case 2:
        setShadow('drop-shadow(0 0 0 transparent)');
    }
  };

  useEffect(() => {
    handleTopStyle(animationStep);
    handleColorStyle(animationStep);
    handleTransformStyle(animationStep);
    handleShadowStyle(animationStep);
  }, [animationStep]);

  return (
    <>
      <div
        className={`spirit-offer grayscale w-[68px] aspect-square absolute transition-all left-[calc(50%-34px)] duration-[3000ms]`}
        style={{
          top: `${top}px`,
          filter: `${color}`,
          transform: `${transform}`,
          WebkitFilter: shadow,
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
      <div
        className={`spirit-offer w-[68px] aspect-square absolute transition-all left-[calc(50%-34px)] duration-[3000ms] top-0`}
      >
        <Image src={props.offerImage} fill alt={"Ofrenda"} />
      </div>
    </>
  );
};

export default SpiritOffer;
