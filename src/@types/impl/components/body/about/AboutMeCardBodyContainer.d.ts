import * as React from 'react';
import type { Props as ImageProps } from './AboutMeCardImage';
type Props = Readonly<{
    children: React.JSX.Element;
}> & ImageProps;
export default function AboutMeCardBodyContainer({ children, ...imageProps }: Props): React.JSX.Element;
export {};
