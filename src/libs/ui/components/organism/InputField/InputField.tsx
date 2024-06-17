// InputField.tsx
import { FC, ReactNode, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

// Styled Components
const InputWrapper = styled.div<{ hasIcon: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  .input-field-container {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    background-color: #fff;
    transition: border-color 0.3s;
    box-shadow: 0px 8px 28px 0px rgba(13, 25, 133, 0.16);

    ${({ hasIcon }) =>
      hasIcon &&
      css`
        padding-left: 40px;
      `}

    &:focus-within {
      border-color: var(--color-active);
    }
  }
`;

// Individual Styled Components
const StyledInput = styled.input`
  /* flex: 1; */
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  background-color: transparent;

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

const StyledLabel = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--color-active);
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
interface InputFieldProps {
  label?: string;
  icon?: ReactNode;
  children: ReactNode;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface LabelProps {
  children: ReactNode;
}

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

// Components
export const InputField: FC<InputFieldProps> & FieldComponents = ({ label, icon, children }) => {
  return (
    <InputWrapper hasIcon={!!icon} className="input-field-wrapper">
      {label && <div className="input-label">{label}</div>}
      <div className="input-field-container">
        {icon && <div className="input-icon">{icon}</div>}
        {children}
      </div>
    </InputWrapper>
  );
};

const Input: FC<InputProps> = (props) => {
  return <StyledInput className="input-field" {...props} />;
};

const Label: FC<LabelProps> = ({ children }) => {
  return <StyledLabel className="input-label">{children}</StyledLabel>;
};

const Icon: FC<IconProps> = ({ children, onClick}) => {
  return <StyledIcon onClick={onClick} >{children}</StyledIcon>;
};

// Export components
    InputField.Input = Input, 
    InputField.Label = Label, 
    InputField.Icon = Icon 

    
