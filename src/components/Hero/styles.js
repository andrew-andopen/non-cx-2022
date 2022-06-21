import styled from "styled-components";
import { devices } from "../../styles";

export const H1 = styled.h1`
  font-family: CerealMedium;
  font-size: 64px;
  line-height: 72px;
  margin-bottom: 16px;

  @media ${devices.tabletS} {
    font-size: 48px;
    margin-bottom: 8px;
  }

  @media ${devices.mobileL} {
    font-size: 32px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 32px;

  @media ${devices.mobileL} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  margin-top: 5em;
  display: flex;
  gap: 0.4em;

  @media ${devices.mobileL} {
    margin-top: 1em;
  }
`;
