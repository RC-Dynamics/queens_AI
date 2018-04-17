  var father1 = "001000011101111101011010";
  var father2 = "000010111001011110101100";
  var father3 = "000000000000000000000000";
  var father4 = "111111111111111111111111";
  var father5 = "000001010011100101110111";

  function haveGene(genotype, gene)
{
	for (var i = 0; i < genotype.length; i+=3) {
		var tempGen = genotype[i]+genotype[i+1]+genotype[i+2];
		if(tempGen == gene)
		{
			return true;
		}
	}
	return false;;
}


function cut_and_crossfill(father1, father2)
{
	var len = father1.length;
	var bytesPerGene = 3;
	var numberOfGenes = len/bytesPerGene;
	var rIndex = Math.floor((Math.random() * numberOfGenes))*bytesPerGene; 
	
	var son1 = father1.substring(0, rIndex);
	var son2 = father2.substring(0, rIndex);
	for (var i = rIndex; i < len ; i+=bytesPerGene) 	  
	{
		var gene = father2.substring(i, i + bytesPerGene);
		if(!haveGene(son1, gene) && son1.length < len )
		{
			son1 += gene;
		} 
		if(!haveGene(son2, gene) && son2.length < len )
		{
			son2 += gene;
		} 
	}
	for (var i = 0; i < rIndex; i+=bytesPerGene) 
	{
		var gene = father2.substring(i, i + bytesPerGene);
		if(!haveGene(son1, gene) && son1.length < len )
		{
			son1 += gene;
		} 
		if(!haveGene(son2, gene) && son2.length < len )
		{
			son2 += gene;
		} 
	}

	return [son1, son2];
}