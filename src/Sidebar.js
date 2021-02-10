import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="siidebar__top">
        <img src="" alt="" />
        <Avatar />
        <h2>Luca Van Wyk</h2>
        <h4>lucaVanWyk@gmail.com</h4>
      </div>
    </div>
  );
}

export default Sidebar;
