import React from "react";
import { StyledContainer } from "./styles";

const Container = ({ children, isFullWidth }) => (
  <StyledContainer $isFullWidth={isFullWidth}>{children}</StyledContainer>
);

export default Container;
