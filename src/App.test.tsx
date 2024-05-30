import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

test("renders app title element", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const titleElement = screen.getByText(/idrica frontend test - cards/i);
  expect(titleElement).toBeInTheDocument();
});
