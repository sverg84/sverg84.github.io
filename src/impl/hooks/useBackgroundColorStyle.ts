import * as React from 'react';

import PageColorContext from '../contexts/PageColorContext';
import colors from '../styles/backgroundColor.module.css';
import { PAGE_COLORS, PageColorHex } from '../types/PageColor';

export default function useBackgroundColorStyle(
	colorArg?: PageColorHex,
): string {
	const color = React.useContext(PageColorContext);

	switch (colorArg ?? color) {
		case PAGE_COLORS.Obsidian:
			return colors.obsidian;
		case PAGE_COLORS['Baby pink']:
			return colors.babypink;
		case PAGE_COLORS['Royal blue']:
			return colors.royalblue;
		case PAGE_COLORS['Phoenix scarlet']:
			return colors.phoenixscarlet;
		case PAGE_COLORS['Grape jelly']:
			return colors.grapejelly;
		case PAGE_COLORS['Ogre green']:
			return colors.ogregreen;
	}
}