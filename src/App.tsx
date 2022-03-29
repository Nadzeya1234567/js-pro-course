import "./App.css";
import Button from "./component/button/Button";
import Header from "./component/header/Header";
import Description from "./component/description/Description";

function App() {
  return (
    <div className="App">
      <Header title="Make your Blog Online"></Header>
      <Description></Description>
      <Button
        color="red"
        text="Learn More"
        handleClick={() => console.log("Red button clicked")}
      ></Button>
    </div>
  );
}

export default App;
