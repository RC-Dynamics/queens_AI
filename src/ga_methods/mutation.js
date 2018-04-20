class Mutation {
    constructor() {

    }

    gene_swapping(children_temp, board_size, mutation_rate){
        for(var i = 0; i < children_temp.length; i++){
            if(Math.random() < mutation_rate){
                var randomIndex1 = Math.floor(Math.random() * board_size);
                var randomIndex2 = Math.floor(Math.random() * board_size);
                var childSwap = children_temp[i].positions[randomIndex1];
                children_temp[i].positions[randomIndex1] = children_temp[i].positions[randomIndex2];
                children_temp[i].positions[randomIndex2] = childSwap;
            }
        }
    }
}