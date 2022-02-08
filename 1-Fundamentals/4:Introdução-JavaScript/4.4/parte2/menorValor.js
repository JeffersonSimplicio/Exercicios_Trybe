function menorValor(array) {
  let menor;
  let index;
  for (let c = 0; c < array.length; c += 1) {
    if (c == 0) {
      menor = array[c];
      index = c;
    } else if (array[c] < menor) {
      menor = array[c];
      index = c;
    };
  };
  return index;
};

let num = [2, 4, 6, 7, 10, 0, -3];

console.log(menorValor(num));