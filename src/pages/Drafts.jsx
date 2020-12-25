import React from "react";
import MailList from "../components/MailList";

export default function Drafts({ allItems }) {
  return (
    <div className="page">
      <h2>Drafts</h2>

      <MailList items={allItems.DRAFTS || []} />
    </div>
  );
}
