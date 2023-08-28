import Image from "next/image";

const Fog = (props: any) => {
  return (
    <>
      <div className="fog hidden md:block w-[1020px] aspect-square absolute left-0 animate-fog z-20 pointer-events-none opacity-40 overflow-hidden top-[300px]">
        <Image src="/fog-1.png" fill alt="Fog" className="object-contain rellax" data-rellax-speed="5"/>
      </div>
      <div className="fog1 hidden md:block w-[1020px] aspect-square absolute right-[-320px] animate-fog z-00 pointer-events-none top-[-400px] opacity-40 overflow-hidden">
        <Image src="/fog-1.png" fill alt="Fog" className="object-contain" />
      </div>
      <div className="fog hidden md:block w-[1020px] aspect-square absolute left-0 animate-fog z-20 pointer-events-none opacity-40 top-[500px] overflow-hidden">
        <Image src="/fog-1.png" fill alt="Fog" className="object-contain rellax" data-rellax-speed="5"/>
      </div>
    </>
  );
};

export default Fog;
