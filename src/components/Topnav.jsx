import React from "react";
import "../assets/stylesheets/topnav.css";
import icon from "../assets/image/icon-rounded.png";

const Topnav = () => {
  var status = false;
  const openMenu = () => {
    document.querySelector("#menu_btn").classList.toggle("change");
    var ele = document.querySelector(".wrap_out").style;
    var content = document.querySelector(".wrap_content").style;
    if (status === false) {
      document.querySelector("#navlogo").style.display = "none";
      status = true;
      ele.width = "100%";
      content.display = "block";
    } else {
      document.querySelector("#navlogo").style.display = "";

      ele.width = "0%";
      status = false;
    }
  };
  const ss = (str) => {
    const arr = str.map(function (i) {
      let ist = Array.from(i[0]);
      let grr = ist.map(function (j) {
        let key2 = Math.random() * 10000 + 1;
        return (
          <div
            className="letter"
            href="#"
            key={key2}
            onClick={() => {
              openMenu();
            }}
          >
            {j}
          </div>
        );
      });
      return (
        <div className="navlink" key={i[0]}>
          <a href={i[1]}>{grr}</a>
        </div>
      );
    });
    return (
      <div className="wrap_content">
        <img
          src={icon}
          alt="icon"
          style={{
            height: "10vh",
            float: "left",
            padding: "10px 30px",
            zIndex: "100",
            background: "#0f0e0fbb",
          }}
          id="navlogo"
        />
        <div className="snv">{arr}</div>
      </div>
    );
  };

  // data to be displayed on the nav bar
  // to put links or create onclick functions, to just modify some data inside frames instead of reloading full website????
  let navbar_data = [
    ss([
      ["Home", "#main"],
      ["About", "#About"],
      ["Team", "#team"],
      ["Contacts", "#Contact"],
    ]),
  ];
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

        {navbar_data}
      </div>
    </div>
  );
};

export default Topnav;
