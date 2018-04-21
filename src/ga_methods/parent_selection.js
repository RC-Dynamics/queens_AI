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
}