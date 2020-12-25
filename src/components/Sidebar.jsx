import React from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SidebarLabels from "./SidebarLabels";

export default function Sidebar({ allItems, handleDrop }) {
  return (
    <div className="sidebar">
      <NavLink to="/inbox">
        <SidebarItem handleDrop={handleDrop} type="INBOX">
          <span role="img" aria-label="inbox">
            📥
          </span>{" "}
          INBOX ({allItems["INBOX"].length})
        </SidebarItem>
      </NavLink>

      <SidebarLabels>
        <NavLink to="/inbox/forensics">
          <SidebarItem handleDrop={handleDrop} type={"FORENSICS"}>
            FORENSICS ({allItems["FORENSICS"].length})
          </SidebarItem>
        </NavLink>
        <NavLink to="/inbox/homicide">
          <SidebarItem handleDrop={handleDrop} type="HOMICIDE">
            HOMICIDE ({allItems["HOMICIDE"].length})
          </SidebarItem>
        </NavLink>
        <NavLink to="/inbox/case-files">
          <SidebarItem handleDrop={handleDrop} type="CASE_FILES">
            CASE FILES ({allItems["CASE_FILES"].length})
          </SidebarItem>
        </NavLink>
      </SidebarLabels>

      <NavLink to="/starred">
        <SidebarItem handleDrop={handleDrop} type="STARRED">
          <span role="img" aria-label="inbox">
            ⭐️
          </span>{" "}
          STARRED ({allItems["STARRED"].length})
        </SidebarItem>
      </NavLink>

      <NavLink to="/sent">
        <SidebarItem handleDrop={handleDrop} type="SENT">
          <span role="img" aria-label="inbox">
            ✉️
          </span>{" "}
          SENT ({allItems["SENT"].length})
        </SidebarItem>
      </NavLink>

      <NavLink to="/drafts">
        <SidebarItem handleDrop={handleDrop} type="DRAFTS">
          <span role="img" aria-label="inbox">
            📨
          </span>{" "}
          DRAFTS ({allItems["DRAFTS"].length})
        </SidebarItem>
      </NavLink>
    </div>
  );
}
