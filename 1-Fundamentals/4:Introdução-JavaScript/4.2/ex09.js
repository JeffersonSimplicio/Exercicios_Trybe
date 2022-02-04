let list = [];
let divisao = [];

for (let i = 1; i <= 25; i+=1) {
  list.push(i)
}
console.log(list);

for (let i = 0; i < list.length; i+=1) {
  divisao.push(list[i] / 2)
}
console.log(divisao);