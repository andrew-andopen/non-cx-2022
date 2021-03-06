import styled from "styled-components";
import { devices } from "../../styles";

export const StyledContainer = styled.div`
  padding: 8rem 4rem 10rem 4rem;
  /* border: 1px solid coral; */
  max-width: ${({ $isFullWidth }) => ($isFullWidth ? "100vw" : "1080px")};
  margin: 0 auto;
  background: ${({ $isFullWidth }) => $isFullWidth && "#f7f7f7"};

  @media ${devices.mobileL} {
    padding: 4rem 4rem 6rem 4rem;
  }
`;
