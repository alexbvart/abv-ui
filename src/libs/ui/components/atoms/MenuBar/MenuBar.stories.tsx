import { Meta, StoryFn } from '@storybook/react';
import { Menubar } from './MenuBar';

export default {
  title: 'Components/Menubar',
  component: Menubar,
} as Meta;

const Template: StoryFn = () => (
  <Menubar>
    <Menubar.Menu>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Item>
          New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
        </Menubar.Item>
        <Menubar.Item>New Window</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Share</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Print</Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>
  </Menubar>
);

export const Default = Template.bind({});
