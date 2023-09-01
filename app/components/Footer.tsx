import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";
import ReleaseDate from "./ReleaseDate";

const Footer = (props: any) => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    if (props.fixed) {
      const onScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY > 1000) {
          setShowFooter(true);
        } else {
          setShowFooter(false);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <>
      <footer
        className={`flex justify-center bg-[url('/fire-footer.png')] w-full ${
          props.small ? "h-[490px] md:h-[580px]" : "h-[280px] md:h-[700px]"
        } pb-4 md:pb-[32px] overflow-hidden  flex-col items-center mt-auto z-20 transition-all duration-[2s] ${
          props.fixed
            ? showFooter
              ? "fixed bottom-0"
              : "fixed bottom-[-300px] md:bottom-[-800px]"
            : "relative"
        }`}
      >
        <div
          className={`absolute w-full h-full z-10 ${
            props.small ? "translate-y-[6rem]" : "translate-y-[0rem]"
          } ${props.fixed ? "bottom-0" : "bottom-10 md:bottom-0"}`}
        >
          <Image
            fill
            src="/fire-footer.png"
            alt=""
            className="object-top object-cover"
          />
        </div>
        <div
          className={`bottom-10 lg:bottom-0 absolute w-full h-full ${
            props.small ? "translate-y-[8rem]" : "translate-y-[0rem]"
          } ${
            props.fixed ? "bottom-0" : "bottom-10 md:bottom-0"
          }`}
        >
          <Image
            fill
            src="/branch-footer.png"
            alt=""
            className="object-top object-cover"
          />
        </div>
        <div className="relative flex flex-col z-50 mt-auto">
          {props.countdown ? (
            <Countdown />
          ) : (
            <ReleaseDate small={props.small} />
          )}
        </div>
        <div className="relative w-[96px] h-[60px] z-50 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer">
          <Link href="https://discord.gg/ZWjqRD6x" target="_blank">
            <Image
              fill
              src="/contacto.svg"
              alt=""
              className="object-top object-contain"
            />
          </Link>
        </div>
      </footer>
      <div className="gradient fixed bottom-0 bg-gradient-footer-mask h-40 w-[100vw] z-10" />
    </>
  );
};

Footer.defaultProps = {
  countdown: true,
};

export default Footer;
