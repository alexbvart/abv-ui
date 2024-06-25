import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { COLOR_BASE } from '../../../../common/constants';
/**
 * Estilos para el Navbar
 */
const StyledNavbar = styled.nav`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  background-color: #faf7f7;
  @media (max-width: 768px) {
    width: 60px;
    & > div {
      display: none;
    }
  }
`;

const StyledNavbarGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledNavbarTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 16px 0;
  padding-left: 16px;
`;

const StyledNavbarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNavbarItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR_BASE.ACTIVE};;
;
  }
`;

const StyledNavbarSeparator = styled.hr`
  margin: 10px 16px;
  border: 0;
  border-top: 1px solid #444;
`;

// Interfaces para los componentes
interface NavbarProps {
  className?: string;
  children: ReactNode;
}

interface NavbarCompoundComponents {
  Group: FC<NavbarProps>;
  Title: FC<{ children: ReactNode; className?: string }>;
  Content: FC<NavbarProps>;
  Item: FC<{ children: ReactNode; className?: string }>;
  Separator: FC;
}

/**
 * Componente principal de Navbar
 */
export const Navbar: FC<NavbarProps> & NavbarCompoundComponents = ({ children, className }) => (
  <StyledNavbar className={clsx(className)}>
    {children}
  </StyledNavbar>
);

// Subcomponentes
const Group: FC<NavbarProps> = ({ children, className }) => (
  <StyledNavbarGroup className={clsx(className)}>
    {children}
  </StyledNavbarGroup>
);

const Title: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <StyledNavbarTitle className={clsx(className)}>
    {children}
  </StyledNavbarTitle>
);

const Content: FC<NavbarProps> = ({ children, className }) => (
  <StyledNavbarContent className={clsx(className)}>
    {children}
  </StyledNavbarContent>
);

const Item: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <StyledNavbarItem className={clsx(className)}>
    {children}
  </StyledNavbarItem>
);

const Separator: FC = () => <StyledNavbarSeparator />;

// Asignar los subcomponentes al componente principal
Navbar.Group = Group;
Navbar.Title = Title;
Navbar.Content = Content;
Navbar.Item = Item;
Navbar.Separator = Separator;

