var father1 = ['001', '000', '011', '101', '111', '100' ,'110', '010'];
var father2 = ['000', '010', '111', '001', '011', '110' ,'101', '100'];
var father3 = ['110', '100', '001', '000', '101', '111', '011', '010'];
var father4 = ['000', '001', '010', '011', '100', '101' ,'110', '111'];


function haveGene(genotype, gene)
{
	for (var i = 0; i < genotype.length; i++) {
		if(genotype[i] == gene)
		{
			return true;
		}
	}
	return false;
}


function cut_and_crossfill(father1, father2)
{
	
	var bytesPerGene = father1[0].length;
	var numberOfGenes = father1.length;
	var rIndex = Math.floor((Math.random() * numberOfGenes)); 
	var son1 = father1.slice(0, rIndex);
	var son2 = father2.slice(0, rIndex);;
	for (var i = rIndex; i < numberOfGenes ; i++) 	  
	{
		var gene1 = father1[i];
		var gene2 = father2[i];
		if(!haveGene(son1, gene2) && son1.length < numberOfGenes )
		{
			son1[son1.length] = gene2;
		} 
		if(!haveGene(son2, gene1) && son2.length < numberOfGenes )
		{
			son2[son2.length] = gene1;
		} 

	}
	for (var i = 0; i < rIndex ; i++) 	  
	{
		var gene1 = father1[i];
		var gene2 = father2[i];
		if(!haveGene(son1, gene2) && son1.length < numberOfGenes )
		{
			son1[son1.length] = gene2;
		} 
		if(!haveGene(son2, gene1) && son2.length < numberOfGenes )
		{
			son2[son2.length] = gene1;
		} 

	}


	return [son1, son2];
}