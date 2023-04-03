import React, { useState } from 'react';

import './styles/Home.css'
import { Poem } from './components/Poem';
import { discoverPoems, friendsPoems } from './data';


export function Home() {
    const [active, setActive] = useState("discover");

    return (
        <div className='Home'>
            <h1>A'</h1>
            <div className="scroll-top"></div>
            <div className="discover-friends">
                <h2 className={`${active == "discover" ? "active" : ""}`} onClick={(e) => setActive(e.target.innerText)}>discover</h2>
                <h2 className={`${active == "friends" ? "active" : ""}`} onClick={(e) => setActive(e.target.innerText)}>friends</h2>
            </div>
            <div className="divider"></div>
            <div className="divider-bottom"></div>
            {active == "discover" ?
                discoverPoems.map(p => <Poem title={p.title}
                    author={p.author}
                    poem={p.poem} />) :
                friendsPoems.map(p => <Poem title={p.title}
                    author={p.author}
                    poem={p.poem} />)}
        </div>

    );
}