
function randomShuffle(array) {
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

function createBinaryString(i, n_bits) {
  var gene = "";
  for (var j = n_bits - 1; j >= 0; j--) {
    gene += String((i >>> (n_bits - 1)) % 2);
    i <<= 1;
  }
  return gene;
}

function makingPopulation(population_size, n_bits) {
  var genomes = [];
  var population = [];

  for (var i = 0; i < 2**n_bits; i++) {
    genomes.push(createBinaryString(i, n_bits));
  }
  for (var i = 0; i < population_size; i++) {
    genomes = randomShuffle(genomes);
    population[i] = genomes.slice();
  }
  return population;
}

function getQueenPos(genome, pos){
  return parseInt(genome[pos], 2);
}

function getFitness(genome){
  fitness = 0;
  for(var i = 0; i < genome.length; i++){
    for (var j = i + 1; j < genome.length; j++){
      if (Math.abs(getQueenPos(genome, i) - getQueenPos(genome, j)) == j - i){
        fitness++; 
      }
    }
  }
  return fitness;
}

function main() {
  var population = [];
  var population_size = 10;
  var n_bits = 3;
  population = makingPopulation(population_size, n_bits);
  
  console.log(population);
  console.log(getQueenPos(population[0],0));
  console.log(getFitness(population[0], n_bits));
  

  
}

main();


