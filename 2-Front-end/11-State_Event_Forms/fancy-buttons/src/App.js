import React from 'react';

function clickedOne() {
  console.log('Clicou no 1!')
}

function clickedTwo() {
  console.log('Clicou no 2!')
}

function clickedThree() {
  console.log('Clicou! no 3!')
}

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={ clickedOne }>Clique Aqui!</button>
        <button onClick={ clickedTwo }>Ou Aqui!</button>
        <button onClick={ clickedThree }>Talvez Aqui!</button>
      </>
    )
  }
}

export default App;
