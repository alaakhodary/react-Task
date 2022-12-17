import React, { Component } from "react";
import Header from "../../Components/Header";
import Container from "../../Components/Container";
import Button from "../../Components/Buttons";
import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <section className="section-1">
        <Container>
          <Header myPage="home" />;
          <h1 className="heading">Welcome To Golden View Dine</h1>
          <p className="paragrph">
            Explore the authentic vegan dishes with your friends and family
          </p>
          <div className="div-btn">
            <Button title="Read more" />
          </div>
        </Container>
      </section>
    );
  }
}
