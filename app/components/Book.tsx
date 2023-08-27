import Image from "next/image";

const Book = (props: any) => {
  return (
    <div className="book aspect-square h-[480px] md:h-[980px] relative top-[-100px] md:top-[-220px]">
      <Image
        fill
        src="/book.png"
        alt="Grave"
        className={`object-contain hidden md:block`}
      />
      <Image
        fill
        src="/mobile-book.png"
        alt="Grave"
        className={`object-contain md:hidden`}
      />
    </div>
  );
};

export default Book;
