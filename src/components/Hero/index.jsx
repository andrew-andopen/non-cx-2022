import HeroImageGrid from "../HeroImageGrid";
import { H1, H2, GridContainer } from "./styles";


const Hero = ({ homeData }) => {
  const heroData = homeData.hero;

  return (
    <>
      <div className="titles">
        <H1>{heroData.title}</H1>
        <H2>{heroData.subtitle}</H2>
      </div>

      <GridContainer>
        <HeroImageGrid images={heroData.images[0]} />
        <HeroImageGrid images={heroData.images[1]} reverse marginTop />
      </GridContainer>
    </>
  );
};

export default Hero;
