import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.clickedOne = this.clickedOne.bind(this);
    this.clickedTwo = this.clickedTwo.bind(this);
    this.clickedThree = this.clickedThree.bind(this);

    this.state = {
      clicksBtnOne: 0,  
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }
  }

  clickedOne() {
    this.setState((previousState) => ({
      clicksBtnOne: previousState.clicksBtnOne + 1,
    }));
  };
  
  clickedTwo() {
    this.setState((previousState) => ({
      clicksBtnTwo: previousState.clicksBtnTwo + 1,
    }));
  };
  
  clickedThree() {
    this.setState((previousState) => ({
      clicksBtnThree: previousState.clicksBtnThree + 1,
    }));
  };

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <>
        <button
          style={{ backgroundColor: this.buttonColor(clicksBtnOne) }}
          onClick={ this.clickedOne }
        >
          Botão 1! | count = { clicksBtnOne }
        </button>
        <button
          style={{ backgroundColor: this.buttonColor(clicksBtnTwo) }}
          onClick={ this.clickedTwo }
        >
          Botão 2! | count = { clicksBtnTwo }
        </button>
        <button
          style={{ backgroundColor: this.buttonColor(clicksBtnThree) }}
          onClick={ this.clickedThree }
        >
          Botão 3! | count = { clicksBtnThree }
        </button>
      </>
    )
  }
}

export default App;
