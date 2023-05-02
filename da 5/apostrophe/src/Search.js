import React, { useState } from 'react';

import './styles/Search.css'
import Nav from './components/Nav';
import { Poem } from './components/Poem';
import { discoverPoems, friendsPoems } from './data';


export default function Search() {
    const [searchText, setSearchText] = useState("search");
    const [active, setActive] = useState("empty");

    return (
        <div className='Search'>
            <h1>A'</h1>
            <div className="scroll-top"></div>
            <div className="searchbar">
                <input type="text" name="name" value={searchText} onClick={() => setSearchText("")} onChange={(e) => {setSearchText(e.target.value); setActive("typed")}}/>
            </div>
            <div className="divider"></div>
            <div className="divider-bottom"></div>
            {active == "typed" ?
                <Poem title={discoverPoems[0].title}
                    author={discoverPoems[0].author}
                    poem={discoverPoems[0].poem} /> :
                ""}
            <Nav a="search" />
        </div>

    );
}