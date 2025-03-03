import { useEffect, useRef, useState } from "react";
import "./StopWatch.css";
function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapseTime(Date.now() - startTimeRef.current);
      }, 10);
      return () => {
        clearInterval(intervalIdRef.current);
      };
    }
  }, [isRunning]);
  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapseTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapseTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let min = Math.floor((elapseTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapseTime / 1000) % 60);
    let ms = Math.floor((elapseTime % 1000) / 10);
    hours = String(hours).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    ms = String(ms).padStart(2, "0");
    return `${hours}:${min}:${sec}:${ms}`;
  }
  return (
    <>
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-button">
            Start
          </button>
          <button onClick={stop} className="stop-button">
            Stop
          </button>
          <button onClick={reset} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default StopWatch;
