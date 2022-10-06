import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { links } from '../data'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo' onClick={() => setToggle(false)}>
            <img src={logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${toggle ? 'show_nav' : 'hide_nav'}`}>
            {links.map(({name, path}, index)=> (

                <li key={index}>
                    <NavLink to={path} className={(({isActive})=> isActive ? 'active-nav' : '')}  onClick={() => setToggle(prev => !prev)}>{name}</NavLink>
                </li>
            ))}
        </ul>
        <button className='nav__toggle-btn' onClick={() => setToggle(prev => !prev)}>
            {
                toggle ? <MdOutlineClose /> : <GoThreeBars />
            }
        </button>
      </div>
    </nav>
  )
}

export default Navbar
