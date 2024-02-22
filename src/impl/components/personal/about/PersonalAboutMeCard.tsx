import * as React from "react";
import Card from "react-bootstrap/esm/Card";

import PersonalAboutMeCardFooter from "./PersonalAboutMeCardFooter";
import PersonalAboutMeCardHeader from "./PersonalAboutMeCardHeader";
import PersonalAboutMePhotoCarousel from "./PersonalAboutMePhotoCarousel";

export default function PersonalAboutMeCard(): React.JSX.Element {
  return (
    <Card>
      <PersonalAboutMeCardHeader />
      <Card.Body>
        <PersonalAboutMePhotoCarousel />
      </Card.Body>
      <PersonalAboutMeCardFooter />
    </Card>
  );
}
