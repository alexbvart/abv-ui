// Card.tsx
import { FC, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import clsx from "clsx";

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
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  min-height: 300px;
  min-width: 300px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
const ContentContainer = styled.div`
  position: relative;
  padding: 16px;
  width: 100%;
  height: max-content;
  min-height: 300px;
  min-width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 4px;

  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
// Componente funcional Card
const Card: FC<CardProps> & CompoundComponents = ({
  className,
  children,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      <ContentContainer className={clsx(className)}>
        {children}
      </ContentContainer>
    </StyledCard>
  );
};

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const StyledHeader = styled.div`
  justify-content: flex-start;
  margin-bottom: auto;
  /* flex: 1; */
`;

const CardHeader: FC<CardHeaderProps> = ({ className, children }) => (
  <StyledHeader className={className}>{children}</StyledHeader>
);

interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const StyledTitle = styled.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
`;

const CardTitle: FC<CardTitleProps> = ({ children, className }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
);

interface CardSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: ReactNode;
}
export const StyledSubtitle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;

const CardSubtitle: FC<CardSubtitleProps> = ({
  children,
  className,
  ...rest
}) => (
  <StyledSubtitle className={className} {...rest}>
    {children}
  </StyledSubtitle>
);

type ImagePosition = "top" | "bottom" | "center" | "full";
interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  alt?: string;
  imagePosition?: ImagePosition;
  isFull?: boolean;
}

const ImageContainer = styled.div<{
  imagePosition?: ImagePosition;
  isFull?: boolean;
}>`
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  z-index: -1; // Coloca la imagen detrás del contenido

  ${(props) =>
    props.isFull &&
    css`
      width: 100%;
      height: 100%;
      position: absolute;
    `}
`;

const Image = styled.img<{ imagePosition?: ImagePosition; isFull?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${(props) =>
    !props.isFull &&
    ["top", "bottom", "center"].includes(props.imagePosition || "") &&
    css`
      max-height: 200px;
      border-radius: 8px;
      object-fit: cover;
      object-position: center ${props.imagePosition};
    `}
`;

const CardImage: FC<CardImageProps> = ({
  image,
  alt = "Card Image",
  imagePosition = "center",
  className,
  isFull = false,
}) => (
  <ImageContainer
    imagePosition={imagePosition}
    isFull={isFull}
    className={className}
  >
    <Image
      src={image}
      alt={alt}
      isFull={isFull}
      imagePosition={imagePosition}
    />
  </ImageContainer>
);

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
const StyledCardContent = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  text-align: left;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
`;
const CardContent = ({ children, className }: CardContentProps) => (
  <StyledCardContent className={className}>{children}</StyledCardContent>
);
interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
const StyledCardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 8px;
`;
const CardActions = ({ children, className }: CardActionsProps) => (
  <StyledCardActions className={className}>{children}</StyledCardActions>
);

// Asignación de componentes compuestos al componente principal Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardActions;

export default Card;
