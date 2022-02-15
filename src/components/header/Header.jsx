import React, { useRef } from 'react';
import './header.scss';
import logo from '../../assets/tmovie.png';
import { Link, useLocation} from 'react-router-dom';

const headerNav =[
    {
        display: 'Home',
        path:'/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Header = () => {
    const { pathName} = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(element => element.path === pathName);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">tMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default  Header;