import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import * as React from "react";

import styles from "../../styles/body/buttons/linkButton.module.scss";
import ExternalLinkButton from "./ExternalLinkButton";

export default function FacebookButton(): React.JSX.Element {
  return (
    <ExternalLinkButton
      className={styles.facebook}
      href="https://www.facebook.com/stephen.vergara.0/"
      icon={brands("facebook")}
      label="Facebook"
    />
  );
}
