import MyName from "impl/consts/MyName";
import * as React from "react";

import AboutMeCardBodyContainer from "./AboutMeCardBodyContainer";
import AboutMeText from "./AboutMeText";

export default function AboutMeCardBody(): React.JSX.Element {
  return (
    <AboutMeCardBodyContainer alt={`Picture of ${MyName}`} src="/sverg.jpeg">
      <AboutMeText />
    </AboutMeCardBodyContainer>
  );
}
