import React from "react";
import MailList from "../components/MailList";

export default function Sent({ allItems }) {
  return (
    <div className="page">
      <h2>Sent</h2>
      <MailList items={allItems.SENT || []} />
    </div>
  );
}
