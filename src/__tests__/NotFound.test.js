import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { render, screen } from "@testing-library/react";


test('renders NotFound page', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });