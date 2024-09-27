"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

// Function to calculate the time left
const calculateTimeLeft = (targetDate: string) => {
  const now = new Date();
  const eventDate = new Date(targetDate);
  const difference = eventDate.getTime() - now.getTime();

  const timeLeft = {
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    eventStarted: false,
  };

  if (difference > 0) {
    timeLeft.months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    timeLeft.weeks = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
    );
    timeLeft.days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    );
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / (1000 * 60)) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
  } else {
    timeLeft.eventStarted = true;
  }

  return timeLeft;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<null | {
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    eventStarted: boolean;
  }>(null);

  useEffect(() => {
    // Sets initial time left
    setTimeLeft(calculateTimeLeft(targetDate));

    // Updates the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(timer);
  }, [targetDate]);

  // Shows loading state on server-side and until the component is mounted
  if (!timeLeft) {
    return null;
  }

  // If the event has started
  if (timeLeft.eventStarted) {
    return (
      <div className="text-4xl font-bold text-red-600">Event has started!</div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:flex md:space-x-4 text-xl items-center justify-center font-ex font-extrabold text-white bg-primary lg:p-14 md:p-3 p-6 rounded-3xl">
      <div className="flex  flex-row items-center justify-center lg:mb-6 gap-3 md:mb-0">
        <div className="flex flex-col">
          <span className="text-5xl text-white">
            {String(timeLeft.months).padStart(2, "0")}
          </span>
          <span className="text-black text-base">Months</span>
        </div>
        <span className="text-black text-4xl">:</span>
      </div>

      <div className="flex  flex-row items-center justify-center lg:mb-6 gap-3 md:mb-0">
        <div className="flex flex-col">
          <span className="text-5xl text-white">
            {String(timeLeft.weeks).padStart(2, "0")}
          </span>
          <span className="text-black text-base">Weeks</span>
        </div>
        <span className="text-black text-4xl">:</span>
      </div>

      <div className="flex l flex-row items-center justify-center lg:mb-6 gap-3 md:mb-0">
        <div className="flex flex-col">
          <span className="text-5xl text-white">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-black text-base">Days</span>
        </div>
        <span className="text-black text-4xl">:</span>
      </div>

      <div className="flex  flex-row items-center justify-center lg:mb-6 gap-3 md:mb-0">
        <div className="flex flex-col">
          <span className="text-5xl text-white">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-black text-base">Hours</span>
        </div>
        <span className="text-black text-4xl">:</span>
      </div>

      <div className="flex  flex-row items-center justify-center lg:mb-6 gap-3 md:mb-0">
        <div className="flex flex-col">
          <span className="text-5xl text-white">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-black text-base">Minutes</span>
        </div>
        <span className="text-black text-4xl">:</span>
      </div>

      <div className="flex flex-row items-center justify-center lg:mb-6 gap-3 md:mb-0">
        <div className="flex flex-col">
          <span className="text-5xl text-white">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-black text-base">Seconds</span>
        </div>
        <span className="text-black text-4xl">:</span>
      </div>
    </div>
  );
};

export default Countdown;
