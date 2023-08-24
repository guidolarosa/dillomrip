"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

const Cover = (props: any) => {
  const [showCover, setShowCover] = useState(true);
  const audioRef : any = useRef(null);

  useEffect(() => {
    const audio = new Audio('/audio.mp3');
    audioRef.current = audio;
  }, []);

  return (
    <div className={`w-[calc(100vw)] h-[100dvh] fixed top-0 z-50 ${showCover ? '' : 'pointer-events-none'}`}>
      <div
        className={`cover top-0 left-0 fixed w-full h-full bg-black z-20 transition duration-1000 flex items-center justify-center ${
          showCover ? "opacity-100" : "opacity-0 blur-xl pointer-events-none"
        }`}
      >
        <div
          className={`w-[320px] aspect-square relative cursor-pointer`}
          onClick={() => {
            setShowCover(false);
            audioRef.current.play()
          }}
        >
          <Image src="/cartita.png" fill alt="DillomRIP" className="object-contain"/>
        </div>
        {/* <div
          className={`w-[80vw] aspect-square relative`}
        >
          <Image src="/header.svg" fill alt="DillomRIP" />
        </div> */}
      </div>
      {showCover && (
        <div className="opening fixed w-[100vw] h-[100dvh] z-10">
          <Image
            src="/opening.gif"
            fill
            alt="Opening"
            className="object-cover"
            onLoadingComplete={() => {
              // setTimeout(() => {
              //   setShowCover(false);
              // }, 500);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Cover;
