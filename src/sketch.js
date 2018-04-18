var chess_board;
var population_list;
var ga_settings;
var ga;
var isRunning = true;
var config = {
  board_size: 8
}

var population;
var parentsIndexes;
var children;

function setup() {
  createCanvas(canvas_width + offset, canvas_heigth + offset);
  noFill();
  noStroke();
  chess_board = new ChessBoard(offset / 2, canvas_width, canvas_heigth, config.board_size);
  population_list = new PopulationList(canvas_width, canvas_heigth, offset);
  ga_settings = new GASettings(canvas_width, canvas_heigth, offset);
  ga = new GA();

  // Change board size
  $('#board_size button').click(function () {
    config.board_size = parseInt($(this).text());
  });

  // Play button pressed
  $('#play_button').click(function() {
    config.ga_settings = ga_settings.get_config();
    population_list.disable_changes();
    ga_settings.disable_changes();
    isRunning = true;
  });
  
  // Restart button pressed
  // It will recalculate a new population
  $('#restart_button').click(function() {
    // TODO
    // Initialize a new population
    population = ga.radom_initialization(config.board_size, config.ga_settings.population_size);
    ga.evaluate_fitness(population, config.board_size, config.ga_settings.fitness);
  });

  config.ga_settings = ga_settings.get_config();
  
  // TODO
  // Initialize population
  population = ga.radom_initialization(config.board_size, config.ga_settings.population_size);
  ga.evaluate_fitness(population, config.board_size, config.ga_settings.fitness);

  population_list.insert_population(population, isRunning);
  isRunning = false;
}

function draw() {
  background(127, 0, 0, 255);
  chess_board.draw(config.board_size);
  chess_board.insert_queens(population_list.get_selected());

  if (isRunning){
    children = [];
    // TODO
    // Parent Selection
    parentsIndexes = ga.parent_selection(population, config.board_size, config.ga_settings.parent_selection);
    // Crossover
    children = ga.crossover(population, parentsIndexes, config.board_size, config.ga_settings.number_of_children, config.ga_settings.crossover_method, config.ga_settings.crossover_rate);
    // Mutation
    ga.mutation(children, config.board_size, config.ga_settings.mutation_method, config.ga_settings.mutation_rate);
    // Evaluate Fitness
    ga.evaluate_fitness(children, config.board_size, config.ga_settings.fitness);
    // Selection
    ga.select_generation(population, children, config.board_size, config.ga_settings.selection);
    // Evaluate termination method
    if (ga.evaluate_termination(population, config.board_size, config.ga_settings.termination_method)){
      population_list.enable_changes();
      ga_settings.enable_changes();
      isRunning = false;
    }
  }

}