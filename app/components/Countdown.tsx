import { useState, useEffect } from "react";
import moment from "moment";

const Countdown = () => {
  const [remainingTime, setRemainingTime]: any = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = moment(new Date());
      const expiration = moment("2023-09-01T22:00:00-0000");

      const diff = expiration.diff(now);
      const diffDuration = moment.duration(diff);

      // console.log(diffDuration)
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
    <div
      className="countdown font-['Editorial_New'] relative mt-auto"
      data-aos="fade-up"
      data-aos-offset="0"
    >
      <div className="text-[32px] md:text-[111px] flex mt-auto">
        <span className="flex w-[66px] md:w-[218px] justify-center">
          <div>
            {remainingTime.days}
            <span className="outlined">D</span>
          </div>
        </span>
        :
        <span className="flex w-[66px] md:w-[218px] justify-center">
          <div>
            {remainingTime.hours}
            <span className="outlined">H</span>
          </div>
        </span>
        :
        <span className="flex w-[66px] md:w-[218px] justify-center">
          <div>
            {remainingTime.minutes}
            <span className="outlined">M</span>
          </div>
        </span>
        :
        <span className="flex w-[66px] md:w-[218px] justify-center">
          <div>
            {remainingTime.seconds}
            <span className="outlined">S</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Countdown;
