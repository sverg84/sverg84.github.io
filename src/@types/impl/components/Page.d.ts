import * as React from 'react';
type Props = Readonly<{
    breadcrumbs?: React.JSX.Element;
    children: React.ReactNode;
}>;
export default function Page({ breadcrumbs, children }: Props): React.JSX.Element;
export {};
