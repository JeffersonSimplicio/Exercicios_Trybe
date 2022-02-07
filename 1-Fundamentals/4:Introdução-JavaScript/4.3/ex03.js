let array = ['java', 'javascript', 'python', 'html', 'css'];

//Maior palavra
let maiorPalavra = null;
let maiorTamanho = null;

for (let i = 0; i < array.length; i+=1) {
  if (i == 0) { // caso seja o primeiro loop do for
    maiorPalavra = array[i];
    maiorTamanho = array[i].length;
  } else if (array[i].length > maiorTamanho) {
    maiorTamanho = array[i].length;
    maiorPalavra = array[i];
  }
}

console.log('A maior palavra é \"'+maiorPalavra+'\", com '+maiorTamanho+' caracteres.'); // \' ou \" coloca aspas dentro de uma string

//Menor palavra
let menorPalavra = null;
let menorTamanho = null;

for (let i = 0; i < array.length; i+=1) {
  if (i == 0) { // caso seja o primeiro loop do for
    menorPalavra = array[i];
    menorTamanho = array[i].length;
  } else if (array[i].length < menorTamanho) {
    menorTamanho = array[i].length;
    menorPalavra = array[i];
  }
}

console.log('A menor palavra é \"'+menorPalavra+'\", com '+menorTamanho+' caracteres.'); // \' ou \" coloca aspas dentro de uma string
