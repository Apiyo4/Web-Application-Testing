import React from 'react';
import Display from './Display';

export default function Dashboard(props){
    return(
        <div>
            <Display {...props} round={props.round} countStrike={props.countStrike} countBall={props.countBall}/>
            <button className='orange' onClick={props.incrementS}>Strike</button>
            <button className='blue' onClick={props.incrementB}>Ball</button>
            <button className='red' onClick={props.incrementF}>Foul</button>
            <button className='green' onClick={props.reset}>Hit</button>
        </div>

    )
}