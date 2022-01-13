import React from "react";
import { render, screen } from "@testing-library/react";
import Chart from "../../chart/chart";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Chart></Chart>, div);
});
