import { Meta,  StoryObj } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

// Componente de Storybook para ProgressBar
const meta: Meta<typeof ProgressBar> ={
  title: 'Atoms/ProgressBar', // Ajusta la ruta según la estructura de tu proyecto
  component: ProgressBar,
  args: {
    fill: 50, // Valor predeterminado del llenado para las historias
  },
  argTypes: {
    fill: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
      description: 'Valor porcentual',
      defaultValue: 50,
    },
  },
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof ProgressBar>;

// Historia básica del ProgressBar
export const BasicProgressBar: Story = (args:ProgressBarProps) => <ProgressBar {...args} />;
BasicProgressBar.args = {
    fill: 50,
};

// Historia del ProgressBar con texto personalizado
export const ProgressBarWithCustomText: Story = (args:ProgressBarProps) => (
  <ProgressBar {...args}>
    <ProgressBar.Text>{`${args.fill}% complete`}</ProgressBar.Text>
    <ProgressBar.Fill fill={args.fill} />
  </ProgressBar>
);
ProgressBarWithCustomText.args = {
    fill: 50,
};

// Historia del ProgressBar sin texto
export const ProgressBarWithoutText: Story = (args:ProgressBarProps) => <ProgressBar {...args} />;
ProgressBarWithoutText.args = {
    fill: 50,
};

// Historia del ProgressBar con estilo diferente
export const StyledProgressBar: Story = (args:ProgressBarProps) => (
  <ProgressBar {...args}>
    <ProgressBar.Fill fill={args.fill} />
  </ProgressBar>
);
StyledProgressBar.args = {
    fill: 50,
};
