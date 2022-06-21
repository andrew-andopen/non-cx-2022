import styled from "styled-components";
import { devices } from "../../styles";

export const H1 = styled.h1`
  font-family: CerealMedium;
  font-size: 4.8em;
  margin-bottom: 0.4em;

  @media ${devices.mobileL} {
    font-size: 3.2em;
  }
`;

export const H2 = styled.h2`
  font-size: 2.4em;
  line-height: 3.2rem;
  margin-bottom: 2.4em;
  width: 75%;

  @media ${devices.mobileL} {
    font-size: 1.6em;
    line-height: 24px;
  }

  @media ${devices.tabletS} {
    width: 100%;
  }
`;
