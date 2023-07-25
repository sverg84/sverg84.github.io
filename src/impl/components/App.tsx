import * as React from 'react';
import { useState } from 'react';

import PageColorContext from '../contexts/PageColorContext';
import SetPageColorContext from '../contexts/SetPageColorContext';
import useBackgroundStyle from '../hooks/useBackgroundStyle';
import { PAGE_COLORS, type PageColorName } from '../types/PageColor';
import PageBody from './body/PageBody';
import PageNavBar from './nav/PageNavBar';

export default function App(): React.JSX.Element {
	const [color, setColor] = useState<PageColorName>('Obsidian');

	const className = useBackgroundStyle(color);

	console.log(className);

	return (
		<PageColorContext.Provider value={PAGE_COLORS[color]}>
			<SetPageColorContext.Provider value={setColor}>
				<div className={className}>
					<PageNavBar />
					<PageBody />
				</div>
			</SetPageColorContext.Provider>
		</PageColorContext.Provider>
	);
}
