import React, { Component } from "react";

import "../css/TicTacToe.css";
import Board from "./Board";

export default class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isXturn: true,
      history: [{ squares: Array(9).fill(null) }],
    };
  }
  
  handleMove(index) {
    const history = [...this.state.history];
    const curState = [...history[history.length - 1].squares];
    if (curState[index] != null) return;
    curState[index] = this.state.isXturn ? "X" : "O";
    this.setState({
      isXturn: !this.state.isXturn,
      history: [...history, { squares: curState }],
    });
  }
  moveToHistory(index) {}
  render() {
    const history = this.state.history;
    const curState = history[history.length - 1];
    return (
      <div className="TicTacToe">
        <div className="heading">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <Board
          squares={curState.squares}
          isXturn={this.state.isXturn}
          onClick={(i) => {
            this.handleMove(i);
          }}
        />
      </div>
    );
  }
}
