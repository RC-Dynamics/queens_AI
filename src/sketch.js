const canvas_width = 600;
const canvas_heigth = 600;
const board_size = 8;
const GRAY = 170;
const BLACK = 0;
const WHITE = 255;
const offset = 20;

var chess_board;

function setup() {
  createCanvas(canvas_width + offset, canvas_heigth + offset);
  noFill();
  noStroke();
  chess_board = new ChessBoard(offset / 2, canvas_width, canvas_heigth, board_size);
  population_list = new PopulationList(canvas_width, canvas_heigth, offset);
}

function draw() {
  background(127, 0, 0, 255);
  chess_board.draw(board_size);
  chess_board.insert_queens([2, 4, 4, 6, 8, 6, 3, 2]);
}