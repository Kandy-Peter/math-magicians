import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
      operators: ['÷', 'x', '-', '+', '='],
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const { next, total, operation } = calculate(this.state, e.target.name);
    this.checkState(next, total, operation);
  };

  checkState(next, total, operation) {
    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  }

  render() {
    const {
      numbers, operators, total, next,
    } = this.state;
    const newLocal = (
      <div className="result">
        {(next ? (<h1>{next}</h1>) : (<h1>{total}</h1>))}
      </div>
    );
    return (
      <div className="container-fluid">
        {newLocal}
        <div className="btnContainer">
          <div className="clm-1">
            {numbers.map((btn) => (<button onClick={this.handleClick} type="button" name={btn} key={btn}>{btn}</button>))}
          </div>
          <div className="clm-2">
            {operators.map((btn2) => (<button onClick={this.handleClick} type="button" key={btn2} name={btn2}>{btn2}</button>))}
          </div>
        </div>
      </div>
    );
  }
}
