import React from 'react';

class App extends React.Component {

  clickedOne() {
    console.log('Clicou no 1!');
  };
  
  clickedTwo() {
    console.log('Clicou no 2!');
  };
  
  clickedThree() {
    console.log('Clicou! no 3!');
  };

  render() {
    return (
      <>
        <button onClick={ this.clickedOne }>Clique Aqui!</button>
        <button onClick={ this.clickedTwo }>Ou Aqui!</button>
        <button onClick={ this.clickedThree }>Talvez Aqui!</button>
      </>
    )
  }
}

export default App;
