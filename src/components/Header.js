import React from 'react'
import llamaLogo from '../assets/llamalogo.png'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Login from '../pages/SignIn'
import Signup from '../pages/SignUp'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header role="navigation" aria-label="navigation">
        <img className='llamaLogo' src={llamaLogo} alt="llama logo"/>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </header>
    </>
  )
}

export default Header