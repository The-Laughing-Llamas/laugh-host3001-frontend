import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { render, screen } from "@testing-library/react";


describe("<Home/>", () => {
    const home = () => {
      render(
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
      );
    };
  
    it("It displays a background image", () => {
      home();
      const image = screen.getByTestId("HomeDiv")
      expect(image).toBeInTheDocument
      expect(image).toHaveStyle("background: https://i.imgur.com/CbtNqxn.png")
    });

})