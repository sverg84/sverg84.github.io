import * as React from "react";

import ColorContext from "../contexts/ColorContext";

export default function useColorStyle(): React.CSSProperties {
  const [color] = React.useContext(ColorContext);

  return { color };
}
