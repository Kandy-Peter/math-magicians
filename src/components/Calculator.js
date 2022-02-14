import React from 'react';

export default class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",".", "=", "AC", "%", "+/-"],
      operators: ["÷", "*", "-", "+"],
      displayChars: "0",
    };
  }
  render() {
    const arrBtn = [...this.state.numbers, ...this.state.operators];
    return (
      <div className = "container-fluid">
        <div></div><div className="col-xs-12">
            <div className = "calculatorDisplay">
              <h1>{this.state.displayChars}</h1>
            </div>
        </div>
        <div className = "row"></div>
        <div className = "row">
          <div className = "buttonContainer">
              {arrBtn.map((btn) => (<button type="button" key={btn}id={btn}>
                {btn}
              </button>))}
          </div>
        </div>
      </div>
    );
  }
}