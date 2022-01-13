import React, { useEffect, useReducer, Button } from "react";
import Chart from "../chart/chart";
import StyledButton from "../styledButton/styledButton";
import controlReducer from "../../reducers/controlReducer";

function ChartControls({ state, dispatch }) {
  return (
    <div className="container">
      <StyledButton
        onClick={() => dispatch({ type: "1 day" })}
        selected={state.selected === 1 ? true : false}
        data-testid="1day"
      >
        1 Day
      </StyledButton>
      <StyledButton
        onClick={() => dispatch({ type: "7 days" })}
        selected={state.selected === 7 ? true : false}
      >
        7 Days
      </StyledButton>
      <StyledButton
        onClick={() => dispatch({ type: "1 month" })}
        selected={state.selected === 30 ? true : false}
      >
        1 Month
      </StyledButton>
    </div>
  );
}
export default ChartControls;
