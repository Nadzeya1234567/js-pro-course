import React, { useEffect, useRef } from "react";
import FormValuesType from "../../../types/formValuesType";

import "./TextField.scss";

type PropsType = {
  autofocus?: boolean;
  label: string;
  type?: string;
  name: string;
  values: FormValuesType;
  setValues: (callback: (prevValue: FormValuesType) => FormValuesType) => void;

  //value: string;
  //setValue: (name: string, value: string) => void;
};

const TextField: React.FC<PropsType> = ({
  autofocus,
  label,
  type = "text",
  name,
  values,
  setValues,
}) => {
  //делаем автофокус с помощью Ref
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      nameRef.current?.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: event.target.value,
    }));
  };

  return (
    <div className="text-field-container">
      <div className="label">{label}</div>
      <input
        ref={nameRef}
        value={values[name] || ""}
        onChange={handleChange}
        type={type}
        className="input"
      />
    </div>
  );
};

export default TextField;
