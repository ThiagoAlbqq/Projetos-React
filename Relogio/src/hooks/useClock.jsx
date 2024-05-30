import { useState, useEffect } from "react";

const useClock = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const updateTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    setHours(String(hours).padStart(2, "0"));
    setMinutes(String(minutes).padStart(2, "0"));
    setSeconds(String(seconds).padStart(2, "0"));
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return [hours, minutes, seconds];
};

export default useClock;
