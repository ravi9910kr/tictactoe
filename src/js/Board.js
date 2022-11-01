import React, { Component } from "react";

import "../css/Board.css";
import Square from "./Square";

export default class Board extends Component {
  renderSquare(ind) {
    return (
      <Square
        key={ind}
        index={ind}
        value={this.props.squares[ind]}
        onClick={(ind) => {
          this.props.onClick(ind);
        }}
      ></Square>
    );
  }

  render() {
    const squareArr = [];
    for (let index = 0; index < 9; index++) {
      squareArr.push(this.renderSquare(index));
    }
    return <div className="board">{squareArr}</div>;
  }
}
