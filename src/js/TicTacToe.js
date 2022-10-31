import React, { Component } from "react";

import "../css/TicTacToe.css";
import Board from "./Board";

export default class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isXturn: true,
      history: [Array(9).fill(null)],
    };
  }
  handleMove(index) {}
  moveToHistory(index) {}
  render() {
    return (
      <div className="TicTacToe">
        <h1>Tic-Tac-Toe</h1>
        <Board
          squares={this.state.history[this.state.history.length - 1]}
          isXturn={this.state.isXturn}
          onClickToMove={this.handleMove}
          onClickToReturn={this.moveToHistory}
        />
      </div>
    );
  }
}
