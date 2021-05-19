import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("renders heading", () => {
    render(<App />);
    const header = screen.getByText(/image carousel/i);
    expect(header).toBeInTheDocument();
  });

  test("renders dark button", () => {
    render(<App />);
    const darkButton = screen.getByRole("button", {
      name: /dark-button/i,
    });
    expect(darkButton).toBeInTheDocument();
  });

  test("renders light-button after click", () => {
    render(<App />);
    const darkButton = screen.getByRole("button", {
      name: /dark-button/i,
    });
    userEvent.click(darkButton);
    const lightButton = screen.getByRole("button", {
      name: /light-button/i,
    });
    expect(lightButton).toBeInTheDocument();
  });

  test("images show up on screen", () => {
    render(<App />);
    const images = screen.getByAltText("pics");
    expect(images).toBeInTheDocument();
  });
});
