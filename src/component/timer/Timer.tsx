import React, { useEffect, useState } from "react";

import "./Timer.scss";
import { ReactComponent as TimerIcon } from "../../assets/timer.svg";
import useTime from "../hooks/useTime";

const SHOW_TIME = "showTime";

const getShowTime = (): boolean => localStorage.getItem(SHOW_TIME) === "true";

const Timer: React.FC = () => {
  const [showTime, setShowTime] = useState<boolean>(getShowTime());

  const time = useTime();

  //каждый раз, когда изменяется состояние showTime, будем записывать в localStorage
  useEffect(() => {
    localStorage.setItem(SHOW_TIME, showTime.toString());
  }, [showTime]);

  const handleClick = () => {
    //с помощью этой функции мы включаем либо выключаем время, это наш переключатель: либо true либо false
    setShowTime((prevValue) => !prevValue);
    //функция setShowTime асинхронная, поэтому сначала у нас произойдет запись в localstorage, куда запишется старое значение showTime, а только потом установиться обратное значение переключателя, т.е. запись в localstorage будет неверная (у нас включен timer-true, в локалстор - false)
    //localStorage.setItem(SHOW_TIME, showTime.toString());
  };
  return (
    <div className="timer-container">
      {showTime && <div className="time">Time:{time}</div>}

      <TimerIcon onClick={handleClick} className="icon-button" />
    </div>
  );
};

export default Timer;
