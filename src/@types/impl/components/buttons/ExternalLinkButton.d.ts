import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
type Props = Readonly<{
    className?: string;
    href: string;
    icon: IconLookup;
    label: string;
}>;
export default function ExternalLinkButton({ className, href, icon, label, }: Props): React.JSX.Element;
export {};
