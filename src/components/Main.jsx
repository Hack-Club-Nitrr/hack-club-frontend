import React from "react";
import "../assets/stylesheets/main.css";
import 'css-doodle';
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
      <div className="doodle-container">
      <css-doodle grid="200x1">{`
      	:doodle {
          @size: 55vmin;
          overflow: hidden;
        }
        @size: 100%;
        @place-cell: center;
        
        ::before{
          content: "";
          @size: @r(5%);
          border: 1px solid orange;
          background: @p(none, orange, linear-gradient(to @p(bottom, left), @stripe(black, white 1px, black, white 1px, black, white 1px, black, white 1px, black, white 1px, black)));
          border-radius: @p(0, 50%);
          position: absolute;
          top: @r(100%);
          left: @r(100%);
          animation: floatingUpDown @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
        }
        
        ::after {
          content: "";
          height: @r(0.5%);
          width: @r(1.5%, 7%);
          background: white;
          position: absolute;
          top: @r(100%);
          left: @r(100%);
          animation: floatingStickAnim @r(1.5s, 5s) @r(1.5s) linear infinite alternate; 
          transform: translateX(300%);
          transition: background 0.2s;
        }
        
        :doodle(:hover)::after{
          background: limegreen;
        }
        
        @keyframes floatingUpDown {
          100% {
            transform: translateY(-50%) rotateZ(@r(-5deg, 5deg));
          }
        }
        
        @keyframes floatingStickAnim {
          100% {
            transform: translateX(-300%);
          }
        }
    `}</css-doodle>
    </div>
    </div>
  );
};

export default Main;
