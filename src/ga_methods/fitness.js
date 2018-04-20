class Fitness {
    constructor() {

    }
    inverse_clashes(population, board_size){
        for(var i = 0; i < population.length; i++){
            population[i].fitness = this.get_inversed_error(population[i].positions);
        }
    }
    parabolic_clashes(population, board_size) {
        for (var i = 0; i < population.length; i++) {
            population[i].fitness = this.get_parabolic_fitness(population[i].positions, board_size);
        }
    }
    linear_clashes(population, board_size) {
        for (var i = 0; i < population.length; i++) {
            population[i].fitness = this.get_linear_fitness(population[i].positions, board_size);
        }
    }
    
    get_error(genotype){
        var error = 0;
        for (var i = 0; i < genotype.length; i++) {
            for (var j = i + 1; j < genotype.length; j++) {
                if (Math.abs(getPos(genotype, i) - getPos(genotype, j)) == j - i) {
                    error++;
                }
            }
        }
        return error;
    }
    get_inversed_error(genotype){
        return 1.0 / Math.abs(1 + this.get_error(genotype));
    }
    get_parabolic_fitness(genotype, board_size){
        var pa_sum = this.get_pa_sum(board_size);
        return (this.get_error(genotype) - pa_sum)**2 / (pa_sum**2);

    }
    get_linear_fitness(genotype, board_size){
        return (-1.0 /(this.get_pa_sum(board_size))) * this.get_error(genotype) + 1;
    }
    get_pa_sum(board_size){
        return (board_size*(board_size-1))/2;
    }
    
}