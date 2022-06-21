import { StyledContainer } from "../components/Container/styles";
import { PaddingTop } from "./Home";
import Button from "../components/Button";
import { useParams, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import ProductCardData from "../data/productCardInfo";

//Styles
import styled from "styled-components";
import ScrollToTop from "../components/ScrollToTop";
import { devices } from "../styles";

export const PaddingTopLarge = styled(PaddingTop)`
  padding-top: 12em;

  @media ${devices.mobileL} {
    padding-top: 6em;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  min-height: 303px;
  grid-column: ${({ $index }) => ($index === 2 ? "span 2" : "span 1")};
  padding: ${({ $index }) => ($index === 2 ? "4rem" : null)};
  background: ${({ $index }) => ($index === 2 ? "#F6F4F5" : null)};
  cursor: pointer;

  @media ${devices.mobileL} {
    grid-column: span 2;
  }
`;

export const StyledProductDetails = styled.div`
  width: 100%;
`;

export const ProductDetailsConntainer = styled.div`
  display: flex;
  gap: 6.4em;

  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-family: CerealMedium;
  font-size: 48px;
  margin-bottom: 3.2rem;

  @media ${devices.mobileL} {
    font-size: 3.2em;
  }
`;

export const P = styled.p`
  font-family: ${({ $bold }) => ($bold ? "CerealMedium" : "CerealRegular")};
  font-size: 16px;
  line-height: 24px;
  margin-bottom: ${({ $mbLarge }) => ($mbLarge ? "32px" : "12px")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export const ProductDetailsContainer = styled(StyledContainer)`
  max-width: 1440px;
  padding: 8rem 8rem 10rem 8rem;

  @media ${devices.tabletL} {
    padding: 1rem 4rem 1rem 4rem;
  }
`;

const ProductDetails = ({ modalHandler }) => {
  const { id } = useParams();

  const selectedCard = ProductCardData.find((c) => c.slug === id);

  const content =
    "https://paperform.co/form/wfygjnv1?embed=1&amp;takeover=0&amp;inline=1&amp;popup=0&amp;_d=localhost%3A3000&amp;_in=1&amp;_embed_id=22";

  const navigate = useNavigate();
  return (
    <>
      <ScrollToTop />
      <PaddingTopLarge />
      <ProductDetailsContainer>
        <ProductDetailsConntainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ImageContainer>
            {selectedCard.images.map((image, index) => (
              <Image
                src={selectedCard.images[index]}
                $index={index}
                onClick={() => modalHandler(selectedCard.images[index])}
              />
            ))}
          </ImageContainer>
          <StyledProductDetails>
            <H1>{selectedCard.name}</H1>
            <P $mbLarge>{selectedCard.about.general}</P>
            <P $bold>Made</P>
            <P $mbLarge>{selectedCard.about.made}</P>
            <P $bold>Why</P>
            <P $mbLarge>{selectedCard.about.why}</P>
            <P $mbLarge>{selectedCard.about.cost}</P>
            <ButtonContainer>
              <Button
                text="Enquire about this gift"
                clickHandler={() => modalHandler(content)}
              />
              <Button
                text="Back to catalogue"
                clickHandler={() => navigate(-1)}
              />
            </ButtonContainer>
          </StyledProductDetails>
        </ProductDetailsConntainer>
      </ProductDetailsContainer>
    </>
  );
};

export default ProductDetails;
