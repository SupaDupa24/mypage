import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Activity.css';

export const Activity = (props) => {
    return (
    
        <div className='activity container' id='activity container'>
            <Tilt><h2>Latest projects</h2></Tilt>
            <p>Project Name: {props.name}</p>
            <p>Project Date: {props.date}</p>
            <p></p>

        </div>
    )
}