import Image from "next/image";
import Poem from "./Poem";

const LeaveOfferButton = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className={`transition-all h-full absolute top-0 flex flex-col justify-start items-center w-full ${
        props.show ? "opacity-100" : "opacity-0 pointer-events-none blur-lg"
      }`}
    >
      <Poem />
      <div
        className={`w-[180px] h-[62px] lg:w-[331px] lg:h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer`}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Image
          fill
          src="/leave-offer.svg"
          alt="Grave"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LeaveOfferButton;
