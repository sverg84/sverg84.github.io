import * as React from 'react';
import { PageColorName } from '../types/PageColor';
type Props = Readonly<{
    color: PageColorName;
}>;
export default function AppBackground({ color: colorArg, }: Props): React.JSX.Element;
export {};
