import { Meta, StoryObj } from '@storybook/react';
import { AbvButton } from './Button';
import { ButtonProps } from './Button.types';
const meta = {
  title: 'Atoms/Button',
  component: AbvButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof AbvButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary : Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
  }
};

export const Secondary : Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  }
};

export const Danger : Story = {
  args: {
    label: 'Danger Button',
    type: 'danger',
  }
};

export const Disabled : Story = {
  args: {
    label: 'Disabled Button',
    type: 'primary',
    disabled: true,
  }
};

export const Small : Story = {
  args: {
    label: 'Small Button',
    type: 'primary',
    size: 'small',
  }
};

export const Custom : Story = (args:ButtonProps) => (
  <AbvButton {...args} />
);
Custom.args = {
  label: 'Custom Class Button',
  className: 'pink-bg'
}