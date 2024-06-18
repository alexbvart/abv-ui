interface BikeInput {
  model: string;
  usageTime: number;
  fuelStatus: number;
  kilometers: number;
  description: string;
  image?: string;
  flip?: boolean;
}

interface BikeOutput {
  model: string;
  usageTime: string;
  fuelStatus: string;
  kilometers: string;
  description: string;
  image: string;
  flip: boolean;
}

export const bikeAdapter = (bikes: BikeInput[]): BikeOutput[] => {
  return bikes.map((bike) => ({
    model: bike.model,
    usageTime:
      `${Math.floor(bike.usageTime / 60)}h ${bike.usageTime % 60 ? `${bike.usageTime % 60}min` : ""}`.trim(),
    fuelStatus: `${bike.fuelStatus}`,
    kilometers: `${bike.kilometers / 1000}km`,
    description: bike.description,
    image: bike.image || "",
    flip: bike.flip || false,
  }));
};
