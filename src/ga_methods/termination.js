class Termination {
    constructor() {
        this.count = 0;
        this.iteration = 0;
    }
    find_solution(population_temp, calc_fitness, board_size){
        this.count += calc_fitness;
        this.iteration++;
        population_temp.sort(biggest_fitness);
        if(population_temp[0].fitness == 1){
            swal({
                title: "Good job!",
                text: "Solution calculated " + this.count + " fitness and had " + this.iteration + " iterarions!",
                icon: "success",
                button: "Ok!",
            });
            return true;
        }
        else{
            return false;
        }
    }
    fitness_evaluation(calc_fitness, board_size, max_evaluation){
        this.count += calc_fitness;
        this.iteration++;
        if(this.count >= max_evaluation){
            swal({
                title: "Time is over!",
                text: "Best solution fitness: " + population[0].fitness.toFixed(2) + " and " + this.iteration + " iterarions!",
                icon: "warning",
                button: "Ok!",
            });
            return true;
        }
        else
            return false;        
    }
    get_fitness_count(){
        return this.count;
    }
    get_iteration_count() {
        return this.iteration;
    }

    clear_iterarion_and_count(){
        this.count = 0;
        this.iteration = 0;
    }
}