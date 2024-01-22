import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button, Row, Container } from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

const RecipeNew = ({ createRecipe, currentUser }) => {
  const navigate = useNavigate();
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
    user_id: currentUser?.id
  });

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createRecipe(newRecipe);
    navigate("/recipeindex");
  };
  return (
    <>
    <div className="recipeNew">
        <h1>New Recipe</h1>
        <Container  fluid="xl">  
      <Form style={{marginTop: '-150px'}}>
        <Row className="newRecipeRow">
          <Col>
            <FormGroup>
              <Input
                id="title"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
            </FormGroup>
            <Row>
              <Col>
                <FormGroup>
                  <Input
                    id="ingredients"
                    name="ingredients"
                    onChange={handleChange}
                    placeholder="Ingredients"
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="instructions"
                    name="instructions"
                    placeholder="Instructions"
                    onChange={handleChange}
                    type="textarea"
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
                  placeholder="Image URL"
                />
              </FormGroup>
            </Row>
          </Col>
        </Row>
        <Button onClick={handleSubmit}> Add Recipe </Button>
      </Form>
      </Container>
      </div>
    </>
  );
};

export default RecipeNew;
