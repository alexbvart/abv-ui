import styled from "styled-components";
import { PhoneMock, Tabs } from "../../../../../libs/ui/components/organism";
import { bikeAdapter } from "../../adapter";
import { BikeCard } from "../../component/BikeCard/BikeCard";
import { adventureBikes, cruiserBikes, sportBikes } from "../../constants";
import { Lupe } from "../../../airbnb/component/Icon";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

export const Icon = styled.i`
  /* Ajusta esto a tus necesidades */
`;

export const MotoHome = () => {
  const adventureBikesList = bikeAdapter(adventureBikes);
  const sportBikesList = bikeAdapter(sportBikes);
  const cruiserBikesList = bikeAdapter(cruiserBikes);

  const combinedBikesList = [
    ...adventureBikesList,
    ...sportBikesList,
    ...cruiserBikesList,
  ];
  combinedBikesList.sort(() => Math.random() - 0.5);
  const randomEightBikes = combinedBikesList.slice(0, 8);

  return (
    <PhoneMock>
      <Container>
        <Text>Categories</Text>
        <Icon><Lupe/></Icon>
      </Container>

      <Tabs initialActiveTab={0}>
        <Tabs.List className="bike-stickyNavbar">
          <Tabs.Tab index={0} className="bike-tab">
            All
          </Tabs.Tab>
          <Tabs.Tab index={1} className="bike-tab">
            Sport
          </Tabs.Tab>
          <Tabs.Tab index={2} className="bike-tab">
            Cruiser
          </Tabs.Tab>
          <Tabs.Tab index={3} className="bike-tab">
            Adventure
          </Tabs.Tab>
          <Tabs.Tab index={4} className="bike-tab" disabled>
            Trial
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel index={0}>
            {randomEightBikes.map((bike, index) => (
              <BikeCard
                key={index}
                image={bike.image || ""}
                model={bike.model}
                usageTime={bike.usageTime}
                fuelStatus={bike.fuelStatus}
                kilometers={bike.kilometers}
                description={bike.description}
                flip={bike.flip}
              />
            ))}
          </Tabs.Panel>

          <Tabs.Panel index={1}>
            {sportBikesList.map((bike, index) => (
              <BikeCard
                key={index}
                image={bike.image || ""}
                model={bike.model}
                usageTime={bike.usageTime}
                fuelStatus={bike.fuelStatus}
                kilometers={bike.kilometers}
                description={bike.description}
                flip={bike.flip}
              />
            ))}
          </Tabs.Panel>

          <Tabs.Panel index={2}>
            {cruiserBikesList.map((bike, index) => (
              <BikeCard
                key={index}
                image={bike.image || ""}
                model={bike.model}
                usageTime={bike.usageTime}
                fuelStatus={bike.fuelStatus}
                kilometers={bike.kilometers}
                description={bike.description}
                flip={bike.flip}
              />
            ))}
          </Tabs.Panel>
          <Tabs.Panel index={3}>
            {adventureBikesList.map((bike, index) => (
              <BikeCard
                key={index}
                image={bike.image || ""}
                model={bike.model}
                usageTime={bike.usageTime}
                fuelStatus={bike.fuelStatus}
                kilometers={bike.kilometers}
                description={bike.description}
                flip={bike.flip}
              />
            ))}
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </PhoneMock>
  );
};
