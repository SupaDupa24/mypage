import React from 'react';
import { Message } from '../../components/Message/Message';
import { Hero } from '../../components/Hero/Hero';



export const Home = () => {
    return (
        <div id='home'>
            <Hero />
            <Message />
            
        </div>
    )
}