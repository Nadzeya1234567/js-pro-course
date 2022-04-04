import React from "react";
import "./App.css";
import Button from "./component/button/Button";
import Header from "./component/header/Header";
import Description from "./component/description/Description";
import Posts from "./component/posts/Posts";
import Clicker from "./component/clicker/Clicker";
import Timer from "./component/timer/Timer";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-container">
        {/*   <Timer /> */}
        {/* <Clicker /> */}

        <Posts />

        {/* <Header title="Make your Blog Online"></Header>
      <Description></Description>
      <Button
        color="red"
        text="Learn More"
        handleClick={() => console.log("Red button clicked")}
      ></Button> */}
      </div>
    </div>
  );
};

export default App;
