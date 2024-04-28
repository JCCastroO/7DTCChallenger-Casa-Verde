import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 32em;
  height: 48em;
  right: 36px;
  z-index: -1;
`;

export const PrincipalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 110px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 55px;
`;
