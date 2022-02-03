const a = 2;
const b = 5;
const c = 7;
let maior = null;
 
if (a > b) {
  maior = a;
  if (c > maior){
    maior = c;
  }
}
else if (b > a) {
  maior = b;
  if (c > maior) {
    maior = c;
  }
}

console.log(maior)
