import React, { useState } from 'react'
import './App.css'
function calculator() {
    const [calculate,setCalculate] = useState('')
    const [sign,setSign] = useState('')
    const handleButtonClick = (e) => {
        setCalculate((calculate) => {
          if(e === '=') {
            return eval(calculate);
          }else if(e === 'AC'){
            return setCalculate('');
          } else {
            return calculate + sign + e ;
          }
        });
    }
  return (
    <>
        <h1>Calculator</h1>
      <div className='calci'>
        <div className="row4">
      <input type="text" value={calculate} readOnly />
      <button id='color' onClick={() => handleButtonClick("+")}>+</button>
      <button id='color' onClick={() => handleButtonClick("-")}>-</button>
      <button id='color' onClick={() => handleButtonClick("*")}>*</button>
      <button id='color' onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div className="row3">
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button onClick={() => handleButtonClick(".")}>.</button>
      <button id='red' onClick={() => handleButtonClick("AC")}>AC</button>
      </div>
      <div className="equal">
      <button onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
    </>
  )
}

export default calculator