import * as React from 'react';
import { Outlet } from 'react-router-dom';

import ColorContext from '../contexts/ColorContext';
import PageBody from './body/PageBody';
import PageNavBar from './nav/PageNavBar';

const DEFAULT_COLOR = '#2e3134';

export default function AppCore(): React.JSX.Element {
	const localStorageColorOrDefault =
		localStorage.getItem('color') ?? DEFAULT_COLOR;
	const [hex, setHex] = React.useState<string>(localStorageColorOrDefault);

	React.useEffect(() => {
		localStorage.setItem('color', hex);
	}, [hex]);

	return (
		<ColorContext.Provider value={[hex, setHex]}>
			<PageNavBar />
			<PageBody>
				<Outlet />
			</PageBody>
		</ColorContext.Provider>
	);
}
