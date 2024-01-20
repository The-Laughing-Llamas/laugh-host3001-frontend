import { BrowserRouter } from "react-router-dom";
import Jokes from "../pages/Jokes";
import { render, screen } from "@testing-library/react";

describe("<Jokes />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Jokes />
        </BrowserRouter>
      );
    });
    it("renders heading", () => {
      expect(screen.getByRole('heading', { name: /Chuck Norris Jokes/i })).toBeInTheDocument();
    });

    it("displays an image", () => {
      expect(screen.getByRole('img', {
        name: /Chuck Norris Meets Coffee/i
      }))
    })

    it("displays a button that says 'Make Me Laugh", () => {
    expect(screen.getByRole('button', {
      name: /Make Me Laugh/i
    }))  
    })
  

  });