import * as React from "react";
import { PageColor } from "../types/PageColor";

const style: React.CSSProperties = {
  borderRadius: 8,
  height: 24,
  width: 24,
};

type Props = Readonly<{
  color: PageColor;
}>;

export default function ColorIcon({ color }: Props): React.JSX.Element {
  return <div style={{ ...style, backgroundColor: color }} />;
}
