import React, { Component } from "react";
import "./style.css";
import Card from "../../Components/Card";
import imges from "../../images/orange-juice.png";
import imges1 from "../../images/chef2.png";
import imges2 from "../../images/restaurant1.png";

export default class Cards extends Component {
  render() {
    return (
      <section className="section-3">
        <h1 className="special">Special</h1>
        <p className="para">What Makes Us Special</p>
        <Card
          img={imges}
          heading="Fresh Food"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
        />
        <Card
          img={imges1}
          heading="Skilled Chef"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
        />
        <Card
          img={imges2}
          heading="Exotic Dishes"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
        />
      </section>
    );
  }
}
