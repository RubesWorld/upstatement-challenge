import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "./Carousel";

describe("Carousel", () => {
  test("images are displayed on screen", () => {
    render(<Carousel />);
    const image = screen.getByRole("img");
    expect(image).toBeTruthy();
  });
});
