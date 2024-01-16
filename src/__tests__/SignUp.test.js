import { render, screen } from "@testing-library/react";
import SignUp from "../pages/SignUp";
import { BrowserRouter } from "react-router-dom";

describe("<SignUp />", () => {
  const signup = () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
  };

  it("renders a without errors", () => {
    signup();
  });

  it("has a heading", () => {
    signup();
    expect(
      screen.getByRole("heading", {
        name: /Sign Up/i,
      })
    ).toBeInTheDocument();
  });

  it("has an email and password label", () => {
    signup();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument();
  });

  it("has a textbox for email and password", () => {
    signup();
    expect(
        screen.getByRole("textbox", {
          name: /email/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/password/i)
      ).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/confirm pw/i)
      ).toBeInTheDocument();
  });

  it("has a login button", () => {
    signup();
    expect(screen.getByRole('button', {
        name: /submit/i
      })).toBeInTheDocument();
  });
});