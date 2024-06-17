// Breadcrumb.tsx
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

// Styled Components
const BreadcrumbWrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BreadcrumbListWrapper = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BreadcrumbItemWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const BreadcrumbLinkStyled = styled.a`
  text-decoration: none;
  color: #007aff;
  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparatorStyled = styled.span`
  margin: 0 8px;
  color: #ccc;
`;

const BreadcrumbPageStyled = styled.span`
  color: #888;
`;

interface BreadComponents {
    List: FC<BreadcrumbListProps>;
    Item: FC<BreadcrumbItemProps>;
    Link: FC<BreadcrumbLinkProps>;
    Separator: FC<BreadcrumbSeparatorProps>;
    Page: FC<BreadcrumbPageProps>;
  }

// Component Interfaces
interface BreadcrumbProps {
  children: ReactNode;
}

interface BreadcrumbListProps {
  children: ReactNode;
}

interface BreadcrumbItemProps {
  children: ReactNode;
}

interface BreadcrumbLinkProps {
  href: string;
  children: ReactNode;
}

interface BreadcrumbSeparatorProps {}

interface BreadcrumbPageProps {
  children: ReactNode;
}

// Components
export const Breadcrumb: FC<BreadcrumbProps> & BreadComponents = ({ children }) => (
  <BreadcrumbWrapper>{children}</BreadcrumbWrapper>
);

const BreadcrumbList: FC<BreadcrumbListProps> = ({ children }) => (
  <BreadcrumbListWrapper>{children}</BreadcrumbListWrapper>
);

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children }) => (
  <BreadcrumbItemWrapper>{children}</BreadcrumbItemWrapper>
);

const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({ href, children }) => (
  <BreadcrumbLinkStyled href={href}>{children}</BreadcrumbLinkStyled>
);

const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = () => (
  <BreadcrumbSeparatorStyled>/</BreadcrumbSeparatorStyled>
);

const BreadcrumbPage: FC<BreadcrumbPageProps> = ({ children }) => (
  <BreadcrumbPageStyled>{children}</BreadcrumbPageStyled>
);

Breadcrumb.List = BreadcrumbList;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Separator= BreadcrumbSeparator;
Breadcrumb.Page= BreadcrumbPage;


