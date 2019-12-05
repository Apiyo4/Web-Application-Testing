import {useEffect, useState} from 'react';

export function useIncreaseCount(setCountBall, setCountStrike){
    
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
    
   

      return [ incrementB, incrementF, incrementS, reset];
}


