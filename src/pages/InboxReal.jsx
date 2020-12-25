import React from "react";
import MailList from "../components/MailList";

export default function InboxReal({ allItems }) {
  return (
    <div className="page">
      <h2>Inbox</h2>
      <MailList items={allItems.INBOX || []} />
    </div>
  );
}
