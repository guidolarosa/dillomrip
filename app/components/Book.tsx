import Image from "next/image";

const Book = (props: any) => {
  return (
    <div className="book w-[235px] h-[307px] md:w-[1157px] md:h-[850px] relative">
      <Image
        fill
        src="/book.png"
        alt="Grave"
        className={`object-contain`}
      />
    </div>
  );
};

export default Book;
