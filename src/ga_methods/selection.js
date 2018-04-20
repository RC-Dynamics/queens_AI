class Selection {
    constructor() {

    }

    best_fitness(population_temp, children, board_size){
        var population_limit = population_temp.length;
        population_temp = population_temp.concat(children);
        population_temp.sort(biggest_fitness);
        population_temp = population_temp.slice(0, population_limit);
        return population_temp;
    }
}