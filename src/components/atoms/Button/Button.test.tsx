import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders Button element", () => {
  render(<Button onClick={() => {}} />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});

test("renders child node", () => {
  render(<Button onClick={() => {}}>Button text</Button>);
  const buttonElement = screen.getByText(/button text/i);
  expect(buttonElement).toBeInTheDocument();
});
