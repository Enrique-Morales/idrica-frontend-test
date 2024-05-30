import React from "react";
import { render, screen } from "@testing-library/react";
import Card, { parseBody } from "./Card";

const cardProps = {
  post: {
    id: 0,
    title: "",
    userId: 0,
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  onDelete: () => {},
};

test("renders Card element", () => {
  render(<Card {...cardProps} />);
  const authorElement = screen.getByText(/by user/i);
  expect(authorElement).toBeInTheDocument();
});

test("parses post's body appropriately", () => {
  const parsedBody = parseBody(cardProps.post.body);
  const lineBreaksNumber = parsedBody.length;
  expect(lineBreaksNumber).toBe(4);
});
