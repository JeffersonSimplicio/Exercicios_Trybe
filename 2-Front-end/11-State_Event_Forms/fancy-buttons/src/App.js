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
    this.setState = ((previousState) => ({
      clicksBtnOne: previousState.clickedOne + 1,
    }));
  };
  
  clickedTwo() {
    this.setState = ((previousState) => ({
      clicksBtnTwo: previousState.clickedTwo + 1,
    }));
  };
  
  clickedThree() {
    this.setState = ((previousState) => ({
      clicksBtnThree: previousState.clickedThree + 1,
    }));
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
