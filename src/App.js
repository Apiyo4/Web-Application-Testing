import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import {Route, Link} from 'react-router-dom';



function App() {
  const [countStrike, setCountStrike] = useState(0);
  const [countBall, setCountBall] = useState(0);
  const [round, setRound] = useState(0);

  const incrementS = e => {
    if(countStrike===2){
      setCountBall(0);
      setCountStrike(0);
      setRound(round + 1);
    }else{
      setCountStrike(countStrike + 1);
    }
  }
  const incrementB = e => {
    if(countBall === 3){
      setCountStrike(0);
      setCountBall(0);
      setRound(round + 1);
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
    setRound(round + 1);
  }
 
  
  return (
    <div className="App">
      <div className='links'>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/dashboard'><h3>Dashboard</h3></Link>
      </div>
     <h1> Baseball Scores</h1>
    <Route exact path = '/' render ={(props)=>{
      return <Display {...props} countStrike={countStrike} countBall={countBall} round={round}/>
    }} />

    <Route path='/dashboard' render= {(props)=>{
      return  <Dashboard {...props} round={round} countStrike={countStrike} countBall={countBall} incrementS={incrementS} incrementB={incrementB} incrementF={incrementF} reset={reset}/>
    }} />
     
    

    </div>
  );
}

export default App;
