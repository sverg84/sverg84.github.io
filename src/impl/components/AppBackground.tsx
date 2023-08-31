import classNames from 'classnames';
import * as React from 'react';

import useBackgroundStyle from '../hooks/useBackgroundStyle';
import styles from '../styles/background.module.scss';

export default function AppBackground(): React.JSX.Element {
	const color = useBackgroundStyle();
	return (
		<>
			<div className={classNames(color, styles.bg)} />
			<div className={classNames(color, styles.bg2)} />
			<div className={classNames(color, styles.bg3)} />
		</>
	);
}
