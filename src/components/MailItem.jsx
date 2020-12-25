import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/index";

export default function MailItem({ item }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes[item.type], item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <li
      className="mail-item"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <span role="img" aria-label="mark star" style={{ marginRight: "8px" }}>
        ⭐️
      </span>
      <span>
        {item.isRead || typeof item.isRead === "undefined" ? (
          item.title
        ) : (
          <strong>{item.title}</strong>
        )}
      </span>
    </li>
  );
}
