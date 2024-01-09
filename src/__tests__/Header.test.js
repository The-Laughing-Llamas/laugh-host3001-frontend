import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import llamaLogo from "../assets/llamalogo.png"
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Header/>", () => {
  const header = () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  it("It contains a header element", () => {
    header();
  });

  it("Has a navigation element", () => {
    header();
    const nav = screen.getByRole("navigation", {
      name: "navigation",
    });
    expect(nav).toBeInTheDocument();
  });

  it("has an image", () => {
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", llamaLogo)
  });

  it("Contain clickable links", () => {
    header();
    userEvent.click(screen.getByText("Home"));
    const link = screen.getByRole("link", {
      name: "Home",
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/");
  });

  it("Contain clickable links", () => {
    header();
    userEvent.click(screen.getByText("About Us"));
    const link = screen.getByRole("link", {
      name: "About Us",
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/aboutus");
  });

  it("Contain clickable links", () => {
    header();
    userEvent.click(screen.getByText("Sign Up"));
    const link = screen.getByRole("link", {
      name: "Sign Up",
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/signup");
  });

  it("Contain clickable links", () => {
    header();
    userEvent.click(screen.getByText("Login"));
    const link = screen.getByRole("link", {
      name: "Login",
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/signin");
  });
});