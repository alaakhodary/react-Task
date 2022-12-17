import React, { Component } from "react";
import "./style.css";

export default class Card extends Component {
  render() {
    const { img, heading, desc } = this.props;
    return (
      <div className="alaa">
        <div className="div-card">
          <div className="margin-div">
            <div className="div--img">
              <img src={img} alt="" className="images-card" />
            </div>
            <h1 className="heading_1">{heading}</h1>
            <p className="para-1">{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
