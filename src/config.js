// Canvas Configuration
const canvas_width = 600;
const canvas_heigth = 600;
const GRAY = 170;
const BLACK = 0;
const WHITE = 255;
const offset = 20;

// Settings labels
const _two_of_five = '2 best of 5 random';
const _roulette_wheel_selection = 'Roulette wheel selection';
const _cut_crossfill = 'Cut-and-crossfill';
const _gene_swap = 'Gene Swapping';
const _inverse_num_clashes = 'Exponential fitness';
const _linear_fitness = 'Linear fitness';
const _parabolic_fitness = 'Parabolic fitness';
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
    $('#iteration-input').val(0);
    ga.termination_method.clear_iterarion_and_count();
    config.ga_settings = ga_settings.get_config();
    population = ga.random_initialization(config.board_size, config.ga_settings.population_size);
    ga.evaluate_fitness(population, config.board_size, config.ga_settings.fitness);
    population_list.insert_population(population, isRunning);
}

function finishingAlert(){
    swal({
        title: "We are Done!",
        text: "Shall we run again?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Let's Go!",
        cancelButtonText: "I'am not sure!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {
                swal("Account Removed!", "Your account is removed permanently!", "success");
            }
            else {
                swal("Hurray", "Account is not removed!", "error");
            }
        });
}