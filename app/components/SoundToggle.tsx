import { useState, useRef, useEffect } from "react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

const SoundToggle = () => {
  const [soundOn, setSoundOn] = useState(true);

  const audioRef: any = useRef(null);

  useEffect(() => {
    const html = document.querySelector("html") as HTMLElement;
    html.style.overflowY = "hidden";
    const audio = new Audio("/audio.mp3");
    audio.loop = true;
    audioRef.current = audio;
  }, []);

  return (
    <div className="fixed right-4 top-4 md:right-10 md:top-10">
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
  )
};

export default SoundToggle;