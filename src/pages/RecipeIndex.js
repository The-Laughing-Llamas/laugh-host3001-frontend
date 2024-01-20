import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

const RecipeIndex = ({ recipes, currentUser }) => {
  const myRecipes = recipes.filter(
    (recipe) => currentUser?.id === recipe.user_id
  );
  return (
    <>
      <div className="recipeIndex">
        <div id="recipeIndexH1">
          <h1>Recipes</h1>
        </div>
        <br />
        <div className="addNewRecipeBtn">
          <button>
            <NavLink to={`/recipenew/`} className="nav-link">
              Add New Recipe
            </NavLink>
          </button>
        </div>
        <br /><br />
        <div className="recipeCard">
          {myRecipes.map((recipe, index) => {
            return (
              <>
              <Card
                className="card"
                key={index}
                style={{
                  width: "282px",
                  backgroundColor: "#D9D9D9",
                }}
              >
                <img
                  className="recipeIndexImage"
                  alt={recipe.title}
                  src={recipe.image}
                />
                <CardBody>
                  <CardTitle tag="h5">{recipe.title}</CardTitle>
                  <button data-testid={index}>
                    <NavLink
                      to={`/recipeshow/${recipe.id}`}
                      className="nav-link"
                    >
                      View Recipe
                    </NavLink>
                  </button>
                </CardBody>
              </Card>
             </>
            );
          })}
        </div>
        <br />
      </div>
    </>
  );
};

export default RecipeIndex;
