import React, { useEffect, useState } from "react";
import "./App.css";

import Posts from "./component/posts/Posts";

import Header from "./component/header/Header";
import Login from "./component/login/Login";
import Registration from "./component/registration/Registration";
import LanguageContext from "./contexts/LanguageContext";

const App: React.FC = () => {
  const [lang, setLang] = useState("ru");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="App">
        <div className="app-container">
          <Header />
          {/* <Registration /> */}

          <Login />

          {/* <Posts /> */}
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
