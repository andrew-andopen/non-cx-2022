import styled from "styled-components";
import { devices } from "../../styles";

export const Container = styled.div`
  width: 50%;
  margin: 0.25rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.8em;
  margin-top: ${({ $marginTop }) => ($marginTop ? "8.75em" : "0")};

  @media ${devices.mobileL} {
    grid-gap: 0.4em;
  }
`;

export const Image = styled.img`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) =>
    props.index === 0 && props.reverse === true ? 2 : null};
  align-self: ${(props) => props.alignSelf};
  border-radius: 8px;

  @media ${devices.mobileL} {
    border-radius: 4px;
  }
`;
