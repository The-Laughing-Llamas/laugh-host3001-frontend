import { BrowserRouter } from "react-router-dom";
import PigLatin from "../pages/PigLatin";
import { render, screen } from "@testing-library/react";


describe("<PigLatin />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <PigLatin />
        </BrowserRouter>
      );
    });
    it("renders heading", () => {
      expect(screen.getByRole('heading', { name: /Pig Latin Translator/i })).toBeInTheDocument();
    });
    it("displays an image", () => {
      expect(screen.getByRole('img', {
        name: /piglatin image: pig vs llama/i
      }))
    })
    it("renders a text input box", () => {
      const piglatininput = screen.getByTestId("PigLatinInput")
      expect(piglatininput).toBeInTheDocument
    })
    it("displays a button reading 'submit'", () => {
      expect(screen.getByRole('button', {
        name: /submit/i
      }))
    })
    it("displays a button that says 'clear", () => {
    expect(screen.getByRole('button', {
      name: /clear/i
    }))  
    })
  

  });