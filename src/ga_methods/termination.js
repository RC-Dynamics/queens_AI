class Termination {
    constructor() {
        this.count = 0;
    }
    find_solution(population_temp, board_size){
        population_temp.sort(biggest_fitness);
        if(population_temp[0].fitness == 1){
            swal({
                title: "Good job!",
                text: "You have a solution!",
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
        if(this.count >= max_evaluation){
            swal({
                title: "Finished!",
                text: "Times is over!",
                icon: "warning",
                button: "Ok!",
            });
            return true;
        }
        else
            return false;        
    }
    clear_fitness_count(){
        this.count = 0;
    }
}