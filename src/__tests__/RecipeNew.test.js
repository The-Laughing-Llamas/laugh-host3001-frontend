import RecipeNew from "../pages/RecipeNew";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("<RecipeNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecipeNew />
      </BrowserRouter>
    );
  });
  it("renders heading", () => {
    expect(screen.getByRole('heading', { name: /new recipe/i })).toBeInTheDocument();
  });
  it("renders a text input for 'Title'", () => {
    expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument()
  });
  it("renders a text input for 'Ingredients'", () => {
    expect(screen.getByPlaceholderText(/ingredients/i)).toBeInTheDocument()
  });
  it("renders a text input for 'Instructions'", () => {
    expect(screen.getByPlaceholderText(/instructions/i)).toBeInTheDocument()
  });
  it("renders a text input for 'Image URL'", () => {
    expect(screen.getByPlaceholderText(/image url/i)).toBeInTheDocument()
  });
  it("renders a button labeled 'Add Recipe'", () => {
    expect(screen.getByRole('button', {
        name: /add/i
      }))
  });
});
