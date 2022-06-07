import Button from "../Button";

import { StyledFeedback, H1, H3, Image } from "./styles";

const Feedback = ({ title, subtitle, image, button, modalHandler }) => {
  const dora = "https://player.vimeo.com/video/444942505";
  return (
    <StyledFeedback>
      <div className="titles">
        <H1>{title}</H1>
        <H3>{subtitle}</H3>
      </div>
      <Image src={image} />
      <Button text={button} clickHandler={() => modalHandler(dora)} />
    </StyledFeedback>
  );
};

export default Feedback;
