import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  Home,
  LinkedIn,
  Search,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkedIn
          sx={{
            color: "blue",
            fontSize: 48,
            padding: 0,
            margin: 0,
          }}
        />
        <div className="header__search">
          <Search />
          <input className="header__search-input" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
      </div>
    </div>
  );
}

export default Header;
