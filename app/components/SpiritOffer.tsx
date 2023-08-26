import Image from "next/image";

const SpiritOffer = (props : any) => {
    return (
        <div
        className={`spirit-offer grayscale w-[68px] aspect-square absolute transition-all left-[calc(50%-34px)] duration-[3000ms] ${
          props.offerSent ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: `${props.offerMove}px`,
        }}
      >
        <Image src={props.offerImage} fill alt={"Ofrenda"} />
        <div className={"absolute w-full h-[24px] bottom-[-25px] flex justify-center"}>
          <div className="whitespace-nowrap text-center text-[18px] text-gray-400 absolute group-hover:text-white filter drop-shadow-[0px_0px_8px_black]">
            {props.offerText}
          </div>
        </div>
      </div>
    )
};

export default SpiritOffer;