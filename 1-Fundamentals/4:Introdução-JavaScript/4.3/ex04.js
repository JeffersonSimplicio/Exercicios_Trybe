let maiorPrimo = 0;
let primos = [];

for (let i = 2; i <= 50; i +=1 ) {
  let primo = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j == 0) {
      primo = false;
    }
  }
  if (primo) {
    primos.push(i);
    maiorPrimo = i
  }
}

console.log(primos);
console.log(maiorPrimo);
