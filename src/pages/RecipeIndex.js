import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle } from "reactstrap"


  const RecipeIndex = ({ recipes }) => {
    return (
      <>
        <div className='recipeIndex'>
          <div id='recipeIndexH1'>
            <h1>Recipes</h1>
          </div>
          <button>
                    <NavLink to={`/recipenew/`} className="nav-link">
                       Add New Recipe
                    </NavLink>
                    </button>
          <div className='recipeCard' >

            {recipes.map((recipe, index) => {
              return (
                <Card className='card'
                  key={index}
                  style={{
                    width: '282px',
                    backgroundColor: '#D9D9D9'
                  }}
                >
                  <img className='recipeIndexImage'
                    alt={recipe.title}
                    src={recipe.image}
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {recipe.title}
                    </CardTitle>
                    <button data-testid={index}>
                    <NavLink to={`/recipeshow/${recipe.id}`} className="nav-link">
                       View Recipe
                    </NavLink>
                    </button>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </div>
      </>
    )
  }

export default RecipeIndex