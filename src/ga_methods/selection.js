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
    
    children_over_parents(population_temp, children, board_size, parentsIndexes){
        var unique_indexes = [];
        parentsIndexes.forEach((element, index) => {
            if (element.crossover){
                population_temp[element.first] = children[index];
                population_temp[element.second] = children[children.length - index - 1];
            }
        });
        population_temp.sort(biggest_fitness);
        return population_temp;
    }
}