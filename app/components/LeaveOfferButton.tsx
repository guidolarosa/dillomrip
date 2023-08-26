import Image from "next/image"

const LeaveOfferButton = ( props : any ) => {
    return (
        <div
        onClick={props.onClick}
        className={`transition-all opacity-0 ${
            !props.show ? "h-0" : "opacity-100"
        }`}
      >
        <div
          className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer`}
          data-aos="fade-up"
        >
          <Image
            fill
            src="/leave-offer.svg"
            alt="Grave"
            className="object-contain"
          />
        </div>
      </div>
    )
}

export default LeaveOfferButton;