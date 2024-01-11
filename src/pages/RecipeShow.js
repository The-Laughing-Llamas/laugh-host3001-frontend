import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const RecipeShow = ({ recipes }) => {
  let { id } = useParams();
  const currentRecipe = recipes?.find((recipe) => recipe.id === +id);
  return (
    <>
      <div className="showPage">
        {currentRecipe && (
          <Card className="show-card" style={ {width: "18rem", height: "100%" }}>
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
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}

export default RecipeShow