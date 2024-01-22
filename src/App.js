import React, { useState, useEffect } from 'react'
import './App.css';
import {  Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
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
import PigLatin from './pages/PigLatin'
import Jokes from './pages/Jokes'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  const navigate = useNavigate()

  // const url = "http://localhost:3000"
  const url = "https://laughhost3000.onrender.com"


  const signin = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .then(() => {
      navigate('/recipeindex') 
    })
    .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .then(() => {
        navigate('/recipeindex') 
      })
      .catch((error) => console.log("login errors: ", error))
  }


  const signout = () => {

    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readRecipe()}, [])

    const readRecipe = () => {
      fetch(`${url}/recipes`)
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((err) => console.error("Read recipe errors", err));
    };
  
    const createRecipe = (recipe) => {
      fetch(`${url}/recipes`, {
        body: JSON.stringify(recipe),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(() => readRecipe())
      .catch((error) => {
        console.log("Recipe create error:", error);
      });}

      const updateRecipe = (recipe, id) => {
        fetch(`${url}/recipes/${id}`, {
          body: JSON.stringify(recipe),
          headers: {
            "Content-Type": "application/json"
          },
          method: "PATCH"
        })
          .then((response) => response.json())
          .then(() => readRecipe())
          .catch((errors) => console.error("Recipe update errors:", errors))
      }

      const deleteRecipe = (id) => {
        fetch(`${url}/recipes/${id}`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "DELETE"
        })
          .then((response) => response.json())
          .then(() => readRecipe())
          .catch((errors) => console.log("delete errors:", errors))
      }
  

  return (
    <>
      <div className="Body">
      <Header currentUser = {currentUser} signout={signout}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<SignIn signin={signin}/>} />
          <Route path="/signup" element={<SignUp signup={signup}/>} />
         {currentUser && <Route path="/recipeindex" element={<RecipeIndex recipes={recipes} currentUser={currentUser}/>} /> }
          <Route path="/recipeshow/:id" element={<RecipeShow recipes={recipes} deleteRecipe={deleteRecipe} />} />
          <Route path="/recipenew" element={<RecipeNew createRecipe={createRecipe} currentUser={currentUser} />} />
          <Route path="/recipeedit/:id" element={<RecipeEdit updateRecipe={updateRecipe} recipes={recipes} />} />
          <Route path="/piglatin" element={<PigLatin />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App