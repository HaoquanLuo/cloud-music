import { CMInitialState } from "@/components/layouts/CMLayout/reducer";
import { useLocalStorage } from "./useLocalStorage";

export const useCMStorage = () => {
  return useLocalStorage<CM.State>("CMState", CMInitialState);
};
