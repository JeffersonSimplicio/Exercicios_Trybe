function maiorValor(array) {
  let maior;
  let index;
  for (let c = 0; c < array.length; c += 1) {
    if (c == 0) {
      maior = array[c];
      index = c;
    } else if (array[c] > maior) {
      maior = array[c];
      index = c;
    };
  };
  return index
};

let num = [2, 3, 6, 7, 10, 1];

console.log(maiorValor(num));