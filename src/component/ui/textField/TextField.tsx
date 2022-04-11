import React from "react";

import "./TextField.scss";

type PropsType = {
  label: string;
  type?: string;
  value: string;
  setValue: (v: string) => void;
};

const TextField: React.FC<PropsType> = ({
  label,
  type = "text",
  value,
  setValue,
}) => {
  //const [value, setValue] = useState("");

  //useEffect(() => { console.log(value);}, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  //const handleReset = () => {setValue("");};

  return (
    <div className="text-field-container">
      <div className="label">{label}</div>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="input"
      />
      {/*    <button onClick={handleReset}>Reset</button> */}
    </div>
  );
};

export default TextField;
