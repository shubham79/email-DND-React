import React from "react";
import { Switch, Route } from "react-router-dom";

import InboxReal from "./InboxReal";

import Forensics from "./Forensics";
import Homicide from "./Homicide";
import CaseFiles from "./CaseFiles";

export default function Inbox({ allItems }) {
  return (
    <Switch>
      <Route
        path="/inbox"
        exact
        render={(props) => (
          <InboxReal allItems={allItems} {...props}></InboxReal>
        )}
      />
      <Route
        path="/inbox/forensics"
        render={(props) => (
          <Forensics allItems={allItems} {...props}></Forensics>
        )}
      />
      <Route
        path="/inbox/homicide"
        render={(props) => <Homicide allItems={allItems} {...props}></Homicide>}
      />
      <Route
        path="/inbox/case-files"
        render={(props) => (
          <CaseFiles allItems={allItems} {...props}></CaseFiles>
        )}
      />
    </Switch>
  );
}
