import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup } from "./ToggleGroup";
import { ToggleGroupProps } from "./ToggleGroup.types";

const meta: Meta<typeof ToggleGroup> = {
  title: "Molecules/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "single",
  },
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["single", "multiple"],
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelection: Story = (args: ToggleGroupProps) => (
  <ToggleGroup {...args}>
    <ToggleGroup.Item value="carro" ariaLabel="Toggle card">
      Carro
    </ToggleGroup.Item>
    <ToggleGroup.Item value="moto" ariaLabel="Toggle bike">
      Moto
    </ToggleGroup.Item>
    <ToggleGroup.Item value="barco" ariaLabel="Toggle card">
      Barco
    </ToggleGroup.Item>
  </ToggleGroup>
);
SingleSelection.args = {
  type: "single",
};

export const MultipleSelection: Story = (args: ToggleGroupProps) => (
  <ToggleGroup {...args}>
    <ToggleGroup.Item value="carro" ariaLabel="Toggle card">
      Carro
    </ToggleGroup.Item>
    <ToggleGroup.Item value="moto" ariaLabel="Toggle bike">
      Moto
    </ToggleGroup.Item>
    <ToggleGroup.Item value="barco" ariaLabel="Toggle card">
      Barco
    </ToggleGroup.Item>
  </ToggleGroup>
);
MultipleSelection.args = {
  type: "multiple",
};
