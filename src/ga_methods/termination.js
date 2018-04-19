class Termination {
    constructor() {
        this.count = 0;
    }
    find_solution(population_temp, board_size){
        population_temp.sort(function (a, b) {
            return a.fitness < b.fitness;
        });
        if(population_temp[0].fitness == 1){
            console.log("FOUND IT");
            return true;
        }
        else{
            return false;
        }
    }
    fitness_evaluation(calc_fitness, board_size, max_evaluation){
        this.count += calc_fitness;
        if(calc_fitness >= max_evaluation)
            return true;
        else
            return false;        
    }
    clearCount(){
        this.count = 0;
    }
}