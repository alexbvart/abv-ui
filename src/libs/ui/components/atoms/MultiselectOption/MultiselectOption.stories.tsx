// src/components/AbvMultiSelectDropdown/AbvMultiSelectDropdown.stories.tsx
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AbvMultiSelectDropdown, AbvOption } from "./MultiselectOption";
import styled from "styled-components";
import { AbvButton } from "../Button";

const meta: Meta<typeof AbvMultiSelectDropdown> = {
  title: "organism/MultiSelectDropdown",
  component: AbvMultiSelectDropdown,
  args: {
    selectedValues: [],
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof AbvMultiSelectDropdown>;

export const Default: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(
      args.selectedValues
    );

    return (
      <AbvMultiSelectDropdown
        {...args}
        selectedValues={selectedValues}
        onChange={(newSelectedValues) => {
          setSelectedValues(newSelectedValues);
          args.onChange(newSelectedValues);
        }}
      >
        <AbvOption value="apple" label="Apple" />
        <AbvOption value="banana" label="Banana" />
        <AbvOption value="cherry" label="Cherry" />
        <AbvOption value="date" label="Date" />
        <AbvOption value="elderberry" label="Elderberry" />
      </AbvMultiSelectDropdown>
    );
  },
  args: {
    selectedValues: [],
  },
};

// Historia del MultiSelectDropdown con opciones ya seleccionadas
export const PreselectedValues: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(
      args.selectedValues
    );

    return (
      <AbvMultiSelectDropdown
        {...args}
        selectedValues={selectedValues}
        onChange={(newSelectedValues) => {
          setSelectedValues(newSelectedValues);
          args.onChange(newSelectedValues);
        }}
      >
        <AbvOption value="apple" label="Apple" />
        <AbvOption value="banana" label="Banana" />
        <AbvOption value="cherry" label="Cherry" />
        <AbvOption value="date" label="Date" />
        <AbvOption value="elderberry" label="Elderberry" />
      </AbvMultiSelectDropdown>
    );
  },
  args: {
    selectedValues: ["apple", "banana"],
  },
};

// Historia del MultiSelectDropdown mostrando la funcionalidad de búsqueda
export const WithSearchFunctionality: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(args.selectedValues);
    return (
      <AbvMultiSelectDropdown
        {...args}
        selectedValues={selected}
        onChange={(newSelected) => {
          setSelected(newSelected);
          args.onChange(newSelected);
        }}
      >
        <AbvOption value="apple" label="Apple" />
        <AbvOption value="banana" label="Banana" />
        <AbvOption value="cherry" label="Cherry" />
        <AbvOption value="date" label="Date" />
        <AbvOption value="elderberry" label="Elderberry" />
        <AbvOption value="fig" label="Fig" />
        <AbvOption value="grape" label="Grape" />
        <AbvOption value="honeydew" label="Honeydew" />
      </AbvMultiSelectDropdown>
    );
  },
  args: {
    selectedValues: [],
  },
};


const CustomDropdownContainer = styled.div`
width: 400px;
border: 2px solid #007bff;
border-radius: 8px;
padding: 10px;
`;

export const CustomStyling: Story = () => {
  const [selected, setSelected] = useState<string[]>([]);


  return (
    <CustomDropdownContainer>
      <AbvMultiSelectDropdown selectedValues={selected} onChange={setSelected}>
        <AbvOption value="kiwi" label="Kiwi" />
        <AbvOption value="lemon" label="Lemon" />
        <AbvOption value="mango" label="Mango" />
        <AbvOption value="nectarine" label="Nectarine" />
        <AbvOption value="orange" label="Orange" />
        <AbvOption value="papaya" label="Papaya" />
      </AbvMultiSelectDropdown>
    </CustomDropdownContainer>
  );
};
CustomStyling.args = {
  selectedValues: [], 
};


const allOptions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

// Historia del MultiSelectDropdown demostrando la selección de todas las opciones
export const SelectAll: Story = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectAll = () => {
    setSelected(allOptions.map((option) => option.toLowerCase()));
  };

  return (
    <div>
      <AbvButton onClick={handleSelectAll}>Select All</AbvButton>
      <AbvMultiSelectDropdown selectedValues={selected} onChange={setSelected}>
        {allOptions.map((option) => (
          <AbvOption key={option} value={option.toLowerCase()} label={option} />
        ))}
      </AbvMultiSelectDropdown>
    </div>
  );
};
SelectAll.args = {
  selectedValues: allOptions,
}
  