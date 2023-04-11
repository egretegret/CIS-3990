import React, { useState } from 'react';

import './styles/Home.css'
import { Poem } from './components/Poem';
import { allPoems } from './data';
import { getPoem } from './utility';
import { useNavigate, useParams } from 'react-router-dom';

export default function HomePoem() {
    const navigate = useNavigate();
    const { poemId } = useParams();
    const { title, author, poem } = getPoem(poemId);

    const recommendedPoems = allPoems.filter(e => e.title != title);

    return (
        <div className='Home-poem'>
            <div className="Home-poem-nav">
                <img src="https://img.icons8.com/android/512/back.png" style={{ width: '32px', height: '32px', paddingRight: '10px' }} onClick={() => {
                    navigate(-1);
                }}></img>
                <h1>{title}</h1>
                <img src="https://img.icons8.com/material/96/user--v1.png" style={{ width: '42px', height: '42px' }}></img>
            </div>
            <div className="scroll-top"></div>
            <div className="divider"></div>
            <div className="divider-bottom"></div>
            <Poem title={title}
                author={author}
                poem={poem}
                closed={false} />
            <div className="tags">
                <h2>tags:</h2>
                <h2>more like this:</h2>
            </div>
            {recommendedPoems.map(p => <Poem title={p.title}
                author={p.author}
                poem={p.poem} />)}
        </div>

    );
}