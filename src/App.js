import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Display from './components/Display';
import Dashboard from './components/Display';



function App() {
  const [countStrike, setCountStrike] = useState(0);
  const [countBall, setCountBall] = useState(0);
  
  return (
    <div className="App">
     <h1> Baseball Dashboard</h1>
     <Display  countStrike={countStrike} countBall={countBall}/>
     <Dashboard />

    </div>
  );
}

export default App;
