import classNames from 'classnames';
import * as React from 'react';

import useBackgroundStyle from '../hooks/useBackgroundStyle';
import styles from '../styles/background.module.css';
import { PageColorName } from '../types/PageColor';

type Props = Readonly<{
	color: PageColorName;
}>;

export default function AppBackground({
	color: colorArg,
}: Props): React.JSX.Element {
	const color = useBackgroundStyle(colorArg);
	return (
		<>
			<div className={classNames(color, styles.bg)} />
			<div className={classNames(color, styles.bg, styles.bg2)} />
			<div className={classNames(color, styles.bg, styles.bg3)} />
		</>
	);
}
