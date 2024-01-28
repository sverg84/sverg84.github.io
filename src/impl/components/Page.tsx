import * as React from 'react';

import ColorContext from '../contexts/ColorContext';
import PageNavBar from './nav/PageNavBar';

const DEFAULT_COLOR = '#2e3134';

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
	const localStorageColorOrDefault =
		localStorage.getItem('color') ?? DEFAULT_COLOR;
	const [hex, setHex] = React.useState<string>(localStorageColorOrDefault);

	React.useEffect(() => {
		localStorage.setItem('color', hex);
	}, [hex]);

	return (
		<ColorContext.Provider value={{color: hex, setColor: setHex}}>
			{background}
			<PageNavBar breadcrumbs={breadcrumbs} />
			{children}
		</ColorContext.Provider>
	);
}
