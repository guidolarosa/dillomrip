import Image from "next/image";
import LeftCandles from "./LeftCandles";
import RightCandles from "./RightCandles";
import LeftCandlesGroup from "./LeftCandlesGroup";
import RightCandlesGroup from "./RightCandlesGroup";

const Book = (props: any) => {
  return (
    <div className="book aspect-square h-[480px] md:h-[980px] relative top-[-100px] md:top-[-220px]" style={{animationDuration: '30s'}}>
      <div className="w-full h-full absolute bottom-32">
        <LeftCandlesGroup />
        <RightCandlesGroup />
        <LeftCandles />
        <RightCandles />
      </div>
      <Image
        fill
        src="/book.png"
        alt="Grave"
        className={`object-contain hidden md:block animate-bookFloat`}
      />
      <Image
        fill
        src="/mobile-book.png"
        alt="Grave"
        className={`object-contain md:hidden animate-bookFloat`}
      />
    </div>
  );
};

export default Book;
