import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Display from './components/Display';



function App() {
  const [countStrike, setCountStrike] = useState(0);
  const [countBall, setCountBall] = useState(0);

  
    const incrementS = e => {
      if(countStrike===3){
        setCountBall(0);
        setCountStrike(0);
      }else{
        setCountStrike(countStrike + 1);
      }
    }
    const incrementB = e => {
      if(countBall === 4){
        setCountStrike(0);
        setCountBall(0);
      } else{
        setCountBall(countBall + 1);
      }
    }
    const incrementF = e =>{
      if(countStrike==0){
        setCountStrike(countStrike + 1);
      }else if(countStrike==1){
        setCountStrike(countStrike + 1);
      }else{
        setCountStrike(countStrike);
      }
        
     
      
    } ;
    const reset = e=>{
      e.preventDefault();
      setCountStrike(0);
      setCountBall(0);
    }


  return (
    <div className="App">
     <h1> Baseball Dashboard</h1>
     <Display  countStrike={countStrike} countBall={countBall}/>
     <button onClick={incrementS}>Strike</button>
     <button onClick={incrementB}>Ball</button>
     <button onClick={incrementF}>Foul</button>
     <button onClick={reset}>Hit</button>
    
    </div>
  );
}

export default App;
