import { createGlobalStyle } from "styled-components";

import CerealMedium from "../fonts/cereal_medium.woff";

import CerealRegular from "../fonts/cereal_book.woff";

export const GlobalFonts = createGlobalStyle`
  @font-face {
      font-family: CerealMedium;
      src: url(${CerealMedium});
    };

    @font-face {
      font-family: CerealRegular;
      src: url(${CerealRegular});
    };
`;
