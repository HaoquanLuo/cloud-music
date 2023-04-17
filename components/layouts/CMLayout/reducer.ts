export const CMInitialState: CM.State = {
  navLinkActive: {
    navLinkMenu: "home",
    navLinkHome: "recommend",
  },
};

export const CMStateReducer = (state: CM.State, action: CM.Action) => {
  const { type, payload } = action;
  switch (type) {
    case "navLinkMenu":
      return {
        ...state,
        navLinkActive: {
          ...state["navLinkActive"],
          navLinkHome: "recommend",
          navLinkMenu: payload,
        },
      };

    case "navLinkHome":
      return {
        ...state,
        navLinkActive: {
          ...state["navLinkActive"],
          navLinkHome: payload,
        },
      };

    default:
      throw Error(`Unknown action: ${action.type}`);
  }
};
