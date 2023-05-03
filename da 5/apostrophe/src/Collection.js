import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './styles/Collection.css'
import Nav from './components/Nav';
import { Poem } from './components/Poem';
import { friendsPoems } from './data';

export default function Collection() {
    const navigate = useNavigate();
    const { collectionId } = useParams();

    return (
        <div className='Collection'>
            <div className="Collection-nav">
                <img src="https://img.icons8.com/android/512/back.png" style={{ width: '32px', height: '32px', paddingRight: '10px' }} onClick={() => {
                    navigate(-1);
                }}></img>
                <h1>{collectionId}</h1>
                <div  style={{ width: '42px', height: '42px' }}></div>
            </div>
            <div className="scroll-top"></div>
            <div className="divider"></div>
            <div className="divider-bottom"></div>
            {friendsPoems.map(p => <Poem title={p.title}
                author={p.author}
                poem={p.poem} 
                saved={true}/>)}
            <Nav a="collections" />
        </div>

    );
}