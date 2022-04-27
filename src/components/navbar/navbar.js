import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.scss'
import CloseIcon from '@mui/icons-material/Close';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar ? 'nav active' : 'nav'}>
            <div className='nav_container'>
                <div className='nav_left'>
                    <div className='nav_logo'>
                        <Link to='/' className='links' style={{ color: "white" }}>
                            Blogger
                        </Link>
                    </div>
                </div>
                <div className='nav_right'>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <CloseIcon /> : <HorizontalSplitIcon />}
                    </div>
                    <div className='nav_right_item'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <NavLink to='/' className='nav_link' activeclassname='active' onClick={closeMobileMenu}>Bài Viết</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className='nav_link' activeclassname='active' onClick={closeMobileMenu}>Hỏi Đáp</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className='nav_link' activeclassname='active' onClick={closeMobileMenu}>Thảo Luận</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar