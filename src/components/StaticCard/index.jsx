import { CardContainer, Img, Content, H3, P } from "./styles";
import DontationImage from "../../images/donation.png";

const StaticCard = ({ image, title, subtitle }) => {
  return (
    <CardContainer>
      <Img src={image} />
      <Content>
        <H3>{title}</H3>
        <P>{subtitle}</P>
      </Content>
    </CardContainer>
  );
};

export default StaticCard;
