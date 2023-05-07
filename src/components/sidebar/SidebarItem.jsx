import React, { useState } from "react";
import items from "./sidebar.jsom";

const SidebarItem = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div className="sidebar-title">
        <span>
          <i class="bi bi-gear-fill"></i>
          General
        </span>
        <i class="bi bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
      </div>

      <div className="sidebar-content">Hello</div>
    </div>
  );
};

export default SidebarItem;

// const [open, setOpen] = useState(false);

// if (item.childrens) {
//   return (
//     <div className={open ? "sidebar-item open" : "sidebar-item"}>
//       <div className="sidebar-title">
//         <span>
//           {item.icon && <i className={item.icon}></i>}
//           {item.title}
//         </span>
//         <i
//           className="bi-chevron-down toggle-btn"
//           onClick={() => setOpen(!open)}
//         ></i>
//       </div>
//       <div className="sidebar-content">
//         {item.childrens.map((child, index) => (
//           <SidebarItem key={index} item={child} />
//         ))}
//       </div>
//     </div>
//   );
// } else {
//   return (
//     <a href={item.path || "#"} className="sidebar-item plain">
//       {item.icon && <i className={item.icon}></i>}
//       {item.title}
//     </a>
//   );
// }
