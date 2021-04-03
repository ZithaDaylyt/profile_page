import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
    }
    return (
        <div className='nav-container'>
            <div className="name-logo center"><h3>S J</h3></div>
            <div className={clicked ? 'items active' :'items'}>
                <Link className='lnk' to='/'><div className="item">Home</div></Link>
                <Link className='lnk' to='/about'><div className="item">About</div></Link>
                <Link className='lnk' to='/projects'><div className="item">Projects</div></Link>
                <Link className='lnk' to='/contact'><div className="item">Contact</div></Link>
            </div>
            <div className='social-items'>
                <div className='link center'><i className="fab fa-instagram"></i></div>
                <div className='link center'><i className="fab fa-facebook-f"></i></div>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </div>
    )
};

export default Header;
