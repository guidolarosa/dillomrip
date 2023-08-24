"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Branches = (props: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
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
        className="w-[500px] aspect-square fixed left-[-280px] lg:left-0 top-[20px] z-20 pointer-events-none"
        style={{ transform: `translateY(${-scrollPosition * 1.2}px)` }}
      >
        <Image
          src="/branch-1.png"
          fill
          alt="Branch"
          className="object-contain object-left"
        />
      </div>
      <div
        className="w-[680px] aspect-square fixed right-[-280px] lg:right-0 top-[160px] z-20 pointer-events-none"
        style={{ transform: `translateY(${-scrollPosition * 1.2}px)` }}
      >
        <Image
          src="/branch-2.png"
          fill
          alt="Branch"
          className="object-contain object-right"
        />
      </div>
    </>
  );
};

export default Branches;
