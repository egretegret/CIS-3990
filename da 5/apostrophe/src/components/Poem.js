import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from './Arrow';
import { Bookmark } from './Bookmark';
import useLongPress from '../utility';

export function Poem({ title, author, poem, closed = true, saved = false }) {
    const [isClosed, setIsClosed] = useState(closed);
    const [isSaved, setIsSaved] = useState(saved);
    const [dropdown, setDropdown] = useState(false);

    function toggleClose() {
        isClosed ? setIsClosed(false) : setIsClosed(true);
    }

    function toggleSave() {
        isSaved ? setIsSaved(false) : setIsSaved(true);
        dropdown ? setDropdown(false) : setDropdown(true);
    }

    function onLongPress() {
        console.log('longpress is triggered');
        setDropdown(true);
    };

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };

    const longPressEvent = useLongPress(onLongPress, toggleSave, defaultOptions);

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
                <div className="button" onClick={toggleSave}>
                    <Bookmark saved={isSaved} />
                </div>
            </div>
            <div className={`collections-dropdown ${dropdown ? "" : "hide"}`}>
                <h2>favs</h2>
                <h2>cute</h2>
                <h2>add new</h2>
            </div>
        </div>
    );
}