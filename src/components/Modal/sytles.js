import styled from "styled-components";

export const StyledModal = styled.div`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(34, 34, 34, 0.2);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  border-radius: 8px;
`;

const Form =
  "https://paperform.co/form/wfygjnv1?embed=1&amp;takeover=0&amp;inline=1&amp;popup=0&amp;_d=localhost%3A3000&amp;_in=1&amp;_embed_id=22";

export const IFrame = styled.iframe`
  background: ${(props) => props.src === Form && "#ffffff"};
  width: ${(props) => (props.src === Form ? "800px" : "840px")};
  min-height: ${(props) => (props.src === Form ? "600px" : "560px")};
  padding: ${(props) => (props.src === Form ? "40px" : "")};
  overflow: scroll;
  border-radius: 8px;
`;
