import { ReactNode } from "react";

// Definimos el contexto para manejar el estado del OTP
export interface InputOTPContextType {
  value: string[];
  onChange: (index: number, newValue: string) => void;
}

export interface InputOTPProps {
  maxLength: number;
  className?: string;
  children: ReactNode;
  onChange?: (otp: string) => void;
}

export interface InputOTPGroupProps {
  children: React.ReactNode;
  className?: string;
}

export interface InputOTPSlotProps {
  index: number;
  className?: string;
}

export interface InputOTPSeparatorProps {
  children?: React.ReactNode;
  className?: string;
}
export interface InputOTPChild {
  Group: React.FC<InputOTPGroupProps>;
  Slot: React.FC<InputOTPSlotProps>;
  Separator: React.FC<InputOTPSeparatorProps>;
}
