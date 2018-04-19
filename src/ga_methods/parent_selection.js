class ParentSelection {
    constructor() {

    }

    two_best_of_five(population, board_size){
        var parents = [];
        var five_choosen = [];
        for (var j = 0; j < 5; j++) {
            var index = Math.floor(Math.random() * population.length);
            five_choosen[j] = {
                index,
                genome: population[index]
            };
        }
        five_choosen.sort(function (a, b) {
            return a.genome.fitness < b.genome.fitness;
        });
        parents.push({
            first: five_choosen[0].index,
            second: five_choosen[1].index
        });
        // console.log(five_choosen);
        // population.sort(function (a, b) {
        //     return a.fitness < b.fitness;
        // });
        // console.log(population[0]);
        return parents;
    }
}