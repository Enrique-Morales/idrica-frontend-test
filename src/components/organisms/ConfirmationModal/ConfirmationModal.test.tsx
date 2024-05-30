import { render, screen } from "@testing-library/react";
import ConfirmationModal from "./ConfirmationModal";

test("renders ConfirmationModal element", () => {
  render(
    <ConfirmationModal show={true} onClose={() => {}} onConfirm={() => {}} />
  );
  const confirmationmodalElement = screen.getByTestId("confirmationmodal");
  expect(confirmationmodalElement).toBeInTheDocument();
});

test("renders confirmation text", () => {
  render(
    <ConfirmationModal show={true} onClose={() => {}} onConfirm={() => {}} />
  );
  const ConfirmationmodalElement = screen.getByText(
    /Are you sure you want to delete post with id/i
  );
  expect(ConfirmationmodalElement).toBeInTheDocument();
});
