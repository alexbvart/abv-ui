// ToastStory.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AbvToast } from './Toast';
import { AbvToastProvider, useToast } from './ToastProvider';
import { AbvNotification } from '../Notification';
import { AbvButton } from '../Button';
import { Input } from '../Input';

const meta: Meta = {
  title: 'Organism/ToastHook',
  component: AbvToastProvider,
};

export default meta;


type Story = StoryObj<typeof AbvToast>;

const ToastDemo: React.FC = () => {
  const { addToast, addToastRender } = useToast();

  const handleShowToast = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
    addToast({ type, message });
  };

  const handleShowCustomToast = () => {
    addToastRender({
      render: (
        <AbvNotification type="info" onClose={() => {}}>
          <AbvNotification.Icon>ℹ️</AbvNotification.Icon>
          <AbvNotification.Content>Here is some custom information.</AbvNotification.Content>
        </AbvNotification>
      ),
    });
  };

  const handleShowFieldToast = () => {
    addToastRender({
      render: (
        <Input type="text" placeholder="Enter your name" onChange={() => {}} value=''/>
      ),
    });
  };

  return (
    <div>
      <AbvButton onClick={() => handleShowToast('success', 'This is a success message!')}>
        Show Success Toast
      </AbvButton>
      <AbvButton onClick={() => handleShowToast('error', 'This is an error message!')}>
        Show Error Toast
      </AbvButton>
      <AbvButton onClick={() => handleShowToast('info', 'This is an info message!')}>
        Show Info Toast
      </AbvButton>
      <AbvButton onClick={() => handleShowToast('warning', 'This is a warning message!')}>
        Show Warning Toast
      </AbvButton>
      <AbvButton onClick={handleShowCustomToast}>
        Show Custom Toast
      </AbvButton>
      <AbvButton onClick={handleShowFieldToast}>
        Show Field Toast
      </AbvButton>
    </div>
  );
};

// Historia para el hook useToast
export const Default: Story = () => (
  <AbvToastProvider>
    <ToastDemo />
  </AbvToastProvider>
);
Default.args = {};