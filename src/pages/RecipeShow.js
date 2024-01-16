import React from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const RecipeShow = ({ recipes }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/recipeindex");
  };

  let { id } = useParams();
  const currentRecipe = recipes?.find((recipe) => recipe.id === +id);
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
                    {currentRecipe.title}
                  </span>
                </CardTitle>
                <br />
                <CardSubtitle className="sub-title">
                  <span style={{ fontWeight: "bold" }}>Ingredients: </span>{" "}
                  {currentRecipe.ingredients}
                </CardSubtitle>
                <br />
                <CardSubtitle>
                  <span style={{ fontWeight: "bold" }}>Instructions: </span>{" "}
                  {currentRecipe.instructions}
                </CardSubtitle>
              </div>
              <NavLink
                role="link"
                to={`/recipeedit/${currentRecipe.id}`}
                className="nav-link bg-secondary p-2 rounded my-2"
              >
                Edit Recipe
              </NavLink>
              <NavLink
                role="link"
                to={`/recipeindex`}
                className="nav-link bg-secondary p-2 rounded my-2"
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
