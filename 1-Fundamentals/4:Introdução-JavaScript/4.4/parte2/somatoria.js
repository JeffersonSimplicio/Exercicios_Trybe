function soma(limite) {
  if (limite < 0 || limite == 0) {
    return 'Erro! Valor menor ou igual a 0.';
  };
  let sum = 0;
  for (let i = 1; i <= limite; i += 1) {
    sum += i
  };
  return sum;
};

console.log(soma(5));
