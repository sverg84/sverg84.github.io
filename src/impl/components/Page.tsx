import * as React from 'react';
import { useState } from 'react';

import PageColorContext from '../contexts/PageColorContext';
import SetPageColorContext from '../contexts/SetPageColorContext';
import { PAGE_COLORS, type PageColorName } from '../types/PageColor';
import PageNavBar from './nav/PageNavBar';

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function Page({children}: Props): React.JSX.Element {
	const [color, setColor] = useState<PageColorName>('Obsidian');

	return (
		<PageColorContext.Provider value={PAGE_COLORS[color]}>
			<SetPageColorContext.Provider value={setColor}>
				<PageNavBar />
				{children}
			</SetPageColorContext.Provider>
		</PageColorContext.Provider>
	);
}
