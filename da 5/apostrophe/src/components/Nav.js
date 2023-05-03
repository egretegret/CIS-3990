import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.css'

import { CollectionsIcon } from '../icons/collections-icon';
import { HomeIcon } from '../icons/home-icon';
import { SearchIcon } from '../icons/search-icon';
import { CreateIcon } from '../icons/create-icon';
import { ProfileIcon } from '../icons/profile-icon';

export default function Nav({ a }) {
    // should use consts here from data.js ik but i am lazy
    const [active, setActive] = useState(a);

    return (
        <div className="Nav">
            <Link to={`/`}>
            <HomeIcon active={active === "home"} setActive={setActive} />
            </Link>
            <Link to={`/search`}>
            <SearchIcon active={active === "search"} setActive={setActive}/>
            </Link>
            <Link to={`/create`}>
            <CreateIcon active={active === "create"} setActive={setActive}/>
            </Link>
            <Link to={`/collections`}>
            <CollectionsIcon active={active === "collections"} setActive={setActive}/>
            </Link>
            <Link to={`/profile/malevolent_pinecone`}>
            <ProfileIcon active={active === "profile"} setActive={setActive}/>
            </Link>
        </div>
    )
}