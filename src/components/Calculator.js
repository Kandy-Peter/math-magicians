import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
      operators: ['÷', '*', '-', '+', '='],
      displayChars: '0',
    };
  }

  render() {
    const { numbers, operators, displayChars } = this.state;
    return (
      <div className="container-fluid">
        <div className="result">
          <h1>{displayChars}</h1>
        </div>
        <div className="btnContainer">
          <div className="clm-1">
            {numbers.map((btn) => (<button type="button" id={btn} key={btn}>{btn}</button>))}
          </div>
          <div className="clm-2">
            {operators.map((btn2) => (<button type="button" key={btn2} id={btn2}>{btn2}</button>))}
          </div>
        </div>
      </div>
    );
  }
}
