import React from "react";
import styled from "styled-components";

import homePageInfo from "../data/homePageInfo";

import Container from "../components/Container";
import FlexContainer from "../components/FlexContainer";

import Hero from "../components/Hero";
import Stat from "../components/Stat";
import CallOut from "../components/CallOut";
import Feedback from "../components/Feedback";
import Faq from "../components/Faq";

export const PaddingTop = styled.div`
  padding: 7em 0;
`;

const Home = ({ modalHandler }) => {
  const homeData = homePageInfo[0];

  return (
    <>
      <PaddingTop />
      <Container>
        <Hero homeData={homeData} />
      </Container>
      <Container>
        {homeData.stats.map((statistic) => (
          <>
            <Stat
              title={statistic.title}
              subtitle={statistic.subtitle}
              image={statistic.image}
              button={statistic.button}
              route={statistic.route}
              content={statistic.content}
              modalHandler={modalHandler}
              isLast={statistic.isLast}
            />
          </>
        ))}
      </Container>
      <Container>
        <FlexContainer wrap>
          {homeData.callouts.map((callout) => (
            <CallOut
              image={callout.image}
              title={callout.title}
              subtitle={callout.subtitle}
            />
          ))}
        </FlexContainer>
      </Container>
      <Container isFullWidth>
        <Feedback
          title={homeData.feedback.title}
          subtitle={homeData.feedback.subtitle}
          image={homeData.feedback.image}
          button={homeData.feedback.button}
          modalHandler={modalHandler}
        />
      </Container>
      <Container>
        <Faq />
      </Container>
    </>
  );
};

export default Home;
