import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
type Props = Readonly<{
    className?: string;
    href: string;
    icon: IconProp;
}>;
export default function ExternalLinkButton({ className, href, icon, }: Props): React.JSX.Element;
export {};
