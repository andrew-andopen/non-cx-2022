import styled from "styled-components";
import { devices } from "../../styles";

export const StyledFeedback = styled.div`
  text-align: center;
  max-width: 714px;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font-family: CerealMedium;
  font-size: 4.8em;
  line-height: 1.1;
  margin-bottom: 16px;

  @media ${devices.mobileL} {
    font-size: 3.2em;
  }
`;

export const H3 = styled.h3`
  font-size: 2.4em;
  line-height: 1.2;
`;

export const Image = styled.img`
  margin: 48px 0 72px 0;
`;
