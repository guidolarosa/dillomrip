import Image from "next/image";

const RIPOffer = ( props : any ) => {
  return (
    <div className={`flex flex-col items-center absolute bottom-0 ${props.position} animate-fade opacity-0`} style={{animationDelay: `${((props.index + 3) * 750)}ms`}}>
      <div className={`relative w-[78px] h-[78px]`}>
        <Image src={props.image} fill alt={props.name} /> 
      </div>
      <div className="whitespace-nowrap text-center text-[22px]">
        {props.name}
      </div>
    </div>
  );
};

export default RIPOffer;
