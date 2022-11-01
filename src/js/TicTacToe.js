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
    this.list = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  handleMove(index) {
    const history = [...this.state.history];
    const curState = [...history[history.length - 1].squares];
    if (curState[index] != null || this.checkWinner(curState)) return;
    curState[index] = this.state.isXturn ? "X" : "O";
    this.setState({
      isXturn: !this.state.isXturn,
      history: [...history, { squares: curState }],
    });
  }
  moveToHistory(index) {}
  checkDraw(squares) {
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) return false;
    }
    return true;
  }
  checkWinner(squares) {
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = this.list[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
        return squares[b];
    }
    return null;
  }
  render() {
    const history = this.state.history;
    const curState = history[history.length - 1];
    const winner = this.checkWinner(curState.squares);
    const draw  = this.checkDraw(curState.squares);
    const status =
      winner == null ? draw === true ? "::GAME OVER:: <<DRAW>>" : "Tic-Tac-Toe" : `::GAME OVER:: WINNER: ${winner}`;
    return (
      <div className="TicTacToe">
        <div className="heading">
          <h1>{status}</h1>
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
