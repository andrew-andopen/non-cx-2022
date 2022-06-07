import styled, { keyframes } from "styled-components";

const KeyframeAnimate = keyframes`
  0%{
    opacity: 0;
}
  
30%{
    opacity: 1;
}
  
  50%{
    opacity: 1;
}
  
  80%{
       opacity: 0;
  }
  
  100%{
      opacity: 0;
  }
  `;

export const StyledLoader = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10000;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 4px;
  display: inline-block;
  vertical-align: middle;
  background-color: #333333;
  border-radius: 100%;

  animation: ${KeyframeAnimate} 0.8s infinite linear both;
`;

export const First = styled(Dot)`
  animation-delay: -0.3s;
`;

export const Second = styled(Dot)`
  animation-delay: -0.15s;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <First></First>
      <Second></Second>
      <Dot></Dot>
    </StyledLoader>
  );
};

export default Loader;
