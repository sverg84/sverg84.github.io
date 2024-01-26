import * as React from 'react';

import styles from '../../../styles/body/experience/skillsList.module.scss';

type Props = Readonly<{
	skillsList: ReadonlyArray<string>;
	style?: React.CSSProperties;
}>;

export default function ExperienceTimelineSkillsList({
	skillsList,
	style,
}: Props): React.JSX.Element {
	return (
		<p className={styles.list}>
			<span
				className={styles.skills}
				style={style}>
				Skills:{' '}
			</span>
			{skillsList.join(', ')}
		</p>
	);
}
