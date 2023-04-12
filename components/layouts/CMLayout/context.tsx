import * as React from "react";
import { CMStateReducer } from "./reducer";

interface CMStateProviderProps {
  children: React.ReactNode;
  fallbackState: CM.State;
  storageDispatch: React.Dispatch<React.SetStateAction<CM.State>>;
}

export type CMStateDispatchContextProps = {
  dispatch: React.Dispatch<CM.Action>;
  storageDispatch: React.Dispatch<CM.State>;
};

export const CMDefaultDispatches: CMStateDispatchContextProps = {
  dispatch: (value) => {},
  storageDispatch: (value) => {},
};

export const CMStateContext = React.createContext<CM.State | null>(null);

export const CMStateDispatchContext =
  React.createContext<CMStateDispatchContextProps | null>(null);

export const useCMState = () => {
  return React.useContext(CMStateContext);
};

export const useCMStateDispatch = () => {
  return React.useContext(CMStateDispatchContext);
};

export const CMStateProvider: React.FC<CMStateProviderProps> = (props) => {
  const { children, fallbackState, storageDispatch } = props;
  const [state, dispatch] = React.useReducer(CMStateReducer, fallbackState);
  const dispatches: CMStateDispatchContextProps = {
    dispatch,
    storageDispatch,
  };
  return (
    <CMStateContext.Provider value={state}>
      <CMStateDispatchContext.Provider value={dispatches}>
        {children}
      </CMStateDispatchContext.Provider>
    </CMStateContext.Provider>
  );
};
