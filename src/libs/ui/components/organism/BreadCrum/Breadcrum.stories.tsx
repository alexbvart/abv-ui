import { Meta, StoryFn } from '@storybook/react';
import { Breadcrumb } from './BreadCrum';

export default {
  title: 'molecules/Breadcrumb.',
  component: Breadcrumb,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = () => (
  <Breadcrumb>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb.</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const Default = Template.bind({});
