import React, { Component } from "react";
import "./style.css";
import logo from "../../../src/images/Logo.png";
import search from "../../../src/images/searchs.png";
import Button from "../Buttons";
import "../Buttons/style.css";

export default class Header extends Component {
  render() {
    const { myPage } = this.props;
    return (
      <header className="nav">
        <img src={logo} alt="" />
        <ul>
          <li className={myPage === "home" ? "active" : ""}>
            <a href="/#">Home</a>
          </li>
          <li className={myPage === "about" ? "active" : ""}>
            <a href="/#">About Us</a>
          </li>
          <li className={myPage === "contact" ? "active" : ""}>
            <a href="/#">Special</a>
          </li>
          <li className={myPage === "contact" ? "active" : ""}>
            <a href="/#">Menu</a>
          </li>
          <li className={myPage === "contact" ? "active" : ""}>
            <a href="/#">Blogs</a>
          </li>
        </ul>
        <img src={search} alt="" className="search" />
        <Button title="Book Now" />
      </header>
    );
  }
}
