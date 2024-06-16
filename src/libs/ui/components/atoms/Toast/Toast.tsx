import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import clsx from 'clsx';
import { ToastProps, ToastType } from './Toast.type';



const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const ToastContainer = styled.div<{ type: ToastType; isVisible: boolean; duration: number }>`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  margin: 8px 0;
  animation: ${fadeIn} 0.3s ease-out, ${fadeOut} 0.3s ease-out ${(props) => props.duration - 300}ms;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s;

  ${(props) =>
    props.type === 'success' &&
    css`
      background-color: #e6ffed;
      border-left: 5px solid #52c41a;
    `}

  ${(props) =>
    props.type === 'error' &&
    css`
      background-color: #fff1f0;
      border-left: 5px solid #f5222d;
    `}

  ${(props) =>
    props.type === 'info' &&
    css`
      background-color: #e6f7ff;
      border-left: 5px solid #1890ff;
    `}

  ${(props) =>
    props.type === 'warning' &&
    css`
      background-color: #fffbe6;
      border-left: 5px solid #faad14;
    `}
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  margin-left: auto;
`;

export const AbvToast: React.FC<ToastProps> = ({ type, message, duration = 5000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <ToastContainer type={type} isVisible={true} duration={duration} className={clsx('toast')}>
      <div>{message}</div>
      <CloseButton onClick={onClose} aria-label="Close Toast">
        &times;
      </CloseButton>
    </ToastContainer>
  );
};

