import RecipeEdit from "../pages/RecipeEdit";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("<RecipeEdit />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipeEdit />
      </BrowserRouter>
    );
  });
  it("renders heading", () => {
    expect(screen.getByRole('heading', { name: /edit recipe/i })).toBeInTheDocument();
  });
  it("renders a text input for 'Title'", () => {
    const title = screen.getByTestId(/title/i)
    expect(title).toBeInTheDocument()
  });
  it("renders a text input for 'Ingredients'", () => {
    const ingredients = screen.getByTestId(/ingredients/i)
    expect(ingredients).toBeInTheDocument()
  });
  it("renders a text input for 'Instructions'", () => {
    const instructions = screen.getByTestId(/instructions/i)
    expect(instructions).toBeInTheDocument()
  });
  it("renders a text input for 'Image URL'", () => {
    const image = screen.getByTestId(/image/i)
    expect(image).toBeInTheDocument()
  });

});
