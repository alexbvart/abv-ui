import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #9828283b; 
  box-sizing: border-box;
  padding: 0;
  margin: auto;
  flex: 1;
  scrollbar-width: none; // Oculta la barra de desplazamiento en Firefox
  &::-webkit-scrollbar {
    display: none; // Oculta la barra de desplazamiento en Chrome, Safari y Edge
  }
`;
export const AppsMainLayout = () => {
    return (
      <MainLayoutWrapper>
        <Outlet />
      </MainLayoutWrapper>
    );
  };
  