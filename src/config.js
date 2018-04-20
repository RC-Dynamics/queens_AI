// Canvas Configuration
const canvas_width = 600;
const canvas_heigth = 600;
const GRAY = 170;
const BLACK = 0;
const WHITE = 255;
const offset = 20;

// Settings labels
const _two_of_five = '2 best of 5 random';
const _cut_crossfill = 'Cut-and-crossfill';
const _gene_swap = 'Gene Swapping';
const _inverse_num_clashes = 'Inverse of number of clashes';
const _best_fitness = 'Best Fitness';
const _find_solution = 'Find the Solution';
const _10000_evaluation = '10.000 Fitness evaluation';

function getPosVector(positions) {
    var pass = [];
    for(var i = 0; i < positions.length; i++){
        pass.push(1+getPos(positions, i));
    }
    return pass;
}

function getPos(genotype, pos) {
    return parseInt(genotype[pos], 2);
}

const biggest_fitness = (a, b) => b.fitness - a.fitness;

function initialize_population(){
    population = ga.radom_initialization(config.board_size, config.ga_settings.population_size);
    ga.evaluate_fitness(population, config.board_size, config.ga_settings.fitness);
    population.sort(biggest_fitness);
    population_list.insert_population(population, isRunning);
}