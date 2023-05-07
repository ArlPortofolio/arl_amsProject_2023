import React from "react";
import "./sidebar.css";
import items from "./sidebar.json";
import SidebarItem from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

{
  /* <div className="sidebar bg-success">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div> */
}
