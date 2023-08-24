import Image from "next/image";

const RIPOffer = ( props : any ) => {
  return (
    <div className={`flex flex-col items-center absolute bottom-0 ${props.position} animate-fadeup opacity-0`} style={{animationDelay: `${((props.index + 3) * 750)}ms`}}>
      <div className={`relative w-[92px] h-[92px]`}>
        <Image src={props.image} fill alt={props.name} /> 
      </div>
      <div className="whitespace-nowrap text-center text-[22px]">
        {props.name}
      </div>
    </div>
  );
};

export default RIPOffer;
