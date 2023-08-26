import { getRandomArbitrary } from "@/utils/utils";
import Image from "next/image";

const Offer = (props: any) => {
  return (
    <div
      className={`flex flex-col items-center absolute bottom animate-offerfadeup hover:z-40 opacity-0`}
      style={{
        left: `${props.left}%`,
        top: `${props.top}%`,
        animation: `offerfadeup 1s ease-out ${props.index + getRandomArbitrary(-1, 1) + 7 }s forwards`,
      }}
    >
      <div className={`absolute w-[58px] h-[58px] flex justify-center group hover:scale-125 transition`}>
        <Image
          src={props.image}
          fill
          alt={'Offer'}
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
