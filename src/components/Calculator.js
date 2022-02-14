import React from 'react';

export default class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      operators: ["÷", "*", "-", "+"],
      sign: [".", "=", "AC", "%", "+/-"],
      displayChars: "0",
    };
  }
  render() {
    const btns = this.state;
    return (
      <div className = "container-fluid">
        <div></div><div className="col-xs-12">
            <div className = "calculatorDisplay">
              <h1>{this.state.displayChars}</h1>
            </div>
        </div>
        <div className = "row"></div>
        <div className = "row"> <div></div>
          <div className = "buttonContainer">
              {btns.numbers[6]}
              {btns.numbers[3]}
              {btns.numbers[0]}
              {btns.sign[2]}
              {btns.numbers[7]}
              {btns.numbers[4]}
              {btns.numbers[1]}
              {btns.numbers[9]}
              {btns.numbers[8]}
              {btns.numbers[5]}
              {btns.numbers[2]}
              {btns.sign[0]}
              {btns.operators}
              {btns.sign[1]}
              {btns.sign[4]}
              {btns.sign[3]}  
          </div>
        </div>
      </div>
    );
  }
}