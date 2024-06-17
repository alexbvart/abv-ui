import styled from "styled-components";
import { Card } from "../../../../../libs/ui/components/atoms";
import { formatStringCardDate } from "../../helper";

const AirbnbCardStyle = styled.div`
  padding-bottom: 1.5rem;
`;

const AirbnbFavoriteStyle = styled.div`
  width: max-content;
  padding: 4px 8px;
  background-color: white;
  color: var(--color-text-base);
  border-radius: 50px;
  font-size: 14px;

`;

const AirbnbInfoStyle = styled.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Place = styled.h1`
  font-weight: bold;
  font-size: 14px;
`;

const Distance = styled.h2`
  font-size: 14px;
  color: #666666;
  font-weight: 400;
`;

const StartDate = styled.h3`
  font-size: 14px;
  color: #666666;
  font-weight: 400;
`;

const CostPerNight = styled.h5`
  font-weight: bold;
  font-size: 14px;
`;

interface AirbnbCardProps {
  image: string;
  place: string;
  distance: number;
  startDate: string;
  endDate: string;
  costPerNight: string;
  isFavorite: boolean;
}

export const AirbnbCard = ({
  image,
  place,
  distance,
  startDate,
  endDate,
  costPerNight,
  isFavorite,
}: AirbnbCardProps) => {
  const dateInfo =
    endDate && startDate ? formatStringCardDate(startDate, endDate) : "";
  return (
    <AirbnbCardStyle>
      <Card>
        {isFavorite && (
          <Card.Header>
            <AirbnbFavoriteStyle>Favorito entre húespedes</AirbnbFavoriteStyle>
          </Card.Header>
        )}
        {image && (
          <Card.Image
            image={image}
            alt="Descripción de la imagen"
            imagePosition="center"
            isFull
          />
        )}
      </Card>
      <AirbnbInfoStyle>
        {place && <Place>{place}</Place>}
        {distance && <Distance>{distance / 100} Km de distancia</Distance>}
        {dateInfo && <StartDate>{dateInfo}</StartDate>}
        {costPerNight && (
          <div className="flex">
            <CostPerNight>{`${costPerNight}`}</CostPerNight>
            <Distance>&nbsp; por noche`</Distance>
          </div>
        )}
      </AirbnbInfoStyle>
    </AirbnbCardStyle>
  );
};
