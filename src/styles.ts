import styled from "styled-components";
import yellowSplash from "./assets/images/yellowSplash.png";

export const Container = styled.div`
  min-height: 220vh;
  display: flex;
  justify-content: center;
  padding: 0 15em;
  z-index: -1;
`;

export const BackgroundImage = styled.div`
  background-image: url(${yellowSplash});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 40em;
  height: 35em;
  top: -84.22px;
  right: 0;
  z-index: -1;
`;
