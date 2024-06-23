// src/components/Card/Card.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { AbvButton } from '../../atoms';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Historia básica del componente Card
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Image
        image="https://images.unsplash.com/photo-1718152220007-6fb2c02fec95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D"
        alt="Placeholder Image"
        imagePosition="center"
      />
      <Card.Content>
        This is the card content.
      </Card.Content>
      <Card.Footer>
        <AbvButton label='Action' />
      </Card.Footer>
    </Card>
  ),
};

// Historia con diferentes combinaciones de componentes
export const WithImageTop: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Image
        image="https://images.unsplash.com/photo-1718054970826-36027982ba4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D"
        alt="Placeholder Image"
        imagePosition="top"
      />
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Content>
        This is the card content.
      </Card.Content>
      <Card.Footer>
        <AbvButton label='Action' />
      </Card.Footer>
    </Card>
  ),
};

export const WithFullImageBackground: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Image
        image="https://plus.unsplash.com/premium_photo-1718639707656-f761e6b97a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
        alt="Placeholder Image"
        isFull
      />
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Content>
        This is the card content over a full image background.
      </Card.Content>
    </Card>
  ),
};

export const NoImage: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
      </Card.Header>
      <Card.Content>
        This is the card content without an image.
      </Card.Content>
      <Card.Footer>
      <AbvButton label='Action' />
      </Card.Footer>
    </Card>
  ),
};

export const CustomFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Content>
        This is the card content with a custom footer.
      </Card.Content>
      <Card.Footer>
      <AbvButton label='Cancel' type='danger' />
      <AbvButton label='Save' />
      </Card.Footer>
    </Card>
  ),
};
