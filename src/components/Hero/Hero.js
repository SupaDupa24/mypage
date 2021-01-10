import React from 'react';
import { Slideshow } from './Slideshow';
import './Hero.css';

export const Hero = () => {
    return  (
        <div className='jumboTron'>
        <h1>Index Garage</h1>
        <Slideshow />
        <p>Your one stop shop for web services and beyond...</p>

    </div>
    )
    
}