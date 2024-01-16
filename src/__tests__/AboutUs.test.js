import { BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import { render, screen } from "@testing-library/react";


describe("<AboutUs/>", () => {
    const aboutus = () => {
      render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>
      );
    };
   
    it("It displays an about us image", () => {
        aboutus();
    const image = screen.getByRole('img', {
        name: /about the developers image/i
      })
    expect(image).toBeInTheDocument
    });
    it("It displays an about us image", () => {
        aboutus();
    const image = screen.getByAltText(/about the developers image/i
      )
    expect(image).toBeInTheDocument
    });

})