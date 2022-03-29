import "./Button.scss";
type PropsType = {
  color: string;
  text?: string;
  handleClick: any;
};

const Button = ({ color, text = "Click me", handleClick }: PropsType) => {
  return (
    <button className="button-theme" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
