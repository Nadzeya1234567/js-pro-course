import React, { useEffect, useState } from "react";

const getTime = () => new Date().toTimeString().substring(0, 8);

const Timer: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Time:{time}</div>;
};

export default Timer;
