type ActionType = {
  type: "1 day" | "7 days" | "1 month";
};

type StateType = {
  selected: number;
};

function controlReducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "1 day":
      return { selected: 1 };
    case "7 days":
      return { selected: 7 };
    case "1 month":
      return { selected: 30 };
    default:
      throw new Error();
  }
}

export default controlReducer;
