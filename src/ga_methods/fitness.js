class Fitness {
    constructor() {

    }
    inverse_clashes(population, board_size){
        for(var i = 0; i < population.length; i++){
            population[i].fitness = this.getFitness(population[i].positions);
        }
    }
    getFitness(genotype){
        var error = 0;
        for (var i = 0; i < genotype.length; i++) {
            for (var j = i + 1; j < genotype.length; j++) {
                if (Math.abs(getPos(genotype, i) - getPos(genotype, j)) == j - i) {
                    error++;
                }
            }
        }
        return 1 / Math.abs(1 + error);
    }
    
}