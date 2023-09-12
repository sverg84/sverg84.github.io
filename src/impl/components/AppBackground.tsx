import classNames from 'classnames';
import * as React from 'react';

import useBackgroundStyle from '../hooks/useBackgroundStyle';
import styles from '../styles/background.module.scss';

export default function AppBackground(): React.JSX.Element {
	const color = useBackgroundStyle();
	return (
		<>
			{[styles.bg, styles.bg2, styles.bg3].map(style => (
				<div className={classNames(color, style)} key={style} />
			))}
		</>
	);
}
