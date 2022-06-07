import styled from "styled-components";
import { StyledButton } from "../Button/styles";

export const PrimaryButton = styled(StyledButton)`
  color: #fff;
  background-image: linear-gradient(
    to right,
    #e61e4d 0%,
    #e31c5f 50%,
    #d70466 100%
  );
  background-size: 200% 200%;
  border: none;
  padding: ${({ $isLarge }) => ($isLarge ? "20px 48px" : "12px 40px")};

  &:hover {
    background-image: radial-gradient(
      circle at center,
      #ff385c 0%,
      #e61e4d 27.5%,
      #e31c5f 40%,
      #d70466 57.5%,
      #bd1e59 75%,
      #bd1e59 100%
    );
    background-size: 200% 200%;
  }
`;
