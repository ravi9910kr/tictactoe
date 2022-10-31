import React, { Component } from "react";

import Board from "./Board";

export default class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXturn: true,
      history: [],
    };
  }
  handleMove(index) {}
  moveToHistory(index) {}
  render() {
    return (
      <div className="TicTacToe">
        <Board
          squares={this.state.squares}
          isXturn={this.state.isXturn}
          onClick={this.handleMove}
        />
      </div>
    );
  }
}
