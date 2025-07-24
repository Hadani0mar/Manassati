import { useEffect, useState } from 'react';

const TARGET_DATE = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const diff = TARGET_DATE - now;

    const totalSeconds = Math.max(0, Math.floor(diff / 1000));
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-16">
      <Box label="days" value={timeLeft.days} />
      <Box label="hours" value={timeLeft.hours} />
      <Box label="min" value={timeLeft.minutes} />
      <Box label="sec" value={timeLeft.seconds} />
    </div>
  );
}

function Box({ label, value }) {
  return (
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span
          style={{ "--value": value }}
          aria-live="polite"
        ></span>
      </span>
      {label}
    </div>
  );
}
