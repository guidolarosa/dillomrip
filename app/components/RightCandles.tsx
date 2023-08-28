import Image from "next/image";

const RightCandles = (props: any) => {
  return (
    <div className="right-candles w-[98px] aspect-square absolute bottom-[-24px] md:bottom-[-0px] right-[-90px] md:right-[-160px] scale-[0.8] z-20">
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
      <div className="candles w-full h-full absolute bottom-[-8px] left-[-18px] origin-bottom">
        <Image
          fill
          src="/candles/2.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[-24px] left-[-40px] origin-bottom">
        <Image
          fill
          src="/candles/3.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[-8px] left-[-62px] origin-bottom">
        <Image
          fill
          src="/candles/3.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[-8px] left-[-62px] origin-bottom">
        <Image
          fill
          src="/candles/2.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[-8px] left-[50px] origin-bottom">
        <Image
          fill
          src="/candles/4.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default RightCandles;
