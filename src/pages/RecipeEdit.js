import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col, Button, Row } from "reactstrap";

const RecipeEdit = ({ recipes, updateRecipe }) => {
  const { id } = useParams();
  let currentRecipe = recipes?.find((recipe) => recipe.id === +id);

  const navigate = useNavigate();
  const handleSubmit = () => {
    updateRecipe(editRecipe, currentRecipe.id);

    navigate(`/recipeshow/${currentRecipe.id}`);
  };

  const [editRecipe, setEditRecipe] = useState({
    title: currentRecipe?.title,
    ingredients: currentRecipe?.ingredients,
    instructions: currentRecipe?.instructions,
    image: currentRecipe?.image,
    id: currentRecipe?.id,
    user_id: currentRecipe?.user_id
  });

  const handleChange = (e) => {
    setEditRecipe({ ...editRecipe, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div>
      <h1>Edit Recipe</h1>
    </div>
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Input
              id="title"
              name="title"
              value={editRecipe?.title}
              onChange={handleChange}
              data-testid="title"
            />
          </FormGroup>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Input
                  id="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={editRecipe?.ingredients}
                  type="textarea"
                  data-testid="ingredients"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="instructions"
                  name="instructions"
                  value={editRecipe?.instructions}
                  onChange={handleChange}
                  type="textarea"
                  data-testid="instructions"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Input
                id="imageUrl"
                name="image"
                type="text"
                onChange={handleChange}
                value={editRecipe?.image}
                data-testid="image"
              />
            </FormGroup>
          </Row>
        </Col>
      </Row>
      <Button onClick={handleSubmit}> Edit Recipe </Button>
    </Form>
  </>
  );
};

export default RecipeEdit;
