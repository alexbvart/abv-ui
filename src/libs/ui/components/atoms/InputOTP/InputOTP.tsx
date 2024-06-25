import React, {
  useState,
  useRef,
  FocusEvent,
  KeyboardEvent,
} from "react";
import styled from "styled-components";
import clsx from "clsx";
import { InputOTPChild, InputOTPGroupProps, InputOTPProps, InputOTPSeparatorProps, InputOTPSlotProps } from "./InputOTP.types";
import { InputOTPContext, useInputOTPContext } from "./useinputOTP";
import { COLOR_BASE } from "../../../../common/constants";

// Estilos para los componentes
const OTPContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InputOTP: React.FC<InputOTPProps> & InputOTPChild = ({
  maxLength,
  className,
  children,
  onChange,
}) => {
  const [value, setValue] = useState<string[]>(Array(maxLength).fill(""));

  const handleChange = (index: number, newValue: string) => {
    const newValueArr = [...value];
    newValueArr[index] = newValue.slice(-1); // solo mantener el último carácter
    setValue(newValueArr);

    if (onChange) {
      onChange(newValueArr.join(""));
    }
  };

  return (
    <InputOTPContext.Provider value={{ value, onChange: handleChange }}>
      <OTPContainer className={clsx("otp-container", className)}>
        {children}
      </OTPContainer>
    </InputOTPContext.Provider>
  );
};

const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const InputOTPSeparator: React.FC<InputOTPSeparatorProps> = ({
  children = "-",
  className,
}) => {
  return (
    <SeparatorContainer className={className}>{children}</SeparatorContainer>
  );
};

const SlotInput = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    color: ${COLOR_BASE.ACTIVE};
  }
`;

export const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  className,
}) => {
  const { value, onChange } = useInputOTPContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(index, newValue);

    // Mover el foco al siguiente input
    if (newValue && inputRef.current) {
      const nextSibling = inputRef.current
        .nextElementSibling as HTMLInputElement | null;
      if (nextSibling) {
        nextSibling.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && inputRef.current) {
      const previousSibling = inputRef.current
        .previousElementSibling as HTMLInputElement | null;
      if (previousSibling) {
        previousSibling.focus();
      }
    }
  };

  return (
    <SlotInput
      ref={inputRef}
      className={className}
      type="text"
      maxLength={1}
      value={value[index]}
      onFocus={handleFocus}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

const GroupContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const InputOTPGroup: React.FC<InputOTPGroupProps> = ({
  children,
  className,
}) => {
  return <GroupContainer className={className}>{children}</GroupContainer>;
};

InputOTP.Group = InputOTPGroup;
InputOTP.Slot = InputOTPSlot;
InputOTP.Separator = InputOTPSeparator;
