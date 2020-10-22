import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticleList from "./Components/ArticleList";
import ArticlePage from "./Components/ArticlePage";
import { Router } from "@reach/router";
import { convertToCapitalised } from "./utils/utils";

class App extends React.Component {
  state = {
    // user: "jessjelly",
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div id="nav_container">
          <NavBar capitalise={convertToCapitalised} />
        </div>
        <Router>
          <ArticleList
            path={"/"}
            topic={null}
            capitalise={convertToCapitalised}
            checkUniqueVote={this.checkUniqueVote}
          />
          <ArticleList
            path={"/topics/:topic"}
            capitalise={convertToCapitalised}
            checkUniqueVote={this.checkUniqueVote}
          />
          <ArticlePage path={"/articles/:topic/:article_id"} />
        </Router>
      </div>
    );
  }
}

export default App;
