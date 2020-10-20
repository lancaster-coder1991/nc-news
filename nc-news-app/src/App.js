import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticleList from "./Components/ArticleList";
import { Router } from "@reach/router";

class App extends React.Component {
  state = {};

  convertToCapitalised = (str) => {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div id="nav_container">
          <NavBar capitalise={this.convertToCapitalised} />
        </div>
        <Router>
          <ArticleList path={"/"} capitalise={this.convertToCapitalised} />
          <ArticleList
            path={"/topics/:topic"}
            capitalise={this.convertToCapitalised}
          />
        </Router>
      </div>
    );
  }
}

export default App;
