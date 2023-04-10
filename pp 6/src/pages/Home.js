import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

export default function Home() {
    return (
        <div className='home'>
            <Nav page="egret" />
            <div className='content'>
                <div className='home-links'>
                    <Link to={`about`}>about</Link>
                    <Link to={`/programming`}>programming</Link>
                    <Link to={`/design`}>design</Link>
                    <Link to={`/film`}>film</Link>
                </div>
            </div>
        </div>
    );
}