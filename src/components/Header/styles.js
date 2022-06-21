import styled from "styled-components";
import { devices } from "../../styles";

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.4em 6em;
  box-shadow: ${(props) =>
    props.hasScrolled ? "rgb(0 0 0 / 12%) 0px 1px 14px" : ""};
  border-bottom: ${(props) => (props.hasScrolled ? "" : "1px solid #eee")};
  z-index: 1;

  @media ${devices.mobileL} {
    padding: 4.4em 3.2em;
  }

  @media ${devices.mobileM} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 14em;
  height: auto;

  @media ${devices.mobileL} {
    width: 12em;
  }
`;
