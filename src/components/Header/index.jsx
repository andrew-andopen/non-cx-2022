import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader, Image } from "./styles";
import ButtonPrimary from "../ButtonPrimary";

import Logo from "../../images/logo-1-.png";
import ScrollToTop from "../ScrollToTop";

const Header = ({ modalHandler }) => {
  const [hasScrolled, setHasScrolled] = useState();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      scrollCheck > 200 ? setHasScrolled(true) : setHasScrolled(false);
    });
  });

  const Form =
    "https://paperform.co/form/wfygjnv1?embed=1&amp;takeover=0&amp;inline=1&amp;popup=0&amp;_d=localhost%3A3000&amp;_in=1&amp;_embed_id=22";

  return (
    <StyledHeader hasScrolled={hasScrolled}>
      <ScrollToTop />
      <Link to="/">
        <Image src={Logo} />
      </Link>

      <ButtonPrimary
        text="Contact us about gifting"
        isLarge
        clickHandler={() => modalHandler(Form)}
      />
    </StyledHeader>
  );
};

export default Header;
