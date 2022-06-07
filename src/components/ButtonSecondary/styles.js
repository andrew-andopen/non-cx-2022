import styled from "styled-components";
import { StyledButton } from "../Button/styles";

export const SecondaryButton = styled(StyledButton)`
  background: #333;
  color: #fff;

  &:hover {
    background: #fff;
    color: #333;
  }
`;
