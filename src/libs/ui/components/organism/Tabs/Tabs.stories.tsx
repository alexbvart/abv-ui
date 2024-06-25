// Tabs.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta : Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const DefaultTab: Story = () => (
  <Tabs initialActiveTab={0}>
    <Tabs.List>
      <Tabs.Tab index={0}>Home</Tabs.Tab>
      <Tabs.Tab index={1}>Profile</Tabs.Tab>
      <Tabs.Tab index={2}>Settings</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel index={0}>Welcome to the Home page</Tabs.Panel>
      <Tabs.Panel index={1}>Profile information here</Tabs.Panel>
      <Tabs.Panel index={2}>Adjust your settings</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);
DefaultTab.args = {
  initialActiveTab: 0,
};

