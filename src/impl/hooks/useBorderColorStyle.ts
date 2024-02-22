import * as React from "react";

import ColorContext from "../contexts/ColorContext";

export default function useBorderColorStyle(): React.CSSProperties {
  const [color] = React.useContext(ColorContext);

  return { borderColor: color };
}
