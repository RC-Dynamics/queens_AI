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
        return [
            {
                fitness: 10,
                positions: [2, 4, 4, 6, 8, 6, 3, 2]
            },
            {
                fitness: 11,
                positions: [1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                fitness: 10.5,
                positions: [1, 1, 1, 1, 1, 1, 1, 1]
            },
            {
                fitness: 2,
                positions: [1, 7, 8, 2, 4, 5, 8, 6]
            },
            {
                fitness: 30,
                positions: [1, 3, 5, 7, 2, 4, 6, 8]
            },
            {
                fitness: 30,
                positions: [1, 3, 5, 7, 2, 4, 6, 8]
            }
        ]
    }

    parent_selection(population, board_size, parent_selection_method){
        switch (parent_selection_method) {
            case _two_of_five:
                return this.select_parents_method.two_best_of_five(population, board_size);
        }
    }

    crossover(population, parentsIndexes, board_size, crossover_method, crossover_rate){
        switch (crossover_method) {
            case _cut_crossfill:
                return this.crossover_method.cut_and_crossfill(population, parentsIndexes, board_size, crossover_rate);
        }
    }

    mutation(children, board_size, mutation_method, mutation_rate) {
        switch (mutation_method) {
            case _gene_swap:
                this.mutation_method.gene_swapping(children, board_size, mutation_rate);
                break;
        }
    }

    evaluate_fitness(children, board_size, fitness){
        switch(fitness){
            case _inverse_num_clashes:
                this.fitness_method.inverse_clashes(children, board_size);
                break;
        }
    }

    select_generation(population, children, board_size, selection) {
        switch (selection) {
            case _best_fitness:
                this.selection_method.best_fitness(population, children, board_size);
                break;
        }

    }

    evaluate_termination(population, board_size, termination){
        switch (termination) {
            case _find_solution:
                return this.termination_method.find_solution(population, board_size);
            case _10000_evaluation:
                return this.termination_method.fitness_evaluation(population, board_size, 10000);
        }
    }
    
}