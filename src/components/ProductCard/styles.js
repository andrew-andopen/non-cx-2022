import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 1rem;
  background: #fff;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
  cursor: pointer;
  background: "#fff";
  overflow: hidden;
  border: 1px solid #eee;
  transition: 0.2s linear;
  z-index: -1;

  &:hover {
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 12px;
  }
`;

export const Image = styled.img`
  margin-bottom: 1.6em;
  aspect-ratio: 1/1;
  object-fit: cover;
  background-repeat: no-repeat;
`;

export const ProductTitle = styled.h4`
  font-family: CerealMedium;
  font-size: 1.6em;
  padding-bottom: 2.4em;
  color: #333333;
`;
