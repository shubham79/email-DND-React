import React from "react";
import MailList from "../components/MailList";

export default function Forensics({ allItems }) {
  return (
    <div className="page">
      <h2>Forensics</h2>

      <MailList items={allItems.FORENSICS || []} />
    </div>
  );
}
