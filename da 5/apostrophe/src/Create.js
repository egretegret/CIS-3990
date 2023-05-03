import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './styles/Create.css'
import Nav from './components/Nav';

export default function Create() {
    const [titText, setTitText] = useState("my first poem");
    const [entryText, setEntryText] = useState("silly \nlittle \npoem");
    const [active, setActive] = useState("empty");

    return (
        <div className='Create'>
            <h1>create</h1>
            <div className="entry">
                <div className="text-editor">
                    <div className="font-type">times new roman</div>
                    <b>B</b>
                    <i>I</i>
                    <u>U</u>
                    <div className="font-size">24px</div>
                    ...
                </div>
                <form>
                    <textarea className="title" onChange={(e) => { setTitText(e.target.value); setActive("typed") }}>{titText}</textarea>
                    <textarea className="entry" onClick={() => setEntryText("")} onChange={(e) => { setEntryText(e.target.value); setActive("typed") }}>{entryText}</textarea>
                </form>
                {active == "typed" ?
                    <Link to={`/profile/malevolent_pinecone`}><div className="post-button active">post</div></Link> :
                    <div className="post-button inactive">post</div>}
            </div>
            <Nav a="create" />
        </div>

    );
}