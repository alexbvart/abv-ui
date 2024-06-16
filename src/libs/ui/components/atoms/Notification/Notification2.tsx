import { FC } from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div<{ type: string }>`
  background-color: ${({ type }) => getColor(type)};
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const getColor = (type: string) => {
  switch (type) {
    case 'info':
      return '#2196f3';
    case 'success':
      return '#4caf50';
    case 'warning':
      return '#ff9800';
    case 'error':
      return '#f44336';
    default:
      return '#2196f3';
  }
};

export const AbvNotificationItem: FC<{ type: string; message: string }> = ({ type, message }) => (
  <NotificationContainer type={type}>
    {message}
  </NotificationContainer>
);

