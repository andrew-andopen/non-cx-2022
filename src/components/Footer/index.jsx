import { Link } from "react-router-dom";

import { StyledFooter, LogoContainer, P, Nav, Li } from "./styles";
import Logo from "../../images/ao_icon.svg";

// target="_blank"
//    rel="noreferrer"
//    href='https://www.kindacode.com'

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://andopen.co" target="_blank">
        <LogoContainer>
          <img src={Logo} style={{ width: "14px", marginRight: "8px" }} />
          <P>Powered by &Open</P>
        </LogoContainer>
      </a>
      <Nav>
        <a
          href="https://www.airbnb.com/help/article/1635/airbnblove-and-open-emails"
          target="_blank"
        >
          <Li>
            <P>Who are &Open</P>
          </Li>
        </a>
        <a
          href="https://www.airbnb.com/help/article/1635/airbnblove-and-open-emails"
          target="_blank"
        >
          <Li>
            <P>What is AirbnbLove?</P>
          </Li>
        </a>
        <a
          href="https://www.airbnb.com/help/article/2908/terms-of-service"
          target="_blank"
        >
          <Li>
            <P>Privacy Policy</P>
          </Li>
        </a>
      </Nav>
    </StyledFooter>
  );
};

export default Footer;
