import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Posts from "./component/posts/Posts";
import Header from "./component/header/Header";
import Login from "./component/login/Login";
import Registration from "./component/registration/Registration";
import PostPage from "./component/postPage/PostPage";
import Clicker from "./component/clicker/Clicker";

import "./App.css";
import { useSelector } from "./component/hooks/useSelector";

const App: React.FC = () => {
  const logged = useSelector((state) => state.auth.logged);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-container">
          <Header />

          <div className="app-content">
            <Routes>
              <Route
                path="/clicker"
                element={
                  <div>
                    <Clicker />
                    <Clicker />
                    <Clicker />
                  </div>
                }
              />
              {!logged && (
                <>
                  <Route path="/login/*" element={<Login />} />
                </>
              )}

              <Route path="/registration" element={<Registration />} />
              <Route path="/posts">
                <Route index element={<Posts />} />
                <Route path=":id" element={<PostPage />} />
              </Route>
              {/*  переадресация */}
              <Route path="*" element={<Navigate to={"/posts"} />} />
              {/*  <Route path="*" element={<Posts />} /> */}
            </Routes>

            {/* <Registration /> */}

            {/* <Login /> */}

            {/*  <Post id={2} /> */}

            {/*  <Posts /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
