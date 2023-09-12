import * as React from 'react';

import PageColorContext from '../../../contexts/PageColorContext';
import styles from '../../../styles/body/personal/background.module.scss';
import { PAGE_COLORS } from '../../../types/PageColor';

function useStyle(): string {
	const color = React.useContext(PageColorContext);

	switch (color) {
		case PAGE_COLORS.Obsidian:
			return styles.obsidian;
		case PAGE_COLORS['Baby pink']:
			return styles.babypink;
		case PAGE_COLORS['Royal blue']:
			return styles.royalblue;
		case PAGE_COLORS['Phoenix scarlet']:
			return styles.phoenixscarlet;
		case PAGE_COLORS['Grape jelly']:
			return styles.grapejelly;
		case PAGE_COLORS['Ogre green']:
			return styles.ogregreen;
	}
}

export default function PersonalBackground(): React.JSX.Element {
	const style = useStyle();

	return (
		<div className={style}>
			{[styles.stars, styles.stars2, styles.stars3].map(style => (
				<div
					className={style}
					key={style}
				/>
			))}
		</div>
	);
}
