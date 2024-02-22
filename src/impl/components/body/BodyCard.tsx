import useColorStyle from "impl/hooks/useColorStyle";
import styles from "impl/styles/body/experience/card.module.scss";
import * as React from "react";
import Card from "react-bootstrap/Card";

import BodyCardWrapper from "./BodyCardWrapper";

type Props = Readonly<{
  children: React.JSX.Element;
  id: string;
  title: string;
}>;

export default function BodyCard({
  children,
  id,
  title,
}: Props): React.JSX.Element {
  const color = useColorStyle();

  return (
    <BodyCardWrapper id={id}>
      <Card.Header as="header">
        <h2 className={styles.header} style={color} tabIndex={0}>
          {title}
        </h2>
      </Card.Header>
      <Card.Body as="section">{children}</Card.Body>
    </BodyCardWrapper>
  );
}
