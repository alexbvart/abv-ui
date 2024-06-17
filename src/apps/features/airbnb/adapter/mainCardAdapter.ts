type Alojamiento = {
    lugar: string;
    distancia: number;
    fechaInicio: string;
    fechaFin: string;
    costoPorNoche: string;
    imagen?: string;
    favorito?: string;
  };
  
  type Accommodation = {
    place: string;
    distance: number;
    startDate: string;
    endDate: string;
    costPerNight: string;
    image?: string;
    isFavorite: boolean;
  };
  
  export const adaptAlojamientoToAccommodation = (alojamientos: Alojamiento[]): Accommodation[] =>{
    return alojamientos.map(alojamiento => ({
      place: alojamiento.lugar,
      distance: alojamiento.distancia,
      startDate: alojamiento.fechaInicio,
      endDate: alojamiento.fechaFin,
      costPerNight: alojamiento.costoPorNoche,
      image: alojamiento.imagen,
      isFavorite: alojamiento.favorito === 'si'
    }));
  }