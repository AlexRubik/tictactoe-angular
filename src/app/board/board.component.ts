import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares!: any[];
  xIsNext!: boolean;
  winner!: string | null;


  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {

    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {

    return this.xIsNext ? 'X' : 'O'; // return X if xIsNext is true else return O
  }

  makeMove(idx: number) {

    // if the square with index idx doesn't exist (is empty or null), replace it with the current player (X or O)
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    // Check if someone has won every time a move is made
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
