const canvas_width = 600;
const canvas_heigth = 600;
const board_size = 8;
const BLACK = 0;
const WHITE = 255;

function setup() {
  createCanvas(canvas_width, canvas_heigth);
  noFill();
  noStroke();
}

function draw() {
  background(0);
  var chess_board = new ChessBoard(canvas_width, canvas_heigth, board_size);
  chess_board.draw(board_size);
}