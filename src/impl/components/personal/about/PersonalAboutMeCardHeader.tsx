import * as React from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";

import useBackgroundColorStyle from "../../../hooks/useBackgroundColorStyle";
import useColorStyle from "../../../hooks/useColorStyle";
import styles from "../../../styles/body/personal/about/header.module.scss";

const HALF_OPACITY = "88";
const HEADER_LABEL = "Oh, Hello!";

export default function PersonalAboutMeCardHeader(): React.JSX.Element {
  const color = useColorStyle();
  const bg = useBackgroundColorStyle(HALF_OPACITY);

  return (
    <CardHeader as="h2" className={styles.header} style={{ ...bg, ...color }}>
      {HEADER_LABEL.split("").map((character, index, label) => (
        <span key={character + (index > 0 ? label[index - 1] : "")}>
          {character}
        </span>
      ))}
    </CardHeader>
  );
}
