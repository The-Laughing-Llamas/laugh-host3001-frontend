import React from 'react'
import llamaLogo from '../assets/llamalogo.png'
import { useNavigate, NavLink } from 'react-router-dom'


const Header = ({currentUser, signout}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    signout()
    navigate("/")
  }

  return (
    <>
      <header role="navigation" aria-label="navigation">
        <img className='llamaLogo' src={llamaLogo} alt="llama logo"/>
        <NavLink to="/">Home</NavLink>
        
        {currentUser && (
          <>
          <NavLink to="/recipeindex">My Recipes</NavLink>
          <NavLink to="/piglatin">PigLatin</NavLink>
          <NavLink to="/jokes">Jokes</NavLink>
          <NavLink to="/" onClick={handleClick}>Log Out</NavLink>
          </>
        )}
        {!currentUser && (
          <>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </header>
    </>
  )
}

export default Header