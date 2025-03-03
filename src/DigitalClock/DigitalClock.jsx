import { useEffect, useState } from "react";
import "./DigitalClock.css";
function DigitalClock() {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  function formatTime() {
    let hours = clock.getHours();
    const min = clock.getMinutes();
    const sec = clock.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${min}:${padZero(sec)} ${meridian}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}
export default DigitalClock;
