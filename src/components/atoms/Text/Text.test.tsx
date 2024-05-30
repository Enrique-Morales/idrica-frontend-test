import { render, screen } from "@testing-library/react";
import Text from "./Text";
import { TextVariants } from "../../../utils/constants";

test("renders Text element", () => {
  render(<Text />);
  const textElement = screen.getByTestId("text");
  expect(textElement).toBeInTheDocument();
});

test("renders child node", () => {
  render(<Text>Hello World</Text>);
  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});

test("applies css class according to variant", () => {
  render(<Text variant={TextVariants.H3}>Hello World</Text>);
  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toHaveClass("text-h3");
});
