import * as React from "react";

import styles from "../../styles/body/personal/background.module.scss";
import type { Props as StarsProps } from "./Stars";
import Stars from "./Stars";

const STARS: ReadonlyArray<StarsProps> = [
  { className: styles.stars, numStars: 700 },
  { className: styles.stars2, numStars: 200 },
  { className: styles.stars3, numStars: 100 },
];

export default function PersonalBackground(): React.JSX.Element {
  return (
    <div className={styles.background}>
      {STARS.map((props) => (
        <Stars {...props} key={props.className} />
      ))}
    </div>
  );
}
