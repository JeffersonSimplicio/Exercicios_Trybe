function maiorNome(array) {
  let nomeMaior;
  let tamanho;
  for (let c = 0; c < array.length; c += 1) {
    if (c == 0) {
      nomeMaior = array[c];
      tamanho = array[c].length
    } else if(array[c].length > tamanho) {
      nomeMaior = array[c];
      tamanho = array[c].length
    };
  };
  return nomeMaior;
};

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(nomes));