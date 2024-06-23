// InputField.tsx
import { FC, ReactNode, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import style from "./InputField.module.css";

// Styled Components
const InputWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;

      & input {
        background-color: #f9faff;
      }
    `}

  &:disabled {
    background-color: #f9faff;
    cursor: not-allowed;
  }
`;

const InputBox = styled.div<{ disabled: boolean }>`
  margin-top: 5px;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #f9faff;
    `}
`;

// Individual Styled Components
const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  background-color: transparent;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;

      & input {
        background-color: #f9faff;
      }
    `}
`;

const StyledLabel = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
  padding-bottom: 4px;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-base);
  width: 24px;
  height: 100%;
  cursor: pointer;
`;
interface FieldComponents {
  Input: FC<InputProps>;
  Label: FC<LabelProps>;
  Icon: FC<IconProps>;
}

// Component Interfaces
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface LabelProps {
  children: ReactNode;
}

interface IconProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Components
export const InputField: FC<InputFieldProps> & FieldComponents = ({
  label,
  icon,
  children,
  className,
  disabled = false,
  ...props
}) => {
  const defaultInput = (
    <>
      {label && <div className="input-label">{label}</div>}
      <InputBox
        className={`${style.input_field_container} ${className}`}
        disabled={disabled}
      >
        {icon && <div className="input-icon">{icon}</div>}
        <StyledInput
          {...props}
          className={style.input_field}
          disabled={disabled}
        />
      </InputBox>
    </>
  );
  return (
    <InputWrapper disabled={disabled}>
      {children ? (
        <InputBox
          className={`${style.input_field_container} ${className}`}
          disabled={disabled}
        >
          {children}
        </InputBox>
      ) : (
        defaultInput
      )}
    </InputWrapper>
  );
};

const Input: FC<InputProps> = (props) => {
  return <StyledInput className="input-field" {...props} />;
};

const Label: FC<LabelProps> = ({ children }) => {
  return <StyledLabel className="input-label">{children}</StyledLabel>;
};

const Icon: FC<IconProps> = ({ children, onClick, className }) => {
  return (
    <StyledIcon className={className} onClick={onClick}>
      {children}
    </StyledIcon>
  );
};

// Export components
(InputField.Input = Input),
(InputField.Label = Label),
(InputField.Icon = Icon);
