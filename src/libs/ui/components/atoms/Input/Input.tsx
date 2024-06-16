import React, { FC } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

const Input: FC<{ type: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ type, placeholder, value, onChange }) => (
  <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input;
