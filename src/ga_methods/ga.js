class GA {
    constructor (){
        this.select_parents_method = new ParentSelection();
        this.crossover_method = new Crossover();
        this.mutation_method = new Mutation();
        this.fitness_method = new Fitness();
        this.selection_method = new Selection();
        this.termination_method = new Termination();
    }

    radom_initialization(board_size, population_size){
        var genotypes = [];
        var population_temp = [];

        for (var i = 0; i < board_size; i++) {
            genotypes.push(this.createBinaryString(i, Math.log2(board_size)));
        }
        for (var i = 0; i < population_size; i++) {
            var genotype = new Object();
            genotypes = this.randomShuffle(genotypes);
            genotype.positions = genotypes.slice();
            population_temp[i] = genotype;
        }
        this.evaluate_termination(population_temp, population_temp.length, board_size, _10000_evaluation);
        return population_temp;
    }

    createBinaryString(i, n_bits) {
        var gene = "";
        for (var j = n_bits - 1; j >= 0; j--) {
            gene += String((i >>> (n_bits - 1)) % 2);
            i <<= 1;
        }
        return gene;
    }

    randomShuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    parent_selection(population_t, board_size, number_of_couples, parent_selection_method){
        switch (parent_selection_method) {
            case _two_of_five:
                return this.select_parents_method.two_best_of_five(population_t, board_size, number_of_couples);
            case _roulette_wheel_selection:
                return this.select_parents_method.roulette_wheel_selection(population_t, board_size, number_of_couples);
        }
    }

    crossover(population_t, parentsIndexes, board_size, crossover_method, crossover_rate){
        switch (crossover_method) {
            case _cut_crossfill:
                return this.crossover_method.cut_and_crossfill(population_t, parentsIndexes, board_size, crossover_rate);
        }
    }

    mutation(children, board_size, mutation_method, mutation_rate) {
        switch (mutation_method) {
            case _gene_swap:
                this.mutation_method.gene_swapping(children, board_size, mutation_rate);
                break;
        }
    }

    evaluate_fitness(population_t, board_size, fitness){
        switch(fitness){
            case _inverse_num_clashes:
                this.fitness_method.inverse_clashes(population_t, board_size);
                break;
            case _parabolic_fitness:
                this.fitness_method.parabolic_clashes(population_t, board_size);
                break;
            case _linear_fitness:
                this.fitness_method.linear_clashes(population_t, board_size);
                break;
        }
        population_t.sort(biggest_fitness);
        
    }

    select_generation(population_t, children, board_size, selection) {
        switch (selection) {
            case _best_fitness:
                return this.selection_method.best_fitness(population_t, children, board_size);
                break;
        }

    }

    evaluate_termination(population_t, num_calc_fit, board_size, termination){
        switch (termination) {
            case _find_solution:
                return this.termination_method.find_solution(population_t, board_size);
            case _10000_evaluation:
                return this.termination_method.fitness_evaluation(num_calc_fit, board_size, 10000);
        }
    }
    
}