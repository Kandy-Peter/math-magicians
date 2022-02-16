import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const checkState = (next, total, operation) => {
    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  const handleClick = (e) => {
    const { next, total, operation } = calculate(state, e.target.name);
    checkState(next, total, operation);
  };

  const { total, next } = state;
  const newLocal = (
    <div className="result">
      {(next ? (<h1>{next}</h1>) : (<h1>{total}</h1>))}
    </div>
  );
  const numbers = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const operators = ['÷', 'x', '-', '+', '='];
  return (
    <div className="container-fluid">
      {newLocal}
      <div className="btnContainer">
        <div className="clm-1">
          {numbers.map((btn) => (<button onClick={handleClick} type="button" name={btn} key={btn}>{btn}</button>))}
        </div>
        <div className="clm-2">
          {operators.map((btn2) => (<button onClick={handleClick} type="button" key={btn2} name={btn2}>{btn2}</button>))}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
