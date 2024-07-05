import { FC, ReactNode } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { COLOR_BASE } from "../../../../common/constants";

// Styled Components
const StyledTable = styled.table`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  border-collapse: collapse;
  background-color: ${COLOR_BASE.TRANSPARENT};
  color: ${COLOR_BASE.ACTIVE};
`;

const StyledThead = styled.thead`
  background-color: ${COLOR_BASE.INACTIVE_BG};
`;

const StyledTh = styled.th<{ minWidth?: string; clickable?: boolean }>`
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  min-width: ${({ minWidth }) => minWidth || "auto"};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: ${COLOR_BASE.INACTIVE_BG};
  }
`;

const StyledTd = styled.td<{ minWidth?: string; clickable?: boolean }>`
  padding: 16px;
  border-bottom: 1px solid #eaeaea;
  min-width: ${({ minWidth }) => minWidth || "auto"};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
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
  Th: FC<ThProps>;
  Td: FC<ThProps>;
}

// Main Table Component
export const Table: FC<TableProps> & TableCompoundComponents = ({
  children,
  className,
}) => <StyledTable className={clsx(className)}>{children}</StyledTable>;

// Subcomponents
const Head: FC<TableProps> = ({ children, className }) => (
  <StyledThead className={clsx(className)}>{children}</StyledThead>
);

const Body: FC<TableProps> = ({ children, className }) => (
  <tbody className={clsx(className)}>{children}</tbody>
);

const Tr: FC<TableProps> = ({ children, className }) => (
  <StyledTr className={clsx(className)}>{children}</StyledTr>
);

interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children: ReactNode;
  minWidth?: string;
  className?: string;
  onClick?: () => void;
}

const Th: FC<ThProps> = ({
  children,
  minWidth,
  className,
  rowSpan,
  colSpan,
  onClick,
  ...rest
}) => (
  <StyledTh
    className={clsx(className)}
    minWidth={minWidth}
    rowSpan={rowSpan}
    colSpan={colSpan}
    onClick={onClick}
    clickable={!!onClick}
    {...rest}
  >
    {children}
  </StyledTh>
);

interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  minWidth?: string;
  className?: string;
  onClick?: () => void;
}

const Td: FC<TdProps> = ({
  children,
  minWidth,
  className,
  rowSpan,
  colSpan,
  onClick,
  ...rest
}) => (
  <StyledTd
    className={clsx(className)}
    minWidth={minWidth}
    rowSpan={rowSpan}
    colSpan={colSpan}
    onClick={onClick}
    clickable={!!onClick}
    {...rest}
  >
    {children}
  </StyledTd>
);

// Assign compound components
Table.Head = Head;
Table.Body = Body;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
