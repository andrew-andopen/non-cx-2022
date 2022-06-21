import styled from "styled-components";
import { devices } from "../../styles";

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "")};
  justify-content: space-around;

  gap: 24px;

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.tabletL} {
    flex-wrap: wrap;
  }
`;

const FlexContainer = ({ children, wrap }) => {
  return <StyledFlexContainer $wrap={wrap}>{children}</StyledFlexContainer>;
};

export default FlexContainer;
