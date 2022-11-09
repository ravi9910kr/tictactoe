import React from "react";

export default function History({ len, onclick }) {
  const buttons = [];
  for (let i = 0; i < len; i++) {
    buttons.push(
      <button
        className="btn"
        key={i}
        onClick={(e) => {
          onclick(i);
        }}
      >
        go to step {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
