import { getRandomArbitrary } from "@/utils/utils";
import Image from "next/image";

const LeftCandles = (props: any) => {
  return (
    <div className="left-candles w-[92px] aspect-square absolute bottom-[0px] left-[-40px] scale-100 z-20">
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
      <div className="candles w-full h-full absolute bottom-[12px] left-[-82px]">
        <Image
          fill
          src="/candles/4.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[-21px] left-[-102px]">
        <Image
          fill
          src="/candles/1.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[0px] left-[-140px]">
        <Image
          fill
          src="/candles/3.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[0px] left-[-120px]">
        <Image
          fill
          src="/candles/1.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LeftCandles;
