import { render, screen } from "@testing-library/react";
import SignIn from "../pages/SignIn";
import { BrowserRouter } from "react-router-dom";

describe("<SignIn />", () => {
  const signIn = () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
  };

  it("renders a without errors", () => {
    signIn();
  });

  it("has a heading", () => {
    signIn();
    expect(
      screen.getByRole("heading", {
        name: /Login/i,
      })
    ).toBeInTheDocument();
  });

  it("has an email and password label", () => {
    signIn();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
  });

  it("has a textbox for email and password", () => {
    signIn();
    expect(
        screen.getByRole("textbox", {
          name: /email/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText(/password/i)
      ).toBeInTheDocument();
  });

  it("has a login button", () => {
    signIn();
    expect(screen.getByRole('button', {
        name: /login/i
      })).toBeInTheDocument();
  });
});