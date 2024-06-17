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

// Styled Components
const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabListWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  background-color: #f8f8f8;
`;

const TabButton = styled.button<{ isActive: boolean; className?: string }>`
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
        : "var(--color-text-base)"};
      border-bottom-color: ${props.isActive
        ? "var(--color-active)"
        : "var(--color-transparent)"};
    `;
  }}

  /* 
  ${(props) => {
    console.log(props.isActive, props.className);
    return props.className !== "active"
      ? css`
          color: var(--color-text-base);
          border-bottom-color: var(--color-transparent);
        `
      : css`
          color: ${props.isActive
            ? "var(--color-active)"
            : "var(--color-text-base)"};
          border-bottom-color: ${props.isActive
            ? "var(--color-active)"
            : "var(--color-trasnparent)"};
        `;
  }} */
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
}

interface TabProps {
  className?: string;
  children: ReactNode;
  index: number;
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

const TabList: FC<TabListProps> = ({ children }) => {
  return <TabListWrapper>{children}</TabListWrapper>;
};

const Tab: FC<TabProps & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  index,
  className,
  ...rest
}) => {
  const { activeTab, onTabChange } = useTabsContext();

  return (
    <TabButton
      className={clsx({ active: activeTab === index }, className)}
      isActive={activeTab === index}
      onClick={() => onTabChange(index)}
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
