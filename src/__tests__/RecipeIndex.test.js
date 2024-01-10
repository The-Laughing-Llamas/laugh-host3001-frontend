import RecipeIndex from "../pages/RecipeIndex";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockRecipes from "../mockRecipes";

describe("<RecipeIndex />", () => {
  let recipes = mockRecipes
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipeIndex recipes={recipes} />
      </BrowserRouter>
    );
  })
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /Recipes/i,
      })
    ).toBeInTheDocument();
  });

  it("displays an image", () => {
    mockRecipes.map((recipe) => {
      const image = screen.getByAltText(recipe.title)
      expect(image).toBeInTheDocument()
    })
  })
  it("displays a button for each card", () => {
    mockRecipes.map((recipe, index) => {
      const button = screen.getByTestId(index)
      expect(button).toBeInTheDocument
    })
  })
  it("displays a title for each card", () => {
    mockRecipes.map((recipe, index) => {
      const title = screen.getByText(recipe.title)
      expect(title).toBeInTheDocument
    })
  })
})
