import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <div id='headerDiv'>
            <h1><Link to='/'>HOME</Link></h1>
            <nav>
                <ul>
                    <li><h1><Link to='/'><p>로그인</p></Link></h1></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;