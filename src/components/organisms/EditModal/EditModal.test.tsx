import { render, screen } from "@testing-library/react";
import EditModal from "./EditModal";

const editModalProps = {
  post: {
    id: 0,
    title: "",
    userId: 0,
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  postIndex: 0,
  onClose: () => {},
  onConfirm: () => {},
  show: true,
};

test("renders EditModal element", () => {
  render(<EditModal {...editModalProps} />);
  const editmodalElement = screen.getByTestId("editmodal");
  expect(editmodalElement).toBeInTheDocument();
});

test("renders edit text", () => {
  render(<EditModal {...editModalProps} />);
  const EditmodalElement = screen.getByText(
    /Are you sure you want to delete post with id/i
  );
  expect(EditmodalElement).toBeInTheDocument();
});
