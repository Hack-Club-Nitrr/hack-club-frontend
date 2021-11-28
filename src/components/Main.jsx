import React from "react";
import "../assets/stylesheets/main.css";
import Image from "../assets/image/web-development.png";

const Main = () => {
  return (
    <div className="main-page">
      <div className="title">
        <h1 className="hack">Hack</h1>
        <h3 className="club">Club</h3>
        <h5 className="nitrr">NITRR</h5>
        <br />
        <p className="about-main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ipiscing elit, sed do eiusmod tempor{" "}
        </p>
      </div>
      <img className="title-img" src={Image} alt="intro" width="50%" />
    </div>
  );
};

export default Main;
