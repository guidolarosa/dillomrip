import Image from "next/image";
import SpiritOffer from "./SpiritOffer";
import {FaTwitter, FaInstagram} from 'react-icons/fa'
import Link from "next/link";

const Share = (props: any) => {
  return (
    <div
      className={`transition-all duration-1000 absolute top-[58px] h-full ${
        props.show ? "opacity-100 blur-none" : "opacity-0 pointer-events-none blur-lg"
      }`}
    >
      <SpiritOffer 
        show={props.show}
        offerText={props.offerText}
        offerImage={props.offerImage}
      />
      <div className="w-[320px] aspect-square relative top-4 flex flex-col justify-center items-center">
        <Link href="https://twitter.com/intent/tweet?&url=https%3A%2F%2Fdillom.rip%2F&text=Que%20tu%20alma%20en%20paz%20descanse,%20esta%20es%20nuestra%20despedida" target="_blank">
          <div
            className={`w-[180px] h-[62px] md:w-[331px] md:h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent]  hover:drop-shadow-[0_0_8px_white]`}
          >
            <Image
              fill
              src="/compartir.svg"
              alt="Grave"
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex justify-center mt-2">
          <Link href="https://twitter.com/intent/tweet?&url=https%3A%2F%2Fdillom.rip%2F&text=Que%20tu%20alma%20en%20paz%20descanse,%20esta%20es%20nuestra%20despedida" target="_blank">
            <FaTwitter className="mx-2" size="32px"/>
          </Link>
          <Link download href="/share.jpeg" className="block md:hidden">
            <FaInstagram className="mx-2" size="32px"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Share;
