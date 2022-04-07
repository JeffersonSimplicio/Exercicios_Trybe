import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.clickedOne = this.clickedOne.bind(this);
    this.clickedTwo = this.clickedTwo.bind(this);
    this.clickedThree = this.clickedThree.bind(this);
  }

  clickedOne() {
    console.log('O this do 1 é:', this);
  };
  
  clickedTwo() {
    console.log('O this do 2 é:', this);
  };
  
  clickedThree() {
    console.log('O this do 3 é:', this);
  };

  render() {
    return (
      <>
        <button onClick={ this.clickedOne }>Botão 1!</button>
        <button onClick={ this.clickedTwo }>Botão 2!</button>
        <button onClick={ this.clickedThree }>Botão 3!</button>
      </>
    )
  }
}

export default App;
