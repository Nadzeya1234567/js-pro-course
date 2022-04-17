import React, { useEffect, useState } from "react";
import "./App.css";

import Posts from "./component/posts/Posts";

import Header from "./component/header/Header";
import Login from "./component/login/Login";
import Registration from "./component/registration/Registration";
import Post from "./component/post/Post";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        {/* <Registration /> */}

        {/* <Login /> */}

        <Post id={2} />

        {/*   <Posts /> */}
      </div>
    </div>
  );
};

export default App;
