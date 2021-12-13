import './ProblemOne.css';
import React, {useState} from 'react';

const ProblemOne = () => {
  var [inputText, setInputText] = useState('')
  var [mode, setMode] = useState('isPrime')
  var [result, setResult] = useState('false')

  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  const isFibo = num => {
    const isPerfectSquare = x => {
      let s = parseInt(Math.sqrt(x));
      return (s * s === x);
    }

    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

  const onChangeInputNum = (e) => {
    var value = e.target.value
    if (value === "") {
      setInputText("")
      return
    } 
    var num = Number(value)
    var newValue
    if (num < 0) {
      newValue = 1
    }else {
      newValue = Math.round(num)
    }

    setInputText(newValue)
    handleResult(newValue, mode)
  }

  const handleChangeMode = (value) => {
    var newMode = value.target.value
    setMode(newMode)
    handleResult(inputText,newMode)
  }

  const handleResult = (inputText, mode) => {
    console.log(`handle result with value:${inputText} and mode:${mode}`)
    switch (mode) {
      case 'isPrime':
        isPrime(inputText)? setResult('true'): setResult('false')
        break
      case 'isFibonacci':
        isFibo(inputText)? setResult('true'): setResult('false')
        break
      default:
        break
      }
  }


  return (
    <div className='container'>
        <div className='item1'>
          <input type='number' value={inputText} onChange={onChangeInputNum} />
        </div>
        <div className='item2'>
          <select valie={mode} onChange={handleChangeMode}>
            <option value='isPrime'>isPrime</option>
            <option value='isFibonacci'>isFibonacci</option>
          </select>
        </div>
        <div className='item3'>{result}</div>
    </div>
  );
}

export default ProblemOne;
