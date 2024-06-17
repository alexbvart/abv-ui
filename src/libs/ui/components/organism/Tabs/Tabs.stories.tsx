// Tabs.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: StoryFn = () => (
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

export const Default = Template.bind({});
