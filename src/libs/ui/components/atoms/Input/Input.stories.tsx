// src/components/Input/Input.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
      description: 'Tipo de input (text, password, email, etc.)',
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del input',
      defaultValue: 'Enter text here',
    },
    value: {
      control: 'text',
      description: 'Valor del input',
      defaultValue: '',
    },
    onChange: {
      action: 'changed',
      description: 'Función llamada cuando el valor cambia',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historia básica del componente Input
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          args.onChange(e);
        }}
      />
    );
  },
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    value: '',
  },
};

// Historia del input con tipo "password"
export const PasswordInput: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          args.onChange(e);
        }}
      />
    );
  },
  args: {
    type: 'password',
    placeholder: 'Enter password',
    value: '',
  },
};

// Historia del input con tipo "email"
export const EmailInput: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          args.onChange(e);
        }}
      />
    );
  },
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    value: '',
  },
};

// Historia del input con tipo "number"
export const NumberInput: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          args.onChange(e);
        }}
      />
    );
  },
  args: {
    type: 'number',
    placeholder: 'Enter a number',
    value: '',
  },
};

// Historia del input con un valor predefinido
export const PreFilledInput: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          args.onChange(e);
        }}
      />
    );
  },
  args: {
    type: 'text',
    placeholder: 'Pre-filled input',
    value: 'Hello, World!',
  },
};
