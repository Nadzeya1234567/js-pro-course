import React from "react";
import "./App.css";

//import Posts from "./component/posts/Posts";

import Header from "./component/header/Header";
import Registration from "./component/registration/Registration";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Registration />

        {/*  <Posts /> */}

        {/* 
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
