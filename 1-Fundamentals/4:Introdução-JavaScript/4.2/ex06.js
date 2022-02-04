let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = null;

for (let i = 0; i < numbers.length; i+=1) {
  if (numbers[i] % 2 != 0) {
    impar += 1;
  }
}

console.log(impar);
