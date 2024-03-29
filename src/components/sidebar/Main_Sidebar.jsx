import React from "react";
import "./sidebar.css";
import { Sidebar } from "./Sidebar";

export const MainSidebar = () => {
  return (
    <div className="main">
      <Sidebar/>
      <div className="container-sidebar">
        <h1 className="title">My React App</h1>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn-sidebar">Explore now</button>
      </div>
    </div>
  );
};
