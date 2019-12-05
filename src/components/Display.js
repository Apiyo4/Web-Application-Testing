import React from 'react';

export default function Display(props){
    console.log(props)
    return(
        <div>
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