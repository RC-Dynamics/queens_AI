class Fitness {
    constructor() {

    }
    inverse_clashes(population, board_size){
        for(var i = 0; i < population.length; i++){
            population[i].fitness = this.getFitness(population[i].positions);
        }
    }
    getFitness(genome){
        var error = 0;
        for (var i = 0; i < genome.length; i++) {
            for (var j = i + 1; j < genome.length; j++) {
                if (Math.abs(getPos(genome, i) - getPos(genome, j)) == j - i) {
                    error++;
                }
            }
        }
        return 1 / Math.abs(1 + error);
    }
    
}