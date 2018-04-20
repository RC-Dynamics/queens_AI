class Selection {
    constructor() {

    }

    best_fitness(population_temp, children, board_size){
        var population_limit = population_temp.length;
        var all_genotypes = population_temp.slice();
        for(var i = 0; i < children.length; i++){
            all_genotypes.push(children[i]);
        } 
        all_genotypes.sort(biggest_fitness);
        population_temp = all_genotypes.slice(0,population_limit);
    }
}