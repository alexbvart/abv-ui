import { Meta, StoryFn } from '@storybook/react';
import { ButtonProps } from './Button.types';
import { AbvButton } from './Button';


export default {
  title: 'Components/Button',
  component: AbvButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    disabled: {
      control: 'boolean'
    },
    className: {
      control: 'text' // Para permitir la entrada de clases CSS personalizadas
    }
  }
} as Meta;

const Template: StoryFn<ButtonProps> = (args:ButtonProps) => <AbvButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  type: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  type: 'primary',
  disabled: true,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  label: 'Custom Class Button',
  type: 'primary',
  className: 'my-custom-class' // Clase CSS personalizada
};
