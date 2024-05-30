import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

test("renders Modal element", () => {
  render(<Modal show={true} onClose={() => {}} />);
  const modalElement = screen.getByTestId("modal");
  expect(modalElement).toBeInTheDocument();
});

test("renders child node", () => {
  render(
    <Modal show={true} onClose={() => {}}>
      Modal text
    </Modal>
  );
  const modalElement = screen.getByText(/Modal text/i);
  expect(modalElement).toBeInTheDocument();
});
