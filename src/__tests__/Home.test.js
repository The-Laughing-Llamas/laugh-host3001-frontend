import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { render, screen } from "@testing-library/react";


test('renders Home page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });