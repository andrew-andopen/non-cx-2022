import { ImageContainer, Image, H3, P, CallOutContainer } from "./styles";

const CallOut = ({ image, title, subtitle }) => {
  return (
    <CallOutContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <div>
        <H3>{title}</H3>
        <P>{subtitle}</P>
      </div>
    </CallOutContainer>
  );
};

export default CallOut;
