import React from 'react';

export default function Display(props){
    // console.log(props)
    return(
        <div>
            <h2>Round : {props.round}</h2>
            <table>
                <tr>
                    <th>Strike </th>
                    <th></th>
                    <th>Ball</th>
                </tr>
                <tr>
                    <td>{props.countStrike}</td>
                    <td>-</td>
                    <td>{props.countBall}</td>
                </tr>
                </table>
        </div>
    )
}