import { useState, React } from 'react'
import './App.css';
import {  Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import RecipeIndex from './pages/RecipeIndex'
import RecipeShow from './pages/RecipeShow'
import RecipeNew from './pages/RecipeNew'
import RecipeEdit from './pages/RecipeEdit'
import NotFound from './pages/NotFound'
import mockRecipes from './mockRecipes'

const App = () => {
  const [recipes, setRecipes] = useState(mockRecipes)

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/recipeindex" element={<RecipeIndex recipes={recipes} />} />
        <Route exact path="/recipeshow/:id" element={<RecipeShow recipes={recipes} />} />
        <Route exact path="/recipenew" element={<RecipeNew />} />
        <Route exact path="/recipeedit/:id" element={<RecipeEdit />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App