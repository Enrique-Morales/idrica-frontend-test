import { render, screen } from "@testing-library/react";
import EditButton from "./EditButton";

test("renders EditButton element", () => {
  render(<EditButton onClick={() => {}} />);
  const editButtonElement = screen.getByTestId("editbutton");
  expect(editButtonElement).toBeInTheDocument();
});
