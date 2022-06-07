import styled from "styled-components";

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
`;

export const Image = styled.img`
  width: 14em;
  height: auto;
`;
