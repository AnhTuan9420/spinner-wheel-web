import { useState, useEffect } from "react";

function useCountdownV2() {
  const currentDate = new Date();
  const targetDate = new Date("2024-09-27T00:00:00");
  const timeDifference = targetDate - currentDate;

  const countdownDuration = Math.floor(timeDifference / 1000);
  const [remainingTime, setRemainingTime] = useState(countdownDuration);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const days = Math.floor(remainingTime / 86400); // 1 day = 24 hours * 60 minutes * 60 seconds
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default useCountdownV2;
