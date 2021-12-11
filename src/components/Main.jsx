import React from "react";
import "../assets/stylesheets/main.css";
import Image from "../assets/image/web-development.png";

const Main = () => {
  return (
    <div className="main-page" id = "main">
      <div className="title">
        <h1 className="hack">Hack Club</h1>
        <h5 className="nitrr">NITRR</h5>
        <br />
        <p className="about-main">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  ut aliquip ex ea commodo consequat. Duis aute irure dolor ia qui officia deserunt mollit anim id est laborum.{" "}
        </p>
      </div>
      <img className="title-img" src={Image} alt="intro" width="50%" />
    </div>
  );
};

export default Main;
