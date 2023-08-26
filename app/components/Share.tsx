import Image from "next/image";

const Share = ( props : any ) => {
    return (
        <div
        className={`mt-10 ${props.offerSent ? "opacity-100" : "opacity-0 h-0 mt-0"}`}
      >
        <div
          className={`w-[331px] h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] `}
        >
          <Image
            fill
            src="/compartir.svg"
            alt="Grave"
            className="object-contain"
          />
        </div>
      </div>
    )
}

export default Share;