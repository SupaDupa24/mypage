import React from 'react';
import { Message } from '../../components/Message/Message';
import JumbotronPage from '../../components/JumbotronPage/JumbotronPage';



export const Home = () => {
    return (
        <div id='home'>
            <JumbotronPage />
            <Message />
            
        </div>
    )
}