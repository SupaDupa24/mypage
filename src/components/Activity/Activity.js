import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Activity.css';

export const Activity = (props) => {
    return (
    <Tilt>
        <div className='activity container' id='activity container'>
            <h2>Latest projects</h2>
            <p>Project Name: {props.projectName}</p>
            <p>project date: {Date.props}</p>
            <p></p>

        </div>
    </Tilt>
    )
}