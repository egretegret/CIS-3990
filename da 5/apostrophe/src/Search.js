import React, { useState } from 'react';

import './styles/Search.css'
import Nav from './components/Nav';
import { Poem } from './components/Poem';
import { discoverPoems, friendsPoems } from './data';


export default function Search() {
    const [searchText, setSearchText] = useState("title, author, keywords, tags, etc");
    const [active, setActive] = useState("empty");

    return (
        <div className='Search'>
            <h1>search</h1>
            <div className="scroll-top"></div>
            <div className="searchbar">
                <input type="text" name="name" value={searchText} onClick={() => setSearchText("")} onChange={(e) => { setSearchText(e.target.value); setActive("typed") }} />
                <svg className="search-icon" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5143 22.5126H23.9334L23.3731 21.9723C25.3342 19.691 26.5149 16.7293 26.5149 13.5074C26.5149 6.32333 20.6915 0.5 13.5074 0.5C6.32333 0.5 0.5 6.32333 0.5 13.5074C0.5 20.6915 6.32333 26.5149 13.5074 26.5149C16.7293 26.5149 19.691 25.3342 21.9723 23.3731L22.5126 23.9334V25.5143L32.5183 35.5L35.5 32.5183L25.5143 22.5126ZM13.5074 22.5126C8.52458 22.5126 4.50229 18.4903 4.50229 13.5074C4.50229 8.52458 8.52458 4.50229 13.5074 4.50229C18.4903 4.50229 22.5126 8.52458 22.5126 13.5074C22.5126 18.4903 18.4903 22.5126 13.5074 22.5126Z" fill="#2F2F35" />
                </svg>
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