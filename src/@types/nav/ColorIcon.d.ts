import * as React from "react";
import { PageColorHex } from "../types/PageColor";
type Props = Readonly<{
    color: PageColorHex;
}>;
export default function ColorIcon({ color }: Props): React.JSX.Element;
export {};
