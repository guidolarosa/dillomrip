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
        className="w-[500px] aspect-square fixed left-[-280px] lg:left-0 top-[20px] z-20 pointer-events-none rellax"
        data-rellax-speed="15"
        // style={{ transform: `translateY(${-scrollPosition * 1.2}px)` }}
      >
        <Image
          src="/branch-1.png"
          fill
          alt="Branch"
          className="object-contain object-left"
        />
      </div>
      <div
        className="w-[680px] aspect-square fixed right-[-280px] lg:right-0 top-[160px] z-20 pointer-events-none rellax"
        data-rellax-speed="18"
        // style={{ transform: `translateY(${-scrollPosition * 1.2}px)` }}
      >
        <Image
          src="/branch-2.png"
          fill
          alt="Branch"
          className="object-contain object-right"
        />
      </div>
      <div
        className="hidden lg:block w-[1200px] aspect-square fixed right-[-280px] lg:left-[-420px] top-[-380px] z-20 pointer-events-none rellax blur"
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
