import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { render, screen } from "@testing-library/react";


describe("<NotFound/>", () => {
    const notfound = () => {
      render(
        <BrowserRouter>
          <NotFound/>
        </BrowserRouter>
      );
    };
  
    it("It displays a background image", () => {
      notfound();
      const image = screen.getByTestId("NotFoundDiv")
      expect(image).toBeInTheDocument
      expect(image).toHaveStyle("background: https://i.imgur.com/mXKqMpg.png")
    });

})