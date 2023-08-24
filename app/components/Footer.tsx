import { useState, useEffect } from "react";
import moment from "moment";
import Image from "next/image";

const Footer = (props: any) => {
  const [remainingTime, setRemainingTime] : any = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = moment(new Date());
      const expiration = moment("2023-08-28T17:24:22+0000");

      const diff = expiration.diff(now);
      const diffDuration = moment.duration(diff);

      // display
      setRemainingTime({
        days:
          diffDuration.days() < 10
            ? `0${diffDuration.days()}`
            : diffDuration.days(),
        hours:
          diffDuration.hours() < 10
            ? `0${diffDuration.hours()}`
            : diffDuration.hours(),
        minutes:
          diffDuration.minutes() < 10
            ? `0${diffDuration.minutes()}`
            : diffDuration.minutes(),
        seconds:
          diffDuration.seconds() < 10
            ? `0${diffDuration.seconds()}`
            : diffDuration.seconds(),
      });
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);
  return (
    <footer className="flex justify-center bg-[url('/fire-footer.png')] w-full h-[532px] pb-[32px] bg-cover bg-bottom overflow-hidden">
      <div
        className="countdown font-['Editorial_New'] relative mt-auto"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <div className="text-[56px] lg:text-[112px] flex">
          <span className="flex w-20 lg:w-[128px] justify-center">
            {remainingTime.days}
          </span>
          :
          <span className="flex w-20 lg:w-[128px] justify-center">
            {remainingTime.hours}
          </span>
          :
          <span className="flex w-20 lg:w-[128px] justify-center">
            {remainingTime.minutes}
          </span>
          :
          <span className="flex w-20 lg:w-[128px] justify-center">
            {remainingTime.seconds}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
