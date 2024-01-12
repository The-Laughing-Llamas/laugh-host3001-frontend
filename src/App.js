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
      .catch((error) => console.log("login errors: ", error))
  }

  const signout = (id) => {
    fetch(`${url}/signout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser()
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  return (
    <>
      <Header currentUser = {currentUser} signout={signout}/>
      <div className="Body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<SignIn signin={signin}/>} />
          <Route exact path="/signup" element={<SignUp signup={signup}/>} />
          {currentUser && (<Route exact path="/recipeindex" element={<RecipeIndex recipes={recipes} currentUser={currentUser}/>} />)}
          <Route exact path="/recipeshow/:id" element={<RecipeShow recipes={recipes} />} />
          <Route exact path="/recipenew" element={<RecipeNew currentUser={currentUser} />} />
          <Route exact path="/recipeedit/:id" element={<RecipeEdit recipes={recipes} />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App