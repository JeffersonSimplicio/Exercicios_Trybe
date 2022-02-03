const vendaValor = 5;
const produtoValor = 2.6;

if (vendaValor >= 0 && produtoValor >= 0) {
  produtoFinal = produtoValor * 1.2;
  lucro = (vendaValor - produtoFinal) * 1000;
  if (lucro > 0) {
    console.log('O lucro sera de R$'+lucro.toFixed(2)) //.toFixed(n) limita o número de casas decimais e arredonda o valor
  } else {
    console.log('Tera prejuizo! De R$'+lucro.toFixed(2))
  }
} else {
  console.log('Erro!: Um dos valores inseridos foi inferior a 0')
}

