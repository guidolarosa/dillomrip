import Image from "next/image";

const RightCandlesGroup = (props: any) => {
  return (
    <div className="right-candles w-[140px] md:w-[240px] aspect-square absolute bottom-[-50px] md:bottom-[-70px] right-[-70px] md:right-[-140px] md:scale-75">
      <div className="candles w-full h-full absolute bottom-[60px] left-[-50px]">
        <Image
          fill
          src="/candle-group-2.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
      <div className="candles w-full h-full absolute bottom-[60px] left-[200px]">
        <Image
          fill
          src="/candle-group-2.gif"
          alt="Candles"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default RightCandlesGroup;
