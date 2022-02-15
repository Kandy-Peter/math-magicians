import React from 'react';

export default class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numbers: ["AC","+/-", "%", "7", "8", "9","4", "5", "6", "1", "2", "3", "0","."],
      operators: ["÷", "*", "-", "+", "="],
      displayChars: "0",
    };
  }
  render() {
    const arrBtn1 = this.state.numbers;
    const arrBtn2 = this.state.operators;
    return (
      <div className = "container-fluid">
        <div className = "result">
          <h1>{this.state.displayChars}</h1>
        </div>
        <div className = "btnContainer">
          <div className="clm-1">
            {arrBtn1.map((btn) => (<button id={btn}>{btn}</button>))}
          </div>
          <div className="clm-2">
            {arrBtn2.map((btn2) => (<button id={btn2}>{btn2}</button>))}
          </div>
        </div>
      </div>
    );
  }
}