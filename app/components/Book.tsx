import Image from "next/image";
import LeftCandles from "./LeftCandles";
import RightCandles from "./RightCandles";
import LeftCandlesGroup from "./LeftCandlesGroup";
import RightCandlesGroup from "./RightCandlesGroup";
import BottomCandles from "./BottomCandles";

const Book = (props: any) => {
  return (
    <div
      className="book h-[480px] min-w-[420px] w-[100%] md:w-[920px] md:h-[720px]"
    >
      <div className="w-full h-full absolute bottom-32 md:bottom-[180px] left-[0] scale-[0.9]">
        <div className="candle-groups bottom-0 absolute left-[25%]">
          <LeftCandlesGroup />
          <LeftCandles />
        </div>
        <div className="candle-groups bottom-0 absolute right-[25%]">
          <RightCandlesGroup />
          <RightCandles />
        </div>
        {/* <BottomCandles /> */}
      </div>
      <div className="w-full h-full relative top-[-120px] md:top-[-120px]">
        <Image
          fill
          src="/book.png"
          alt="Grave"
          style={{ animationDuration: "30s" }}
          className={`object-contain hidden md:block animate-bookFloat absolute w-full h-full object-center`}
        />
        <Image
          fill
          src="/mobile-book.png"
          alt="Grave"
          style={{ animationDuration: "30s" }}
          className={`object-contain md:hidden animate-bookFloat absolute w-full h-full`}
        />
      </div>
    </div>
  );
};

export default Book;
