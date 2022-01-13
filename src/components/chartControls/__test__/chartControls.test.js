import React from "react";
import { render, screen } from "@testing-library/react";
import ChartControls from "../chartControls";
import ControlReducer from "../../../reducers/controlReducer";

const initialState = {
  selected: 1,
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ChartControls state={initialState}></ChartControls>, div);
});
it("updates selected Value", () => {
  render(<ChartControls state={initialState} />);
  const day = screen.getByTestId("1day");
  console.log(day);
  expect(day).toHaveProperty("selected", true);
});
