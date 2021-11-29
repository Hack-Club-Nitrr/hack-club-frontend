
import React from "react";
import "../assets/stylesheets/main.css";
import Image from "../assets/image/web-development.png"
const Main = () => {
    

    return (
        <div className = "main-page">
            <div className="title">
              <h1>Hack Club</h1>
              <h3>NITRR</h3>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <img className = "title-img" src = {Image} alt = "intro" width = "50%"/>
        </div>
    )
}

export default Main;
