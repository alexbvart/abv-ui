import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Input } from '../Input';
import { COLOR_BASE } from '../../../../common/constants';

// Styled components for custom styling
const DropdownContainer = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  position: relative;
  width: 300px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 8px 28px 0px rgba(13, 25, 133, 0.13);
  color: ${COLOR_BASE.ACTIVE};
`;

const SelectedItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

const SelectedItem = styled.div`
  background-color: ${COLOR_BASE.INACTIVE_BG};
  color: #333;
  padding: 3px 8px;
  border-radius: 8px;
  margin: 2px;
  border: 1px solid ${COLOR_BASE.INACTIVE};
`;

const OptionListContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const OptionItem = styled.div<{ isSelected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? `${COLOR_BASE.INACTIVE};` : 'transparent')};

  &:hover {
    background-color: ${COLOR_BASE.INACTIVE_BG};
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