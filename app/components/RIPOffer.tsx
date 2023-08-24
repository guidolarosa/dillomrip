import Image from "next/image";

const RIPOffer = ( props : any ) => {
  return (
    <div className={`flex flex-col items-center absolute bottom-0 ${props.position}`} data-aos="fade-up">
      <div className={`relative w-[115px] h-[115px]`}>
        <Image src={props.image} fill alt={props.name} /> 
      </div>
      <div className="whitespace-nowrap text-center text-[22px]">
        {props.name}
      </div>
    </div>
  );
};

export default RIPOffer;
