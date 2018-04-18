class Crossover {
    constructor() {

    }
    cut_and_crossfill(population, parentsIndexes, number_of_chldren, board_size, crossover_rate){
    }
    
    reproduce(father1, father2){
		var bytesPerGene = father1[0].length;
		var numberOfGenes = father1.length;
		var rIndex = Math.floor((Math.random() * numberOfGenes)); 
		console.log( rIndex)
		var son1 = father1.slice(0, rIndex);
		var son2 = father2.slice(0, rIndex);;
		for (var i = rIndex; i < numberOfGenes ; i++) 	  
		{
			var gene1 = father1[i];
			var gene2 = father2[i];
			if(!this.haveGene(son1, gene2) && son1.length < numberOfGenes )
			{
				son1[son1.length] = gene2;
			} 
			if(!this.haveGene(son2, gene1) && son2.length < numberOfGenes )
			{
				son2[son2.length] = gene1;
			} 

		}
		for (var i = 0; i < rIndex ; i++) 	  
		{
			var gene1 = father1[i];
			var gene2 = father2[i];
			if(!this.haveGene(son1, gene2) && son1.length < numberOfGenes )
			{
				son1[son1.length] = gene2;
			} 
			if(!this.haveGene(son2, gene1) && son2.length < numberOfGenes )
			{
				son2[son2.length] = gene1;
			} 

		}


		return [son1, son2];
    }

    haveGene(genotype, gene)
    {
    	for (var i = 0; i < genotype.length; i++) {
    		if(genotype[i] == gene)
    		{
    			return true;
    		}
    	}
    	return false;
    }
}
