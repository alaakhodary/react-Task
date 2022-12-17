import React, { Component } from "react";
import "./style.css";
export default class Button extends Component {
  render() {
    const { title } = this.props;
    return <button className="btn">{title}</button>;
  }
}
