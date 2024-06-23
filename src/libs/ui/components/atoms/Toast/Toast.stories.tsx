import { Meta, StoryObj } from '@storybook/react';
import { AbvToast } from './Toast';
import { ToastProps } from './Toast.type';

const meta: Meta<typeof AbvToast> = {
  title: 'Organism/Toast',
  component: AbvToast,
  args: {
    type: 'info',
    message: 'This is an info toast message!',
    duration: 5000,
    onClose: () => alert('Toast closed'), // acción simulada para Storybook
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AbvToast>;

// Historia para un Toast de éxito
export const SuccessToast: Story = {
    render: (args: ToastProps) => <AbvToast {...args} />,
    args: {
      type: 'success',
      message: 'Operation completed successfully!',
    },
  };
  
  // Historia para un Toast de error
  export const ErrorToast: Story = {
    render: (args: ToastProps) => <AbvToast {...args} />,
    args: {
      type: 'error',
      message: 'An error occurred during the operation.',
    },
  };
  
  // Historia para un Toast de información
  export const InfoToast: Story = {
    render: (args: ToastProps) => <AbvToast {...args} />,
    args: {
      type: 'info',
      message: 'Here is some information.',
    },
  };
  
  // Historia para un Toast de advertencia
  export const WarningToast: Story = {
    render: (args: ToastProps) => <AbvToast {...args} />,
    args: {
      type: 'warning',
      message: 'This is a warning message.',
    },
  };
  
  // Historia para un Toast personalizado
  export const CustomToast: Story = {
    render: (args: ToastProps) => <AbvToast {...args} />,
    args: {
      type: 'info',
      message: 'Custom toast message!',
      duration: 10000,
    },
  };
  
  