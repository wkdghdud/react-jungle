import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
 
function Footer() {
    return (
        <div id='footerDiv'>
            <Link to="/" style={{ textDecoration: "none", color: "white"}}><h1> </h1></Link>
            <div id='footerMenuDiv'>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    )
}

export default Footer;