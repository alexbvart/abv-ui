// stories/InputField.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';
import { LupeIcon } from '../Icons';

// Metadatos de la historia principal
const meta: Meta<typeof InputField> = {
  title: 'Atoms/InputField',
  component: InputField,
  args: {
    label: 'Username',
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

// Historia básica con solo la etiqueta y el campo de entrada
export const PasswordInput: Story = {
  render: (args) => (
    <InputField >
      <InputField.Label>{args.label}</InputField.Label>
      <InputField.Input placeholder="Enter your username" type='password'/>
    </InputField>
  ),
  args: {
    label: 'Username',
  },
};


// Historia con un icono y un campo de entrada deshabilitado
export const DisabledInput: Story = {
  render: (args) => (
    <InputField label={args.label} icon={<p>9</p>} disabled>
      <InputField.Input placeholder="Disabled input" disabled /> 
      <InputField.Icon><LupeIcon/> </InputField.Icon>
    </InputField>
  ),
  args: {
    label: 'Disabled Username',
  },
};

// Historia con un campo de entrada para la búsqueda
export const SearchField: Story = {
  render: (args) => (
    <InputField label={args.label} icon={<p>5</p>}>
      <InputField.Input placeholder="Search..." />
    </InputField>
  ),
  args: {
    label: 'Search',
  },
};


// Historia con personalización de estilo
export const CustomStyledInput: Story = {
  render: (args) => (
    <InputField label={args.label} className="custom-input-field">
      <InputField.Input placeholder="Custom styled input" />
    </InputField>
  ),
  args: {
    label: 'Custom Styled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Este es un campo de entrada con estilo personalizado utilizando CSS.',
      },
    },
  },
};
