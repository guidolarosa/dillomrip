import Image from "next/image";

const RIPOffer = (props: any) => {
  return (
    <div
      className={`flex flex-col items-center absolute translate-y-[-40px] lg:translate-y-0 lg:bottom-0 animate-fade opacity-0`}
      style={{
        animationDelay: `${(props.index + 8) * 750}ms`,
        bottom:
          window.innerWidth >= 768
            ? `${props.position.desktop.bottom}%`
            : `${props.position.mobile.bottom}%`,
        left:
          window.innerWidth >= 768
            ? `${props.position.desktop.left}%`
            : `${props.position.mobile.left}%`,
      }}
    >
      <div className={`relative aspect-square w-[80px] lg:w-[80px]`}>
        <Image src={props.image} fill alt={props.name} />
      </div>
      <div className="whitespace-nowrap text-center text-[18px] lg:text-[22px]">
        {props.name}
      </div>
    </div>
  );
};

export default RIPOffer;
