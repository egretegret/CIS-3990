import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from './Arrow';
import { Bookmark } from './Bookmark';

export function Poem({ title, author, poem, closed = true }) {
    const [isClosed, setIsClosed] = useState(closed);
    const [isSaved, setIsSaved] = useState(false);

    function toggleClose() {
        isClosed ? setIsClosed(false) : setIsClosed(true);
    }

    function toggleSave() {
        isSaved ? setIsSaved(false) : setIsSaved(true);
    }

    return (
        <div className={`Poem ${isClosed ? "closed" : ""}`}>
            <Link to={`/poem/` + title}>
                <h3>{title}</h3>
                <h4>BY {author}</h4>
                <p>{poem}</p>
            </Link>
            <div className="action-bar">
                <div className="button" onClick={toggleClose} >
                    <Arrow open={!isClosed} />
                </div>
                <div className="button" onClick={toggleSave} >
                    <Bookmark saved={isSaved} />
                </div>
            </div>
        </div>
    );
}