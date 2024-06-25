import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { COLOR_BASE } from '../../../../common/constants';

// Contexto para el estado del Toggle
export interface ToggleContextType {
  isOn: boolean;
  toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Hook para acceder al contexto
const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('Toggle components must be used within a <Toggle />');
  }
  return context;
};

// Estilos del Toggle
const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const SwitchStyled = styled.div<{ isOn: boolean }>`
  width: 50px;
  height: 25px;
  background-color: ${(props) => (props.isOn ? `${COLOR_BASE.INACTIVE}` : `${COLOR_BASE.ACTIVE}`)};
  border-radius: 25px;
  position: relative;
  transition: background-color 0.3s;
  position: relative;
`;

const KnobStyled = styled.div<{ isOn: boolean }>`
  width: 21px;
  height: 21px;
  background-color: #f8f4f4;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isOn ? 'calc(100% - 21px)' : '2px')};
  transition: left 0.3s;
`;

// Componente principal Toggle
interface ToggleProps {
  defaultOn?: boolean;
  onToggle?: (isOn: boolean) => void;
  className?: string;
  children?: ReactNode;
}
interface ToogleChild {
    Switch : FC<SwitchProps>;
    Knob : FC<KnobProps>;
}

export const Toggle: React.FC<ToggleProps> & ToogleChild = ({ defaultOn = false, onToggle, className, children }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const toggle = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
    if (onToggle) {
      onToggle(newIsOn);
    }
  };

  const defaultChildren = (
    <>
      <Toggle.Switch />
      <Toggle.Knob />
    </>
  );

  return (
    <ToggleContext.Provider value={{ isOn, toggle }}>
      <ToggleContainer className={clsx('toggle-container', className)} onClick={toggle}>
        {children || defaultChildren}
      </ToggleContainer>
    </ToggleContext.Provider>
  );
};

interface SwitchProps {
    className?: string;
}
const Switch = ({ className }: SwitchProps) => {
  const { isOn } = useToggleContext();
  return <SwitchStyled className={clsx('toggle-switch', className)} isOn={isOn} />;
};

interface KnobProps {
    className?: string;
}
const Knob = ({ className }: KnobProps) => {
  const { isOn } = useToggleContext();
  return <KnobStyled className={clsx('toggle-knob', className)} isOn={isOn} />;
};

Toggle.Switch = Switch;
Toggle.Knob = Knob;

