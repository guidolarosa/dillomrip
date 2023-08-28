import Image from "next/image";

const RightCandlesGroup = (props: any) => {
  return (
    <div className="right-candles w-[140px] lg:w-[240px] aspect-square absolute bottom-[-50px] lg:bottom-[-120px] right-[-70px] lg:right-[-160px] lg:scale-75">
      <div className="candles w-full h-full absolute bottom-[60px] left-[-50px]">
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
