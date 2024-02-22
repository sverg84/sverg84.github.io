import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobSeekerNavItems from "impl/consts/JobSeekerNavItems";
import MyName from "impl/consts/MyName.ts";
import useBackgroundColorStyle from "impl/hooks/useBackgroundColorStyle";
import navStyles from "impl/styles/nav/navbar.module.scss";
import pageStyles from "impl/styles/pageMargin.module.scss";
import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import PageNavColorPicker from "./PageNavColorPicker";
import { useLoaderData } from "react-router-dom";
import { CoreLoaderData } from "impl/utils/coreLoader";

export default function PageNavBar(): React.JSX.Element {
  const style = useBackgroundColorStyle();

  const { lastUpdatedTime, PageNavLatestPushTimestamp } =
    useLoaderData() as CoreLoaderData;

  return (
    <Navbar data-testid="navbar" expand="lg" sticky="top" style={style}>
      <Container className={pageStyles.page} fluid={true}>
        <LinkContainer to="/">
          <Navbar.Brand className={navStyles.brand} data-testid="name-link">
            {MyName}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="offcanvas" className={navStyles.toggle}>
          <FontAwesomeIcon icon={solid("bars")} />
        </Navbar.Toggle>
        <Navbar.Collapse className={navStyles.offcanvas} id="offcanvas">
          <PageNavLatestPushTimestamp lastUpdatedTime={lastUpdatedTime} />
          <Nav className={navStyles.nav}>
            {JobSeekerNavItems.map(({ label, to }) => (
              <LinkContainer
                className={navStyles.link}
                key={to}
                style={{ color: "inherit" }}
                to={{ hash: to }}
              >
                <Nav.Link>{label}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <PageNavColorPicker />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
