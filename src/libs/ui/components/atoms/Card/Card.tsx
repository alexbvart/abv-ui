// Card.tsx
import { FC, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import clsx from "clsx";

// Propiedades del componente
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

interface CompoundComponents {
  Header: FC<CardHeaderProps>;
  Title: FC<CardTitleProps>;
  Subtitle: FC<CardSubtitleProps>;
  Image: FC<CardImageProps>;
  Content: FC<CardContentProps>;
  Footer: FC<CardActionsProps>;
}

// Estilos del componente utilizando styled-components
const StyledCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

// Componente funcional Card
const Card: FC<CardProps> & CompoundComponents = ({
  className,
  children,
  ...rest
}) => {

  return (
    <StyledCard className={clsx(className)} {...rest}>
      {children}
    </StyledCard>
  );
};

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
const CardHeader: FC<CardHeaderProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
const CardTitle: FC<CardTitleProps> = ({ children, className }) => (
  <h2 className={className}>{children}</h2>
);

interface CardSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: ReactNode;
}
export const StyledSubtitle = styled.p`
  margin-top: 8px;
  color: #666;
  font-size: 14px;
  font-weight: 400;
`;

const CardSubtitle: FC<CardSubtitleProps> = ({ children, className, ...rest }) => (
    <StyledSubtitle className={className} {...rest}>
    {children}
  </StyledSubtitle>
);

type ImagePosition = "top" | "bottom" | "full";
interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  alt?: string;
  imagePosition?: ImagePosition;
}

const ImageContainer = styled.div<{ imagePosition?: ImagePosition }>`
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  ${(props) =>
    props.imagePosition === "full" &&
    css`
      width: 100%;
      height: 100%;
    `}

  ${(props) =>
    ["top", "bottom"].includes(props.imagePosition || "") &&
    css`
      width: 100%;
      max-height: 200px;
    `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardImage: FC<CardImageProps> = ({
  image,
  alt = "Card Image",
  imagePosition = "top",
  className,
}) => (
  <ImageContainer imagePosition={imagePosition} className={className}>
    <Image src={image} alt={alt} />
  </ImageContainer>
);

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
  }
const CardContent = ({ children,className }:CardContentProps) => (
  <div style={{ flex: 1 }} className={className}>{children}</div>
);
interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
  }
const CardActions = ({ children,className }:CardActionsProps) => (
  <div
    style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}
    className={className}
  >
    {children}
  </div>
);

// Asignación de componentes compuestos al componente principal Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardActions;

export default Card;
