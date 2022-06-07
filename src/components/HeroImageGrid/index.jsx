import { Container, Image } from "./styles";
import { motion } from "framer-motion";

const HeroImageGrid = ({ images, reverse, marginTop }) => {
  return (
    <>
      <Container
        $marginTop={marginTop}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {images.map((image, index) => (
          <>
            <Image
              src={image.image}
              reverse={reverse}
              index={index}
              gridColumn={image.gridColumn}
              alignSelf={image.alignSelf}
              marginTop={marginTop}
            />
          </>
        ))}
      </Container>
    </>
  );
};

export default HeroImageGrid;
