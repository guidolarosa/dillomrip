import { getRandomArbitrary } from "@/utils/utils";
import Image from "next/image";

const LeftCandlesGroup = (props: any) => {
  return (
    <div className="left-candles w-[140px] lg:w-[240px] aspect-square absolute bottom-[28px] lg:bottom-[12px] left-[24px] lg:left-[-12px] scale-75">
      <div className="candles w-full h-full absolute bottom-[-100px] left-[-150px]">
        <Image
          fill
          src="/candle-group-1.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LeftCandlesGroup;
