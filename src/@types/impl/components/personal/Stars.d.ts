import * as React from "react";
export type Props = Readonly<{
    className: string;
    numStars: number;
}>;
export default function Stars({ className, numStars }: Props): React.JSX.Element;
