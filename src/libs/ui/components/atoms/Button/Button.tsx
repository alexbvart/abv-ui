import styled from 'styled-components';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ type: ButtonProps['type']; size: ButtonProps['size'] }>`
  padding: ${({ size }) => (size === 'small' ? '5px 10px' : size === 'large' ? '15px 30px' : '10px 20px')};
  font-size: ${({ size }) => (size === 'small' ? '0.8rem' : size === 'large' ? '1.2rem' : '1rem')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius:  8px;

   &.btn-primary {
     background-color: #007bff;
     color: white;
   }

   &.btn-secondary {
     background-color: #6c757d;
     color: white;
   }

   &.btn-danger {
     background-color: #dc3545;
     color: white;
   }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

/**
 * Button component for user interaction
 * 
 * @param {string} label - The text to display on the button
 * @param {function} onClick - The function to call on button click
 * @param {string} type - The type of button ('primary', 'secondary', 'danger')
 * @param {string} size - The size of the button ('small', 'medium', 'large')
 * @param {boolean} disabled - Whether the button is disabled
 * @returns {JSX.Element} The rendered button component
 */
export const AbvButton: React.FC<ButtonProps> = ({ 
    label, 
    onClick, 
    type, 
    size = 'medium', 
    disabled = false,
    className = '',
    children,
}) => {
    
    return (
      <StyledButton
        type={type}
        size={size}
        onClick={onClick}
        disabled={disabled}
        className={clsx( className, type && `btn-${type}`, `btn-${size}`, )} 
      >
        {label || children}
      </StyledButton>
    );
  };