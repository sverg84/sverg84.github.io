import * as React from 'react';
import { useState } from 'react';

import ColorContext from '../contexts/ColorContext';
import PageNavBar from './nav/PageNavBar';

type Props = Readonly<{
	background: React.JSX.Element;
	breadcrumbs?: React.JSX.Element;
	children: React.ReactNode;
}>;

export default function Page({
	background,
	breadcrumbs,
	children,
}: Props): React.JSX.Element {
	const [hex, setHex] = useState<string>('#2e3134');

	return (
		<ColorContext.Provider value={{color: hex, setColor: setHex}}>
			{background}
			<PageNavBar breadcrumbs={breadcrumbs} />
			{children}
		</ColorContext.Provider>
	);
}
