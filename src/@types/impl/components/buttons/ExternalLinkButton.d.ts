import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DataType } from 'csstype';
import * as React from 'react';
type Props = Readonly<{
    color?: DataType.Color;
    href: string;
    icon: IconProp;
}>;
export default function ExternalLinkButton({ color, href, icon, }: Props): React.JSX.Element;
export {};
