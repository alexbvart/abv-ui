import { useLocation } from "react-router-dom";
import { PhoneMock } from "../../../../../libs/ui/components/organism";

import styled from "styled-components";
import styles from "./detail.module.css";
import clsx from "clsx";
import { ProgressBar } from "../../../../../libs/ui/components/atoms/ProgressBar";

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

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: start;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: start;
`;

export const BikeImage = styled.img`
  display: block;
  margin-right: auto;
  width: 150%;
  margin-left: -170px;
`;

export const Card = styled.div`
  background-color: #00000022;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem 0;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

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
            <ProgressBar.Text className={styles.bike_bar_text}>
              {fuelStatus}%
            </ProgressBar.Text>
            <ProgressBar.Fill
              fill={fuelStatus}
              className={styles.bike_bar_fill}
            />
          </ProgressBar>
        </DetailBikeHeader>

        <BikeImage
          src={image}
          alt={model}
          className={clsx("", {
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
