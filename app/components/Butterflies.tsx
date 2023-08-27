import Image from "next/image";

const Butterflies = (props: any) => {
  const files = [
    "/butterflies/butterfly 1.png",
    "/butterflies/butterfly 3.png",
    "/butterflies/butterfly 4.png",
    "/butterflies/butterfly 5.png",
    "/butterflies/butterfly 6.png",
    "/butterflies/butterfly 7.png",
  ];
  return (
    <div className="w-[100vw]">
      <div
        className="w-[50px] aspect-square absolute left-[20%] top-[200px] rellax"
        data-rellax-speed="3"
      >
        <Image unoptimized fill src={files[3]} alt="Dillom" className="animate-wiggle" />
      </div>
      <div
        className="w-[50px] aspect-square absolute left-[25%] top-[120px] rellax animate-wiggle"
        data-rellax-speed="5"
      >
        <Image unoptimized fill src={files[0]} alt="Dillom" className="animate-float" />
      </div>
      <div
        className="w-[50px] aspect-square absolute right-[12%] top-[820px] rellax animate-wiggle"
        data-rellax-speed="3"
      >
        <Image unoptimized fill src={files[1]} alt="Dillom" className="animate-float" />
      </div>
      <div
        className="w-[50px] aspect-square absolute right-[18%] top-[870px] rellax animate-wiggle"
        data-rellax-speed="2"
      >
        <Image unoptimized fill src={files[2]} alt="Dillom" className="animate-float" />
      </div>
    </div>
  );
};

export default Butterflies;
