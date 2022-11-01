import React, { Component } from "react";

import "../css/Square.css";

export default class Square extends Component {
  render() {
    const valDiv = (
      <div
        className={`${
          this.props.value != null
            ? this.props.value === "X"
              ? "cross"
              : "not"
            : ""
        }`}
      ></div>
    );
    return (
      <button
        className="square"
        onClick={(ind) => {
          this.props.onClick(this.props.index);
        }}
      >
        {valDiv}
      </button>
    );
  }
}
