import * as React from "react";

import { PageColorHex } from "../types/PageColor";

const style: React.CSSProperties = {
  borderRadius: 8,
  height: 24,
  width: 24,
} as const;

type Props = Readonly<{
  color: PageColorHex;
}>;

export default function ColorIcon({ color }: Props): React.JSX.Element {
  return <div style={{ ...style, backgroundColor: color }} />;
}
