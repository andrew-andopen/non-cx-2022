import Data from "../data/productCardInfo";
import DigitalGiftingData from "../data/digitalGiftingInfo";

import Container from "../components/Container";
import CatalogueContainer from "../components/CatalogueContainer";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";
import CatalogHero from "../components/CatalogHero";
import { PaddingTopLarge } from "./ProductDetails";

import { H1 } from "../components/Feedback/styles";
import { P } from "../components/StatInfo/styles";
import StaticCard from "../components/StaticCard";
import { StyledFlexContainer } from "../components/FlexContainer";
import ScrollToTop from "../components/ScrollToTop";

const Catalog = ({ test }) => {
  const MainCatlogue = Data.slice(0, 22);
  const CampaignCatlogue = Data.slice(22, 30);
  return (
    <>
      <ScrollToTop />
      <PaddingTopLarge />
      <CatalogueContainer>
        <CatalogHero />
        <ProductGrid>
          {MainCatlogue.map((item, index) => (
            <ProductCard item={item} index={index} />
          ))}
        </ProductGrid>
      </CatalogueContainer>
      <Container isFullWidth>
        <CatalogueContainer>
          <div
            style={{
              textAlign: "center",
              maxWidth: "75%",
              margin: "0 auto",
            }}
          >
            <H1>Custom campaign gifts </H1>
            <P>
              We work with you to make sure our gifts perfectly match the
              context of your campaign. Below are examples of gifts we’ve
              developed for previous campaigns.
            </P>
          </div>
          <ProductGrid>
            {CampaignCatlogue.map((item, index) => (
              <ProductCard item={item} index={index} />
            ))}
          </ProductGrid>
        </CatalogueContainer>
      </Container>
      <CatalogueContainer>
        <StyledFlexContainer>
          {DigitalGiftingData.map((gift) => (
            <StaticCard
              image={gift.image}
              title={gift.title}
              subtitle={gift.subtitle}
            />
          ))}
        </StyledFlexContainer>
      </CatalogueContainer>
    </>
  );
};

export default Catalog;
