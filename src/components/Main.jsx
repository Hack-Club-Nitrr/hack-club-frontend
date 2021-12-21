import React from "react";
import "../assets/stylesheets/main.css";
import "css-doodle";
const Main = () => {
  return (
    <div className="main-page" id="main">
      <div className="doodle_wrap">
        <css-doodle>
          {`
  :doodle {
    @grid: 10 / 100%; 
  }

  background: @pick(
    #F0C929, #F48B29,#AC0D0D, #fff
  );

  transform: translate(
    @rand(-50vw, 50vw),
    @rand(-50vh, 50vh)
  );

  @size: 0.5vmin;
  @shape: circle;
  @place-cell: 50% 50%;

  animation-name: explosion;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-duration: calc(@rand(4s, 10s, .1));
  animation-delay: calc(@rand(-5s, -1s, .1));
  animation-timing-function: 
    cubic-bezier(.84, .02, 1, 1);

  @keyframes explosion {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { transform: translate(0, 0); }
  }`}
        </css-doodle>
      </div>
      <div className="title">
        <h1 className="hack">Hack Club</h1>
        <h5 className="nitrr">NITRR</h5>
        <br />
        <p className="about-main">
          This is a community of young makers spanning across a broad spectrum. 
            We create. We learn from creations. We help one another and have fun while at it. 
            So hop aboard and become a part of the community!{" "}
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
