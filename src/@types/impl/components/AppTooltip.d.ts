import type { Placement } from "@floating-ui/react";
import * as React from "react";
type Props = Readonly<{
    placement?: Placement;
    trigger: React.ReactNode;
    content: string;
}>;
export default function AppTooltip({ placement, trigger, content, }: Props): React.JSX.Element;
export {};
