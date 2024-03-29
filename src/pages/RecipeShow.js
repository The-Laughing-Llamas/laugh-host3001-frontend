import React from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const RecipeShow = ({ recipes, deleteRecipe }) => {
  let { id } = useParams();
  const currentRecipe = recipes?.find((recipe) => recipe.id === +id);

  const handleClick = () => {
    deleteRecipe(currentRecipe.id)
  };

  
  return (
    <>
      <div className="showPage">
        {currentRecipe && (
          <Card
            className="show-card"
            style={{ width: "25rem", height: "100%" }}
          >
            <CardImg src={currentRecipe?.image} alt="recipe" />
            <CardBody className="recipe-text">
              <div className="show-recipe-info">
                <CardTitle>
                  <span style={{ fontSize: "20px" }}>
                    {currentRecipe?.title}
                  </span>
                </CardTitle>
                <br />
                <CardSubtitle className="sub-title">
                  <span style={{ fontWeight: "bold" }}>Ingredients: </span>{" "}
                  {currentRecipe?.ingredients}
                </CardSubtitle>
                <br />
                <CardSubtitle>
                  <span style={{ fontWeight: "bold" }}>Instructions: </span>{" "}
                  {currentRecipe?.instructions}
                </CardSubtitle>
              </div>
              <NavLink
                role="link"
                to={`/recipeedit/${currentRecipe?.id}`}
                className="nav-link p-2 rounded my-2"
                style={{
                  color: "black",
                  backgroundColor: "#F2913D"
                }}
              >
                Edit Recipe
              </NavLink>
              <NavLink
                role="link"
                to={`/recipeindex`}
                className="nav-link bg-danger p-2 rounded my-2"
                style={{
                  color:"#F2F2F2"
                }}
                onClick={handleClick}
              >
                Delete Recipe
              </NavLink>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default RecipeShow;
