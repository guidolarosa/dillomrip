import { getRandomArbitrary } from "@/utils/utils";
import Image from "next/image";

const LeftCandlesGroup = (props: any) => {
  return (
    <div className="left-candles w-[140px] md:w-[240px] aspect-square absolute bottom-[0px] md:bottom-[-28px] left-[-20px] md:left-[-80px] md:scale-75">
      <div className="candles w-full h-full absolute bottom-[0px] right-[0px]">
        <Image
          fill
          src="/candle-group-1.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[-20px] right-[280px]">
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
