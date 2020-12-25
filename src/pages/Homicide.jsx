import React from "react";
import MailList from "../components/MailList";

export default function Homicide({ allItems }) {
  return (
    <div className="page">
      <h2>Homicide</h2>

      <MailList items={allItems.HOMICIDE} />
    </div>
  );
}
