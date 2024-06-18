import { useLocation } from "react-router-dom";
import { PhoneMock } from "../../../../../libs/ui/components/organism";

import styled from "styled-components";
import { ProgressBar } from "../../../../../libs/ui/components/atoms/ProgressBar/ProgressBar";
import styles from "./detail.module.css";
import clsx from "clsx";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--bike-color);
  padding: 1rem;
  border-radius: 1rem;
`;

const DetailBikeHeader = styled.div`
  display: flex;
`;

const DetailBikeCopy = styled.div`
  display: flex;
  flex-direction: column;
`;

// Styled component for the title
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: start;
`;

// Styled component for the description
export const Description = styled.p`
  font-size: 14px;
  text-align: start;
`;

// Styled component for the image
export const BikeImage = styled.img`
  display: block;
  margin-right: auto;
  width: 150%;
  margin-left: -170px; 
`;

// Styled component for the card
export const Card = styled.div`
  background-color: #00000022;
  /* border: 1px solid #dee2e6; */
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem 0;
`;

// Styled component for the card title
export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

// Styled component for the card content
export const CardContent = styled.p`
  font-size: 14px;
`;

export const MotoDetail = () => {
  const location = useLocation();
  const { image, model, usageTime, fuelStatus, kilometers, description, flip } =
    location.state;

  return (
    <PhoneMock>
      <DetailContainer>

        <DetailBikeHeader>
          <DetailBikeCopy>
            <Title>{model}</Title>
            <Description>{description}</Description>
          </DetailBikeCopy>

          
          <ProgressBar fill={fuelStatus} className={styles.bike_bar_container}>
            <ProgressBar.Text className={styles.bike_bar_text}>{fuelStatus}%</ProgressBar.Text>
            <ProgressBar.Fill fill={fuelStatus} className={styles.bike_bar_fill} />
          </ProgressBar>
          
          
        </DetailBikeHeader>

        <BikeImage src={image} alt={model} className={clsx("", {
              flipImage: !flip,
            })}
            />

      <DetailBikeHeader className={styles.card_info_container}>
        
        <Card className={styles.bike_custom_card}>
          <CardTitle>Usage time</CardTitle>
          <CardContent>{usageTime}</CardContent>
        </Card>

        <Card className={styles.bike_custom_card}>
          <CardTitle>Distance</CardTitle>
          <CardContent>{kilometers}</CardContent>
        </Card>
      </DetailBikeHeader>
      </DetailContainer>
    </PhoneMock>
  );
};
