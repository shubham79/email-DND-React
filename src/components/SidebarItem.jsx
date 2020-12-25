import React from "react";
import { useDrop } from "react-dnd";
import { accepatbleMailtypes } from "../constants/index";

export default function SidebarItem({ children, handleDrop, type }) {
  const [{ canDrop }, drop] = useDrop({
    accept: accepatbleMailtypes[type],
    drop: (item) => handleDrop(item, type),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      className="sidebar-item"
      ref={drop}
      style={canDrop ? { backgroundColor: "lightgreen" } : {}}
    >
      {children}
    </div>
  );
}
