const canvas_width = 600;
const canvas_heigth = 600;
const board_size = 8;
const GRAY = 170;
const BLACK = 0;
const WHITE = 255;
const offset = 20;

var chess_board;
var population_list;
var gs_settings;
var isRunning = true;

const list = [
  {
    fitness: 10,
    positions: [2, 4, 4, 6, 8, 6, 3, 2]
  },
  {
    fitness: 11,
    positions: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    fitness: 10.5,
    positions: [1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    fitness: 2,
    positions: [1, 7, 8, 2, 4, 5, 8, 6]
  },
  {
    fitness: 30,
    positions: [1, 3, 5, 7, 2, 4, 6, 8]
  },
  {
    fitness: 30,
    positions: [1, 3, 5, 7, 2, 4, 6, 8]
  }
]

function setup() {
  createCanvas(canvas_width + offset, canvas_heigth + offset);
  noFill();
  noStroke();
  chess_board = new ChessBoard(offset / 2, canvas_width, canvas_heigth, board_size);
  population_list = new PopulationList(canvas_width, canvas_heigth, offset);
  ga_settings = new GASettings(canvas_width, canvas_heigth, offset);
}

function draw() {
  background(127, 0, 0, 255);
  chess_board.draw(board_size);
  population_list.insert_population(list, isRunning);
  chess_board.insert_queens(population_list.get_selected());

  isRunning = false;
}