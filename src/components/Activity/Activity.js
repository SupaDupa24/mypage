import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Activity.css';

export const Activity = () => {
    return (
    <Tilt>
        <div className='activity container' id='activity container'>
            <h2>Latest projects</h2>
            <p>Project Name: {}</p>
            <p>Project Date: {}</p>
            <p></p>

        </div>
    </Tilt>
    )
}