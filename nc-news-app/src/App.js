import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ArticleList from "./Components/ArticleList";

class App extends React.Component {
  state = {
    selected: "All Articles",
  };

  setSelectedTopic = (e) => {
    const text = e.target.innerText ? e.target.innerText : "All Articles";
    this.setState({ selected: text }, () => {
      console.log("selected state:", this.state.selected);
    });
  };

  convertToCapitalised = (str) => {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
  };

  render() {
    return (
      <div className="App">
        <Header setTopic={this.setSelectedTopic} />
        <div id="nav_container">
          <NavBar
            setTopic={this.setSelectedTopic}
            capitalise={this.convertToCapitalised}
          />
        </div>
        <ArticleList
          selected={this.state.selected}
          capitalise={this.convertToCapitalised}
        />
      </div>
    );
  }
}

export default App;
