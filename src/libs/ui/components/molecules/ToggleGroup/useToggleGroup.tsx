import { createContext, useContext } from "react";
import { ToggleContextProps } from "./ToggleGroup.types";

export const ToggleContext = createContext<ToggleContextProps | undefined>(undefined);

// Hook para acceder al contexto
export const useToggleGroupContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('Toggle components must be used within a <Toggle />');
  }
  return context;
};