import React, { Component } from "react";

import "../css/Square.css";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }
  render() {
    const valDiv = (
      <div
        className={`${
          this.state.value != null
            ? this.state.value === "X"
              ? "cross"
              : "not"
            : ""
        }`}
      ></div>
    );
    return <button className="square">{valDiv}</button>;
  }
}
