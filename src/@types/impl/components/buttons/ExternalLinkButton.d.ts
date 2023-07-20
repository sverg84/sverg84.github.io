import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
type Props = Readonly<{
    href: string;
    icon: IconProp;
}>;
export default function GitHubButton({ href, icon }: Props): React.JSX.Element;
export {};
