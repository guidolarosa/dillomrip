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
      <div className="w-[320px] aspect-square relative top-4 flex flex-col justify-center">
        <div
          className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] `}
        >
          <Image
            fill
            src="/compartir.svg"
            alt="Grave"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center mt-2">
          <Link href="https://twitter.com/intent/tweet?&url=https%3A%2F%2Fwww.dillom.rip%2F&text=This%20is%20the%20text&via=sometwitterusername&hashtags=hashtag1%2Chashtag2" target="_blank">
            <FaTwitter className="mx-2" size="32px"/>
          </Link>
          <Link href="#">
            <FaInstagram className="mx-2" size="32px"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Share;
