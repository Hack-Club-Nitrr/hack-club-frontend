import React from "react";
import "../assets/stylesheets/topnav.css";



const Topnav = () => {
  var status = false;
  const openMenu = () => {
    document.querySelector("#menu_btn").classList.toggle("change");
    var ele = document.querySelector(".wrap_out").style;
    var wrapin = document.querySelector(".wrap_in").style;
    var content = document.querySelector(".wrap_content").style;
    var links = document.getElementsByClassName("navlink");
    if (status === false) {
      status = true;
      ele.width = "100%";
      setTimeout(function () {
        content.display = "block";
        wrapin.height = "300%";
        wrapin.width = "300%";
        wrapin.top = "-150%";
        wrapin.right = "-150%";
      }, 800);
      setTimeout(function () {
        for (var i = 0; i < 5; i++) {
          links[i].style.marginLeft = "0%";
        }
      }, 1300);
    } else {
      status = false;
      for (var i = 0; i < 5; i++) {
        links[i].style.marginLeft = "-100%";
      }

      wrapin.height = "0%";
      wrapin.width = "0%";
      wrapin.top = "0%";
      wrapin.right = "0%";
      setTimeout(function () {
        content.display = "none";
      }, 700);
      setTimeout(function () {
        ele.width = "0%";
      }, 500);
    }
  };
  const ss =(str)=>{
    const arr= str.map(function(i){
      let ist = Array.from(i)
      let grr = ist.map(function(j){
        return( 
          <div className="letter">{j}</div>
        )
      })
      return(
        <div className="navlink">{grr}</div>
      )
    })
    return(
      <div className="wrap_content"><div className="snv">{arr}</div></div>
    )
  }

  let arr = [ss(["Home","About","Contacts","Hakathons","News"])]
  return (
    <div style={{ overflowX: "hidden" }}>
      <button
        onClick={() => {
          openMenu();
        }}
        id="menu_btn"
        className="menu_button"
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <div className="wrap_out">
        <div className="wrap_in"></div>
        {arr}
        
      </div>
    </div>
  );
};

export default Topnav;
