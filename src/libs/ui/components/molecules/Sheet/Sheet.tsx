import React, {
  FC,
  useState,
  ReactNode,
  useContext,
  createContext,
} from "react";
import styled from "styled-components";
import clsx from "clsx";
import { AbvButton } from "../../atoms";

// Definición de los lados donde se puede posicionar el Sheet
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type Side = (typeof SHEET_SIDES)[number];

// Interfaces para cada componente
interface SheetProps {
  className?: string;
  children: ReactNode;
}

interface SheetChild {
  Trigger: FC<SheetTriggerProps>;
  Content: FC<SheetContentProps>;
  Header: FC<SheetHeaderProps>;
  Title: FC<SheetTitleProps>;
  Description: FC<SheetDescriptionProps>;
  Footer: FC<SheetFooterProps>;
  Close: FC<SheetCloseProps>;
}

interface SheetTriggerProps {
  className?: string;
  children: ReactNode;
}

interface SheetContentProps {
  className?: string;
  children: ReactNode;
  side?: Side;
}

interface SheetHeaderProps {
  className?: string;
  children: ReactNode;
}

interface SheetTitleProps {
  className?: string;
  children: ReactNode;
}

interface SheetDescriptionProps {
  className?: string;
  children: ReactNode;
}

interface SheetFooterProps {
  className?: string;
  children: ReactNode;
}

interface SheetCloseProps {
  asChild?: boolean;
  children: ReactNode;
}

// Crear un contexto para manejar la visibilidad del Sheet
const SheetContext = createContext<{
  isOpen: boolean;
  close: () => void;
  open: () => void;
} | null>(null);

// Estilos base para el Sheet
const StyledSheet = styled.div<{ side: Side, isOpen: boolean }>`
  position: fixed;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  padding: 1rem;

  ${({ side }) => {

    if (side === 'top' || side === 'bottom') {
      return `
        width: 100vw;
        height: 100%;
      `;
    } 
    if (side === 'left' || side === 'right') {
      return `
        width: 100%;
        height: 100vh;
      `;
    }
  }}

  ${({ side }) => side === 'top' ? 'top' : side === 'bottom' ? 'bottom' : side === 'left' ? 'left' : 'right'}: 0;
  margin: 0;
  max-width: ${({ side }) => (side === 'left' || side === 'right') ? '540px' : 'none'};
  max-height: ${({ side }) => (side === 'top' || side === 'bottom') ? '60vh' : 'none'};
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transform: ${({ side, isOpen }) => isOpen ? 'translate(0)' : side === 'top' ? 'translateY(-100%)' : side === 'bottom' ? 'translateY(100%)' : side === 'left' ? 'translateX(-100%)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const StyledOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const StyledSheetHeader = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const StyledSheetTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const StyledSheetDescription = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #666;
`;

const StyledSheetFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`;

// Componente principal `Sheet`
export const Sheet: FC<SheetProps> & SheetChild = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contextValue = { isOpen, close: () => setIsOpen(false), open: () => setIsOpen(true)};
  return (
    <SheetContext.Provider value={contextValue}>
    <StyledOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      {children}
    </SheetContext.Provider>
  );
};

// Componente `SheetTrigger` para abrir el `Sheet`
const SheetTrigger: FC<SheetTriggerProps> = ({ children, className }) => {
  const context = useContext(SheetContext);
  if (!context) throw new Error("SheetTrigger must be used within a Sheet");

  const handleClick = () => {
    context.open();
  };

 // Si children es un botón o un div, agregamos el onClick para abrir el Sheet
 if (React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      className: clsx((children as React.ReactElement).props.className, className),
      onClick: () => {
        if ((children as React.ReactElement).props.onClick) (children as React.ReactElement).props.onClick();
        handleClick();
      },
    });
}
  
  return (
    <AbvButton
      type="secondary"
      className={clsx(className)}
      onClick={() => context.open()}
    >
      {children}
    </AbvButton>
  );
};

// Componente `SheetContent` para el contenido del `Sheet`
const SheetContent: FC<SheetContentProps> = ({
  side = "right",
  children,
  className,
}) => {
    const context = useContext(SheetContext);
    if (!context) throw new Error("SheetTrigger must be used within a Sheet");
  return (
      <StyledSheet side={side} isOpen={context.isOpen} className={clsx(className)}>
        {children}
      </StyledSheet>
  );
};

// Componente `SheetHeader` para el encabezado del `Sheet`
const SheetHeader: FC<SheetHeaderProps> = ({ children, className }) => (
  <StyledSheetHeader className={clsx(className)}>{children}</StyledSheetHeader>
);

// Componente `SheetTitle` para el título del `Sheet`
const SheetTitle: FC<SheetTitleProps> = ({ children, className }) => (
  <StyledSheetTitle className={clsx(className)}>{children}</StyledSheetTitle>
);

// Componente `SheetDescription` para la descripción del `Sheet`
const SheetDescription: FC<SheetDescriptionProps> = ({
  children,
  className,
}) => (
  <StyledSheetDescription className={clsx(className)}>
    {children}
  </StyledSheetDescription>
);

// Componente `SheetFooter` para el pie de página del `Sheet`
const SheetFooter: FC<SheetFooterProps> = ({ children, className }) => (
  <StyledSheetFooter className={clsx(className)}>{children}</StyledSheetFooter>
);

// Componente `SheetClose` para cerrar el `Sheet`
const SheetClose: FC<SheetCloseProps> = ({ children, asChild = false }) => {
  const context = useContext(SheetContext);
  if (!context) throw new Error("SheetClose must be used within a Sheet");
  return React.cloneElement(
    React.Children.only(children) as React.ReactElement,
    {
      onClick: () => context.close(),
    }
  );
};

// Asignar los subcomponentes al componente principal
Sheet.Trigger = SheetTrigger;
Sheet.Content = SheetContent;
Sheet.Header = SheetHeader;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;
Sheet.Footer = SheetFooter;
Sheet.Close = SheetClose;
