"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

const Cover = ( props : any ) => {
  const [showCover, setShowCover] = useState(true);
  const [gifLoaded, setGifLoaded] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const audioRef: any = useRef(null);

  useEffect(() => {
    const html = document.querySelector("html") as HTMLElement;
    html.style.overflowY = "hidden";
    const audio = new Audio("/audio.mp3");
    audio.loop = true;
    audioRef.current = audio;
  }, []);

  useEffect(() => {
    setShowCover(!gifLoaded);
    props.setShowPage(true)
  }, [gifLoaded])

  return (
    <>
      <div className="fixed right-4 top-4 lg:right-10 lg:top-10">
        {soundOn ? (
          <BsFillVolumeUpFill
            className="cursor-pointer"
            size="24px"
            onClick={() => {
              setSoundOn(false);
              audioRef.current.pause();
            }}
          />
        ) : (
          <BsFillVolumeMuteFill
            className="cursor-pointer"
            size="24px"
            onClick={() => {
              setSoundOn(true);
              audioRef.current.play();
            }}
          />
        )}
      </div>
      <div
        className={`w-[calc(100vw)] h-[100dvh] fixed top-0 z-50 ${
          showCover ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`cover top-0 left-0 fixed w-full h-full bg-black z-20 transition duration-[3000ms] flex items-center justify-center ${
            showCover
              ? "opacity-100"
              : "opacity-0 blur-xl pointer-events-none"
          }`}
        >
          <div
            className={`w-[320px] aspect-square relative cursor-pointer transition hover:scale-110 hover:rotate-3`}
            onClick={() => {
              setShowCover(false);
              audioRef.current.play();
              const html = document.querySelector("html") as HTMLElement;
              html.style.overflowY = "auto";
            }}
          >
            <Image
              src="/cartita.png"
              fill
              unoptimized
              alt="DillomRIP"
              className="object-contain"
            />
          </div>
        </div>
        {!showCover && (
          <div className="opening fixed w-[100vw] h-[100dvh] z-10">
            <Image
              src="/opening.gif"
              fill
              alt="Opening"
              className="object-cover"
              onLoadingComplete={() => {
                console.log('loaded')
                setGifLoaded(true);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cover;
