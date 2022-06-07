import StatInfo from "../StatInfo";

import { StatContainer, ImageContainer, Image, Flex } from "./styles";

const Stat = ({
  title,
  subtitle,
  image,
  button,
  route,
  content,
  isLast,
  modalHandler,
}) => {
  return (
    <StatContainer $isLast={isLast}>
      <ImageContainer $isLast={isLast}>
        <Image src={image[0]} alt="jhgsd" $isLast={isLast} />
        {!isLast && (
          <Flex>
            <Image src={image[1]} alt="jhgsd" />
            <Image src={image[2]} alt="jhgsd" />
          </Flex>
        )}
      </ImageContainer>
      <StatInfo
        modalHandler={modalHandler}
        title={title}
        subtitle={subtitle}
        button={button}
        content={content}
        route={route}
      />
    </StatContainer>
  );
};

export default Stat;
