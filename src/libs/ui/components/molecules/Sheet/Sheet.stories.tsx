import { Meta, StoryObj } from '@storybook/react';
import { Sheet } from './Sheet';
import { AbvButton } from '../../atoms';

const meta: Meta<typeof Sheet> = {
  title: 'Molecules/Sheet',
  component: Sheet,
//   subcomponents: {
//     Trigger: Sheet.Trigger,
//     Content: Sheet.Content,
//     Header: Sheet.Header,
//     Title: Sheet.Title,
//     Description: Sheet.Description,
//     Footer: Sheet.Footer,
//     Close: Sheet.Close,
//   },
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RightSheet: Story = {
  render: (args) => (
    <Sheet>
      <Sheet.Trigger>
        <AbvButton type='primary'>Open Sheet</AbvButton>
      </Sheet.Trigger>
      <Sheet.Content className="w-[400px] sm:w-[540px]" {...args} side="right">
        <Sheet.Header>
          <Sheet.Title>Are you absolutely sure?</Sheet.Title>
          <Sheet.Description>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </Sheet.Description>
        </Sheet.Header>
        <p>
          Additional content can go here.
        </p>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <AbvButton>Cancel</AbvButton>
          </Sheet.Close>
          <AbvButton type="primary">Save changes</AbvButton>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
  args: {},
};

// Historias adicionales para otras posiciones
export const BottomSheet: Story = {
  render: (args) => (
    <Sheet >
      <Sheet.Trigger>
        <AbvButton>Open Bottom Sheet</AbvButton>
      </Sheet.Trigger>
      <Sheet.Content className="h-[300px] sm:h-[400px]" {...args} side="bottom">
        <Sheet.Header>
          <Sheet.Title>Confirm Action</Sheet.Title>
          <Sheet.Description>
            This action requires your confirmation. Please review the details before proceeding.
          </Sheet.Description>
        </Sheet.Header>
        <div>
          This is a bottom-aligned sheet.
        </div>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <AbvButton type="secondary">Cancel</AbvButton>
          </Sheet.Close>
          <AbvButton type="primary">Proceed</AbvButton>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
  args: {},
};

export const LeftSheet: Story = {
  render: (args) => (
    <Sheet >
      <Sheet.Trigger>
        <AbvButton>Open Left Sheet</AbvButton>
      </Sheet.Trigger>
      <Sheet.Content className="w-[300px] sm:w-[400px]" {...args} side="left">
        <Sheet.Header>
          <Sheet.Title>Information</Sheet.Title>
          <Sheet.Description>
            Here you can place any information or actions you want to show in a side sheet.
          </Sheet.Description>
        </Sheet.Header>
        <div>
          This is a left-aligned sheet.
        </div>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <AbvButton type="secondary">Close</AbvButton>
          </Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
  args: {},
};

export const TopSheet: Story = {
  render: (args) => (
    <Sheet >
      <Sheet.Trigger>
        <AbvButton>Open Top Sheet</AbvButton>
      </Sheet.Trigger>
      <Sheet.Content className="h-[200px] sm:h-[300px]" {...args} side="top">
        <Sheet.Header>
          <Sheet.Title>Top Sheet</Sheet.Title>
          <Sheet.Description>
            This sheet slides in from the top of the screen.
          </Sheet.Description>
        </Sheet.Header>
        <div>
          This is a top-aligned sheet.
        </div>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <AbvButton type="secondary">Close</AbvButton>
          </Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
  args: {},
};
