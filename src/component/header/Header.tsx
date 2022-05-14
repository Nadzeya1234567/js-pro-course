import React from "react";
import Timer from "../timer/Timer";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import useTranslate from "../hooks/useTranslate";
import { Link, NavLink } from "react-router-dom";
import Username from "./username/Username";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";

import { useSelector } from "../hooks/useSelector";

import "./Header.scss";
import { useActions } from "../hooks/useActions";

const LINKS = [
  { url: "/registration", text: "Registration" },
  { url: "/posts", text: "Posts" },
];

const Header: React.FC = () => {
  const { lang, setLang } = useTranslate();
  const logged = useSelector((state) => state.auth.logged);
  const { logout } = useActions();

  const handleLogout = () => {
    logout();
  };

  //const count = useSelector((state: any) => state.clicker.value);

  //const toggleLanguage = () => {
  //  setLang((prevValue: string) => (prevValue === "en" ? "ru" : "en"));
  //};

  return (
    <nav className="header-container">
      <div className="logo">
        {/* <LogoIcon /> */}
        {/* {count} */}
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

      <div className="controls">
        {logged ? (
          <>
            <Username />
            <LogoutIcon
              className="icon-button logout-button"
              onClick={handleLogout}
            />
          </>
        ) : (
          <Link to="/login">
            <LoginIcon
              className="icon-button logout-button"
              onClick={handleLogout}
            />
          </Link>
        )}

        <Timer />
        {lang === "en" ? (
          <button onClick={() => setLang("ru")}>ru</button>
        ) : (
          <button onClick={() => setLang("en")}>en</button>
        )}
      </div>
    </nav>
  );
};

export default Header;
