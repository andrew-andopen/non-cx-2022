import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "")};
  justify-content: space-around;

  gap: 24px;
`;

const FlexContainer = ({ children, wrap }) => {
  return <StyledFlexContainer $wrap={wrap}>{children}</StyledFlexContainer>;
};

export default FlexContainer;
