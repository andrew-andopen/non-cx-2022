import Close from "../../images/close.svg";

import { StyledCloseButton, Img } from "./styles";

const CloseButton = () => {
  return (
    <StyledCloseButton>
      <Img src={Close} />
    </StyledCloseButton>
  );
};

export default CloseButton;
