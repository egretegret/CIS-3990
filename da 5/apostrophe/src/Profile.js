import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './styles/Profile.css'
import Nav from './components/Nav';
import { Poem } from './components/Poem';
import { allPoems, personalPoem } from './data';

export default function Profile() {
    const navigate = useNavigate();
    const { profileId } = useParams();

    const [following, setFollowing] = useState(false);

    const authoredPoems = allPoems.concat(personalPoem).filter(e => e.author === profileId);

    return (
        <div className='Profile'>
            {profileId === "malevolent_pinecone" ?
                <div className="Profile-header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42px" height="42px">    <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 8.8105469 14.392578 C 5.9935469 15.016578 3 16.385 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 16.385 18.006453 15.016578 15.189453 14.392578 C 14.459453 15.363578 13.308 16 12 16 C 10.692 16 9.5405469 15.363578 8.8105469 14.392578 z" fill="#2F2F35" /></svg>
                    <h2>{profileId}</h2>
                </div> :
                <div className="Profile-nav">
                    <img src="https://img.icons8.com/android/512/back.png" style={{ width: '32px', height: '32px', paddingRight: `${following ? "40px" : "20px"}` }} onClick={() => {
                        navigate(-1);
                    }}></img>
                    <div className="Profile-header">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42px" height="42px">    <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 8.8105469 14.392578 C 5.9935469 15.016578 3 16.385 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 16.385 18.006453 15.016578 15.189453 14.392578 C 14.459453 15.363578 13.308 16 12 16 C 10.692 16 9.5405469 15.363578 8.8105469 14.392578 z" fill="#2F2F35" /></svg>
                        <h2>{profileId}</h2>
                    </div>
                    <div onClick={() => setFollowing(following ? false : true)} className={`follow-button ${following ? "following" : ""}`} >{following ? "following" : "follow"}</div>
                </div>}
            <div className="scroll-top"></div>
            <div className="divider"></div>
            <div className="divider-bottom"></div>
            <div className="poems">
                {authoredPoems.map(p => <Poem title={p.title}
                    author={p.author}
                    poem={p.poem} />)}
            </div>
            <Nav a="profile" />
        </div>

    );
}