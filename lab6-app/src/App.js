import './App.css';
import React, { useState, useRef } from 'react';
import Result from './Result';

function App() {
  const userIn = useRef();
  const [res, setRes] = useState([]);
  // check the properties of input numbers, return the number of 
  //  prime numbers, composite numbers and neither
  // Retrieved from my lab5 code, with necessary modification.
  function inputStats(e) {
    e.preventDefault();
    let input = userIn.current.value;
    if (input==="") return;
    let inputArr = input.split(",");
    let cPrime = 0;
    let cComp = 0;
    let cNeither = 0;

    
    // forEach
    inputArr.forEach(function (element) {
      element = parseInt(element, 10);
      switch (isPrime(element)) {
        case true:
          cPrime++;
          break;
        case false:
          cComp++;
          break;
        case "neither":
          cNeither++;
          break;
        default:
          console.log("error occured");
          break;
      }
    });

    // return result in an array
    setRes([inputArr, cPrime, cComp, cNeither]);
    // clear input field
    userIn.current.value = null;

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CSCI 3172 Lab6</h1>
        <img src={ require('./cat_type.jpg') } className="App-logo" alt="logo" />
        <p>
          This is my first React App.
        </p>

        <main className="container mx-auto">

          <div id="container" className="mx-auto">
            <form action="" method="get" id="form-1" className="form-control container mx-auto row">
              <input type="text" ref={userIn} placeholder="enter numbers separated with commas" />
              <button type="submit" onClick={inputStats} id="calc-btn" className="btn">Calculate</button>
            </form>

            <Result results={ res } />

          </div>
        </main>

        <a
          className="App-link"
          href="https://git.cs.dal.ca/yuxuanw/l6_wang_yuxuan.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git repo
        </a>
        <a
          className="App-link"
          href="https://lab6-yuxuan.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku url
        </a>

      </header>
    </div>
  );
}

// check if a number is prime
function isPrime(num) {
  if (num < 2) { return "neither"; }
  let sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export default App;
