import styled from "styled-components";
import { devices } from "../../styles";

export const FAQ = styled.div`
  text-align: center;
`;

export const QuestionContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const H1 = styled.h1`
  font-family: CerealMedium;
  font-size: 4.8em;
  margin-bottom: 1em;

  @media ${devices.mobileL} {
    font-size: 3.2em;
  }
`;
