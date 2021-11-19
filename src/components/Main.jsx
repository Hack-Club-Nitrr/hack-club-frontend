
import React from "react";
import "../assets/stylesheets/main.css";
import Image from "../assets/image/web-development.png"
const Main = () => {
    

    return (
        <div>
            <div className="title">
              <h1>Hack</h1>
              <h3>Club</h3>
            </div> 
            <img className ="title-img"src = {Image} alt = "intro" width = "50%"/>
        </div>
    )
}

export default Main;
