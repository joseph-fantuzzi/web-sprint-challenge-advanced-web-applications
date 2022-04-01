// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Spinner from "./Spinner";

test("sanity", () => {
  expect(true).toBe(true);
});

test("renders without errors for spinner on", () => {
  render(<Spinner on={true} />);
});

test("renders without errors for spinner off", () => {
  render(<Spinner on={false} />);
});

test("spinner shows please wait text when on and not when off", () => {
  const { rerender } = render(<Spinner on={true} />);
  let text = screen.queryByText("Please wait...", { exact: false });
  expect(text).toBeInTheDocument();
  expect(text).toBeTruthy();
  expect(text).toBeVisible();

  rerender(<Spinner on={false} />);
  text = screen.queryByText("Please wait...", { exact: false });
  console.log(text);
  expect(text).toBeFalsy();
  expect(text).toBe(null);
});
