import React from "react";
import { Link } from "@reach/router";
import logo from "../Images/news_icon.png";

export default function Header(props) {
  return (
    <>
      <header id="main_header">
        <Link id="icon_link" to="/">
          <img onClick={props.setTopic} src={logo} alt="news_icon" />
        </Link>
        <h1 className="page_title">NC News</h1>
      </header>
    </>
  );
}
