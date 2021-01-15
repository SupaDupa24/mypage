import React from 'react';
import './Activity.css';

export const Activity = (props) => {
    return (
    
        <div className='activity container' id='activity container'>
            <h2>LATEST PROJECT</h2>
            <p>Project Name: {props.name}</p>
            <p>Project Date: {props.date}</p>
            <p></p>

        </div>
    )
}