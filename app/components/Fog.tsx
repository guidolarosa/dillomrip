import Image from "next/image";

const Fog = (props: any) => {
  return (
    <>
      <div className="fog hidden md:block w-[1020px] aspect-square absolute left-0 animate-fog z-10 pointer-events-none opacity-70">
        <Image src="/fog-1.png" fill alt="Fog" className="object-contain rellax" data-rellax-speed="5"/>
      </div>
      <div className="fog1 hidden md:block w-[1020px] aspect-square absolute right-[-320px] animate-fog z-00 pointer-events-none top-[-400px] opacity-50">
        <Image src="/fog-1.png" fill alt="Fog" className="object-contain" />
      </div>
    </>
  );
};

export default Fog;
