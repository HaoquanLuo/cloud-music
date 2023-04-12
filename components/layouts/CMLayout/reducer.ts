export const CMInitialState: CM.State = {
  activeNavLink: {
    menuNavLink: "home",
    homeNavLink: "recommend",
  },
};

export const CMStateReducer = (state: CM.State, action: CM.Action) => {
  const { type, payload } = action;
  switch (type) {
    case "menuNavLink":
      return {
        ...state,
        activeNavLink: {
          ...state["activeNavLink"],
          homeNavLink: "recommend",
          menuNavLink: payload,
        },
      };

    case "homeNavLink":
      return {
        ...state,
        activeNavLink: {
          ...state["activeNavLink"],
          homeNavLink: payload,
        },
      };

    default:
      throw Error(`Unknown action: ${action.type}`);
  }
};
