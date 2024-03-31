import {Link} from 'react-router-dom'
import '../css/nav.css'
import React from 'react'
import blackLogo from '../assets/img/nav/blogo.svg'

function Nav(){

    return(
        <>
            <header className='nav'>
                <nav className='nav-bar'>
                    <div className='nav-logo'>
                        <Link to="/"><img src={blackLogo} alt='logo' /></Link>
                    </div>
                    <div className='nav-links'>
                        <Link to="/" className='hover-underline'>Home</Link>
                        <Link to="/about" className='hover-underline'>About</Link>
                        <Link to="/skills" className='hover-underline'>Skills</Link>
                        <Link to="/works" className='hover-underline'>Works</Link>
                        <Link to="/contact" className='hover-underline'>Contact</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav