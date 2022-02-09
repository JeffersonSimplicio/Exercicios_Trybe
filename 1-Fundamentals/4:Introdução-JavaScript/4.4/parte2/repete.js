function maisRepetido(array) {
  let maisComum = null;
  let maisRepeticoes = null;

  for (let i = 0; i < array.length; i += 1) {
    let repeticoes = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] == array[j]) {
        repeticoes += 1;
      };
    };
    if (repeticoes > maisRepeticoes) {
      maisComum = array[i];
      maisRepeticoes = repeticoes
    };
  };
  return maisComum;
};

let num = [2, 3, 2, 5, 8, 2, 3];
console.log(maisRepetido(num));
