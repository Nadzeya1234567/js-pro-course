import React from "react";
import Timer from "../timer/Timer";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import useTranslate from "../hooks/useTranslate";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss";

const LINKS = [
  { url: "/login", text: "Login" },
  { url: "/registration", text: "Registration" },
  { url: "/posts", text: "Posts" },
];

const Header: React.FC = () => {
  const { lang, setLang } = useTranslate();

  const count = useSelector((state: any) => state.clicker.value);

  //const toggleLanguage = () => {
  //  setLang((prevValue: string) => (prevValue === "en" ? "ru" : "en"));
  //};

  return (
    <nav className="header-container">
      <div className="logo">
        {/* <LogoIcon /> */}
        {count}
        <div className="app-name">Blog Online</div>
      </div>

      <ul className="links">
        {LINKS.map(({ url, text }) => (
          <li key={url + text}>
            <NavLink
              to={url}
              className={({ isActive }) => (isActive ? "_active" : "")}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      <div>
        {lang === "en" ? (
          <button onClick={() => setLang("ru")}>ru</button>
        ) : (
          <button onClick={() => setLang("en")}>en</button>
        )}

        <Timer />
      </div>
    </nav>
  );
};

export default Header;
