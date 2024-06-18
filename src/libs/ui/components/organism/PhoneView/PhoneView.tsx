// iPhoneMock.tsx
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

// Estilos para el mock de iPhone 
const PhoneContainer = styled.div`
  width: 390px; // Ancho ajustado del iPhone 15
  height: 644px; // Alto ajustado del iPhone 15
  border-radius: 34px; // Borde redondeado para simular el dispositivo
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // Sombra para dar efecto de elevación
  overflow: hidden; // Ocultar desbordamientos para simular el borde de la pantalla
  border: 14px solid #000; // Borde negro para simular el bisel del iPhone
  background: white; // Fondo de la pantalla del dispositivo para evitar transparencia
  position: relative; // Para el notch y otros elementos
  margin: auto;
  box-sizing: border-box;
  overflow-y: auto;
  /* padding-top: 40px; */

  scrollbar-width: none; // Oculta la barra de desplazamiento en Firefox
  &::-webkit-scrollbar {
    display: none; // Oculta la barra de desplazamiento en Chrome, Safari y Edge
  }
`;

// Estilos para el notch (simulación de la muesca en la parte superior)
const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 210px;
  height: 30px;
  background: #000;
  border-radius: 0 0 10px 10px;
`;

const HeadSpace = styled.div`
  width: 100%;
  height: 40px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white; // Fondo de la pantalla del dispositivo para evitar transparencia

`;

// Define la interfaz para las props del iPhoneMock
interface iPhoneMockProps {
  children: ReactNode;
}

// Componente iPhoneMock
export const PhoneMock: FC<iPhoneMockProps> = ({ children }) => {
  return (
    <PhoneContainer>
      <HeadSpace />
      {/* <Notch></Notch> */}
      {children}
    </PhoneContainer>
  );
};
