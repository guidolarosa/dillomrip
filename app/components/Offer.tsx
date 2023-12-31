import { getRandomArbitrary } from "@/utils/utils";
import Image from "next/image";

const Offer = (props: any) => {
  return (
    <div
      className={`flex flex-col items-center absolute bottom hover:z-40 opacity-0 ${
        props.index < 20 ? "animate-offerfadeup" : "opacity-100"
      }`}
      style={{
        left: `${props.left}%`,
        top: `${props.top}%`,
        animation:
          props.index < 20
            ? props.staggered
              ? `offerfadeup 2s ease-out ${
                  props.index + getRandomArbitrary(-1, 1) + 10
                }}s forwards`
              : `offerfadeup 2s ease-out 5s forwards`
            : "",
      }}
    >
      <div
        className={`absolute w-[36px] h-[36px] lg:w-[58px] lg:h-[58px] flex justify-center group hover:scale-125 transition`}
      >
        <Image
          src={props.image}
          fill
          alt={"Offer"}
          className="object-contain"
        />
        <div className="whitespace-nowrap text-center text-[18px] text-gray-400 absolute bottom-[-32px] group-hover:text-white filter drop-shadow-[0px_0px_8px_black]">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default Offer;
