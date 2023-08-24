import Image from "next/image";

const Offer = (props: any) => {
  return (
    <div
      className={`flex flex-col items-center absolute bottom-0`}
      data-aos="fade-up"
      data-aos-delay={props.index * 100}
      style={{ left: `${props.left}%`, top: `${props.top}%` }}
    >
      <div className={`absolute w-[72px] h-[72px] flex justify-center`}>
        <Image src={props.image} fill alt={props.text} className="object-contain"/>
        <div className="whitespace-nowrap text-center text-[18px] text-gray-500 absolute bottom-[-32px]">
            {props.text}
        </div>
      </div>
    </div>
  );
};

export default Offer;
