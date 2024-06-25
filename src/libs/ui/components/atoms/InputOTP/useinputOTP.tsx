import { createContext, useContext } from "react";
import { InputOTPContextType } from "./InputOTP.types";

export const InputOTPContext = createContext<InputOTPContextType | undefined>(
    undefined
  );
  
  export const useInputOTPContext = () => {
    const context = useContext(InputOTPContext);
    if (!context) {
      throw new Error("InputOTP components must be used within an <InputOTP />");
    }
    return context;
  };