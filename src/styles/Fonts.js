import { Global } from "@emotion/react";

export function Fonts() {
  return (
    <Global
      styles={`/* thai */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCKd6xBDFs.woff2) format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraaGwCKd6xBDFs.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcrabGwCKd6xBDFs.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwCKd6xB.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2KdNodREEje60k.woff2) format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2Kb9odREEje60k.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2KbtodREEje60k.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2KYNodREEjew.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }`}
    ></Global>
  );
}
