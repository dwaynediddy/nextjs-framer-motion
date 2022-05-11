import React from 'react'

const Header = () => {
  return (
    <nav className="header">
        <span className="header-logo">CLEAN JUICE</span>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
        </ul>

        <span className="header-account">My account</span>
        <span className="header-user"></span>
    </nav>
  )
}

export default Header