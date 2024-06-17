import styled from "styled-components";
import {
  InputField,
  PhoneMock,
  Tabs,
} from "../../../../../libs/ui/components/organism";
import { adaptAlojamientoToAccommodation } from "../../adapter";
import { AirbnbCard } from "../../component";
import { cabinMock, cardMock, lakeMock } from "../../constanst";
import { Lupe } from "../../component/Icon";
import styles from "./Home.module.css";

const ContainerStyled = styled.div`
  padding: 0px 16px 16px 16px;
`;

export const AirbnbHomeView = () => {
  const cardListData = adaptAlojamientoToAccommodation(cardMock);
  const cabinListData = adaptAlojamientoToAccommodation(cabinMock);
  const lakeListData = adaptAlojamientoToAccommodation(lakeMock);

  return (
    <PhoneMock>
      <ContainerStyled>
        <InputField className={styles.inputField}>
          <InputField.Icon>
            <Lupe />
          </InputField.Icon>
          <InputField.Input placeholder="¿A donde quieres ir?" />
        </InputField>
      </ContainerStyled>

      <Tabs initialActiveTab={0}>
        <Tabs.List>
          <Tabs.Tab index={0} className="airbnb-tab">
            <img
              src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
              alt=""
              width="24"
              height="24"
              />
              Habitaciones
          </Tabs.Tab>
          <Tabs.Tab index={1} className="airbnb-tab">
            <img
              src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              alt=""
              width="24"
              height="24"
            />{" "}
            Cabaña
          </Tabs.Tab>
          <Tabs.Tab index={2} className="airbnb-tab">
            <img
              width={24}
              height={24}
              src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
            />
            Lago
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel index={0}>
            {cardListData.map((card, index) => (
              <AirbnbCard
                key={index}
                image={card.image || ""}
                place={card.place}
                distance={card.distance}
                startDate={card.startDate}
                endDate={card.endDate}
                costPerNight={card.costPerNight}
                isFavorite={card.isFavorite}
              />
            ))}
          </Tabs.Panel>
          <Tabs.Panel index={1}>
            {cabinListData.map((cabin, index) => (
              <AirbnbCard
                key={index}
                image={cabin.image || ""}
                place={cabin.place}
                distance={cabin.distance}
                startDate={cabin.startDate}
                endDate={cabin.endDate}
                costPerNight={cabin.costPerNight}
                isFavorite={cabin.isFavorite}
              />
            ))}
          </Tabs.Panel>
          <Tabs.Panel index={2}>
            {lakeListData.map((cabin, index) => (
              <AirbnbCard
                key={index}
                image={cabin.image || ""}
                place={cabin.place}
                distance={cabin.distance}
                startDate={cabin.startDate}
                endDate={cabin.endDate}
                costPerNight={cabin.costPerNight}
                isFavorite={cabin.isFavorite}
              />
            ))}
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </PhoneMock>
  );
};
