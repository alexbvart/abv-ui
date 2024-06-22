import React from 'react';
import styled, { css } from 'styled-components';
import clsx from 'clsx';

// Styled Components
const NotificationContainer = styled.div<{ type: NotificationType }>`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  margin: 8px 0;
  display: flex;
  align-items: center;

  ${(props) =>
    props.type === 'success' &&
    css`
      background-color: #e6ffed;
      border: 1px solid #b7eb8f;
      color: #237804;
    `}

  ${(props) =>
    props.type === 'error' &&
    css`
      background-color: #fff1f0;
      border: 1px solid #ffa39e;
      color: #cf1322;
    `}

  ${(props) =>
    props.type === 'warning' &&
    css`
      background-color: #fff7e6;
      border: 1px solid #ffd591;
      color: #d48806;
    `}

  ${(props) =>
    props.type === 'info' &&
    css`
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
      color: #096dd9;
    `}
`;

const NotificationIcon = styled.div`
  margin-right: 12px;
  font-size: 24px;
`;

const NotificationContent = styled.div`
  flex-grow: 1;
`;

const NotificationActions = styled.div`
  margin-left: 12px;
  display: flex;
  gap: 8px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
`;

// Types
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

type NotificationProps = {
  type: NotificationType;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
};

type NotificationIconProps = {
  children: React.ReactNode;
};

type NotificationContentProps = {
  children: React.ReactNode;
};

type NotificationActionsProps = {
  children: React.ReactNode;
};

// Main Component
export const AbvNotification: React.FC<NotificationProps> & {
  Icon: React.FC<NotificationIconProps>;
  Content: React.FC<NotificationContentProps>;
  Actions: React.FC<NotificationActionsProps>;
} = ({ type, onClose, className, children }) => {
  return (
    <NotificationContainer type={type} className={clsx('notification', className)}>
      {children}
      {onClose && (
        <CloseButton onClick={onClose} aria-label="Close Notification">
          &times;
        </CloseButton>
      )}
    </NotificationContainer>
  );
};

// Compound Components
const Icon: React.FC<NotificationIconProps> = ({ children }) => {
  return <NotificationIcon>{children}</NotificationIcon>;
};

const Content: React.FC<NotificationContentProps> = ({ children }) => {
  return <NotificationContent>{children}</NotificationContent>;
};

const Actions: React.FC<NotificationActionsProps> = ({ children }) => {
  return <NotificationActions>{children}</NotificationActions>;
};

// Assign compound components to the main component
AbvNotification.Icon = Icon;
AbvNotification.Content = Content;
AbvNotification.Actions = Actions;

