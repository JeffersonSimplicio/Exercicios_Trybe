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

function newButton(name, ID) {
  let newButton = document.createElement('button'); // Criando elemento button no JS
  newButton.id = ID; // Adicionando a ID ao botão
  newButton.innerText = name; // Adiconando texto ao botão
  let conteinerButton = document.querySelector('.buttons-container'); // Identificando div pai do botão
  conteinerButton.appendChild(newButton); // Criando o elemento no HTML
}
newButton('Feriados', 'btn-holiday');

function highlightDay(newColor, action, reaction) {
  let defaultColor = 'rgb(238,238,238)'; // Cor padrão
  let contrastColor = newColor; // Cor de destaque
  let holidayButton = document.querySelector(action); // Quem receberar receberar a ação para o disparo dos eventos
  let specialDay =  document.querySelectorAll(reaction); // Quem sofrera a reção desencadeada. NodeList - array

  holidayButton.addEventListener('click', function() {
    for (let i = 0; i < specialDay.length; i += 1) {
      if (specialDay[i].style.backgroundColor === contrastColor) {
        specialDay[i].style.backgroundColor = defaultColor;
      } else {
        specialDay[i].style.backgroundColor = contrastColor;
      }
    }
  });
}
highlightDay('white', '#btn-holiday', '.holiday');

newButton('Sexta-feira', 'btn-friday');

function sextou(diaSexta) { // Recebe quais dias são sextas-feiras (números)
  let buttonSexta = document.querySelector('#btn-friday'); // Identificar botão
  let dias = document.querySelectorAll('.friday'); // Identificar dias com a classe "fridey"
  let texto = 'SEXTOU O/';

  buttonSexta.addEventListener('click', function() {
    for (let i = 0; i < diaSexta.length; i +=  1) {
      if (dias[i].innerText !== texto) {
        dias[i].innerText = texto;
      } else{
        dias[i].innerText = diaSexta[i];
      }
    }
  });
}
let sextas = [4, 11, 18, 25];
sextou(sextas);

function mouseIn() {
  let dia = document.querySelectorAll('.day');

  for (let i = 0; i < dia.length; i += 1) {
    dia[i].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    });
  }
}
function mouseOut() {
  let dia = document.querySelectorAll('.day');

  for (let i = 0; i < dia.length; i += 1) {
    dia[i].addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    });
  }
}
mouseIn();
mouseOut();