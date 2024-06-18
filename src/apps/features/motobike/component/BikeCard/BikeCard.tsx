import styled from "styled-components";
import { AbvButton, Card } from "../../../../../libs/ui/components/atoms";
import clsx from "clsx";
import styles from "./BikeCard.module.css";
import { useNavigate } from "react-router-dom";
export const BoldText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const GrayLabel = styled.label`
  font-size: 12px;
  color: gray;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

interface BikeCardProps {
  image: string;
  model: string;
  usageTime: string;
  fuelStatus: string;
  kilometers: string;
  description: string;
  flip: boolean;
}

export const BikeCard = ({
  image,
  model,
  usageTime,
  fuelStatus,
  kilometers,
  description,
  flip,
}: BikeCardProps) => {
  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate("detail", {
      state: {
        image,
        model,
        usageTime,
        fuelStatus,
        kilometers,
        description,
        flip,
      },
    });
  };
  return (
    <Card className="bike-card">
      <Card.Header>
        <Card.Title className="bike-title">{model}</Card.Title>
      </Card.Header>

      <Card.Content>
        {image && (
          <Card.Image
            className={clsx("custom-image-ratio moveRight absolute-card", {
              flipImage: flip,
            })}
            image={image}
            alt={model}
            imagePosition="center"
          />
        )}

        <Container>
          <Group>
            <GrayLabel>Usage time:</GrayLabel>
            <BoldText>{usageTime}</BoldText>
          </Group>
          <Group>
            <GrayLabel>Fueld status:</GrayLabel>
            <BoldText>{`${fuelStatus}%`}</BoldText>
          </Group>
          <Group>
            <GrayLabel>Distance:</GrayLabel>
            <BoldText>{kilometers}</BoldText>
          </Group>
        </Container>
      </Card.Content>
      <Card.Footer>
        <AbvButton
          className={styles.card_bike_button}
          onClick={navigateToDetail}
          label="View details"
        ></AbvButton>
      </Card.Footer>
    </Card>
  );
};
