import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup } from "./ToggleGroup";
import { ToggleGroupProps } from "./ToggleGroup.types";

const meta: Meta<typeof ToggleGroup> = {
  title: "Molecules/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

const SingleSelection: Story = (args: ToggleGroupProps) => (
  <ToggleGroup {...args}>
    <ToggleGroup.Item value="carro" aria-label="Toggle card">
      Carro
    </ToggleGroup.Item>
    <ToggleGroup.Item value="moto" aria-label="Toggle bike">
      Moto
    </ToggleGroup.Item>
    <ToggleGroup.Item value="barco" aria-label="Toggle card">
      Barco
    </ToggleGroup.Item>
  </ToggleGroup>
);
SingleSelection.args = {
  type: "single",
};

const MultipleSelection: Story = (args: ToggleGroupProps) => (
  <ToggleGroup {...args}>
    <ToggleGroup.Item value="carro" aria-label="Toggle card">
      Carro
    </ToggleGroup.Item>
    <ToggleGroup.Item value="moto" aria-label="Toggle bike">
      Moto
    </ToggleGroup.Item>
    <ToggleGroup.Item value="barco" aria-label="Toggle card">
      Barco
    </ToggleGroup.Item>
  </ToggleGroup>
);
MultipleSelection.args = {
  type: "multiple",
};
