import React, { FC } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  /* border: none; */
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    /* border-bottom: 1px solid var(--color-active); */
    border-bottom: 1px solid dodgerblue;
  }
`;

export const Input: FC<{
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, placeholder, value, onChange }) => (
  <StyledInput
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
