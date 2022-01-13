import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../header";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Header></Header>, div);
});

it("renders h1Tag-Bitcoin Price Chart", () => {
  render(<Header />);
  const h1Element = screen.getByText(/Bitcoin Price Chart/i);
  expect(h1Element).toBeInTheDocument();
});

it("renders h4Tag Select a period below to monitor price changes", () => {
  render(<Header />);
  const h1Element = screen.getByText(
    /Select a period below to monitor price changes/i
  );
  expect(h1Element).toBeInTheDocument();
});
