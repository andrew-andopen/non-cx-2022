import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: CerealMedium;
  font-size: 1.6em;
  padding: ${({ $isLarge }) => ($isLarge ? "20px 48px" : "12px 40px")};
  border: 1px solid #333333;
  background: #ffffff;
  color: #333;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    background: #33333311;
  }
`;
