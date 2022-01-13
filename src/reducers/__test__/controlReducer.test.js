import ControlReducer from "../controlReducer";

describe("integration test for reducers and actions", () => {
  test("returns new state for 7 days Action Type", () => {
    const initialState = { selected: 1 };
    const updateAction = { type: "7 days" };
    const updatedState = ControlReducer(initialState, updateAction);
    expect(updatedState).toEqual({ selected: 7 });
  });
});
