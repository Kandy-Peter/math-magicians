import React from 'react';
import Calculator from '../components/Calculator';
import Navigation from '../components/Navigation';

const Calculation = () => (
  <div>
    <Navigation />
    <div className="calc-clm">
      <h2>Let&apos;s do some Math!</h2>
      <Calculator />
    </div>
  </div>
);

export default Calculation;
