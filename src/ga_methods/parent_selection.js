class ParentSelection {
    constructor() {

    }

    two_best_of_five(population_temp, board_size, number_of_couples){
        var couples = [];
        var five_choosen = [];
        for(var i = 0; i < number_of_couples; i++){
            for (var j = 0; j < 5; j++) {
                var index = Math.floor(Math.random() * population_temp.length);
                five_choosen[j] = {
                    index,
                    genotype: population_temp[index]
                };
            }
            five_choosen.sort(function (a, b) {
                return b.genotype.fitness - a.genotype.fitness;
            });
            couples.push({
                first: five_choosen[0].index,
                second: five_choosen[1].index
            });
        }
        return couples;
    }

    find_parent_roulette(array, n){
        for (var i = 0; i < array.length; i++) {
            if(n < array[i]) return i;
        }
    }

    roulette_wheel_selection(population_temp, board_size, number_of_couples){
        var fitness_sum = 0;;
        var probability = [];
        var partial_sum = 0;
        var couples = [];

        // Sum over all fitness
        population_temp.forEach(element => {
            fitness_sum += element.fitness;
        });

        // Give a probability to every genome
        population_temp.forEach(element => {
            partial_sum += (element.fitness / fitness_sum);
            probability.push(partial_sum);
        });

        for (var i = 0; i < number_of_couples; i++) {
            couples.push({
                first: this.find_parent_roulette(probability, Math.random()),
                second: this.find_parent_roulette(probability, Math.random())
            });
        }

        return couples;
    }
}