import { render, screen } from "@testing-library/react";
import DeleteButton from "./DeleteButton";

test("renders DeleteButton element", () => {
  render(<DeleteButton onClick={() => {}} />);
  const deleteButtonElement = screen.getByTestId("deletebutton");
  expect(deleteButtonElement).toBeInTheDocument();
});
