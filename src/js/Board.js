import React, { Component } from "react";

import "../css/Board.css";
import Square from "./Square";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squars: this.props.squares,
    };
  }

  renderSquare(ind) {
    return <Square key={ind} value={this.state.squars[ind]}></Square>;
  }

  render() {
    const squareArr = [];
    for (let index = 0; index < 9; index++) {
      squareArr.push(this.renderSquare(index));
    }
    return <div className="board">{squareArr}</div>;
  }
}
