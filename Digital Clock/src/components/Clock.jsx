import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let min = time.getMinutes();
    let seconds = time.getSeconds();
    const meridian = hours >= 12 ? "P.M" : "A.M";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(min)}:${padZero(seconds)}:${padZero(
      meridian
    )}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="relative z-10 pointer-events-none flex items-center justify-center h-full text-white text-4xl font-bold">
        <div className="clock">
          <span>{formatTime()} </span>
        </div>
      </div>
    </>
  );
}
