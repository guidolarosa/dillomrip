"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import Rellax from "rellax";
import Cover from "./components/Cover";
import Fog from "./components/Fog";
import Footer from "./components/Footer";
import Fire from "./components/Fire";
import Book from "./components/Book";
import Image from "next/image";
import Butterflies from "./components/Butterflies";
import Link from "next/link";

export default function Home() {
  const [showCover, setShowCover] = useState(true);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 280,
      once: true,
    });

    const rellax = new Rellax(".rellax", {
      speed: 10,
      center: false,
      vertical: true,
    });
  }, []);

  return (
    <>
      <main className="flex flex-col items-center relative z-10 w-full">
        {showCover && <Cover setShowPage={setShowPage} />}
        {/* <Fog /> */}
        <Fire />
        {showPage && (
          <div className="flex flex-col items-center w-full">
            <div className="absolute">
              <Butterflies />
            </div>
            <Book />
            <Link href="http://marketplace.dillom.rip/" target="_blank">
              <div
                className={`w-[180px] h-[62px] md:w-[331px] md:h-[80px] relative transition duration-500 drop-shadow-[0px_0px_8px_transparent] hover:drop-shadow-[0px_0px_8px_white] cursor-pointer top-[-60px] md:top-[-0px]`}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="-2000"
              >
                <Image
                  fill
                  src="/subasta.svg"
                  alt="Grave"
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
