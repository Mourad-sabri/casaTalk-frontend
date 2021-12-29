import { useContext } from "react";
import { Context, GlobalAppState } from "../context/Provider";

export function useGlobalState(): GlobalAppState {
  return useContext(Context);
}
