const a = 45;
const b = 45;
const c = 90;
const sum = a + b + c;

if (a > 0 && b > 0 && c > 0){
  if (sum == 180) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
else {
  console.log('Um dos angulos é invalido!\nErro!: Angulo menor ou igual a 0.')
}