import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { Input } from '../Input';

// Styled components for custom styling
const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const SelectedItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

const SelectedItem = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 3px 8px;
  border-radius: 3px;
  margin: 2px;
`;

const OptionListContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const OptionItem = styled.div<{ isSelected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? '#cce4ff' : 'transparent')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-bottom: 1px solid dodgerblue;
  }
`;

// Types for props and state
type OptionProps  = {
  value: string;
  label: string;
//   children?: ReactNode;
};

type MultiSelectDropdownProps = {
//   options: Option[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
  children: ReactNode;
};

// Main component
export const AbvMultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
//   options,
  selectedValues,
  onChange,
  children
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleToggleOption = (value: string) => {
    const isSelected = selectedValues.includes(value);
    if (isSelected) {
      onChange(selectedValues.filter(item => item !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const filteredOptions = Array.isArray(children) ? children.filter(child =>
    (child.props.label as string).toLowerCase().includes(searchTerm.toLowerCase())
) : [];

  return (
    <DropdownContainer>
      <SelectedItemsContainer>
        {selectedValues.map(value => (
          <SelectedItem key={value}>{value}</SelectedItem>
        ))}
      </SelectedItemsContainer>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)   => setSearchTerm(e.target.value)}
      />
      <OptionListContainer>
        {filteredOptions.map(option => (
          <OptionItem
            key={option.props.value}
            isSelected={selectedValues.includes(option.props.value)}
            onClick={() => handleToggleOption(option.props.value)}
          >
            {option.props.label}
          </OptionItem>
        ))}
      </OptionListContainer>
    </DropdownContainer>
  );
};

export const AbvOption: React.FC<OptionProps> = ({ value, label }) => {
    // This component doesn't render anything itself, it's just a placeholder for 
    console.log({ value, label});
    
    return null;
  };