import React from "react";
import "css-doodle";

const Loader = () => {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <css-doodle>
        {`:doodle { 
    @grid: 1x60 / 61.8vmin;
  }

  @place-cell: center;
  @size: calc(@index() * 1.7%);

  will-change: transform;
  border-radius: 50%;
  border: 1px solid transparent;
  border-left-color: hsl(
    calc(100 + 5 * @index()), 70%, 68%
  );

  animation: spin calc(@index() * .3s) 
    linear infinite;

  --f: @rand(360deg);
  --t: calc(var(--f) + @pick(1turn, -1turn));

  @keyframes spin {
    from { transform: rotate(var(--f)) }
    to { transform: rotate(var(--t)) }
  }`}
      </css-doodle>
    </div>
  );
};

export default Loader;
