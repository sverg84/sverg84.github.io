import * as React from 'react';
import { useState } from 'react';

import PageColorContext from '../contexts/PageColorContext';
import SetPageColorContext from '../contexts/SetPageColorContext';
import { PAGE_COLORS, type PageColorName } from '../types/PageColor';
import PageBody from './body/PageBody';
import PageNavBar from './nav/PageNavBar';

export default function App(): React.JSX.Element {
	const [color, setColor] = useState<PageColorName>('Obsidian');

	return (
		<PageColorContext.Provider value={PAGE_COLORS[color]}>
			<SetPageColorContext.Provider value={setColor}>
				<PageNavBar />
				<PageBody />
			</SetPageColorContext.Provider>
		</PageColorContext.Provider>
	);
}