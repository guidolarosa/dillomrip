import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-center w-full py-[45px] lg:py-[68px] rellax">
      <div className="w-[320px] h-[48px] md:w-[600px] md:h-[90px] relative animate-floatLight">
        <Image src="/header.svg" fill alt="DillomRIP" />
      </div>
    </header>
  );
};

export default Header;
