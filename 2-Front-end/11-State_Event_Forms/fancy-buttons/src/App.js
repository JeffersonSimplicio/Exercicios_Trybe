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

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  clickedOne() {
    this.setState(((previousState) => ({
      clicksBtnOne: previousState.clicksBtnOne + 1,
    })), () => {
      console.log(`Botão 1 ${this.buttonColor(this.state.clicksBtnOne)}`);
    });
    // console.log(`Botão 1, cor: ${this.buttonColor(this.state.clicksBtnOne)}`);
  };
  
  clickedTwo() {
    this.setState((previousState) => ({
      clicksBtnTwo: previousState.clicksBtnTwo + 1,
    }));
    console.log(`Botão 2, cor: ${this.buttonColor(this.state.clicksBtnOne)}`);
  };
  
  clickedThree() {
    this.setState((previousState) => ({
      clicksBtnThree: previousState.clicksBtnThree + 1,
    }));
    console.log(`Botão 3, cor: ${this.buttonColor(this.state.clicksBtnOne)}`);
  };

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
