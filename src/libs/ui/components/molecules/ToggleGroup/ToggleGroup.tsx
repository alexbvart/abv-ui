// ToggleGroup.tsx
import React, {
  useState,
  ReactNode,
  useEffect,
} from "react";
import clsx from "clsx";
import styled from "styled-components";
import { ToggleGroupItemChild, ToggleGroupItemProps, ToggleGroupProps } from "./ToggleGroup.types";
import { ToggleContext, useToggleGroupContext } from "./useToggleGroup";

const StyledToggleGroup = styled.div`
  display: flex;
  gap: 10px;
`;
export const ToggleGroup: React.FC<ToggleGroupProps> & ToggleGroupItemChild = ({
  type,
  children,
  className,
  value,
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    if (value) {
      if (type === "single" && Array.isArray(value)) {
        throw new Error("Value should be a single string for 'single' type");
      }
      setSelectedValues(Array.isArray(value) ? value : [value]);
    }
  }, [value, type]);

  const onSelect = (selectedValue: string) => {
    if (type === "single") {
      const newValue = selectedValues.includes(selectedValue)
        ? ""
        : selectedValue;
      setSelectedValues(newValue ? [newValue] : []);
      onChange?.(newValue);
    } else {
      const newSelectedValues = selectedValues.includes(selectedValue)
        ? selectedValues.filter((value) => value !== selectedValue)
        : [...selectedValues, selectedValue];
      setSelectedValues(newSelectedValues);
      onChange?.(newSelectedValues);
    }
  };

  return (
    <ToggleContext.Provider value={{ type, selectedValues, onSelect }}>
      <StyledToggleGroup className={clsx("toggle-group", className)}>
        {children}
      </StyledToggleGroup>
    </ToggleContext.Provider>
  );
};


const StyledToggleGroupItem = styled.button<{ isSelected: boolean }>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#007bff" : "#f1f1f1")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  border-radius: 5px;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#0056b3" : "#e0e0e0"};
  }
`;

const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({
  value,
  children,
  className,
  ariaLabel,
}) => {
  const { selectedValues, onSelect } = useToggleGroupContext();

  const isSelected = selectedValues.includes(value);

  return (
    <StyledToggleGroupItem
      isSelected={isSelected}
      className={clsx("toggle-group-item", className)}
      aria-label={ariaLabel}
      onClick={() => onSelect(value)}
    >
      {children}
    </StyledToggleGroupItem>
  );
};

ToggleGroup.Item = ToggleGroupItem;
