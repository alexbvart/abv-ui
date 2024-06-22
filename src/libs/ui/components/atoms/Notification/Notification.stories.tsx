import { Meta, StoryObj } from "@storybook/react";
import { AbvNotification } from "./Notification";

// Componente de Storybook para AbvNotification
const meta: Meta<typeof AbvNotification> = {
  title: "organism/Notification",
  component: AbvNotification,
    args: {
        type: "success",
    },
};

export default meta;

type Story = StoryObj<typeof AbvNotification>;

// Historia para notificación de éxito
export const SuccessNotification: Story = () => (
  <AbvNotification type="success">
    <AbvNotification.Icon>✔️</AbvNotification.Icon>
    <AbvNotification.Content>
      This is a success notification.
    </AbvNotification.Content>
    <AbvNotification.Actions>
      <button onClick={() => alert("Action clicked")}>Action</button>
    </AbvNotification.Actions>
  </AbvNotification>
);
SuccessNotification.args = {
  type: "success",
};

// Historia para notificación de error
export const ErrorNotification: Story = () => (
  <AbvNotification type="error">
    <AbvNotification.Icon>❌</AbvNotification.Icon>
    <AbvNotification.Content>
      This is an error notification.
    </AbvNotification.Content>
    <AbvNotification.Actions>
      <button onClick={() => alert("Action clicked")}>Action</button>
    </AbvNotification.Actions>
  </AbvNotification>
);
ErrorNotification.args = {
  type: "error",
};

// Historia para notificación de advertencia
export const WarningNotification: Story = () => (
  <AbvNotification type="warning">
    <AbvNotification.Icon>⚠️</AbvNotification.Icon>
    <AbvNotification.Content>
      This is a warning notification.
    </AbvNotification.Content>
    <AbvNotification.Actions>
      <button onClick={() => alert("Action clicked")}>Action</button>
    </AbvNotification.Actions>
  </AbvNotification>
);
WarningNotification.args = {
  type: "warning",
};

// Historia para notificación de información
export const InfoNotification: Story = () => (
  <AbvNotification type="info">
    <AbvNotification.Icon>ℹ️</AbvNotification.Icon>
    <AbvNotification.Content>
      This is an info notification.
    </AbvNotification.Content>
    <AbvNotification.Actions>
      <button onClick={() => alert("Action clicked")}>Action</button>
    </AbvNotification.Actions>
  </AbvNotification>
);
InfoNotification.args = {
  type: "info",
};
