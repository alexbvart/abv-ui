import { useState, FC, ReactNode } from "react";
import styled from "styled-components";

const AccordionItemContainer = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const AccordionHeader = styled.div`
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const AccordionBody = styled.div`
  padding: 10px;
  background-color: white;
`;

interface AccordionProps {
  children: ReactNode;
}
interface AccordionItemChild {
  Item: FC<AccordionItemProps>;
}

export const AbvAccordion: FC<AccordionProps> & AccordionItemChild = ({
  children,
}) => <>{children}</>;

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}
const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <AccordionItemContainer>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </AccordionHeader>
      {isOpen && <AccordionBody>{children}</AccordionBody>}
    </AccordionItemContainer>
  );
};
AbvAccordion.Item = AccordionItem;
