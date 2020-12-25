import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Drafts from "./pages/Drafts";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Starred from "./pages/Starred";
import "./styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { mailItemsList } from "./constants/index";
export default function App() {
  const [allItems, setAllItems] = useState(mailItemsList);

  /**
   * @description Function to handle Drop of mail item
   * @param {Object} item  Item which is dragged from mailbox
   * @param {String} type destination mailbox type
   */
  const handleDrop = ({ item }, type) => {
    debugger;
    let temp = Object.assign({}, allItems);

    //Remove item from Original Mail Array
    temp[item.type] = temp[item.type].filter((data) => data.id !== item.id);
    console.log("new allItems before pushing", temp);

    //Push dragged item to designated mailType
    item.type = type;
    temp[type].push(item);
    console.log("new allItems after pushing", temp);
    setAllItems(temp);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <h1 className="header">
          <span role="img" aria-label="lapd">
            🚔
          </span>{" "}
          LAPD, Mail
        </h1>
        <div className="container">
          <Sidebar allItems={allItems} handleDrop={handleDrop} />
          <Switch>
            <Route exact path="/">
              <Redirect to="/inbox" />
            </Route>
            <Route
              path="/inbox"
              render={(props) => <Inbox allItems={allItems} {...props}></Inbox>}
            />
            <Route
              path="/starred"
              render={(props) => (
                <Starred allItems={allItems} {...props}></Starred>
              )}
            />
            <Route
              path="/sent"
              render={(props) => <Sent allItems={allItems} {...props}></Sent>}
            />
            <Route
              path="/drafts"
              render={(props) => (
                <Drafts allItems={allItems} {...props}></Drafts>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </DndProvider>
  );
}
