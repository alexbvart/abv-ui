import { Meta, StoryObj } from '@storybook/react';
import { AbvButton } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: AbvButton,
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

export const Custom : Story = {
  args: {
    label: 'Custom Class Button',
    type: 'primary',
    className: 'pink-bg'
  }
};
