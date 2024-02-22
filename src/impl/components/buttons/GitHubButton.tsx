import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import * as React from "react";

import styles from "../../styles/body/buttons/linkButton.module.scss";
import ExternalLinkButton from "./ExternalLinkButton";

export default function GitHubButton(): React.JSX.Element {
  return (
    <ExternalLinkButton
      className={styles.github}
      href="https://github.com/sverg84"
      icon={brands("github")}
      label="GitHub"
    />
  );
}
