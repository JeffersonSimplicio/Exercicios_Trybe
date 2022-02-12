function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function displayDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let listDays = document.querySelector('#days')
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement('li'); // Cria o elemento 'li' no JS, na variavel 'day'
    let date = dezDaysList[i]; // Variavel recebe o valor do número
    day.innerText = date; // Adiciona o conteúdo(data) ao valor do day
    day.className = 'day'; // Adiciona a classe 'day' aos dias
    listDays.appendChild(day); // Cria elemento 'li' criado no JS ao HTML
    // Add a classe aos feriado 
    if (date === 24 || date === 25 || date === 31) {
      day.classList.add('holiday');
    }
    // Add classe as sextas-feiras
    if (date === 4 || date === 11 || date === 18 || date === 25) {
      day.classList.add('friday');
    }
    // className substitui o conteúdo da classe caso exista, classList adiciona sem excluir
  }
}
displayDays();
