import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { COLOR_BASE } from '../../../../common/constants';

// Styled Components
const StyledTable = styled.table`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  border-collapse: collapse;
  background-color:  ${COLOR_BASE.TRANSPARENT};
  color: ${COLOR_BASE.ACTIVE};

`;

const StyledThead = styled.thead`
  background-color: ${COLOR_BASE.INACTIVE_BG};
`;

const StyledTh = styled.th<{ minWidth?: string }>`
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  min-width: ${({ minWidth }) => minWidth || 'auto'};
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: ${COLOR_BASE.INACTIVE_BG};
  }
`;

const StyledTd = styled.td<{ minWidth?: string }>`
  padding: 16px;
  border-bottom: 1px solid #eaeaea;
  min-width: ${({ minWidth }) => minWidth || 'auto'};
`;

// Interfaces for Props
interface TableProps {
  className?: string;
  children: ReactNode;
}

interface TableCompoundComponents {
  Head: FC<TableProps>;
  Body: FC<TableProps>;
  Tr: FC<TableProps>;
  Th: FC<{ children: ReactNode; minWidth?: string }>;
  Td: FC<{ children: ReactNode; minWidth?: string }>;
}

// Main Table Component
export const Table: FC<TableProps> & TableCompoundComponents = ({ children, className }) => (
  <StyledTable className={clsx(className)}>
    {children}
  </StyledTable>
);

// Subcomponents
const Head: FC<TableProps> = ({ children, className }) => (
  <StyledThead className={clsx(className)}>
    {children}
  </StyledThead>
);

const Body: FC<TableProps> = ({ children, className }) => (
  <tbody className={clsx(className)}>
    {children}
  </tbody>
);

const Tr: FC<TableProps> = ({ children, className }) => (
  <StyledTr className={clsx(className)}>
    {children}
  </StyledTr>
);

const Th: FC<{ children: ReactNode; minWidth?: string; className?: string }> = ({ children, minWidth, className }) => (
  <StyledTh className={clsx(className)} minWidth={minWidth}>
    {children}
  </StyledTh>
);

const Td: FC<{ children: ReactNode; minWidth?: string; className?: string }> = ({ children, minWidth, className }) => (
  <StyledTd className={clsx(className)} minWidth={minWidth}>
    {children}
  </StyledTd>
);

// Assign compound components
Table.Head = Head;
Table.Body = Body;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;