import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//utility function on
// let j = document.documentElement.scrollTop;
// document.onscroll = () => {
//   if(window.innerWidth<770)return null;
//   else{
//     let h = window.innerHeight;
//     if (document.documentElement.scrollTop > j + h/50){
//      //console.log("df");
//      let f= document.querySelector(".wrap_out")
//      f.style.top = "-145%"
//     } else if( document.documentElement.scrollTop < j - h/50){
//      //console.log("df");
//      let f= document.querySelector(".wrap_out")
//      f.style.top = "0%"
//     }

//     j = document.documentElement.scrollTop;
//   }

// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
