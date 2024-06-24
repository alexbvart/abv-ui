// Menubar.tsx
import { FC, ReactNode } from "react";
import styled from "styled-components";

// Styled Components
const MenubarWrapper = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const Menu = styled.div`
  position: relative;
  display: inline-block;
`;

const Trigger = styled.button`
  background: none;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Content = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  ${Menu}:hover & {
    display: block;
  }
`;

const Item = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Separator = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 5px 0;
`;

const Shortcut = styled.span`
  float: right;
  color: #888;
`;

interface MenubarComponents {
  Menu: FC<MenubarMenuProps>;
  Trigger: FC<MenubarTriggerProps>;
  Content: FC<MenubarContentProps>;
  Item: FC<MenubarItemProps>;
  Separator: FC;
  Shortcut: FC<MenubarShortcutProps>;
}

// Component Interfaces
interface MenubarProps {
  children: ReactNode;
}

interface MenubarMenuProps {
  children: ReactNode;
}

interface MenubarTriggerProps {
  children: ReactNode;
}

interface MenubarContentProps {
  children: ReactNode;
}

interface MenubarItemProps {
  children: ReactNode;
}

interface MenubarShortcutProps {
  children: ReactNode;
}

// Components
export const Menubar: FC<MenubarProps> & MenubarComponents = ({ children }) => (
  <MenubarWrapper>{children}</MenubarWrapper>
);

const MenubarMenu: FC<MenubarMenuProps> = ({ children }) => (
  <Menu>{children}</Menu>
);

const MenubarTrigger: FC<MenubarTriggerProps> = ({ children }) => (
  <Trigger>{children}</Trigger>
);

const MenubarContent: FC<MenubarContentProps> = ({ children }) => (
  <Content>{children}</Content>
);

const MenubarItem: FC<MenubarItemProps> = ({ children }) => (
  <Item>{children}</Item>
);

const MenubarSeparator: FC = () => <Separator />;

const MenubarShortcut: FC<MenubarShortcutProps> = ({ children }) => (
  <Shortcut>{children}</Shortcut>
);

Menubar.Menu = MenubarMenu;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Item = MenubarItem;
Menubar.Separator = MenubarSeparator;
Menubar.Shortcut = MenubarShortcut;
