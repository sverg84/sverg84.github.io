import * as React from 'react';

import styles from '../../../styles/body/personal/background.module.scss';

export default function PersonalBackground(): React.JSX.Element {
	return (
		<div className={styles.bg}>
			{[styles.stars, styles.stars2, styles.stars3].map(style => (
				<div
					className={style}
					key={style}
				/>
			))}
		</div>
	);
}
