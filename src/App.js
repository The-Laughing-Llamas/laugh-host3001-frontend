import React, { useState } from 'react'
import './App.css';
import {  Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import RecipeIndex from './pages/RecipeIndex'
import RecipeShow from './pages/RecipeShow'
import RecipeNew from './pages/RecipeNew'
import RecipeEdit from './pages/RecipeEdit'
import NotFound from './pages/NotFound'
import mockRecipes from './mockRecipes'
import mockUsers from './mockUsers';

const App = () => {
  const [recipes, setRecipes] = useState(mockRecipes)
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <>
      <Header currentUser = {currentUser}/>
      <div className="Body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/recipeindex" element={<RecipeIndex recipes={recipes} />} />
          <Route exact path="/recipeshow/:id" element={<RecipeShow recipes={recipes} />} />
          <Route exact path="/recipenew" element={<RecipeNew />} />
          <Route exact path="/recipeedit/:id" element={<RecipeEdit />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App