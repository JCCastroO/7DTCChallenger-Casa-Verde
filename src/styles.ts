import styled from "styled-components";
import background from "./assets/images/background.png";

export const Container = styled.div`
  background-image: url(${background});
  display: flex;
  justify-content: center;
  padding: 0 15em;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 40em;
  height: 35em;
  top: -84.22px;
  right: 0;
`;
