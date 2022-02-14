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
              {this.state.numbers[6]}
              {this.state.numbers[3]}
              {this.state.numbers[0]}
              {this.state.sign[2]}
              {this.state.numbers[7]}
              {this.state.numbers[4]}
              {this.state.numbers[1]}
              {this.state.numbers[9]}
              {this.state.numbers[8]}
              {this.state.numbers[5]}
              {this.state.numbers[2]}
              {this.state.sign[0]}
              {this.state.operators}
              {this.state.sign[1]}
              {this.state.sign[4]}
              {this.state.sign[3]}  
          </div>
        </div>
      </div>
    );
  }
}