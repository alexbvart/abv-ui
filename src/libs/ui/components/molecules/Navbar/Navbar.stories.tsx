import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Molecules/Navbar',
  component: Navbar,
//   subcomponents: {
//     Group: Navbar.Group,
//     Title: Navbar.Title,
//     Content: Navbar.Content,
//     Item: Navbar.Item,
//     Separator: Navbar.Separator,
//   },
};

export default meta;
type Story = StoryObj<typeof meta>;


// Historia por defecto
export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Navbar.Group>
        <Navbar.Title>File</Navbar.Title>
        <Navbar.Content>
          <Navbar.Item>New File</Navbar.Item>
          <Navbar.Item>Open File</Navbar.Item>
          <Navbar.Separator />
          <Navbar.Item>Save File</Navbar.Item>
          <Navbar.Item>Exit</Navbar.Item>
        </Navbar.Content>
      </Navbar.Group>
      <Navbar.Group>
        <Navbar.Title>Edit</Navbar.Title>
        <Navbar.Content>
          <Navbar.Item>Undo</Navbar.Item>
          <Navbar.Item>Redo</Navbar.Item>
          <Navbar.Separator />
          <Navbar.Item>Cut</Navbar.Item>
          <Navbar.Item>Copy</Navbar.Item>
          <Navbar.Item>Paste</Navbar.Item>
        </Navbar.Content>
      </Navbar.Group>
    </Navbar>
  ),
  args: {},
};

// Historia con Navbar expandible
export const Expandable: Story = {
  render: (args) => (
    <Navbar {...args} className="expandable">
      <Navbar.Group>
        <Navbar.Title>Dashboard</Navbar.Title>
        <Navbar.Content>
          <Navbar.Item>Overview</Navbar.Item>
          <Navbar.Item>Stats</Navbar.Item>
          <Navbar.Separator />
          <Navbar.Item>Settings</Navbar.Item>
        </Navbar.Content>
      </Navbar.Group>
      <Navbar.Group>
        <Navbar.Title>Manage</Navbar.Title>
        <Navbar.Content>
          <Navbar.Item>Users</Navbar.Item>
          <Navbar.Item>Products</Navbar.Item>
          <Navbar.Separator />
          <Navbar.Item>Orders</Navbar.Item>
          <Navbar.Item>Reports</Navbar.Item>
        </Navbar.Content>
      </Navbar.Group>
    </Navbar>
  ),
  args: {},
};
