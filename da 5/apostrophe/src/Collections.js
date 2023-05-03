import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/Collections.css'
import Nav from './components/Nav';

export default function Collections() {
    const [active, setActive] = useState("empty");

    return (
        <div className='Collections'>
            <h1>collections</h1>
            <div className="collections-box">
                <div className="collection">
                    <div className="collection-box">
                    <Link className="collection-box-link" to={`./favs` }></Link>
                        <div className="collection-poem">
                        </div>
                        <div className="collection-poem">
                        </div>
                        <div className="collection-settings">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    favs
                </div>
                <div className="collection">
                    <div className="collection-box">
                    <Link className="collection-box-link" to={`./cute` }></Link>
                        <div className="collection-poem">
                        </div>
                        <div className="collection-settings">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    cute
                </div>
                <div className="collection">
                    <div className="collection-box">
                        <div className="collection-cross">
                        <div className="collection-cross-vert">
                        </div>
                        <div className="collection-cross-hort">
                        </div>
                        </div>
                    </div>
                    add new
                </div>
            </div>
            <Nav a="collections" />
        </div>

    );
}