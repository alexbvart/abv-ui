import {
  useState,
  createContext,
  useContext,
  FC,
  ReactNode,
  HTMLAttributes,
} from "react";
import styled, { css } from "styled-components";
import clsx from "clsx";
import { COLOR_BASE } from "../../../../common/constants";

// Styled Components
const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabListWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  background-color: #f8f8f8;
  scroll-snap-align: initial;
  scroll-behavior: smooth;
  overflow-x: auto;

  scrollbar-width: none; // Oculta la barra de desplazamiento en Firefox
  &::-webkit-scrollbar {
    display: none; // Oculta la barra de desplazamiento en Chrome, Safari y Edge
  }
`;

const TabButton = styled.button<{ isActive: boolean; className?: string, disabled:boolean }>`
  flex: 1;
  padding: 10px 15px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 14px;

  ${(props) => {
    if (props.className !== "active") {
      return css`
        ${props.className}
      `;
    }

    return css`
      color: ${props.isActive
        ? "var(--color-active)"
        : `${COLOR_BASE.TEXT}`};
      border-bottom-color: ${props.isActive
        ? "var(--color-active)"
        : "var(--color-transparent)"};
    `;
  }}

  ${(props) => {
    if (props.disabled) {
      return css`
        color: var(--color-text-disabled);
        cursor: not-allowed;
      `;
    }
  }}

  &:hover {
    background-color: #e0e0e0;
  }
`;

const TabPanelsWrapper = styled.div`
  padding: 10px 15px;
`;

// Contexts
interface TabsContextProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

interface TabsComponents {
  List: FC<TabListProps>;
  Tab: FC<TabProps>;
  Panels: FC<TabPanelsProps>;
  Panel: FC<TabPanelProps>;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a Tabs component");
  }
  return context;
};

// Component Interfaces
interface TabsProps {
  children: ReactNode;
  initialActiveTab?: number;
}

interface TabListProps {
  children: ReactNode;
  className?: string;
}

interface TabProps {
  className?: string;
  children: ReactNode;
  index: number;
  disabled?: boolean;
}

interface TabPanelsProps {
  children: ReactNode;
}

interface TabPanelProps {
  children: ReactNode;
  index: number;
}

// Components
export const Tabs: FC<TabsProps> & TabsComponents = ({
  children,
  initialActiveTab = 0,
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <TabsContext.Provider value={{ activeTab, onTabChange: handleTabChange }}>
      <TabsWrapper>{children}</TabsWrapper>
    </TabsContext.Provider>
  );
};

const TabList: FC<TabListProps> = ({ children, className }) => {
  return <TabListWrapper className={className}>{children}</TabListWrapper>;
};

const Tab: FC<TabProps & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  index,
  className,
  disabled=false,
  ...rest
}) => {
  const { activeTab, onTabChange } = useTabsContext();

  return (
    <TabButton
      className={clsx({ active: activeTab === index }, className, { disabled: disabled })}
      isActive={activeTab === index}
      onClick={() => onTabChange(index)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </TabButton>
  );
};

const TabPanels: FC<TabPanelsProps> = ({ children }) => {
  return <TabPanelsWrapper>{children}</TabPanelsWrapper>;
};

const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
  const { activeTab } = useTabsContext();
  return activeTab === index ? <div>{children}</div> : null;
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;
