import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const RecipeShow = ({ recipes }) => {

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/recipeedit")
  }

  const handleClick = () => {
    navigate("/recipeindex")
  }

  let { id } = useParams();
  const currentRecipe = recipes?.find((recipe) => recipe.id === +id);
  return (
    <>
    
      <div className="showPage">
        {currentRecipe && (
          <Card className="show-card" style={ {width: "25rem", height: "100%" }}>
            <CardImg src={currentRecipe?.image} alt="recipe"/>
            <CardBody className="recipe-text" >
              <div className="show-recipe-info">
                <CardTitle>
                <span style={{fontSize: "20px"}}>{currentRecipe.title}</span>
                </CardTitle>
                <br />
                <CardSubtitle className='sub-title'>
                <span style={{fontWeight: "bold"}}>Ingredients: </span> {currentRecipe.ingredients}
                </CardSubtitle>
                <br />
                <CardSubtitle>
                <span style={{fontWeight: "bold"}}>Instructions: </span> {currentRecipe.instructions}
                </CardSubtitle>
              </div>
           
            <button onClick={handleSubmit}>Edit Recipe</button>
            <button onClick={handleClick}>Delete Recipe</button>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}

export default RecipeShow