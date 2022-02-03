const nota = 50;

if (nota >= 1 && nota <=100) {
  if (nota >= 80) {
    console.log('Parabéns, você foi aprovada(o)!')
  } else if (nota >= 60 && nota < 80) {
    console.log('Você está na nossa lista de espera.')
  } else {
    console.log('Você foi reprovada(o).')
  }
} else {
  console.log('Nota invalida, a nota deve estar entre 1 e 100.')
}