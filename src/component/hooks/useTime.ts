import { useState, useEffect } from "react";

const getTime = () => new Date().toTimeString().substring(0, 8);

const useTime = () => {
  //мы указываем в useState фу-ю getTime, чтобы при перезарузке страницы у нас сразу показывалось время, иначе если оставить просто пустую строку "", сначала будет загружаться Time:, и только потом текущее время.
  const [time, setTime] = useState<String>(getTime());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return time;
};

export default useTime;
