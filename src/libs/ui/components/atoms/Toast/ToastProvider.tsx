import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import styled from 'styled-components';
import { AbvToast } from './Toast';
import { AddToastParams, ToastContextType, ToastStateType } from './Toast.type';



const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastsContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;
`;

export const AbvToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastStateType[]>([]);

  const addToast = useCallback(({ type, message, content, duration = 5000 }: AddToastParams ) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, type, message, content, duration }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastsContainer>
        {toasts.map((toast) => {
          if (toast.content) {
            return toast.content;
          }
          return(
            <AbvToast
              key={toast.id}
              type={toast.type}
              message={toast.message||""}
              duration={toast.duration}
              onClose={() => setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id))}
          />
          )
        })}
      </ToastsContainer>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
