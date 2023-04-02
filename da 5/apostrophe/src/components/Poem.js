import React, { useState } from 'react';

import { Arrow } from './Arrow';
import { Bookmark } from './Bookmark';

export function Poem({title, author, poem}) {
    const [isClosed, setIsClosed] = useState(true);
    return (
        <div className={`Poem ${isClosed ? "closed" : ""}`}>
            <h3>{title}</h3>
            <h4>BY {author}</h4>
            <p>{poem}</p>
            <div className="action-bar">
                <Arrow action={setIsClosed}/>
                <Bookmark />
            </div>
        </div>
    );
}