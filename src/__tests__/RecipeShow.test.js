import RecipeShow from "../pages/RecipeShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import mockRecipes from "../mockRecipes";
import RecipeIndex from "../pages/RecipeIndex";

describe("<RecipeShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/recipeshow/1"]}>
        <Routes>
          <Route
            path="recipeshow/:id"
            element={<RecipeShow recipes={mockRecipes} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  it("displays a heading", () => {
    expect(
      screen.getByText(/soggy breakfast/i)
    ).toBeInTheDocument;
  });

  it("displays recipe ingredients", () => {
    expect(
      screen.getByText(/wet toast, runny eggs, non\-crispy bacon/i)
    ).toBeInTheDocument;
  });

  it("displays recipe instructions", () => {
    expect(
      screen.getByText(/barely cook the ingredients, place on a plate/i)
    ).toBeInTheDocument;
  });

  it("displays an image", () => {
    expect(
      screen.getByRole('img', {
        name: /recipe/i
      })
    ).toBeInTheDocument();
  });

  it("displays an edit button", () => {
    expect(
      screen.getByRole('link', {
        name: /edit recipe/i
      })
    ).toBeInTheDocument();
  });

  it("displays an delete button", () => {
    expect(
      screen.getByRole('link', {
        name: /delete recipe/i
      })
    ).toBeInTheDocument();
  });
});