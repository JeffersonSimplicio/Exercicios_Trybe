const salarioBruto = 3000;
let salINSS = null;
let salReal = null;

console.log('Salario bruto, R$'+salarioBruto.toFixed(2))

// Calculo do INSS
if (salarioBruto <= 1556.94) {
  salINSS = salarioBruto * 0.92;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salINSS = salarioBruto * 0.91;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salINSS = salarioBruto * 0.89;
} else {
  salINSS = salarioBruto - 570.88;
}

console.log('Salario decontado o INSS, R$'+salINSS.toFixed(2));

// Calculo IR
if (salINSS <= 1903.98) {
  console.log('Isento de Imposto de Renda(IR).');
  console.log('Salario Líquido, R$'+salINSS.toFixed(2));
} else if (salINSS >= 1903.99 && salINSS <= 2826.65) {
  salReal = salINSS - ((salINSS * 0.075) - 142.8);
  console.log('Salario Líquido, R$'+salReal.toFixed(2));
} else if (salINSS >= 2826.66 && salINSS <= 3751.05) {
  salReal = salINSS - ((salINSS * 0.15) - 354.8);
  console.log('Salario Líquido, R$'+salReal.toFixed(2));
} else if (salINSS >= 3752.06 && salINSS <= 4664.68) {
  salReal = salINSS - ((salINSS * 0.225) - 636.13);
  console.log('Salario Líquido, R$'+salReal.toFixed(2));
} else {
  salReal = salINSS - ((salINSS * 0.275) - 869.36);
  console.log('Salario Líquido, R$'+salReal.toFixed(2));
}
