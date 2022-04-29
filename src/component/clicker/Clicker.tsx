import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue, shiftValue } from "../../store/clicker/actionCreators";

const Clicker: React.FC = () => {
  const count = useSelector((state: any) => state.clicker.value);
  const dispatch = useDispatch();

  const resert = () => {
    dispatch(setValue(0));
  };

  const increment = () => {
    dispatch(shiftValue(1));
  };
  const decriment = () => {
    dispatch(shiftValue(-1));
  };

  return (
    <div>
      <button onClick={resert}>resert</button>
      <button onClick={decriment}>-</button>
      <span className="_value">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Clicker;
