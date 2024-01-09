import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Footer/>", () => {
    const footer = () => {
      render(
        <BrowserRouter>
          <Footer/>
        </BrowserRouter>
      );
    };
  
    it("It contains a footer element", () => {
      footer();
      screen.logTestingPlaygroundURL()
    });

    it("Has a copyright", () => {
        footer();
        const footerText = screen.getByRole('heading', { name: /© 2024 enrique, greg, patsy, sean/i })
        expect(footerText).toBeInTheDocument()
    })
})