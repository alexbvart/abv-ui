import { Meta, StoryObj } from "@storybook/react";
import { Toggle, ToggleContextType } from "./Toggle";

const meta : Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultOn: {
      control: {
        type: 'boolean',
      },
    },
    onToggle: {
      action: 'onToggle',
    },
  },
  tags: ['autodocs'],
} 
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = (args:ToggleContextType) => (
  <Toggle {...args}>
    <Toggle.Switch />
    <Toggle.Knob />
  </Toggle>
);
Default.args = {
  defaultOn: false,
};

export const OnlySwitch: Story = (args:ToggleContextType) => (
  <Toggle defaultOn={true} onToggle={(isOn) => console.log(isOn)} {...args}/>
);
OnlySwitch.args = {
  defaultOn: false,
};

export const TurnedOn: Story = (args:ToggleContextType) => (
  <Toggle {...args}>
    <Toggle.Switch />
    <Toggle.Knob />
  </Toggle>
);
TurnedOn.args = {
  defaultOn: true,
};

export const CustomStyling: Story = (args:ToggleContextType) => (
  <Toggle {...args}>
    <Toggle.Switch />
    <Toggle.Knob />
  </Toggle>
);
CustomStyling.args = {
  defaultOn: true,
  className: 'custom-toggle',
};

