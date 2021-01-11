import React from 'react';
import { SlideShow } from '../SlideShow/SlideShow';
import './Hero.css';

export const Hero = () => {
    return  (
        <div className='jumboTron'>
        <h1>Index Garage</h1>
        <SlideShow />
        <p>Your one stop shop for web services and beyond...</p>

    </div>
    )
    
}