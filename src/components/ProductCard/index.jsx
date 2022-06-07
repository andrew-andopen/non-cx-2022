import { Link } from "react-router-dom";
import { StyledProductCard, Image, ProductTitle } from "./styles";

import { motion } from "framer-motion";

const ProductCard = ({ item, index }) => {
  return (
    <Link to={`/catalogue/${item.slug}`} style={{ textDecoration: "none" }}>
      <StyledProductCard
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index / 80, duration: 0.02 }}
      >
        <Image src={item.images[0]} alt="product" />
        <ProductTitle>{item.name}</ProductTitle>
      </StyledProductCard>
    </Link>
  );
};

export default ProductCard;
