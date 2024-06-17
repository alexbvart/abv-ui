import { ReactNode } from "react";

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'custom';

export interface ToastProps {
    type: ToastType;
    message: string;
    duration?: number;
    onClose: () => void;
  }
    
  export type AddToastParams = {
    type: ToastType;
    message?: string;
    content?: ReactNode;
    duration?: number;
  };
  
  export type AddToasRendertParams = {
    render?: ReactNode;
    duration?: number;
  };

  export  type ToastContextType = {
    addToast: (params :AddToastParams) => void;
    addToastRender: (params :AddToasRendertParams) => void;
  };
  
  export type ToastStateType = {
    id: string;
    type: ToastType ;
    message?: string;
    content?: ReactNode;
    duration?: number;
  };