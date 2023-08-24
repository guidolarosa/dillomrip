import { getRandomArbitrary } from "@/utils/utils";
import Image from "next/image";

const Offer = (props: any) => {
  return (
    <div
      className={`flex flex-col items-center absolute bottom animate-fadeup opacity-0`}
      style={{
        left: `${props.left}%`,
        top: `${props.top}%`,
        animation: `fadeup 0.5s ease-out ${props.index + getRandomArbitrary(-0.5, 0.5) }s forwards`,
      }}
    >
      <div className={`absolute w-[72px] h-[72px] flex justify-center`}>
        <Image
          src={props.image}
          fill
          alt={props.text}
          className="object-contain"
        />
        <div className="whitespace-nowrap text-center text-[18px] text-gray-400 absolute bottom-[-32px]">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default Offer;
