"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Branches = (props: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollPosition(window.scrollY);
    const onScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <div
        className="hidden md:block w-[540px] md:w-[800px] aspect-square fixed left-[-280px] md:left-[-240px] top-[20px] z-20 pointer-events-none rellax"
        data-rellax-speed="15"
      >
        <Image
          src="/branch-1.png"
          fill
          alt="Branch"
          className="object-contain object-left"
        />
      </div>
      <div
        className="hidden md:block w-[1000px] aspect-square fixed right-[-280px] md:right-0 top-[160px] z-20 pointer-events-none rellax"
        data-rellax-speed="18"
      >
        <Image
          src="/branch-2.png"
          fill
          alt="Branch"
          className="object-contain object-right"
        />
      </div>
      <div
        className="hidden md:block w-[1200px] aspect-square fixed right-[-280px] md:left-[-620px] top-[-380px] z-20 pointer-events-none rellax blur"
        data-rellax-speed="40"
        // style={{ transform: `translateY(${-scrollPosition * 1.2}px)` }}
      >
        <Image
          src="/branch-1.png"
          fill
          alt="Branch"
          className="object-contain object-right scale-y-[-1]"
        />
      </div>
    </>
  );
};

export default Branches;
