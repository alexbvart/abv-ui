// src/components/Menubar/Menubar.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Menubar } from './MenuBar';

const meta: Meta<typeof Menubar> = {
  title: 'Molecules/Menubar',
  component: Menubar,
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historia básica del componente Menubar con un menú simple
export const Default: Story = {
  render: (args) => (
    <Menubar {...args}>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New File</Menubar.Item>
          <Menubar.Item>Open File</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Save File</Menubar.Item>
          <Menubar.Item>Exit</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Cut</Menubar.Item>
          <Menubar.Item>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

// Historia del Menubar con atajos de teclado
export const WithShortcuts: Story = {
  render: (args) => (
    <Menubar {...args}>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New File<Menubar.Shortcut>Ctrl+N</Menubar.Shortcut></Menubar.Item>
          <Menubar.Item>Open File<Menubar.Shortcut>Ctrl+O</Menubar.Shortcut></Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Save File<Menubar.Shortcut>Ctrl+S</Menubar.Shortcut></Menubar.Item>
          <Menubar.Item>Exit<Menubar.Shortcut>Alt+F4</Menubar.Shortcut></Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo<Menubar.Shortcut>Ctrl+Z</Menubar.Shortcut></Menubar.Item>
          <Menubar.Item>Redo<Menubar.Shortcut>Ctrl+Y</Menubar.Shortcut></Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Cut<Menubar.Shortcut>Ctrl+X</Menubar.Shortcut></Menubar.Item>
          <Menubar.Item>Copy<Menubar.Shortcut>Ctrl+C</Menubar.Shortcut></Menubar.Item>
          <Menubar.Item>Paste<Menubar.Shortcut>Ctrl+V</Menubar.Shortcut></Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

// Historia del Menubar con múltiples menús
export const MultipleMenus: Story = {
  render: (args) => (
    <Menubar {...args}>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New File</Menubar.Item>
          <Menubar.Item>Open File</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Save File</Menubar.Item>
          <Menubar.Item>Exit</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Undo</Menubar.Item>
          <Menubar.Item>Redo</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Cut</Menubar.Item>
          <Menubar.Item>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Zoom In</Menubar.Item>
          <Menubar.Item>Zoom Out</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Reset Zoom</Menubar.Item>
          <Menubar.Item>Full Screen</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Help</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Documentation</Menubar.Item>
          <Menubar.Item>About</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

// Historia del Menubar con contenido personalizado
export const CustomContent: Story = {
  render: (args) => (
    <Menubar {...args}>
      <Menubar.Menu>
        <Menubar.Trigger>Custom</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            Custom Item 1
            <Menubar.Shortcut>Ctrl+1</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Custom Item 2
            <Menubar.Shortcut>Ctrl+2</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>
            Custom Item 3
            <Menubar.Shortcut>Ctrl+3</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};
