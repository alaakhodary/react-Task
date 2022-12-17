import React, { Component } from "react";
import Button from "../../Components/Buttons";
import Container from "../../Components/Container";
import "./style.css";
import img from "../../images/img.png";
export default class AboutUs extends Component {
  render() {
    return (
      <section className="section-2">
        <Container>
          <div className="div-contaent-all">
            <div className="div-contaent">
              <h1 className="head-1">About Us</h1>
              <h2 className="head-2">
                Discover the taste of worldclass vegan dishes from the kitchen
                of Go Green Dine
              </h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
                orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
                purus nunc tellus pellentesque nibh mattis. Malesuada integer
                consectetur. Imperdiet aliquam quam mauris semper suscipit.
                Molestie maecenas interdum pharetra id velit sed nec.tetur sit
                sagittis pretium eget vitae semper pellentesque pellentesque.
              </p>
              <div className="btn-2">
                <Button title="Read more" />
              </div>
            </div>
            <div className="div-contaent-1">
              <img src={img} alt="" />
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
