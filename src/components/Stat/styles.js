import styled from "styled-components";
import { devices } from "../../styles";

export const StatContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: ${({ $isLast }) => ($isLast ? 0 : "4.8em")};

  @media ${devices.tabletS} {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  min-width: 480px;
  background: ${({ $isLast }) => ($isLast ? "#007a87" : "#ffffff")};
  padding: ${({ $isLast }) => ($isLast ? "6em" : "0")};
  border-radius: 8px;
  display: ${({ $isLast }) => !$isLast && "grid"};
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.8em;
  overflow: hidden;

  @media ${devices.tabletS} {
    min-width: 100%;
  }
`;

export const Image = styled.img`
  grid-column: ${($isLast) => (!$isLast ? " span 1" : "span 2")};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;
