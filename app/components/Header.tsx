'use client'

import Image from "next/image";
import Countdown from "./Countdown";

const Header = () => {
  return (
    <header className="flex justify-center w-full py-[45px] md:py-[68px] flex-col items-center rellax">
      <div className="w-[320px] h-[48px] md:w-[600px] md:h-[90px] relative animate-floatLight ">
        <Image src="/header.svg" fill alt="DillomRIP" />
      </div>
      {/* <Countdown /> */}
    </header>
  );
};

export default Header;
