import * as React from 'react';

import PageColorContext from '../contexts/PageColorContext';
import colors from '../styles/backgroundColor.module.scss';
import colorsTranslucent from '../styles/backgroundColorTranslucent.module.scss';
import { PAGE_COLORS, PageColorHex } from '../types/PageColor';

export default function useBackgroundColorStyle(
	colorArg?: PageColorHex,
	translucent: boolean = false,
): string {
	const color = React.useContext(PageColorContext);

	const colorsList = translucent ? colorsTranslucent : colors;

	switch (colorArg ?? color) {
		case PAGE_COLORS.Obsidian:
			return colorsList.obsidian;
		case PAGE_COLORS['Baby pink']:
			return colorsList.babypink;
		case PAGE_COLORS['Royal blue']:
			return colorsList.royalblue;
		case PAGE_COLORS['Phoenix scarlet']:
			return colorsList.phoenixscarlet;
		case PAGE_COLORS['Grape jelly']:
			return colorsList.grapejelly;
		case PAGE_COLORS['Ogre green']:
			return colorsList.ogregreen;
	}
}
